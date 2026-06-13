/**
 * UNITY EDITOR PORTFOLIO MOTOR
 * Developed for: DanielBoldrin_PortfolioProject
 * Specialized in: Gameplay Systems, Multiplayer, VR/XR, AI Pipelines
 */

// ==========================================================================
// VIRTUAL FILE DATABASE (VFS)
// ==========================================================================
const VFS = {
    // SCENES (Daniel's Projects)
    "Assets/Scenes/Rawmen.unity": {
        name: "Rawmen.unity",
        type: "scene",
        size: "4.8 MB",
        meta: {
            title: "RAWMEN Arena Action",
            category: "Action Shooter / Multiplayer",
            client: "ZeMind Studios / PC & Consoles",
            period: "Nov 2022 - Mar 2025",
            tech: ["Unity Engine", "C#", "Colyseus", "Multiplayer Sync", "Xbox/PlayStation API", "Odin Inspector"],
            specs: {
                "Physics Model": "Custom stylized physics integrations",
                "Max Players": "2-8 Players Peer-to-Peer & Client-Server",
                "Platforms": "PC, Xbox Series X/S, PlayStation 5",
                "Responsibilities": "Lead Unity Specialist, Multiplayer Synchronization, Platform Optimization, Gameplay Physics"
            },
            desc: "Shipped a fast-paced, highly stylized 2-8 player arena shooter on PC and major consoles. Solved complex network synchronization challenges, customized physics behaviors, and optimized memory footprints to target high-refresh rates under tight hardware constraints.",
            link: "https://danielboldrin.itch.io/rawmen",
            cover: "Images/Rawmen Cover.png",
            sandbox: "multiplayer"
        }
    },
    "Assets/Scenes/Rodeo.unity": {
        name: "Rodeo.unity",
        type: "scene",
        size: "2.1 MB",
        meta: {
            title: "Rodeo Bet Platform",
            category: "Multiplayer Engine Template",
            client: "Suprema Gaming",
            period: "Nov 2024 - Feb 2026",
            tech: ["C#", "Pomelo", "WebSocket Autorun", "Odin", "ScriptableObject DB"],
            specs: {
                "Authoritative Server": "Pomelo / Node.js backend integration",
                "Sync Protocol": "TCP WebSockets with delta compression",
                "Room Scaling": "Up to 5000 concurrent sockets per cluster",
                "Responsibilities": "Lead Game Architect, Room Synchronization, Backend API Integrations"
            },
            desc: "Designed and engineered a modular multiplayer betting card game template featuring secure socket synchronization, robust matchmaking layers, and real-time ledger updates supporting thousands of concurrent users.",
            link: "https://danielboldrin.itch.io/rodeo-poker",
            cover: "Images/Rodeo cover.png",
            sandbox: "multiplayer"
        }
    },
    "Assets/Scenes/PokerApp.unity": {
        name: "PokerApp.unity",
        type: "scene",
        size: "3.2 MB",
        meta: {
            title: "Modular Poker Application",
            category: "Real-time Card Engine",
            client: "Suprema Gaming",
            period: "Nov 2024 - Feb 2026",
            tech: ["Unity", "Colyseus Network", "Dynamic Card Shufflers", "Unity UI Toolkit"],
            specs: {
                "Logic System": "Provably fair server shuffler integration",
                "UI Architecture": "Modular components with MVVM bindings",
                "LiveOps": "Dynamically loaded game skins & assets",
                "Responsibilities": "Core Gameplay Systems Engineer, Networking Tunnel Architect"
            },
            desc: "Created a robust multi-platform Poker platform with clubs, tournament lobbies, and real-time secure play logic utilizing provably fair algorithms over secure tunnels.",
            link: "https://danielboldrin.itch.io/rodeo-poker",
            cover: "Images/Rodeo cover.png",
            sandbox: "multiplayer"
        }
    },
    "Assets/Scenes/Hoame.unity": {
        name: "Hoame.unity",
        type: "scene",
        size: "6.5 MB",
        meta: {
            title: "hoame VR Meditation App",
            category: "Immersive VR / Health",
            client: "Mindfulness VR Studio",
            period: "2023",
            tech: ["Oculus Quest / Meta API", "OpenXR", "360 Video Streamer", "Comfort System"],
            specs: {
                "Comfort Score": "Excellent (Dynamic field-of-view comfort system)",
                "Video Resolution": "8K Stereo 360 streaming player",
                "Diegetic UI": "Physical interaction panels (no flat HUDs)",
                "Responsibilities": "VR Specialist, Spatial Comfort Designer"
            },
            desc: "Designed and deployed a highly rated stereoscopic VR meditation experience targeting Meta Quest. Built a custom player for 360 dynamic streaming, diegetic user interfaces, and custom comfort filters to combat VR motion nausea.",
            link: "https://danielboldrin.itch.io/hoame",
            cover: "Images/hoame Cover.png",
            sandbox: "xr"
        }
    },
    "Assets/Scenes/Microbiology.unity": {
        name: "Microbiology.unity",
        type: "scene",
        size: "5.1 MB",
        meta: {
            title: "Microbiology VR Lab",
            category: "Immersive VR Simulation",
            client: "Healthcare Simulations Inc.",
            period: "Jan 2024 - Present",
            tech: ["WaveXR", "OpenXR Toolkit", "Procedural Hand Interaction", "Instruction Tree"],
            specs: {
                "Hand Tracking": "Meta / Vive custom hand interaction meshes",
                "Validation Engine": "Procedural compliance validation graph",
                "Fidelity Level": "Draw Call optimized high-fidelity shaders",
                "Responsibilities": "VR Simulation Lead, Physics-based Hand Interaction Architect"
            },
            desc: "An ultra-realistic virtual laboratory built for high-stakes medical training. Created a physics-based hand interaction layer to manipulate syringes, microscopes, and chemical reactions, complete with an automated evaluation graph.",
            link: "https://github.com/soueuroya",
            cover: "Images/PULSE.gif",
            sandbox: "xr"
        }
    },
    "Assets/Scenes/BloodTransfusion.unity": {
        name: "BloodTransfusion.unity",
        type: "scene",
        size: "3.9 MB",
        meta: {
            title: "Blood Transfusion Training VR",
            category: "VR Training Simulation",
            client: "Medical Academy",
            period: "2023",
            tech: ["OpenXR", "Interact Engine", "Procedural Prompts", "Low-End Optimizer"],
            specs: {
                "Device Optimization": "Oculus Quest Standalone 72 FPS",
                "Procedure Tree": "35 sequential compliance tasks validated",
                "Graphic System": "Stylized flat shaders with baking",
                "Responsibilities": "Technical Director, Interaction Designer"
            },
            desc: "A medical educational VR sandbox training doctors in exact blood transfusion procedures. Developed a guided procedural flowchart and a strict audit logger to record student hand errors in real-time.",
            link: "https://github.com/soueuroya",
            cover: "Images/BREATH.gif",
            sandbox: "xr"
        }
    },
    "Assets/Scenes/CourtingGlory.unity": {
        name: "CourtingGlory.unity",
        type: "scene",
        size: "4.4 MB",
        meta: {
            title: "Courting Glory Deck-Builder",
            category: "3D Fighting / Strategy",
            client: "ZeMind Studios",
            period: "2023",
            tech: ["Strategy Engine", "3D Anim Controller", "Data Sheets Engine", "WebGL Deployment"],
            specs: {
                "Turn Engine": "Dynamic state machine",
                "Animations": "Cinematic physics-driven 3D reactions",
                "Cards Framework": "ScriptableObject cards database",
                "Responsibilities": "Systems Engineer, Animation System Integration"
            },
            desc: "A deck-builder card fighting game. Constructed a flexible card definition framework using C# ScriptableObjects, state machines, and a dynamic 3D reaction animator reacting to damage inputs.",
            link: "https://danielboldrin.itch.io/cg",
            cover: "Images/Courting Glory Cover.png",
            sandbox: "physics"
        }
    },
    "Assets/Scenes/MultiplayerSandbox.unity": {
        name: "MultiplayerSandbox.unity",
        type: "scene",
        size: "1.2 MB",
        meta: {
            title: "Netcode Optimization Arena",
            category: "Technical Sandbox",
            client: "Open Source Project",
            period: "2025",
            tech: ["UDP Netsockets", "Reconciliation Loop", "Dead Reckoning", "SVG Canvas UI"],
            specs: {
                "Sync Technique": "Client-Side Prediction & Server Reconciliation",
                "Lag Compensation": "Backward reconciliation on hitboxes",
                "Latency Simulation": "0ms - 500ms dynamic slider",
                "Responsibilities": "Creator, Network Architect"
            },
            desc: "A sandbox visualizing client prediction, server authoritative sync, interpolation, and reconciliations in real-time. Test how network updates behave under extreme ping and packet loss conditions.",
            link: "https://danielboldrin.itch.io/unity-multiplayer-rooms-template",
            cover: "Images/Unity Multiplayer Template Cover.png",
            sandbox: "multiplayer"
        }
    },
    "Assets/Scenes/AIWorkflowLab.unity": {
        name: "AIWorkflowLab.unity",
        type: "scene",
        size: "1.5 MB",
        meta: {
            title: "AI Behavior & Agents Lab",
            category: "Procedural Automation / AI",
            client: "Experimental",
            period: "2025-2026",
            tech: ["Behavior Trees", "A* Navigation", "Agent Automations", "Claude / Antigravity"],
            specs: {
                "A* Navigation Grid": "Dynamic node navigation cost map",
                "Decision System": "Real-time modular Behavior Tree running at 60Hz",
                "Agent Logic": "Finite State Machine with pathing fallback",
                "Responsibilities": "AI Integration Engineer"
            },
            desc: "An interactive lab exploring modern AI workflows in Unity. Features a live canvas behavior tree visualizer and pathfinding agents that intelligently avoid obstacles to capture randomized goals.",
            link: "https://github.com/soueuroya",
            cover: "Images/FOLD.gif",
            sandbox: "ai"
        }
    },
    "Assets/Scenes/RapidPrototypeArena.unity": {
        name: "RapidPrototypeArena.unity",
        type: "scene",
        size: "1.1 MB",
        meta: {
            title: "Physics & GC Stress Arena",
            category: "Optimization Playground",
            client: "Performance Lab",
            period: "2026",
            tech: ["Object Pooling", "Particle Physics", "Profiler Spiker", "Heap Allocation Logs"],
            specs: {
                "Physics Engine": "Broadphase particle collider",
                "Garbage Collector": "Automatic sweeps (triggering spikes in graphs)",
                "Pooling Efficacy": "Draw Call reduction from 1000 to 20",
                "Responsibilities": "Performance Tuning Expert"
            },
            desc: "A rapid prototyping playground built to stress-test your GPU draw calls, CPU calculation times, and memory heaps. Spawn boxes directly inside the Game View to see real-time charts reflect spikes and GC collection sweeps.",
            link: "https://danielboldrin.itch.io/colorise",
            cover: "Images/Colorise Cover.png",
            sandbox: "physics"
        }
    },

    // SCRIPTABLE OBJECTS ( Daniel's Skills )
    "Assets/ScriptableObjects/CoreUnitySkills.asset": {
        name: "CoreUnitySkills.asset",
        type: "asset",
        size: "820 Bytes",
        skills: [
            { name: "C# Language Pro", rating: 98, advanced: true },
            { name: "Gameplay Architecture", rating: 96, advanced: true },
            { name: "Data-Driven SO System", rating: 95, advanced: true },
            { name: "Event-Driven Sockets", rating: 94, advanced: true },
            { name: "Object Pooling Systems", rating: 97, advanced: true },
            { name: "SOLID System Design", rating: 93, advanced: false },
            { name: "Agile Production Tooling", rating: 90, advanced: false }
        ],
        references: ["Assets/Scripts/GameplaySystems.cs", "Assets/Scripts/ModularArchitecture.cs"]
    },
    "Assets/ScriptableObjects/MultiplayerSkills.asset": {
        name: "MultiplayerSkills.asset",
        type: "asset",
        size: "740 Bytes",
        skills: [
            { name: "Pomelo Sync Sockets", rating: 95, advanced: true },
            { name: "Colyseus Realtime Sockets", rating: 94, advanced: true },
            { name: "Client Prediction Math", rating: 92, advanced: true },
            { name: "Authoritative Loop", rating: 96, advanced: true },
            { name: "Delta Compression", rating: 90, advanced: false },
            { name: "WebSocket Optimization", rating: 93, advanced: false }
        ],
        references: ["Assets/Scripts/MultiplayerArchitecture.cs", "Assets/Prefabs/NetworkSyncManager.prefab"]
    },
    "Assets/ScriptableObjects/OptimizationSkills.asset": {
        name: "OptimizationSkills.asset",
        type: "asset",
        size: "910 Bytes",
        skills: [
            { name: "Draw Call Reduction (URP)", rating: 95, advanced: true },
            { name: "GC & Heap Tuning", rating: 94, advanced: true },
            { name: "Memory Diagnostics", rating: 92, advanced: true },
            { name: "CPU Thread Profiling", rating: 90, advanced: false },
            { name: "Mobile App Optimization", rating: 96, advanced: true },
            { name: "VR Multi-Pass Shaders", rating: 93, advanced: true }
        ],
        references: ["Assets/Scripts/PerformanceOptimization.cs", "Assets/Scripts/MobileOptimization.cs"]
    },
    "Assets/ScriptableObjects/VRXRSkills.asset": {
        name: "VRXRSkills.asset",
        type: "asset",
        size: "680 Bytes",
        skills: [
            { name: "OpenXR & WaveXR", rating: 96, advanced: true },
            { name: "Interaction Toolkit Rigging", rating: 95, advanced: true },
            { name: "Physics Interaction Hand", rating: 93, advanced: true },
            { name: "Spatial Comfort Systems", rating: 92, advanced: false },
            { name: "Medical Audit Graphs", rating: 94, advanced: true }
        ],
        references: ["Assets/Scripts/VRInteractionFramework.cs", "Assets/Scripts/ProceduralValidation.cs"]
    },
    "Assets/ScriptableObjects/AIWorkflowSkills.asset": {
        name: "AIWorkflowSkills.asset",
        type: "asset",
        size: "720 Bytes",
        skills: [
            { name: "Antigravity/Windsurf Work", rating: 96, advanced: true },
            { name: "Gemini/Claude API Flows", rating: 95, advanced: true },
            { name: "Auto Code Generators", rating: 94, advanced: true },
            { name: "Agent Behavior Logic", rating: 92, advanced: false },
            { name: "CI Schema Automation", rating: 90, advanced: false }
        ],
        references: ["Assets/Scripts/AIWorkflowAutomation.cs", "Assets/Editor/AIWorkflowDashboard.cs"]
    },
    "Assets/ScriptableObjects/LeadershipSkills.asset": {
        name: "LeadershipSkills.asset",
        type: "asset",
        size: "540 Bytes",
        skills: [
            { name: "Technical Direction", rating: 94, advanced: true },
            { name: "Code Review Standards", rating: 95, advanced: true },
            { name: "Mentoring & Onboarding", rating: 92, advanced: false },
            { name: "Sprint Architecture", rating: 90, advanced: false },
            { name: "Feature Ownership", rating: 97, advanced: true }
        ],
        references: ["Assets/Scripts/ProductionWorkflows.cs"]
    },

    // SCRIPTS (Daniel's actual Code)
    "Assets/Scripts/GameplaySystems.cs": {
        name: "GameplaySystems.cs",
        type: "cs",
        size: "4.1 KB",
        code: `using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace DanielBoldrin.Core
{
    /// <summary>
    /// Core data-driven Event-Driven architecture system manager.
    /// Handles decoupling of components using ScriptableObject GameEvents.
    /// </summary>
    public class GameplaySystems : MonoBehaviour, ISystemInterface
    {
        [Header("System Configuration")]
        [SerializeField] private bool autoInitialize = true;
        [SerializeField] private List<SystemEventSO> coreSystemEvents;
        
        [Header("Performance Allocation Settings")]
        [Range(10, 1000)] [SerializeField] private int initialPoolSize = 500;
        
        private Dictionary<Guid, Action<object>> _eventRegistry;
        private ObjectPooler _projectilePool;
        
        public static GameplaySystems Instance { get; private set; }

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }
            Instance = this;
            DontDestroyOnLoad(gameObject);
            
            InitializeSystem();
        }

        public void InitializeSystem()
        {
            _eventRegistry = new Dictionary<Guid, Action<object>>();
            _projectilePool = new ObjectPooler(initialPoolSize);
            
            Debug.Log("Core Systems Initialized. Event registry ready. Initial pool size allocated: " + initialPoolSize);
        }

        public void RaiseEvent(Guid eventId, object data)
        {
            if (_eventRegistry.TryGetValue(eventId, out Action<object> listener))
            {
                listener.Invoke(data);
            }
        }

        public void Subscribe(Guid eventId, Action<object> callback)
        {
            if (!_eventRegistry.ContainsKey(eventId))
            {
                _eventRegistry[eventId] = delegate { };
            }
            _eventRegistry[eventId] += callback;
        }

        public void Unsubscribe(Guid eventId, Action<object> callback)
        {
            if (_eventRegistry.ContainsKey(eventId))
            {
                _eventRegistry[eventId] -= callback;
            }
        }
    }
}`
    },
    "Assets/Scripts/MultiplayerArchitecture.cs": {
        name: "MultiplayerArchitecture.cs",
        type: "cs",
        size: "5.5 KB",
        code: `using System;
using System.Collections;
using UnityEngine;

namespace DanielBoldrin.Networking
{
    /// <summary>
    /// Custom Autorun TCP/WebSocket Client Synchronization Core.
    /// Handles lag interpolation and client side prediction with reconciliation.
    /// </summary>
    public class MultiplayerArchitecture : MonoBehaviour
    {
        [System.Serializable]
        public struct NetworkState
        {
            public uint tick;
            public Vector3 position;
            public Vector3 velocity;
        }

        [Header("Networking settings")]
        [SerializeField] private float networkSendRate = 0.05f; // 20 updates/sec
        [SerializeField] private bool clientSidePrediction = true;
        [SerializeField] private bool reconciliation = true;
        
        [Header("Interpolation Settings")]
        [SerializeField] private float interpolationBuffer = 0.1f; // 100ms lag target
        
        private float _lastSendTime;
        private uint _clientTick = 0;
        private Queue<NetworkState> _predictionHistory = new Queue<NetworkState>();

        private void Update()
        {
            if (clientSidePrediction)
            {
                ProcessPredictedInput();
            }
            
            if (Time.time - _lastSendTime >= networkSendRate)
            {
                SendTickPacket();
                _lastSendTime = Time.time;
            }
        }

        private void ProcessPredictedInput()
        {
            Vector3 inputVector = new Vector3(Input.GetAxisRaw("Horizontal"), 0, Input.GetAxisRaw("Vertical"));
            MovePlayerLocal(inputVector);
            
            _clientTick++;
            NetworkState localState = new NetworkState
            {
                tick = _clientTick,
                position = transform.position,
                velocity = Vector3.forward // Dummy representation
            };
            _predictionHistory.Enqueue(localState);
        }

        public void OnReceiveServerState(uint serverTick, Vector3 serverAuthoritativePosition)
        {
            if (!reconciliation) return;

            // Remove histories before the verified tick
            while (_predictionHistory.Count > 0 && _predictionHistory.Peek().tick < serverTick)
            {
                _predictionHistory.Dequeue();
            }

            if (_predictionHistory.Count > 0)
            {
                NetworkState predictedState = _predictionHistory.Peek();
                float distanceError = Vector3.Distance(predictedState.position, serverAuthoritativePosition);
                
                if (distanceError > 0.05f) // Position drift threshold exceeded
                {
                    Debug.LogWarning($"[Netcode Warning] Client drift: {distanceError}m. Reconciling inputs...");
                    transform.position = serverAuthoritativePosition;
                    
                    // Re-apply remaining inputs
                    foreach (var state in _predictionHistory)
                    {
                        ReapplyMovementTick(state);
                    }
                }
            }
        }

        private void MovePlayerLocal(Vector3 input) { transform.Translate(input * Time.deltaTime * 5f); }
        private void SendTickPacket() { /* WebSockets payload packet transmission to Pomelo autorun server */ }
        private void ReapplyMovementTick(NetworkState state) { transform.position += state.velocity * Time.deltaTime; }
    }
}`
    },
    "Assets/Scripts/PerformanceOptimization.cs": {
        name: "PerformanceOptimization.cs",
        type: "cs",
        size: "3.8 KB",
        code: `using UnityEngine;

namespace DanielBoldrin.Optimization
{
    /// <summary>
    /// Advanced memory allocation management and Draw Call minimizers.
    /// Manages structural memory footprints for mobile and standalone VR rigs.
    /// </summary>
    public class PerformanceOptimization : MonoBehaviour
    {
        [Header("Optimization Targets")]
        [SerializeField] private int targetFrameRate = 90; // Targeting Quest 2 / Pico 4
        [SerializeField] private bool cleanGarbageOnLoading = true;
        
        private void Start()
        {
            Application.targetFrameRate = targetFrameRate;
            QualitySettings.vSyncCount = 0; // Disable vertical sync to permit GPU custom throttling
            
            Debug.Log("Asset Streaming Pipelines Initialized. Set refresh rates target: " + targetFrameRate);
        }

        public void RequestGCSweep()
        {
            // Forces programmatic garbage collection during load stages
            System.GC.Collect();
            Resources.UnloadUnusedAssets();
            
            Debug.Log("[Garbage Collection Log] Automatic resource garbage clean successful.");
        }
    }
}`
    },
    "Assets/Scripts/VRInteractionFramework.cs": {
        name: "VRInteractionFramework.cs",
        type: "cs",
        size: "3.5 KB",
        code: `using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

namespace DanielBoldrin.XR
{
    /// <summary>
    /// Custom VR physics-based hand grab interaction framework.
    /// Solves medical syringe grabbing, tool orientations, and tactile diegetic UX comfort.
    /// </summary>
    public class VRInteractionFramework : XRBaseGrabInteractable
    {
        [Header("Grab Physics Overrides")]
        [SerializeField] private Transform handGrabPivot;
        [SerializeField] private float jointReactionForce = 1500f;
        [SerializeField] private bool triggerHapticsOnGrab = true;

        protected override void OnSelectEntered(SelectEnterEventArgs args)
        {
            base.OnSelectEntered(args);
            
            if (triggerHapticsOnGrab && args.interactorObject is XRBaseControllerInteractor controller)
            {
                controller.xrController.SendHapticImpulse(0.5f, 0.1f);
            }
            
            Debug.Log("VR Physics Grab validated: " + gameObject.name);
        }
    }
}`
    },
    "Assets/Scripts/AIWorkflowAutomation.cs": {
        name: "AIWorkflowAutomation.cs",
        type: "cs",
        size: "3.9 KB",
        code: `using System;
using UnityEngine;

namespace DanielBoldrin.AI
{
    /// <summary>
    /// Modular automation system for compiling dynamically simulated AI workflows.
    /// Orchestrates multi-agent pipelines for automated testing, play validation, and editor tools.
    /// </summary>
    public class AIWorkflowAutomation : MonoBehaviour
    {
        public enum AgentState { Idle, SpawningTask, EvaluatingCode, Done }
        
        public AgentState currentState = AgentState.Idle;
        public string modelRegistry = "Claude-3.5-Sonnet-OpenRouter";
        
        public void ExecuteAgentTask(string prompt, Action<string> onComplete)
        {
            currentState = AgentState.SpawningTask;
            Debug.Log($"AI Pipeline: Triggering task analysis utilizing {modelRegistry}...");
            
            // Simulates internal MCP tool processing
            StartCoroutine(SimulateAIPipeline(prompt, onComplete));
        }

        private System.Collections.IEnumerator SimulateAIPipeline(string prompt, Action<string> callback)
        {
            yield return new WaitForSeconds(1.5f);
            currentState = AgentState.EvaluatingCode;
            yield return new WaitForSeconds(1.0f);
            
            currentState = AgentState.Done;
            callback?.Invoke("AI Task Success: Schemas validated, assembly loaded dynamically.");
            Debug.Log("AI Pipeline: Agent automation executed completely.");
        }
    }
}`
    },

    // PREFABS
    "Assets/Prefabs/MultiplayerSystems.prefab": {
        name: "MultiplayerSystems.prefab",
        type: "prefab",
        size: "12.4 KB",
        hierarchy: [
            "NetworkSyncManager (Transform, MultiplayerArchitecture, WebSocketTunnel)",
            "  MatchmakerClient (Transform, PomeloClient)",
            "  LobbyController (Transform, LobbyUIBinder)",
            "  GhostRegistry (Transform, NetcodeGhostPool)"
        ]
    },
    "Assets/Prefabs/XRInteractionRig.prefab": {
        name: "XRInteractionRig.prefab",
        type: "prefab",
        size: "18.1 KB",
        hierarchy: [
            "XR Rig Base (Transform, LocomotionSystem, ContinuousMove)",
            "  Camera Offset (Transform)",
            "    Main Camera (Transform, Camera, TrackedPoseDriver)",
            "    LeftHand Controller (Transform, ActionInteractor, VRInteractionFramework)",
            "    RightHand Controller (Transform, ActionInteractor, VRInteractionFramework)"
        ]
    },
    "Assets/Prefabs/AIWorkflowManager.prefab": {
        name: "AIWorkflowManager.prefab",
        type: "prefab",
        size: "9.2 KB",
        hierarchy: [
            "AI Agent Manager (Transform, AIWorkflowAutomation)",
            "  Autocoder Node (Transform, ModelIntegrator)",
            "  Diagnostics Sweeper (Transform, CompilerLintEngine)"
        ]
    }
};

