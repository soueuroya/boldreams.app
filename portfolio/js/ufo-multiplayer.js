/**
 * Realtime Multiplayer UFO Integration
 * Powered by Supabase Presence
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Config
    const SUPABASE_URL = 'https://ysytccmmoagkkzxrwnnu.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_pFWE0wQoTnSmqKCHhqnDPg_8l2aCbP9';
    
    // We only initialize if supabase script loaded properly
    if (typeof supabase === 'undefined') {
        console.warn('Supabase JS not loaded. UFO Multiplayer disabled.');
        return;
    }

    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // 2. Session Setup
    const sessionId = crypto.randomUUID();
    const pathname = window.location.pathname || '/';

    // Channel setup - clean up pathname to form a valid room name
    let roomName = 'ufo' + pathname.replace(/[/.]/g, '-');
    if (roomName === 'ufo-') roomName = 'ufo-index';

    const channel = supabaseClient.channel(roomName, {
        config: {
            presence: {
                key: sessionId,
            },
        },
    });

    // We'll track other UFO DOM elements by their user key
    const otherUFOsRef = {};

    // 3. Receive Broadcast 
    channel
        .on('broadcast', { event: 'cursor-sync' }, ({ payload }) => {
            const key = payload.key;
            if (key === sessionId) return; // Don't render ourselves

            if (!otherUFOsRef[key]) {
                // Create new UFO for remote user
                const container = document.createElement('div');
                container.className = 'ufo-container-other';
                container.dataset.userId = key;

                const ship = document.createElement('img');
                ship.src = 'Images/UFO_SHIP.png';
                ship.className = 'ufo-ship-other';
                
                const light = document.createElement('img');
                light.src = 'Images/UFO_LIGHT.png';
                light.className = 'ufo-light-other';
                
                container.appendChild(ship);
                container.appendChild(light);
                document.body.appendChild(container);

                otherUFOsRef[key] = {
                    element: container,
                    x: payload.x || window.innerWidth / 2,
                    y: payload.y || window.innerHeight / 2,
                    tx: payload.x || window.innerWidth / 2,
                    ty: payload.y || window.innerHeight / 2,
                    rotation: payload.rotation || 0,
                    lightOpacity: payload.lightOpacity || 0,
                    scale: payload.scale || 1,
                    lastSeen: Date.now()
                };
            } else {
                // Update target positions for lerping
                otherUFOsRef[key].tx = payload.x;
                otherUFOsRef[key].ty = payload.y;
                otherUFOsRef[key].rotation = payload.rotation;
                otherUFOsRef[key].lightOpacity = payload.lightOpacity;
                otherUFOsRef[key].scale = payload.scale || 1;
                otherUFOsRef[key].lastSeen = Date.now();
            }
        })
        .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('🛸 Joined UFO room:', roomName, 'via Broadcast');
                isSubscribed = true;
            }
        });

    // Cleanup interval for users who left (no broadcast in 2 seconds)
    setInterval(() => {
        const now = Date.now();
        for (const key of Object.keys(otherUFOsRef)) {
            if (now - otherUFOsRef[key].lastSeen > 2000) {
                const el = otherUFOsRef[key].element;
                if (el) {
                    el.classList.add('ufo-other-fade-out');
                    setTimeout(() => el.remove(), 500);
                }
                delete otherUFOsRef[key];
            }
        }
    }, 1000);

    // 4. Send Broadcast
    // We observe the existing local UFO logic without modifying its source code
    let lastSendTime = 0;
    let isSubscribed = false;
    
    function sendUfoState() {
        const ufoContainer = document.getElementById('ufo-container');
        if (!ufoContainer || !isSubscribed) {
            requestAnimationFrame(sendUfoState);
            return;
        }

        const now = Date.now();
        if (now - lastSendTime > 150) { // broadcast roughly every ~150ms
            let rotation = 0;
            let scale = 1;

            const transform = ufoContainer.style.transform;
            if (transform) {
                const rotateMatch = transform.match(/rotate\(([-\d.]+)deg\)/);
                if (rotateMatch) rotation = parseFloat(rotateMatch[1]);

                const scaleMatch = transform.match(/scale\(([-\d.]+)\)/);
                if (scaleMatch) scale = parseFloat(scaleMatch[1]);
            }

            const x = parseFloat(ufoContainer.style.left) || 0;
            const y = parseFloat(ufoContainer.style.top) || 0;
            
            const ufoLight = document.getElementById('ufo-light');
            const lightOpacity = parseFloat(ufoLight ? ufoLight.style.opacity : 0) || 0;

            channel.send({
                type: 'broadcast',
                event: 'cursor-sync',
                payload: {
                    key: sessionId,
                    x: x,
                    y: y,
                    rotation: rotation,
                    scale: scale,
                    lightOpacity: lightOpacity,
                    pathname: pathname
                }
            }).catch(e => console.error("Broadcast error:", e));
            
            lastSendTime = now;
        }
        
        requestAnimationFrame(sendUfoState);
    }
    
    // Start tracking our local UI loop
    requestAnimationFrame(sendUfoState);

    // 5. Render loop for remote UFO interpolation
    function renderRemoteUFOs() {
        for (const [key, state] of Object.entries(otherUFOsRef)) {
            // Lerp target values (smooth out jumps caused by ~200ms tick rate)
            state.x += (state.tx - state.x) * 0.1;
            state.y += (state.ty - state.y) * 0.1;
            
            const el = state.element;
            if (!el) continue;

            el.style.left = `${state.x}px`;
            el.style.top = `${state.y}px`;
            el.style.transform = `translate(-50%, -50%) rotate(${state.rotation}deg) scale(${state.scale})`;
            
            const remoteLight = el.querySelector('.ufo-light-other');
            if (remoteLight) {
                // Adjust opacity with a tiny bit of math for smoothness
                let targetLightOps = state.lightOpacity;
                let currLightOps = parseFloat(remoteLight.style.opacity) || 0;
                remoteLight.style.opacity = currLightOps + (targetLightOps - currLightOps) * 0.2;
            }
        }
        
        requestAnimationFrame(renderRemoteUFOs);
    }
    
    // Start local render loop
    requestAnimationFrame(renderRemoteUFOs);
});
