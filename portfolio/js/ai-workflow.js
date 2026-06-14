document.addEventListener('DOMContentLoaded', () => {
    // Terminal typing effect
    const terminalLines = [
        "Initializing Antigravity orchestration layer...",
        "Connecting to Unity Editor instance [TCP:8080]...",
        "Unity connected. Syncing active scene context...",
        "Requesting Claude 3.5 Sonnet architecture review...",
        "Processing AST and component graph...",
        "Generating UXML layout for new feature...",
        "Pushing UXML to Unity Asset Database...",
        "Compiling scripts... Done.",
        "Operation successful. Awaiting next command."
    ];

    const terminalOutput = document.getElementById('mock-terminal-output');
    
    if (terminalOutput) {
        let lineIndex = 0;
        
        function typeNextLine() {
            if (lineIndex >= terminalLines.length) {
                // Loop or just stop. Let's loop with a pause.
                setTimeout(() => {
                    terminalOutput.innerHTML = '';
                    lineIndex = 0;
                    typeNextLine();
                }, 5000);
                return;
            }

            const line = document.createElement('div');
            line.className = 'terminal-line';
            
            const prompt = document.createElement('span');
            prompt.className = 'terminal-prompt';
            prompt.textContent = '>';
            
            const text = document.createElement('span');
            text.className = 'terminal-output';
            text.textContent = terminalLines[lineIndex];

            line.appendChild(prompt);
            line.appendChild(text);
            
            // Insert before the cursor line
            const cursorLine = document.getElementById('terminal-cursor-line');
            if (cursorLine && cursorLine.parentNode === terminalOutput) {
                terminalOutput.insertBefore(line, cursorLine);
            } else {
                terminalOutput.appendChild(line);
            }
            
            lineIndex++;
            setTimeout(typeNextLine, Math.random() * 800 + 400); // Random delay between 400ms and 1200ms
        }

        // Start typing after a short delay
        setTimeout(typeNextLine, 1000);
    }
});