// Virtual Folder Structure mapping for Project sidebar Tree
const ProjectTree = {
    "Assets": {
        "Scenes": ["Assets/Scenes/Rawmen.unity", "Assets/Scenes/Rodeo.unity", "Assets/Scenes/PokerApp.unity", "Assets/Scenes/Hoame.unity", "Assets/Scenes/Microbiology.unity", "Assets/Scenes/BloodTransfusion.unity", "Assets/Scenes/MultiplayerSandbox.unity", "Assets/Scenes/AIWorkflowLab.unity", "Assets/Scenes/RapidPrototypeArena.unity"],
        "ScriptableObjects": ["Assets/ScriptableObjects/CoreUnitySkills.asset", "Assets/ScriptableObjects/MultiplayerSkills.asset", "Assets/ScriptableObjects/OptimizationSkills.asset", "Assets/ScriptableObjects/VRXRSkills.asset", "Assets/ScriptableObjects/AIWorkflowSkills.asset", "Assets/ScriptableObjects/LeadershipSkills.asset"],
        "Scripts": ["Assets/Scripts/GameplaySystems.cs", "Assets/Scripts/MultiplayerArchitecture.cs", "Assets/Scripts/PerformanceOptimization.cs", "Assets/Scripts/VRInteractionFramework.cs", "Assets/Scripts/AIWorkflowAutomation.cs"],
        "Prefabs": ["Assets/Prefabs/MultiplayerSystems.prefab", "Assets/Prefabs/XRInteractionRig.prefab", "Assets/Prefabs/AIWorkflowManager.prefab"]
    }
};

// Packages listed in Package Manager
const Packages = [
    { name: "Odin Inspector", id: "com.sirenix.odin-inspector", ver: "3.1.2", type: "Visual Tooling", desc: "Builds advanced and clean inspectors without writing editor scripts. Enhances visual custom components inside our Inspector window.", installed: true, deps: ["Core Unity Engine Extensions"] },
    { name: "Netcode for GameObjects", id: "com.unity.netcode.gameobjects", ver: "1.6.0", type: "Networking", desc: "Authoritative server multiplayer synchronization tools targeting smooth network client predictions and automatic reconciliations.", installed: true, deps: ["Unity Transport Client", "ScriptableObject Network Database"] },
    { name: "XR Interaction Toolkit", id: "com.unity.xr.interaction.toolkit", ver: "2.5.2", type: "XR Virtual Reality", desc: "Provides high-level cross-platform interaction rigging systems for Quest 2, Vive Focus, and WaveXR spatial physics controller hooks.", installed: true, deps: ["Input System", "OpenXR Plug-in"] },
    { name: "Cinemachine", id: "com.unity.cinemachine", ver: "2.9.7", type: "Camera Tools", desc: "Smart cameras that dynamically trace physics speed and follow targets, enabling AAA multiplayer view angles.", installed: true, deps: ["Post Processing Engine"] },
    { name: "DOTween (Pro)", id: "com.demigiant.dotween", ver: "1.2.6", type: "UI Animation", desc: "Decoupled highly optimized math tween engine targeting mobile frame rate optimizations.", installed: true, deps: [] },
    { name: "Addressables", id: "com.unity.addressables", ver: "1.21.19", type: "Asset Management", desc: "Asynchronously loads, caches, and unloads assets dynamically, drastically minimizing standard game heap and memory sizes.", installed: true, deps: ["Scriptable Build Pipeline"] }
];

// ==========================================================================
// EDITOR STATE MACHINE
// ==========================================================================
let EditorState = {
    selectedFilePath: "Assets/Scenes/Rawmen.unity",
    selectedFolder: "Assets/Scenes",
    activeTab: "scene", // 'scene', 'game', 'packages'
    activeBottomTab: "project", // 'project', 'console', 'profiler'
    isPlaying: false,
    isPaused: false,
    latency: 50, // simulated net latency
    packetLoss: 0, // simulated loss %
    interpolation: true,
    reconciliation: true,
    physicsCount: 0,
    physicsGravity: 0.2, // standard dynamic physics gravity
    drawCalls: 12,
    cpuFrameTime: 2.1,
    heapSize: 14.3, // MB
    networkPing: 12, // ms
    avgFPS: 60,
    consoleWarningsCount: 0,
    consoleLogs: [],
    compilerProgress: 0
};

// Real-time chart rolling buffer data
let ProfilerBuffer = {
    cpu: Array(60).fill(2.5),
    memory: Array(60).fill(14.3),
    drawcalls: Array(60).fill(12),
    network: Array(60).fill(12)
};

// ==========================================================================
// INITIAL COMPILER SIMULATION LOOP
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    runCompilerCycle();
    
    // Wire UI Elements
    initializeMenuDropdowns();
    initializePlayControls();
    initializeHierarchyPanel();
    initializeFolderTree();
    initializeFileGridBrowser();
    initializeBottomPanelTabs();
    initializeWorkspaceTabs();
    initializePackageManager();
    initializeConsoleFilters();
    initializeResizers();
    
    // Initialize real-time continuous timers
    setInterval(updateDiagnosticsFeed, 2000); // log tick
    setInterval(updateEditorMetrics, 16.6); // 60 FPS update tick for profiler buffer data
    
    // Bind global floating window controls
    document.getElementById("floating-window-close-btn").addEventListener("click", closeEditorWindow);
    document.getElementById("menu-clear-console").addEventListener("click", () => {
        EditorState.consoleLogs = [];
        renderConsoleList();
        triggerConsoleLog("System Cache and Assembly caches cleared successfully.", "info");
    });
    document.getElementById("menu-recompile").addEventListener("click", () => {
        document.getElementById("compiler-overlay").classList.remove("hidden");
        EditorState.compilerProgress = 0;
        runCompilerCycle();
    });
});

function runCompilerCycle() {
    const bar = document.getElementById("compiler-progress");
    const perc = document.getElementById("compiler-percentage");
    const name = document.getElementById("compiler-filename");
    
    const filesToCompile = [
        "Assets/Scripts/GameplaySystems.cs",
        "Assets/Scripts/MultiplayerArchitecture.cs",
        "Assets/Scripts/PerformanceOptimization.cs",
        "Assets/Scripts/VRInteractionFramework.cs",
        "Assets/Scripts/AIWorkflowAutomation.cs",
        "Assets/Editor/SkillInspectorWindow.cs"
    ];
    
    triggerConsoleLog("Assembly-CSharp.dll: Compilation triggered, compiling Mono codes...", "info");
    
    let index = 0;
    const interval = setInterval(() => {
        EditorState.compilerProgress += 4;
        bar.style.width = EditorState.compilerProgress + "%";
        perc.innerText = EditorState.compilerProgress + "%";
        
        if (EditorState.compilerProgress % 20 === 0 && index < filesToCompile.length - 1) {
            index++;
            name.innerText = filesToCompile[index];
            triggerConsoleLog("Compiled: " + filesToCompile[index], "info");
        }
        
        if (EditorState.compilerProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById("compiler-overlay").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("compiler-overlay").classList.add("hidden");
                    document.getElementById("editor-layout").classList.remove("hidden");
                    triggerConsoleLog("Compilation Complete: Loaded C# assemblies. FPS targeted: 60.", "info");
                    triggerConsoleLog("Odin Inspector initialized: loaded 6 custom asset inspectors.", "info");
                    triggerConsoleLog("Netcode Socket Tunnel active: awaiting Pomelo server handshake.", "info");
                    
                    // Render default loaded view
                    selectFile("Assets/Scenes/Rawmen.unity");
                    renderProfilerGraphs();
                }, 500);
            }, 300);
        }
    }, 100);
}

// ==========================================================================
// CONSOLE SYSTEM LOGGER
// ==========================================================================
function triggerConsoleLog(msg, type = "info") {
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0];
    
    let stackTrace = "";
    if (type === "info") {
        stackTrace = `${msg}\nUnityEngine.Debug:Log(Object)\nDanielBoldrin.Core.GameplaySystems:Awake() (at Assets/Scripts/GameplaySystems.cs:28)`;
    } else if (type === "warn") {
        EditorState.consoleWarningsCount++;
        document.getElementById("console-warn-count").innerText = EditorState.consoleWarningsCount;
        stackTrace = `[Warning] ${msg}\nUnityEngine.Debug:LogWarning(Object)\nDanielBoldrin.Networking.MultiplayerArchitecture:OnReceiveServerState() (at Assets/Scripts/MultiplayerArchitecture.cs:81)`;
    } else if (type === "error") {
        stackTrace = `[Error] ${msg}\nUnityEngine.Debug:LogError(Object)\nDanielBoldrin.XR.VRInteractionFramework:OnSelectEntered() (at Assets/Scripts/VRInteractionFramework.cs:33)`;
    }

    EditorState.consoleLogs.unshift({ timestamp, msg, type, stackTrace });
    if (EditorState.consoleLogs.length > 50) {
        EditorState.consoleLogs.pop();
    }
    
    renderConsoleList();
}

function renderConsoleList() {
    const container = document.getElementById("console-log-list-container");
    if (!container) return;
    
    const showInfo = document.getElementById("console-info-toggle").classList.contains("active");
    const showWarn = document.getElementById("console-warn-toggle").classList.contains("active");
    const showError = document.getElementById("console-err-toggle").classList.contains("active");
    
    container.innerHTML = "";
    
    EditorState.consoleLogs.forEach((log, index) => {
        if (log.type === "info" && !showInfo) return;
        if (log.type === "warn" && !showWarn) return;
        if (log.type === "error" && !showError) return;
        
        let iconClass = "fa-info-circle log-icon info";
        if (log.type === "warn") iconClass = "fa-exclamation-triangle log-icon warn";
        if (log.type === "error") iconClass = "fa-times-circle log-icon error";
        
        const row = document.createElement("div");
        row.className = "console-log-row";
        row.innerHTML = `
            <i class="fas ${iconClass}"></i>
            <span class="log-time">[${log.timestamp}]</span>
            <span class="log-message">${log.msg}</span>
        `;
        row.onclick = () => {
            // Highlight selected
            document.querySelectorAll(".console-log-row").forEach(r => r.classList.remove("selected"));
            row.classList.add("selected");
            
            // Show details
            document.getElementById("console-detail-timestamp").innerText = "Time: " + log.timestamp;
            document.getElementById("console-detail-file").innerText = "Type: " + log.type.toUpperCase();
            document.getElementById("console-detail-msg-body").innerText = log.stackTrace;
        };
        
        container.appendChild(row);
    });
}

function initializeConsoleFilters() {
    document.getElementById("console-clear-btn").onclick = () => {
        EditorState.consoleLogs = [];
        document.getElementById("console-warn-count").innerText = "0";
        EditorState.consoleWarningsCount = 0;
        renderConsoleList();
        document.getElementById("console-detail-msg-body").innerText = "Cleared. Click a new log row to view its call details.";
    };
    
    const toggleFilter = (btnId) => {
        const btn = document.getElementById(btnId);
        btn.onclick = () => {
            btn.classList.toggle("active");
            renderConsoleList();
        };
    };
    
    toggleFilter("console-info-toggle");
    toggleFilter("console-warn-toggle");
    toggleFilter("console-err-toggle");
}

function updateDiagnosticsFeed() {
    if (!EditorState.isPlaying) return;
    
    const randomLogs = [
        { msg: "Netcode: Dynamic network tick successfully serialized (Payload size: 128 bytes).", type: "info" },
        { msg: "Physics Broadphase: 0 overlapping colliders resolved.", type: "info" },
        { msg: "GC Collection Sweep: Swept dead particle arrays from the sandbox memory heap.", type: "info", gc: true },
        { msg: "AI Manager: Dynamic Behavior tree executing branch (Evaluating goals...).", type: "info" },
        { msg: "Addressables Async Load: Completed loading UI textures bundle on demand.", type: "info" }
    ];
    
    const warnings = [
        "Network Ping peak warning: Simulated latency hit high value.",
        "Draw Calls warnings: Large amounts of rigid particle vectors spawned.",
        "GC memory allocations approaching warning limits."
    ];
    
    const prob = Math.random();
    if (prob < 0.6) {
        const item = randomLogs[Math.floor(Math.random() * randomLogs.length)];
        triggerConsoleLog(item.msg, item.type);
        
        if (item.gc) {
            // trigger heap size reduction
            EditorState.heapSize = Math.max(10.2, (EditorState.heapSize - 2.8)).toFixed(1);
            triggerConsoleLog(`[GC Programmatic Collection] Programmatically freed 2.8 MB allocations. Heap: ${EditorState.heapSize} MB`, "warn");
        }
    } else if (prob < 0.8) {
        const item = warnings[Math.floor(Math.random() * warnings.length)];
        triggerConsoleLog(item, "warn");
    }
}

// ==========================================================================
// DYNAMIC PROFILER GRAPH
// ==========================================================================
function updateEditorMetrics() {
    // Random FPS fluctuation
    let fps = 58 + Math.floor(Math.random() * 5);
    if (!EditorState.isPlaying) fps = 60;
    
    document.getElementById("fps-counter").innerText = fps;
    EditorState.avgFPS = fps;
    
    if (EditorState.isPlaying) {
        // Fluctuations
        let baseCpu = parseFloat(EditorState.cpuFrameTime);
        let randCpu = (baseCpu + (Math.random() * 0.4 - 0.2)).toFixed(2);
        if (randCpu < 1) randCpu = 1.2;
        
        // Push data to buffers
        ProfilerBuffer.cpu.push(randCpu);
        ProfilerBuffer.cpu.shift();
        
        // Memory heap slowly creeping up
        let baseMem = parseFloat(EditorState.heapSize);
        let creep = baseMem + 0.02;
        EditorState.heapSize = creep.toFixed(2);
        
        ProfilerBuffer.memory.push(creep);
        ProfilerBuffer.memory.shift();
        
        // Draw calls
        ProfilerBuffer.drawcalls.push(EditorState.drawCalls);
        ProfilerBuffer.drawcalls.shift();
        
        // Network
        ProfilerBuffer.network.push(EditorState.networkPing);
        ProfilerBuffer.network.shift();
        
        // Render stats on UI sidebar
        document.getElementById("prof-avg-fps").innerText = fps + " FPS";
        document.getElementById("prof-heap-size").innerText = EditorState.heapSize + " MB";
        document.getElementById("prof-draw-calls").innerText = EditorState.drawCalls;
        document.getElementById("prof-network-ping").innerText = EditorState.networkPing + "ms";
        
        // Update game view labels
        const perf1 = document.getElementById("game-footer-perf1");
        const perf2 = document.getElementById("game-footer-perf2");
        const perf3 = document.getElementById("game-footer-perf3");
        
        if (perf1 && perf2 && perf3) {
            perf1.innerText = `Spawns: ${EditorState.physicsCount}`;
            perf2.innerText = `Net Traffic: ${(EditorState.networkPing * 0.4).toFixed(1)} kb/s`;
            perf3.innerText = `GC Heap: ${EditorState.heapSize} MB`;
        }
        
        renderProfilerGraphs();
    }
}

function renderProfilerGraphs() {
    const canvas = document.getElementById("profiler-realtime-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    // Draw background grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    ctx.lineWidth = 1;
    for (let i = 20; i < w; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
    }
    for (let j = 20; j < h; j += 30) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(w, j);
        ctx.stroke();
    }
    
    const renderPath = (data, scale, color) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        const step = w / 59;
        
        for (let i = 0; i < 60; i++) {
            const val = data[i];
            const x = i * step;
            // scale value to canvas height
            const y = h - (val * scale) - 10;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    };
    
    // Render lines (scaled individually)
    renderPath(ProfilerBuffer.cpu, 4, "#2ecc71"); // CPU Green
    renderPath(ProfilerBuffer.memory, 1.8, "#00d2ff"); // Heap Blue
    renderPath(ProfilerBuffer.drawcalls, 0.5, "#f1c40f"); // Draw Calls Yellow
    renderPath(ProfilerBuffer.network, 0.3, "#9b59b6"); // Network Magenta
}

document.getElementById("profiler-clear-btn").onclick = () => {
    ProfilerBuffer.cpu.fill(2.0);
    ProfilerBuffer.memory.fill(10.0);
    ProfilerBuffer.drawcalls.fill(12);
    ProfilerBuffer.network.fill(15);
    EditorState.heapSize = "10.0";
    triggerConsoleLog("Profiler metrics and heaps programmatically purged.", "info");
    renderProfilerGraphs();
};

// ==========================================================================
// SELECTION MANAGER & HIERARCHY TREE
// ==========================================================================
function selectFile(filePath) {
    EditorState.selectedFilePath = filePath;
    
    const fileData = VFS[filePath];
    if (!fileData) return;
    
    // Find active folder path
    const parts = filePath.split('/');
    parts.pop();
    EditorState.selectedFolder = parts.join('/');
    
    // Sync UI sidebars and breadcrumbs
    document.getElementById("project-path-crumb").innerText = EditorState.selectedFolder + "/";
    
    // 1. Highlight file in Project browser
    syncFileBrowserHighlights();
    
    // 2. Load Inspector Panel details
    renderInspector(filePath);
    
    // 3. Sync Hierarchy highlights if the scene matches hierarchy tags
    syncHierarchySelection();
    
    // 4. Act appropriately depending on type
    if (fileData.type === "scene") {
        document.getElementById("scene-active-title").innerText = fileData.name;
        renderSceneGizmos(filePath);
        
        // Auto-switch tabs to scene or game depending on sandbox settings
        if (fileData.meta.sandbox) {
            loadSandboxScene(fileData.meta.sandbox);
        }
    } else if (fileData.type === "cs") {
        // Open in detached floating IDE window
        openCodeInFloatingWindow(filePath);
    } else if (fileData.type === "asset") {
        // Scriptable asset loaded into Inspector
        triggerConsoleLog("Odin Custom Editor: loaded ScriptableObject details for " + fileData.name, "info");
    }
}

function syncHierarchySelection() {
    document.querySelectorAll(".hierarchy-tree .tree-node").forEach(node => {
        node.classList.remove("selected");
        const target = node.getAttribute("data-target");
        if (target) {
            // Guessing linkage: if fileData matches names
            const fileData = VFS[EditorState.selectedFilePath];
            if (fileData && fileData.type === "scene" && fileData.meta.tech.includes(target)) {
                node.classList.add("selected");
            }
        }
    });
}

function initializeHierarchyPanel() {
    // Node folding toggle
    document.querySelectorAll(".hierarchy-tree .node-content").forEach(content => {
        content.onclick = (e) => {
            e.stopPropagation();
            const parent = content.parentElement;
            
            // Highlight selected node
            document.querySelectorAll(".hierarchy-tree .tree-node").forEach(n => n.classList.remove("selected"));
            parent.classList.add("selected");
            
            // Check if root or collapsible
            const children = parent.querySelector(".node-children");
            if (children) {
                parent.classList.toggle("open");
            } else {
                // Leaf Node: find matching script/scene asset
                const target = parent.getAttribute("data-target");
                if (target) {
                    findAndSelectAssociatedAsset(target);
                }
            }
        };
    });
    
    // Hierarchy Filter
    document.getElementById("hierarchy-search-input").oninput = (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".hierarchy-tree .tree-node").forEach(node => {
            const label = node.querySelector(".node-label");
            if (label) {
                const text = label.innerText.toLowerCase();
                if (text.includes(query) || node.classList.contains("root-node")) {
                    node.style.display = "block";
                } else {
                    node.style.display = "none";
                }
            }
        });
    };
}

function findAndSelectAssociatedAsset(target) {
    // Map hierarchy systems to exact Unity scenes or asset files
    const mapping = {
        "CoreSystems": "Assets/Scripts/GameplaySystems.cs",
        "MultiplayerSystems": "Assets/Scenes/MultiplayerSandbox.unity",
        "GameplaySystems": "Assets/Scenes/Rawmen.unity",
        "ToolingSystems": "Assets/ScriptableObjects/ToolingPipelineSkills.asset",
        "AIWorkflows": "Assets/Scenes/AIWorkflowLab.unity",
        "VRXRSystems": "Assets/Scenes/Microbiology.unity",
        "MobileSystems": "Assets/Scripts/GameplaySystems.cs",
        "ProductionPipelines": "Assets/Prefabs/AIWorkflowManager.prefab",
        "TechnicalLeadership": "Assets/ScriptableObjects/LeadershipSkills.asset",
        "ExperimentalSystems": "Assets/Scenes/RapidPrototypeArena.unity",
        "LiveOpsSystems": "Assets/Scenes/Rodeo.unity",
        "OptimizationSystems": "Assets/ScriptableObjects/OptimizationSkills.asset",
        "ProjectBreakdowns": "Assets/Scenes/Rawmen.unity",
        "RuntimeDiagnostics": "Assets/Scripts/PerformanceOptimization.cs",
        "InteractiveShowcases": "Assets/Scenes/RapidPrototypeArena.unity"
    };
    
    if (mapping[target]) {
        selectFile(mapping[target]);
    }
}

// ==========================================================================
// INSPECTOR PROPERTY EDITOR RENDERER
// ==========================================================================
function renderInspector(filePath) {
    const fileData = VFS[filePath];
    const inspectorContent = document.getElementById("inspector-content");
    const inspectorDetails = document.getElementById("inspector-details");
    const inspectorDefault = document.getElementById("inspector-default");
    
    if (!fileData) {
        inspectorDefault.classList.remove("hidden");
        inspectorDetails.classList.add("hidden");
        return;
    }
    
    inspectorDefault.classList.add("hidden");
    inspectorDetails.classList.remove("hidden");
    inspectorDetails.innerHTML = "";
    
    // Header Info Box
    let fileIcon = "fa-file-code text-accent-blue";
    if (fileData.type === "scene") fileIcon = "fa-cubes text-accent-orange";
    if (fileData.type === "asset") fileIcon = "fa-id-card text-accent-yellow";
    if (fileData.type === "prefab") fileIcon = "fa-cube text-accent-cyan";
    
    let headerHtml = `
        <div class="inspector-header-section">
            <div class="icon-box"><i class="fas ${fileIcon}"></i></div>
            <div class="title-area">
                <h2>${fileData.name}</h2>
                <span class="subtitle">${filePath}</span>
            </div>
        </div>
    `;
    inspectorDetails.innerHTML += headerHtml;
    
    // RENDERING SCENE META DETAIL EDITOR
    if (fileData.type === "scene") {
        const meta = fileData.meta;
        let techPills = meta.tech.map(t => `<span class="inspector-pill pro"><i class="fas fa-atom"></i> ${t}</span>`).join('');
        
        let specsHtml = "";
        for (const [key, val] of Object.entries(meta.specs)) {
            specsHtml += `
                <div class="property-field">
                    <label title="${key}">${key}</label>
                    <input type="text" value="${val}" readonly style="background-color: var(--unity-bg-darkest); color: var(--unity-text-muted);">
                </div>
            `;
        }
        
        let bodyHtml = `
            <!-- Spec Details Component -->
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-cog"></i> Project Specifications</span>
                    </div>
                </div>
                <div class="component-body">
                    ${specsHtml}
                </div>
            </div>

            <!-- Description / Achievements Component -->
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-align-left"></i> Architecture Description</span>
                    </div>
                </div>
                <div class="component-body">
                    <p style="color: var(--unity-text); font-size: 11px; margin-bottom: 12px; line-height: 1.5;">${meta.desc}</p>
                    <div class="skills-inspector-tag-list">${techPills}</div>
                </div>
            </div>

            <!-- Action buttons -->
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-external-link-alt"></i> External Resources</span>
                    </div>
                </div>
                <div class="component-body" style="display: flex; gap: 8px;">
                    <a href="${meta.link}" target="_blank" class="inspector-action-btn" style="text-align:center; text-decoration:none;"><i class="fab fa-itch-io"></i> Visit Itch.io</a>
                    <button class="inspector-action-btn" onclick="loadSandboxScene('${meta.sandbox}')"><i class="fas fa-play"></i> Initialize Sandbox</button>
                </div>
            </div>
            
            <!-- Screenshot Preview -->
            <div class="inspector-media-container">
                <img src="${meta.cover}" alt="Gameplay Cover" onerror="this.src='Images/Rawmen Cover.png';">
            </div>
        `;
        inspectorDetails.innerHTML += bodyHtml;
    }
    
    // RENDERING SCRIPTABLEOBJECT SKILLS ASSETS
    else if (fileData.type === "asset") {
        let skillsHtml = "";
        fileData.skills.forEach((skill, idx) => {
            skillsHtml += `
                <div class="property-field" style="margin-bottom: 12px;">
                    <label title="${skill.name}" style="font-weight: bold; color: var(--unity-text-light);">${skill.name}</label>
                    <div class="slider-group">
                        <input type="range" min="0" max="100" value="${skill.rating}" oninput="updateSkillSlider(this, ${idx}, '${filePath}')">
                        <span>${skill.rating}%</span>
                    </div>
                </div>
            `;
        });
        
        let refsHtml = fileData.references.map(r => `
            <div class="object-reference" onclick="selectFile('${r}')">
                <span>${r.split('/').pop()}</span>
                <i class="fas fa-link"></i>
            </div>
        `).join('');
        
        let bodyHtml = `
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-sliders-h"></i> Custom Skill Sliders</span>
                    </div>
                </div>
                <div class="component-body">
                    ${skillsHtml}
                </div>
            </div>

            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-link"></i> Linked Code Dependencies</span>
                    </div>
                </div>
                <div class="component-body" style="display: flex; flex-direction: column; gap: 6px;">
                    ${refsHtml}
                </div>
            </div>
        `;
        inspectorDetails.innerHTML += bodyHtml;
    }
    
    // RENDERING PREFAB PROPERTY COMPONENTS
    else if (fileData.type === "prefab") {
        let nodesHtml = fileData.hierarchy.map(node => `
            <div style="font-family: var(--font-mono); font-size: 11px; padding: 4px; border-bottom: 1px solid rgba(255,255,255,0.02); display: flex; align-items: center; gap: 6px;">
                <i class="fas fa-cube text-accent-cyan" style="font-size: 10px;"></i>
                <span>${node}</span>
            </div>
        `).join('');
        
        let bodyHtml = `
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-sitemap"></i> Prefab Node Hierarchies</span>
                    </div>
                </div>
                <div class="component-body">
                    ${nodesHtml}
                </div>
            </div>
            
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-wrench"></i> Prefab Actions</span>
                    </div>
                </div>
                <div class="component-body">
                    <button class="inspector-action-btn" onclick="alert('Prefab unpacked inside Scene hierarchies successfully.')">Unpack Prefab</button>
                    <button class="inspector-action-btn" onclick="alert('Assembly synchronized. All active reference tags updated.')">Apply overrides to references</button>
                </div>
            </div>
        `;
        inspectorDetails.innerHTML += bodyHtml;
    }
    
    // RENDERING CODE SOURCE CODE CONFIG
    else if (fileData.type === "cs") {
        let bodyHtml = `
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-file-code"></i> Script Assemblies Details</span>
                    </div>
                </div>
                <div class="component-body">
                    <div class="property-field">
                        <label>Asset Class</label>
                        <input type="text" value="${fileData.name.replace('.cs', '')}" readonly>
                    </div>
                    <div class="property-field">
                        <label>Size</label>
                        <input type="text" value="${fileData.size}" readonly>
                    </div>
                    <div class="property-field">
                        <label>Language</label>
                        <input type="text" value="C# Script Assembly" readonly>
                    </div>
                </div>
            </div>
            
            <div class="inspector-component open">
                <div class="component-header" onclick="toggleComponentFold(this)">
                    <div class="component-header-left">
                        <i class="fas fa-chevron-right foldout-icon"></i>
                        <span><i class="fas fa-code-branch"></i> Compile Properties</span>
                    </div>
                </div>
                <div class="component-body">
                    <button class="inspector-action-btn" onclick="openCodeInFloatingWindow('${filePath}')"><i class="fas fa-code"></i> Open Source Editor</button>
                    <button class="inspector-action-btn" onclick="triggerConsoleLog('Dynamic C# Assembly loaded successfully.', 'info')"><i class="fas fa-sync-alt"></i> Re-verify scripts</button>
                </div>
            </div>
        `;
        inspectorDetails.innerHTML += bodyHtml;
    }
}

// Foldout toggling
window.toggleComponentFold = (header) => {
    const parent = header.parentElement;
    parent.classList.toggle("open");
};

window.updateSkillSlider = (slider, idx, filePath) => {
    const val = slider.value;
    slider.nextElementSibling.innerText = val + "%";
    
    // Sync into VFS DB
    VFS[filePath].skills[idx].rating = parseInt(val);
};

// ==========================================================================
// SCENE GIZMO VISUALIZER LAYER (SVG Graph rendering based on scene)
// ==========================================================================
function renderSceneGizmos(filePath) {
    const container = document.getElementById("scene-gizmo-layer");
    if (!container) return;
    
    const fileData = VFS[filePath];
    if (filePath.endsWith("Rawmen.unity")) {
        // Draw multiplayer arena flythrough grid
        container.innerHTML = `
            <svg class="dependency-graph" viewBox="0 0 400 240">
                <!-- Arena outline -->
                <rect x="40" y="40" width="320" height="160" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
                <circle cx="200" cy="120" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
                
                <!-- Hitboxes -->
                <rect x="80" y="90" width="24" height="60" fill="none" stroke="var(--unity-accent-red)" stroke-width="1" stroke-dasharray="3"/>
                <text x="75" y="80" fill="var(--unity-accent-red)" font-size="8" font-family="var(--font-mono)">P1_Hitbox_Debug</text>
                
                <rect x="296" y="90" width="24" height="60" fill="none" stroke="var(--unity-accent-green)" stroke-width="1" stroke-dasharray="3"/>
                <text x="280" y="80" fill="var(--unity-accent-green)" font-size="8" font-family="var(--font-mono)">P2_Hitbox_Debug</text>
                
                <!-- Network sync lines -->
                <line x1="104" y1="120" x2="296" y2="120" stroke="rgba(0, 168, 255, 0.4)" stroke-width="1.5" class="dependency-link"/>
                <circle cx="200" cy="120" r="6" fill="var(--unity-accent-cyan)" />
                <text x="160" y="140" fill="var(--unity-accent-cyan)" font-size="8" font-family="var(--font-mono)">Delta_Sync_Trigger</text>
                
                <!-- Coordinate gizmo labels -->
                <text x="10" y="230" fill="var(--unity-text-muted)" font-size="8">Cam Position: Vector3(-12.4f, 5.0f, 22.1f)</text>
            </svg>
        `;
    } else if (filePath.endsWith("Microbiology.unity")) {
        // VR simulation guided interact workflow nodes
        container.innerHTML = `
            <svg class="dependency-graph" viewBox="0 0 400 240">
                <!-- Procedural instruction sequence nodes -->
                <g transform="translate(10, 0)">
                    <rect x="10" y="100" width="80" height="40" rx="4" fill="var(--unity-bg-darker)" stroke="var(--unity-accent-green)" stroke-width="1.5"/>
                    <text x="22" y="124" fill="var(--unity-text-light)" font-size="8" font-family="var(--font-mono)">GrabSyringe</text>
                    
                    <line x1="90" y1="120" x2="130" y2="120" stroke="var(--unity-accent-green)" stroke-dasharray="3" stroke-width="1.5"/>
                    
                    <rect x="130" y="100" width="100" height="40" rx="4" fill="var(--unity-bg-darker)" stroke="var(--unity-accent-cyan)" stroke-width="1.5"/>
                    <text x="142" y="124" fill="var(--unity-text-light)" font-size="8" font-family="var(--font-mono)">InjectSample_Fm</text>
                    
                    <line x1="230" y1="120" x2="270" y2="120" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
                    
                    <rect x="270" y="100" width="100" height="40" rx="4" fill="var(--unity-bg-darker)" stroke="var(--unity-border-light)" stroke-width="1"/>
                    <text x="282" y="124" fill="var(--unity-text-muted)" font-size="8" font-family="var(--font-mono)">EvaluateSample</text>
                </g>
                <text x="10" y="230" fill="var(--unity-accent-cyan)" font-size="8">XR Hand Rigs Status: Meta Quest 3 Hand Tracking Mesh bound.</text>
            </svg>
        `;
    } else {
        // Render stylized system dependency graph default scene layout
        container.innerHTML = `
            <svg class="dependency-graph" viewBox="0 0 400 240">
                <!-- Nodes -->
                <g class="dependency-node" transform="translate(200, 40)" onclick="selectFile('Assets/Scripts/GameplaySystems.cs')">
                    <circle cx="0" cy="0" r="24" fill="var(--unity-bg-darker)" stroke="var(--unity-accent-orange)" stroke-width="2"/>
                    <text x="-16" y="4" fill="var(--unity-text-light)" font-size="8" font-family="var(--font-mono)">Gameplay</text>
                </g>
                <g class="dependency-node" transform="translate(100, 140)" onclick="selectFile('Assets/Scripts/MultiplayerArchitecture.cs')">
                    <circle cx="0" cy="0" r="24" fill="var(--unity-bg-darker)" stroke="var(--unity-accent-blue)" stroke-width="2"/>
                    <text x="-18" y="4" fill="var(--unity-text-light)" font-size="8" font-family="var(--font-mono)">Netcode</text>
                </g>
                <g class="dependency-node" transform="translate(300, 140)" onclick="selectFile('Assets/Scripts/PerformanceOptimization.cs')">
                    <circle cx="0" cy="0" r="24" fill="var(--unity-bg-darker)" stroke="var(--unity-accent-cyan)" stroke-width="2"/>
                    <text x="-16" y="4" fill="var(--unity-text-light)" font-size="8" font-family="var(--font-mono)">Profiler</text>
                </g>
                
                <!-- Connections -->
                <line x1="180" y1="55" x2="120" y2="125" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
                <line x1="220" y1="55" x2="280" y2="125" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
                <line x1="124" y1="140" x2="276" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="3"/>
                
                <text x="120" y="225" fill="var(--unity-text-muted)" font-size="8" font-family="var(--font-mono)">Select Node to load Script Assemblies.</text>
            </svg>
        `;
    }
}

// ==========================================================================
// CODE EDITOR MOCK SYNTAX HIGHLIGHTER
// ==========================================================================
function loadCodeIntoEditor(filePath) {
    const fileData = VFS[filePath];
    if (!fileData || !fileData.code) return;
    
    // Highlight syntax keywords
    let raw = fileData.code;
    
    // Safe escaping
    raw = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    // Replace C# keywords
    const keywords = ["using", "namespace", "public", "private", "protected", "class", "struct", "void", "static", "bool", "float", "int", "string", "Guid", "Action", "Dictionary", "List", "override", "delegate", "new", "null", "if", "else", "foreach", "while", "return", "out", "MonoBehaviour"];
    keywords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        raw = raw.replace(regex, `<span class="csharp-keyword">${word}</span>`);
    });
    
    // Syntax tags (Header values)
    raw = raw.replace(/(\[Header\("[A-Za-z0-9\s]+"\]\))/g, `<span class="csharp-tag">$1</span>`);
    raw = raw.replace(/(\[SerializeField\])/g, `<span class="csharp-tag">$1</span>`);
    raw = raw.replace(/(\[Range\([0-9]+,\s*[0-9]+\)\])/g, `<span class="csharp-tag">$1</span>`);
    
    // Regex strings and comments
    raw = raw.replace(/("[A-Za-z0-9\s\.\:\(\)\,\=\-\+!\[\]_]+")//g, `<span class="csharp-string">$1</span>`);
    raw = raw.replace(/(\/\/.*)/g, `<span class="csharp-comment">$1</span>`);
    raw = raw.replace(/(\/\*\*[\s\S]*?\*\/)/g, `<span class="csharp-comment">$1</span>`);
    
    // Code injection
    document.getElementById("code-syntax-area").innerHTML = `<code class="language-csharp">${raw}</code>`;
    
    // Generate gutters
    const totalLines = fileData.code.split('\n').length;
    const gutter = document.getElementById("code-line-gutter");
    gutter.innerHTML = "";
    for (let i = 1; i <= totalLines; i++) {
        gutter.innerHTML += `<div>${i}</div>`;
    }
}

// ==========================================================================
// PROJECT EXPLORER WINDOW
// ==========================================================================
function initializeFolderTree() {
    const rootTree = document.getElementById("project-assets-tree-root");
    if (!rootTree) return;
    
    rootTree.innerHTML = "";
    
    for (const folderName of Object.keys(ProjectTree.Assets)) {
        const item = document.createElement("li");
        item.className = "folder-node open";
        item.innerHTML = `
            <div class="folder-content" onclick="selectFolder('Assets/${folderName}', this)">
                <i class="fas fa-chevron-right toggle-folder-icon"></i>
                <i class="fas fa-folder folder-icon text-accent-cyan"></i>
                <span class="folder-label">${folderName}</span>
            </div>
        `;
        rootTree.appendChild(item);
    }
}

window.selectFolder = (folderPath, element) => {
    event.stopPropagation();
    EditorState.selectedFolder = folderPath;
    
    // Highlight folder
    document.querySelectorAll(".folder-tree .folder-node").forEach(n => n.classList.remove("selected"));
    if (element) {
        element.parentElement.classList.add("selected");
    }
    
    document.getElementById("project-path-crumb").innerText = folderPath + "/";
    renderFileGrid(folderPath);
};

function renderFileGrid(folderPath) {
    const container = document.getElementById("project-file-grid-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    // Fetch files inside ProjectTree
    const folderKey = folderPath.replace("Assets/", "");
    const files = ProjectTree.Assets[folderKey] || [];
    
    files.forEach(filePath => {
        const fileData = VFS[filePath];
        if (!fileData) return;
        
        const ext = fileData.type;
        let iconClass = "fa-file-code";
        if (ext === "unity") iconClass = "fa-cubes";
        if (ext === "asset") iconClass = "fa-id-card";
        if (ext === "prefab") iconClass = "fa-cube";
        
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.setAttribute("data-path", filePath);
        fileItem.setAttribute("data-ext", ext);
        
        fileItem.innerHTML = `
            <div class="file-icon-wrapper">
                <i class="fas ${iconClass}"></i>
            </div>
            <span class="file-label" title="${fileData.name}">${fileData.name}</span>
        `;
        
        fileItem.onclick = () => {
            selectFile(filePath);
        };
        
        container.appendChild(fileItem);
    });
    
    syncFileBrowserHighlights();
}

function syncFileBrowserHighlights() {
    document.querySelectorAll(".file-item").forEach(item => {
        item.classList.remove("selected");
        if (item.getAttribute("data-path") === EditorState.selectedFilePath) {
            item.classList.add("selected");
        }
    });
}

function initializeFileGridBrowser() {
    renderFileGrid("Assets/Scenes");
    
    // Filter search
    document.getElementById("project-search").oninput = (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".file-item").forEach(item => {
            const label = item.querySelector(".file-label").innerText.toLowerCase();
            if (label.includes(query)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    };
}

// ==========================================================================
// TABS WINDOW MANAGEMENT
// ==========================================================================
function initializeBottomPanelTabs() {
    const bindTab = (tabId, contentId, activeClass = "active") => {
        const tab = document.getElementById(tabId);
        const content = document.getElementById(contentId);
        
        tab.onclick = () => {
            // Un-active all
            document.querySelectorAll(".bottom-dock-pane .tab").forEach(t => t.classList.remove(activeClass));
            document.querySelectorAll(".bottom-body-content > .tab-content").forEach(c => c.classList.remove(activeClass));
            
            tab.classList.add(activeClass);
            content.classList.add(activeClass);
            
            // Adjust toolbar displays
            document.getElementById("bottom-pane-toolbar").querySelectorAll(".toolbar-group").forEach(g => g.classList.add("hidden"));
            const targetGroup = document.getElementById("bottom-pane-toolbar").querySelector(`.active-for-${tabId.replace("tab-", "")}`);
            if (targetGroup) {
                targetGroup.classList.remove("hidden");
            }
            
            if (tabId === "tab-profiler" && EditorState.isPlaying) {
                setTimeout(renderProfilerGraphs, 50);
            }
        };
    };
    
    bindTab("tab-project", "content-project");
    bindTab("tab-console", "content-console");
    bindTab("tab-profiler", "content-profiler");
}

function initializeWorkspaceTabs() {
    const bindTab = (tabId, contentId, activeClass = "active") => {
        const tab = document.getElementById(tabId);
        const content = document.getElementById(contentId);
        
        tab.onclick = () => {
            document.querySelectorAll(".center-workspace-pane .tab").forEach(t => t.classList.remove(activeClass));
            document.querySelectorAll(".center-body-content > .tab-content").forEach(c => c.classList.remove(activeClass));
            
            tab.classList.add(activeClass);
            content.classList.add(activeClass);
            
            // Hide/Show toolbars
            const toolbar = document.getElementById("center-pane-toolbar");
            toolbar.querySelectorAll(".toolbar-group").forEach(g => g.classList.add("hidden"));
            if (tabId === "tab-scene") {
                toolbar.querySelector(".active-for-scene").classList.remove("hidden");
            } else if (tabId === "tab-game") {
                toolbar.querySelector(".active-for-game").classList.remove("hidden");
            }
        };
    };
    
    bindTab("tab-scene", "content-scene");
    bindTab("tab-game", "content-game");
    bindTab("tab-packages", "content-packages");
}

window.activateTab = (tabName) => {
    const tabEl = document.getElementById(`tab-${tabName}`);
    if (tabEl) tabEl.click();
};

window.activateBottomTab = (tabName) => {
    const tabEl = document.getElementById(`tab-${tabName}`);
    if (tabEl) tabEl.click();
};

// ==========================================================================
// PACKAGE MANAGER
// ==========================================================================
function initializePackageManager() {
    const sidebarList = document.getElementById("package-list-container");
    if (!sidebarList) return;
    
    sidebarList.innerHTML = "";
    Packages.forEach((pkg, index) => {
        const li = document.createElement("li");
        li.className = `package-item ${index === 0 ? 'selected' : ''}`;
        li.innerHTML = `
            <span class="pkg-name">${pkg.name}</span>
            <span class="pkg-ver-label">com.unity.${pkg.name.toLowerCase().replace(/\s+/g, '')} - v${pkg.ver}</span>
        `;
        li.onclick = () => {
            document.querySelectorAll(".package-item").forEach(item => item.classList.remove("selected"));
            li.classList.add("selected");
            loadPackageDetail(pkg);
        };
        sidebarList.appendChild(li);
    });
    
    // load first package details
    loadPackageDetail(Packages[0]);
}

function loadPackageDetail(pkg) {
    document.getElementById("pkg-title").innerText = pkg.name;
    document.getElementById("pkg-ver").innerText = "v" + pkg.ver;
    document.getElementById("pkg-desc").innerText = pkg.desc;
    
    const depList = document.getElementById("pkg-deps-list");
    depList.innerHTML = "";
    if (pkg.deps.length > 0) {
        pkg.deps.forEach(d => {
            const li = document.createElement("li");
            li.innerText = d;
            depList.appendChild(li);
        });
    } else {
        depList.innerHTML = "<li>No external dependencies verified.</li>";
    }
}

// ==========================================================================
// FAKE PLAYMODE CONTROLS
// ==========================================================================
function initializePlayControls() {
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    
    playBtn.onclick = () => {
        playBtn.classList.toggle("active");
        if (playBtn.classList.contains("active")) {
            // enter play mode
            EditorState.isPlaying = true;
            EditorState.isPaused = false;
            pauseBtn.classList.remove("active");
            
            triggerConsoleLog("Entering Play Mode: initialized game assemblies loop.", "info");
            document.getElementById("game-status-indicator").innerText = "PLAYING";
            document.getElementById("game-status-indicator").className = "status-indicator live";
            
            // Auto switch to Game view
            activateTab("game");
            
            // Start Active simulation sandbox in Game view
            const activeScene = VFS[EditorState.selectedFilePath];
            if (activeScene && activeScene.type === "scene" && activeScene.meta.sandbox) {
                loadSandboxScene(activeScene.meta.sandbox);
            } else {
                loadSandboxScene("multiplayer"); // fallback
            }
        } else {
            // exit play mode
            EditorState.isPlaying = false;
            EditorState.isPaused = false;
            pauseBtn.classList.remove("active");
            document.getElementById("game-status-indicator").innerText = "STANDBY";
            document.getElementById("game-status-indicator").className = "status-indicator";
            triggerConsoleLog("Exited Play Mode loop. Game assemblies released.", "info");
            
            stopActiveCanvasLoops();
        }
    };
    
    pauseBtn.onclick = () => {
        if (!EditorState.isPlaying) return;
        
        pauseBtn.classList.toggle("active");
        EditorState.isPaused = pauseBtn.classList.contains("active");
        
        if (EditorState.isPaused) {
            triggerConsoleLog("Game execution thread suspended.", "warn");
            document.getElementById("game-status-indicator").innerText = "PAUSED";
            document.getElementById("game-status-indicator").className = "status-indicator warn";
        } else {
            triggerConsoleLog("Game execution thread resumed.", "info");
            document.getElementById("game-status-indicator").innerText = "PLAYING";
            document.getElementById("game-status-indicator").className = "status-indicator live";
        }
    };
}

// ==========================================================================
// THREE CANVAS PLAYABLE GAME SANDBOXES
// ==========================================================================
let canvasAnimFrame = null;
let sandboxType = null; // 'multiplayer', 'ai', 'physics'
let sandboxEntities = [];
let aiGoal = { x: 200, y: 200 };

window.loadSandboxScene = (type) => {
    // Force enter playmode if not already active
    const playBtn = document.getElementById("play-btn");
    if (!EditorState.isPlaying) {
        playBtn.click();
    }
    
    sandboxType = type;
    
    // Hide startup overlays
    const prompt = document.getElementById("game-sandbox-prompt");
    if (prompt) prompt.classList.add("hidden");
    
    // Initialize corresponding sandbox physics variables
    initializeSandboxLoop(type);
};

function stopActiveCanvasLoops() {
    if (canvasAnimFrame) {
        cancelAnimationFrame(canvasAnimFrame);
        canvasAnimFrame = null;
    }
    const prompt = document.getElementById("game-sandbox-prompt");
    if (prompt) prompt.classList.remove("hidden");
    
    const canvas = document.getElementById("game-sandbox-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initializeSandboxLoop(type) {
    if (canvasAnimFrame) {
        cancelAnimationFrame(canvasAnimFrame);
    }
    
    const canvas = document.getElementById("game-sandbox-canvas");
    const ctx = canvas.getContext("2d");
    
    // Bind mouse spawning for Physics playground
    canvas.onmousedown = (e) => {
        if (type !== 'physics') return;
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        
        // Spawn bouncing rigidbodies
        for (let i = 0; i < 5; i++) {
            sandboxEntities.push({
                x: mx + (Math.random() * 20 - 10),
                y: my + (Math.random() * 20 - 10),
                vx: Math.random() * 4 - 2,
                vy: Math.random() * -3 - 2,
                r: 8 + Math.random() * 8,
                color: `hsl(${Math.random() * 360}, 80%, 55%)`
            });
            EditorState.physicsCount++;
        }
        
        // Increment Draw Calls dynamically in graphs
        EditorState.drawCalls = Math.min(120, EditorState.drawCalls + 15);
        EditorState.cpuFrameTime = (parseFloat(EditorState.cpuFrameTime) + 0.35).toFixed(2);
        
        triggerConsoleLog(`Spawned 5 rigidbodies. Rigidbodies count: ${EditorState.physicsCount}. Draw Calls: ${EditorState.drawCalls}`, "info");
    };
    
    // Spawns default entities based on scene type
    sandboxEntities = [];
    if (type === 'multiplayer') {
        document.getElementById("game-sandbox-active-title").innerText = "Netcode Sync Mode: autorun Client vs Server authority";
        EditorState.drawCalls = 16;
        EditorState.networkPing = 60;
        
        // Spawns Client (Green) & Server Red shadow
        sandboxEntities.push({
            name: "Server_Authoritative",
            x: 200,
            y: 200,
            tx: 200, // target x
            ty: 200, // target y
            vx: 0,
            vy: 0,
            r: 16,
            color: "rgba(255, 75, 75, 0.4)", // Red shadow ghost
            packets: [] // connection updates
        });
        
        sandboxEntities.push({
            name: "Local_Predicted",
            x: 200,
            y: 200,
            vx: 0,
            vy: 0,
            r: 16,
            color: "hsl(145, 80%, 42%)" // Green mesh
        });
    } 
    else if (type === 'ai') {
        document.getElementById("game-sandbox-active-title").innerText = "AI Pathfinding Mode: dynamic Behavior Tree validation";
        EditorState.drawCalls = 8;
        EditorState.networkPing = 0;
        
        // Spawn AI Agent
        sandboxEntities.push({
            x: 100,
            y: 100,
            vx: 0,
            vy: 0,
            r: 14,
            speed: 1.8,
            color: "hsl(196, 100%, 48%)"
        });
        
        aiGoal = { x: 300, y: 150 };
    } 
    else if (type === 'physics') {
        document.getElementById("game-sandbox-active-title").innerText = "Physics Rig Arena: Click in Game screen to spawn boxes";
        EditorState.physicsCount = 0;
        EditorState.drawCalls = 10;
        
        // Spawn some floor items
        sandboxEntities.push({ x: 100, y: 380, vx: 0, vy: 0, r: 35, static: true, color: "#333" });
        sandboxEntities.push({ x: 350, y: 380, vx: 0, vy: 0, r: 45, static: true, color: "#333" });
        sandboxEntities.push({ x: 600, y: 380, vx: 0, vy: 0, r: 25, static: true, color: "#333" });
    }
    
    // Spawns the main loop ticks
    const tick = () => {
        if (!EditorState.isPlaying) return;
        if (!EditorState.isPaused) {
            updateSandboxLogic(canvas, type);
        }
        drawSandboxVisuals(canvas, ctx, type);
        
        canvasAnimFrame = requestAnimationFrame(tick);
    };
    
    tick();
}

function updateSandboxLogic(canvas, type) {
    const w = canvas.width;
    const h = canvas.height;
    
    if (type === 'physics') {
        // Simple 2D bouncing particles colliders
        for (let i = 0; i < sandboxEntities.length; i++) {
            const p = sandboxEntities[i];
            if (p.static) continue;
            
            p.vy += EditorState.physicsGravity; // gravity
            p.x += p.vx;
            p.y += p.vy;
            
            // Boundary walls
            if (p.x - p.r < 0) { p.x = p.r; p.vx *= -0.7; }
            if (p.x + p.r > w) { p.x = w - p.r; p.vx *= -0.7; }
            if (p.y + p.r > h - 10) { p.y = h - 10 - p.r; p.vy *= -0.65; p.vx *= 0.95; }
            
            // Collide against statics
            sandboxEntities.forEach(other => {
                if (other === p) return;
                const dx = p.x - other.x;
                const dy = p.y - other.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const minDist = p.r + other.r;
                
                if (dist < minDist) {
                    const angle = Math.atan2(dy, dx);
                    const tx = other.x + Math.cos(angle) * minDist;
                    const ty = other.y + Math.sin(angle) * minDist;
                    
                    if (!other.static) {
                        p.vx += Math.cos(angle) * 0.1;
                        p.vy += Math.sin(angle) * 0.1;
                    } else {
                        p.x = tx;
                        p.y = ty;
                        p.vx *= -0.7;
                        p.vy *= -0.7;
                    }
                }
            });
        }
    } 
    else if (type === 'multiplayer') {
        const s = sandboxEntities[0]; // Server Authoritative red ghost
        const c = sandboxEntities[1]; // Client predicted mesh green
        
        // Server moves slowly in random paths
        if (Math.abs(s.x - s.tx) < 10 && Math.abs(s.y - s.ty) < 10) {
            s.tx = 100 + Math.random() * (w - 200);
            s.ty = 80 + Math.random() * (h - 160);
        }
        
        s.x += (s.tx - s.x) * 0.03;
        s.y += (s.ty - s.y) * 0.03;
        
        // Client tries to follow server. If ClientPrediction is active, it predicts the vector inputs.
        // If Reconciliation is active, client snaps back to Server on major mismatches.
        let targetX = s.x;
        let targetY = s.y;
        
        if (!EditorState.interpolation) {
            // No client interpolation, lags behind server
            c.x += (s.x - c.x) * 0.02;
            c.y += (s.y - c.y) * 0.02;
        } else {
            // Smooth client interpolation
            c.x += (s.x - c.x) * 0.09;
            c.y += (s.y - c.y) * 0.09;
        }
        
        // Connection packet flow animations
        if (Math.random() < 0.04) {
            s.packets.push({
                x: c.x,
                y: c.y,
                tx: s.x,
                ty: s.y,
                progress: 0
            });
        }
        
        s.packets.forEach((pkg, index) => {
            pkg.progress += 0.015;
            if (pkg.progress >= 1) {
                s.packets.splice(index, 1);
            }
        });
    } 
    else if (type === 'ai') {
        const agent = sandboxEntities[0];
        
        // Move towards crystal target
        const dx = aiGoal.x - agent.x;
        const dy = aiGoal.y - agent.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 15) {
            // goal captured, spawn new goal
            aiGoal = {
                x: 100 + Math.random() * (w - 200),
                y: 80 + Math.random() * (h - 160)
            };
            triggerConsoleLog("AI Behavior: Capture Target Success! Rerouting navigation path.", "info");
        } else {
            agent.x += (dx / dist) * agent.speed;
            agent.y += (dy / dist) * agent.speed;
        }
    }
}

function drawSandboxVisuals(canvas, ctx, type) {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    // Draw sci-fi scanning backgrounds
    ctx.fillStyle = "#0c0d12";
    ctx.fillRect(0, 0, w, h);
    
    ctx.strokeStyle = "rgba(255,255,255,0.015)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 25) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 25) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    
    if (type === 'physics') {
        sandboxEntities.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            
            if (!p.static) {
                ctx.strokeStyle = "rgba(255,255,255,0.2)";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        });
        
        // Instructions
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "11px 'JetBrains Mono'";
        ctx.fillText("Stress Test: Spawns particles to spike dynamic CPU/GPU graphs", 20, 30);
        ctx.fillText(`Spawned: ${EditorState.physicsCount} bodies | CPU frame time: ${EditorState.cpuFrameTime}ms`, 20, 48);
    } 
    else if (type === 'multiplayer') {
        const s = sandboxEntities[0];
        const c = sandboxEntities[1];
        
        // Draw pathing connection line
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(s.x, s.y); ctx.stroke();
        ctx.setLineDash([]);
        
        // Render Red Server shadow
        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ff4b4b";
        ctx.font = "bold 9px 'JetBrains Mono'";
        ctx.fillText("SERVER AUTHORITATIVE", s.x - 45, s.y - 20);
        
        // Render Green Client mesh
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.fillStyle = "hsl(145, 80%, 42%)";
        ctx.font = "bold 9px 'JetBrains Mono'";
        ctx.fillText("CLIENT PREDICTED", c.x - 40, c.y - 20);
        
        // Packets animations
        s.packets.forEach(pkg => {
            const px = pkg.x + (pkg.tx - pkg.x) * pkg.progress;
            const py = pkg.y + (pkg.ty - pkg.y) * pkg.progress;
            
            ctx.beginPath();
            ctx.fillStyle = "var(--unity-accent-cyan)";
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Specs box HUD
        ctx.fillStyle = "rgba(10, 15, 20, 0.75)";
        ctx.fillRect(w - 240, 20, 220, 100);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.strokeRect(w - 240, 20, 220, 100);
        
        ctx.fillStyle = "white";
        ctx.font = "10px 'JetBrains Mono'";
        ctx.fillText("NETCODE SYNCHRONIZATIONS", w - 230, 36);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(`Client prediction: ACTIVE`, w - 230, 56);
        ctx.fillText(`Sync reconciliation: ACTIVE`, w - 230, 72);
        ctx.fillText(`Simulated Connection: ${EditorState.networkPing}ms`, w - 230, 88);
    } 
    else if (type === 'ai') {
        const agent = sandboxEntities[0];
        
        // Draw crystal goal
        ctx.beginPath();
        ctx.fillStyle = "var(--unity-accent-orange)";
        ctx.arc(aiGoal.x, aiGoal.y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "var(--unity-accent-orange)";
        ctx.font = "9px 'JetBrains Mono'";
        ctx.fillText("Target_SO_Core", aiGoal.x - 35, aiGoal.y - 12);
        
        // Draw pathing line
        ctx.strokeStyle = "rgba(0, 200, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(agent.x, agent.y); ctx.lineTo(aiGoal.x, aiGoal.y); ctx.stroke();
        
        // Draw Agent
        ctx.beginPath();
        ctx.fillStyle = agent.color;
        ctx.arc(agent.x, agent.y, agent.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.fillStyle = "var(--unity-accent-blue)";
        ctx.font = "bold 9px 'JetBrains Mono'";
        ctx.fillText("Agent_AI_Rig", agent.x - 30, agent.y - 18);
        
        // Render Live Behavior Tree overlay in bottom center
        ctx.fillStyle = "rgba(10, 15, 20, 0.8)";
        ctx.fillRect(20, h - 90, 420, 80);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.strokeRect(20, h - 90, 420, 80);
        
        // Tree Nodes
        ctx.font = "8.5px 'JetBrains Mono'";
        const drawNode = (name, x, y, active) => {
            ctx.fillStyle = active ? "rgba(46, 204, 113, 0.25)" : "rgba(255, 255, 255, 0.05)";
            ctx.strokeStyle = active ? "#2ecc71" : "rgba(255,255,255,0.2)";
            ctx.fillRect(x, y, 76, 18);
            ctx.strokeRect(x, y, 76, 18);
            ctx.fillStyle = active ? "#2ecc71" : "rgba(255,255,255,0.5)";
            ctx.fillText(name, x + 6, y + 12);
        };
        
        ctx.fillStyle = "white";
        ctx.fillText("BEHAVIOR TREE REAL-TIME AUTOMATED VALIDATION", 30, h - 76);
        
        drawNode("SelectorNode", 30, h - 56, true);
        drawNode("Sequencer", 130, h - 56, true);
        drawNode("MoveToTarget", 230, h - 56, true);
        drawNode("IdleRoutine", 330, h - 56, false);
    }
}

// ==========================================================================
// DOCK SUB-TOOLS AND FLOATING WINDOWS (MENUS PANEL OPTIONS)
// ==========================================================================
window.openEditorWindow = (toolName) => {
    const modal = document.getElementById("editor-modal-window");
    const title = document.getElementById("floating-window-title");
    const body = document.getElementById("floating-window-body");
    
    modal.classList.remove("hidden");
    body.innerHTML = "";
    
    if (toolName === 'multiplayer') {
        title.innerText = "Custom Editor Window: Multiplayer Autorun Sockets Tunnel";
        body.innerHTML = `
            <div style="font-family: var(--font-mono); line-height: 1.6; font-size:11px;">
                <h3 style="color:var(--unity-accent-cyan); margin-bottom:12px;"><i class="fas fa-server"></i> Pomelo Authorized Sockets Server Manager</h3>
                <div style="background-color:var(--unity-bg-darker); border:1px solid var(--unity-border); padding:12px; border-radius:4px; margin-bottom:16px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Tunnel Server IP:</span>
                        <span style="color:white;">192.168.1.150 (Dynamic Socket)</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Active Sockets:</span>
                        <span style="color:var(--unity-accent-green);">1,452 users connected</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Sync delta:</span>
                        <span style="color:white;">20 ticks/sec (50ms cycles)</span>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span>Network Ping:</span>
                        <span style="color:var(--unity-accent-magenta);">12ms stable</span>
                    </div>
                </div>
                <h4 style="margin-bottom:8px; color:white;">Debug Controls:</h4>
                <div style="display:flex; gap:8px;">
                    <button class="inspector-action-btn" onclick="alert('Netcode trace generated. Synced details logged in Console.')">Generate Diagnostic Dump</button>
                    <button class="inspector-action-btn" onclick="alert('Lobby session cleared. Spawning matches.')">Re-initialize Matchmaker</button>
                </div>
            </div>
        `;
    } 
    else if (toolName === 'xr') {
        title.innerText = "Custom Editor Window: XR Interactivity Calibration Matrix";
        body.innerHTML = `
            <div style="font-size:11.5px; line-height:1.5;">
                <h3 style="color:var(--unity-accent-orange); margin-bottom:12px;"><i class="fas fa-vr-cardboard"></i> OpenXR / WaveXR Interactive Rig Auditing</h3>
                <p style="color:var(--unity-text-muted); margin-bottom:16px;">Calibrate standalone target frames comfort levels and visual hand-tracking matrices programmatically.</p>
                
                <table style="width:100%; border-collapse:collapse; font-family:var(--font-mono); font-size:10px; margin-bottom:16px;">
                    <thead>
                        <tr style="border-bottom:1px solid var(--unity-border); color:white; text-align:left;">
                            <th style="padding:6px;">Audited System</th>
                            <th style="padding:6px;">Device Targets</th>
                            <th style="padding:6px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid var(--unity-border);">
                            <td style="padding:6px;">Hand Tracking Joints</td>
                            <td style="padding:6px;">Meta Quest 3</td>
                            <td style="padding:6px; color:var(--unity-accent-green);"><i class="fas fa-check-circle"></i> Sync verified</td>
                        </tr>
                        <tr style="border-bottom:1px solid var(--unity-border);">
                            <td style="padding:6px;">Procedural Interactions</td>
                            <td style="padding:6px;">Vive Focus 3</td>
                            <td style="padding:6px; color:var(--unity-accent-green);"><i class="fas fa-check-circle"></i> Physics Grab bounds</td>
                        </tr>
                        <tr>
                            <td style="padding:6px;">Spatial Comfort System</td>
                            <td style="padding:6px;">Quest Pro Eye Tracking</td>
                            <td style="padding:6px; color:var(--unity-accent-yellow);"><i class="fas fa-exclamation-triangle"></i> Calibrating...</td>
                        </tr>
                    </tbody>
                </table>
                <button class="inspector-action-btn" onclick="alert('OpenXR Rig calibrated at 90FPS stable comfort target.')">Calibrate Rig</button>
            </div>
        `;
    } 
    else if (toolName === 'ai') {
        title.innerText = "Custom Editor Window: AI Multi-Agent Workflow Panel";
        body.innerHTML = `
            <div style="font-size:11.5px; line-height:1.6;">
                <h3 style="color:var(--unity-accent-cyan); margin-bottom:12px;"><i class="fas fa-robot"></i> Antigravity Multi-Agent Assembly Optimizer</h3>
                <p style="margin-bottom:12px;">Trigger AI workflow validations, lint schema reviews, and automate custom script components compiling using your neural assistants.</p>
                
                <div style="background-color:var(--unity-bg-darker); border:1px solid var(--unity-border); padding:10px; border-radius:4px; margin-bottom:16px;">
                    <div style="font-family:var(--font-mono); font-size:10px; display:flex; flex-direction:column; gap:4px;">
                        <div>[AI Orchestrator] Awaiting code file reference...</div>
                        <div style="color:var(--unity-accent-cyan);">[MCP System] Connected to Local Workspace server.</div>
                        <div style="color:var(--unity-accent-green);">[Prompt Agent] Ready to compile diagnostic evaluations.</div>
                    </div>
                </div>
                
                <div style="display:flex; gap:8px;">
                    <button class="inspector-action-btn" onclick="triggerConsoleLog('AI Agent: Lint validation successfully resolved 0 errors.', 'info'); alert('AI validation logs generated.');"><i class="fas fa-bug"></i> Run AI Code Lint</button>
                    <button class="inspector-action-btn" onclick="triggerConsoleLog('AI Agent: Auto generated unit tests for GameplaySystems.cs.', 'info'); alert('Test suites generated successfully.');"><i class="fas fa-tasks"></i> Generate Unit Tests</button>
                </div>
            </div>
        `;
    } 
    else if (toolName === 'build') {
        title.innerText = "Custom Editor Window: CI/CD Build Pipelines & Cloud Deployments";
        body.innerHTML = `
            <div style="font-size:11.5px; line-height:1.6;">
                <h3 style="color:white; margin-bottom:8px;"><i class="fas fa-cloud"></i> Unity Addressables & Build Automation</h3>
                <p style="color:var(--unity-text-muted); margin-bottom:16px;">Auto compile game packages, bundle dynamic asset sheets, and deliver patches straight to Itch.io or consoles.</p>
                
                <div class="pipeline-timeline">
                    <div class="pipeline-step completed">
                        <h4>Step 1: Code Linting & Assembly Verification</h4>
                        <p>All scripts successfully validated via custom AI automation pipelines.</p>
                    </div>
                    <div class="pipeline-step active">
                        <h4>Step 2: Dynamic Addressable Asset Bundles Compilation</h4>
                        <p>Compressing 3D scene meshes, shaders, and UI assets dynamically...</p>
                    </div>
                    <div class="pipeline-step">
                        <h4>Step 3: Multi-Platform Cloud Deployment</h4>
                        <p>Awaiting bundle packaging. Targets: WebGL, Android standalone, Xbox consoles.</p>
                    </div>
                </div>
                <button class="inspector-action-btn" onclick="alert('CI/CD Build Automation triggered on branch main.')">Trigger Pipeline Deploy</button>
            </div>
        `;
    } 
    else if (toolName === 'skills') {
        title.innerText = "Custom Editor Window: Skill Matrix Explorer Tools";
        body.innerHTML = `
            <div class="floating-layout-skills-matrix" style="height:360px;">
                <div class="skills-nodes-chart">
                    <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="2"/>
                        <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.05)" />
                        <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.05)" />
                        
                        <!-- Radar Graph representation -->
                        <polygon points="100,30 165,70 150,140 100,175 45,130 35,75" fill="rgba(0, 168, 255, 0.2)" stroke="var(--unity-accent-blue)" stroke-width="2"/>
                        
                        <!-- Skill tags node spots -->
                        <circle cx="100" cy="30" r="4" fill="var(--unity-accent-orange)"/>
                        <circle cx="165" cy="70" r="4" fill="var(--unity-accent-orange)"/>
                        <circle cx="150" cy="140" r="4" fill="var(--unity-accent-orange)"/>
                        <circle cx="100" cy="175" r="4" fill="var(--unity-accent-orange)"/>
                    </svg>
                </div>
                <div style="font-size:11px; overflow-y:auto;">
                    <h4 style="color:white; margin-bottom:8px;">Daniel Boldrin Specialist Fields:</h4>
                    <ul style="padding-left:14px; display:flex; flex-direction:column; gap:4px; color:var(--unity-text);">
                        <li><strong>Gameplay systems:</strong> decoupled events with SO data architectures.</li>
                        <li><strong>Multiplayer sync:</strong> client predictions and lag reconciliations.</li>
                        <li><strong>OpenXR spatial simulations:</strong> physics based hand actions medical training interfaces.</li>
                        <li><strong>Addressable pipelines:</strong> automatic asset bundles delivery systems.</li>
                        <li><strong>Memory profiler tuning:</strong> frame-time optimization targeting Quest VR.</li>
                    </ul>
                </div>
            </div>
        `;
    } 
    else if (toolName === 'architecture') {
        title.innerText = "Custom Editor Window: Senior Systems Architecture Viewer";
        body.innerHTML = `
            <div style="font-size:11.5px; line-height:1.6;">
                <h3 style="color:var(--unity-accent-orange); margin-bottom:12px;"><i class="fas fa-project-diagram"></i> Decoupled Event-Driven Systems Topology</h3>
                <p>Daniel Boldrin's games utilize clean, scalable SOLID architectures decoupled via ScriptableObject events:</p>
                <div style="background-color:#111; padding:12px; border-radius:4px; border:1px solid var(--unity-border); text-align:center; font-family:var(--font-mono); font-size:10px; margin-bottom:16px;">
                    <div style="color:var(--unity-accent-yellow);">ScriptableObject [GameEventSO]</div>
                    <div style="color:white; margin:4px 0;">↕ Subscribers Link</div>
                    <div style="display:flex; justify-content:space-around;">
                        <div style="border:1px solid #333; padding:4px; background:#222; color:var(--unity-accent-blue);">Input System</div>
                        <div style="border:1px solid #333; padding:4px; background:#222; color:var(--unity-accent-cyan);">UI HUD Binder</div>
                        <div style="border:1px solid #333; padding:4px; background:#222; color:var(--unity-accent-green);">Sound Mixer</div>
                    </div>
                </div>
                <p style="color:var(--unity-text-muted);">Decoupling allows UI, sound effects, and gameplay systems to develop independently without direct code link dependencies, avoiding code breakage.</p>
            </div>
        `;
    }
};

window.closeEditorWindow = () => {
    document.getElementById("editor-modal-window").classList.add("hidden");
};

// ==========================================================================
// INTERACTIVE PANEL RESIZERS
// ==========================================================================
function initializeResizers() {
    const resizerLeft = document.getElementById('resizer-left');
    const resizerRight = document.getElementById('resizer-right');
    const resizerBottom = document.getElementById('resizer-bottom');
    
    const hierarchyPanel = document.getElementById('hierarchy-panel');
    const inspectorPanel = document.getElementById('inspector-panel');
    const bottomPanel = document.getElementById('bottom-panel');
    
    function setupResizer(resizer, direction) {
        if (!resizer) return;
        
        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            resizer.classList.add('dragging');
            
            if (direction === 'v') {
                document.body.classList.add('resizing-v');
            } else {
                document.body.classList.add('resizing-h');
            }
            
            const moveHandler = (e) => {
                if (resizer === resizerLeft && hierarchyPanel) {
                    // Resize hierarchy panel width
                    let newWidth = e.clientX;
                    newWidth = Math.max(150, Math.min(450, newWidth));
                    hierarchyPanel.style.width = newWidth + 'px';
                } else if (resizer === resizerRight && inspectorPanel) {
                    // Resize inspector panel width
                    let newWidth = window.innerWidth - e.clientX;
                    newWidth = Math.max(200, Math.min(500, newWidth));
                    inspectorPanel.style.width = newWidth + 'px';
                } else if (resizer === resizerBottom && bottomPanel) {
                    // Resize bottom panel height
                    const leftCenter = document.querySelector('.workspace-left-center');
                    if (leftCenter) {
                        const rect = leftCenter.getBoundingClientRect();
                        let newHeight = rect.bottom - e.clientY;
                        newHeight = Math.max(100, Math.min(500, newHeight));
                        bottomPanel.style.height = newHeight + 'px';
                        
                        // Dynamically resize profiler canvas to fit
                        const profilerCanvas = document.getElementById('profiler-realtime-canvas');
                        if (profilerCanvas) {
                            const graphsArea = profilerCanvas.parentElement;
                            if (graphsArea) {
                                profilerCanvas.width = graphsArea.clientWidth - 24;
                                profilerCanvas.height = Math.max(40, newHeight - 100);
                            }
                            renderProfilerGraphs();
                        }
                    }
                }
            };
            
            const upHandler = () => {
                resizer.classList.remove('dragging');
                document.body.classList.remove('resizing-v');
                document.body.classList.remove('resizing-h');
                document.removeEventListener('mousemove', moveHandler);
                document.removeEventListener('mouseup', upHandler);
            };
            
            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', upHandler);
        });
    }
    
    setupResizer(resizerLeft, 'v');
    setupResizer(resizerRight, 'v');
    setupResizer(resizerBottom, 'h');
}

// ==========================================================================
// DETACHED FLOATING IDE CODE VIEWER
// ==========================================================================
function openCodeInFloatingWindow(filePath) {
    const fileData = VFS[filePath];
    if (!fileData || !fileData.code) return;
    
    const modal = document.getElementById("editor-modal-window");
    const title = document.getElementById("floating-window-title");
    const body = document.getElementById("floating-window-body");
    
    modal.classList.remove("hidden");
    title.innerText = fileData.name + " — Script Editor";
    
    // Syntax highlight C# code
    let raw = fileData.code;
    raw = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const keywords = ["using", "namespace", "public", "private", "protected", "class", "struct", "void", "static", "bool", "float", "int", "string", "Guid", "Action", "Dictionary", "List", "override", "delegate", "new", "null", "if", "else", "foreach", "while", "return", "out", "MonoBehaviour"];
    keywords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        raw = raw.replace(regex, `<span class="csharp-keyword">${word}</span>`);
    });
    
    // Syntax tags
    raw = raw.replace(/(\[Header\("[A-Za-z0-9\s]+"\]\))/g, `<span class="csharp-tag">$1</span>`);
    raw = raw.replace(/(\[SerializeField\])/g, `<span class="csharp-tag">$1</span>`);
    raw = raw.replace(/(\[Range\([0-9]+,\s*[0-9]+\)\])/g, `<span class="csharp-tag">$1</span>`);
    
    // Strings and comments
    raw = raw.replace(/("[A-Za-z0-9\s\.\:\(\)\,\=\-\+!\[\]_]+")/g, `<span class="csharp-string">$1</span>`);
    raw = raw.replace(/(\/\/.*)/g, `<span class="csharp-comment">$1</span>`);
    raw = raw.replace(/(\/\*\*[\s\S]*?\*\/)/g, `<span class="csharp-comment">$1</span>`);
    
    // Generate gutter line numbers
    const totalLines = fileData.code.split('\n').length;
    let gutterHtml = '';
    for (let i = 1; i <= totalLines; i++) {
        gutterHtml += `<div>${i}</div>`;
    }
    
    body.innerHTML = `
        <div class="code-editor-layout" style="height: 100%;">
            <div class="code-editor-tabs">
                <div class="code-editor-tab active">
                    <span class="file-name">${fileData.name}</span>
                </div>
            </div>
            <div class="code-editor-body-wrapper">
                <div class="code-line-numbers">${gutterHtml}</div>
                <pre class="code-content-display"><code class="language-csharp">${raw}</code></pre>
            </div>
            <div class="code-editor-footer-status">
                <span class="col-row">Ln 1, Col 1</span>
                <span class="format">C# Script</span>
                <span class="encoding">UTF-8</span>
            </div>
        </div>
    `;
    
    triggerConsoleLog("Detached IDE: Opened " + fileData.name + " in floating script browser.", "info");
}
window.openCodeInFloatingWindow = openCodeInFloatingWindow;

// ==========================================================================
// DROP DOWNS ACTIONS
// ==========================================================================
function initializeMenuDropdowns() {
    // dropdown button actions mapping
    const elements = document.querySelectorAll(".dropdown-content a");
    elements.forEach(el => {
        el.addEventListener("click", () => {
            // Close dropdowns
            document.querySelectorAll(".dropdown-content").forEach(c => c.style.display = "none");
            setTimeout(() => {
                document.querySelectorAll(".dropdown-content").forEach(c => c.style.removeAttribute);
            }, 100);
        });
    });
}
