import json

experiences = [
    {
        "role": "Lead Unity Developer",
        "company": "Anime Universe",
        "date": "Feb 2026 - Present",
        "location": "Canada · Remote (Permanent Part-time)",
        "description": "Leading the Unity development division, contributing to the technical foundation of the platform from early-stage architecture through production. I coordinate the Unity team and collaborate closely with product, design, and art departments.",
        "bullets": ["Flip Frame Ninjas: Leading development of an endless runner, driving design, system architecture, gameplay implementation, and backend services."],
        "tags": ["Unity3D", "Leadership", "Architecture"],
        "skills": ["Unity", "C#", "Addressables", "Google Play Console", "Team Leadership", "MVVM / MVC", "CI/CD", "WebGL", "Android", "iOS", "ScriptableObject Architecture", "Profiling", "Analytics", "Ads", "Supabase", "DB Design", "AI-assisted Development", "Antigravity", "Development Coordination", "Multiplayer Systems", "Localization", "Python", "Jira", "Trello", "Slack", "AWS", "Dependency Injection", "SOLID Principles", "Clean Architecture", "Performance Optimization"]
    },
    {
        "role": "Founder & Tech Leader",
        "company": "Boldreams",
        "date": "Dec 2024 - Present",
        "location": "Brazil · Remote (Permanent Full-time)",
        "description": "Founder of Boldreams, an indie-focused game development studio providing full-cycle development and technical consulting for international clients. The studio specializes in scalable multiplayer systems, transactional gaming platforms, and service-based game development.",
        "bullets": ["Swipe Kings: Skill-based competitive mobile game featuring real-time matchmaking and progression systems designed for scalable multiplayer environments."],
        "tags": ["Start-up Leadership", "Unity3D", "Consulting"],
        "skills": ["Unity", "C#", "Addressables", "Google Play Console", "Startup Leadership", "MVC", "CI/CD", "WebGL", "Android", "iOS", "ScriptableObject Architecture", "Profiling", "Analytics", "Ads", "Supabase", "Server-Authoritative Systems", "DB Design", "AI", "Antigravity", "Business", "B2B", "Development Coordination", "Multiplayer Systems", "Python", "Trello", "Miro", "AWS", "Game Systems Design", "Economy Design"]
    },
    {
        "role": "Lead Unity Developer",
        "company": "Suprema Gaming",
        "date": "Nov 2024 - Feb 2026",
        "location": "Sorocaba, São Paulo, Brazil · Remote (Permanent Full-time)",
        "description": "Architected and delivered large-scale multiplayer 2D games using Unity and C#. Integrated real-time networking with Colyseus and Pomelo, optimizing synchronization for thousands of concurrent users.",
        "bullets": [
            "Rodeo: Large-scale multiplayer betting game where thousands of players wager on AI-driven poker duels.",
            "Poker App: Modular multiplayer poker platform for real-time matches, custom clubs, and table creation, with union systems connecting global players."
        ],
        "tags": ["Unity3D", "Multiplayer Systems", "Colyseus", "Pomelo"],
        "skills": ["Unity", "C#", "Addressables", "Google Play Console", "Team Leadership", "MVVM", "CI/CD", "WebGL", "Android", "iOS", "ScriptableObjects", "Profiling", "Analytics", "Ads", "Colyseus", "Pomelo", "Cocos", "DB Design", "AI", "Antigravity", "Multiplayer Systems", "Client-Server Architecture", "Large Scale Development", "Python", "Jira", "Slack", "Teams", "Figma", "GitHub", "AWS", "Load Handling"]
    },
    {
        "role": "Lead Unity Developer",
        "company": "ZeMind Studios",
        "date": "Nov 2022 - Mar 2025",
        "location": "Toronto, Ontario, Canada (Permanent Full-time)",
        "description": "Led cross-functional development team in creating mobile and console applications, driving projects from concept through delivery. Designed and implemented gameplay systems and mechanics in Unity (C#) across iOS, Android, and console platforms.",
        "bullets": [
            "Courting Glory: Free-to-play champion-based deck builder fighting game utilizing Web3 technology.",
            "Rawmen: A radical 2-8 player multiplayer third-person arena shooter for Xbox, PlayStation, Switch and Steam.",
            "Hoame: A 360 mobile mindfulness application offering elevated on-demand experiences."
        ],
        "tags": ["Unity3D", "Cross-Platform", "Web3", "Consoles"],
        "skills": ["Unity", "C#", "Addressables", "Google Play Console", "Team Leadership", "MVC", "CI/CD", "WebGL", "Android", "iOS", "ScriptableObjects", "Profiling", "Analytics", "Ads", "DB Design", "AI", "Antigravity", "Multiplayer Systems", "Large Scale Development", "Blockchain", "NFT", "CMF", "Jira", "Slack", "Figma", "GitHub", "AWS", "Client-Server Architecture"]
    },
    {
        "role": "Unity VR Developer",
        "company": "Luxsonic Technologies Inc.",
        "date": "Aug 2021 - Nov 2022",
        "location": "Toronto, Ontario, Canada (Permanent Full-time)",
        "description": "Developed Unity-based VR training and assessment systems for medical personnel, emphasizing clinical realism, VR UX best practices, and interaction design. Delivered cross-platform VR solutions using OpenXR and WaveXR.",
        "bullets": [
            "Microbiology: Full lab simulation including PPE, sterilization, pathogen handling.",
            "VAPOC: Emergency responder simulation featuring dynamic patient interactions.",
            "Blood Transfusion: Complete transfusion process simulator with procedural verification."
        ],
        "tags": ["Unity3D", "VR UX", "OpenXR", "WaveXR"],
        "skills": ["Unity", "C#", "VR", "AR", "OpenXR", "WaveXR", "Addressables", "MVC", "Medical Simulations", "Microbiology", "VAPOC", "Blood Transfusion", "CI/CD", "Android", "iOS", "ScriptableObjects", "Profiling", "Multiplayer Systems", "Asana", "Teams", "Github", "Security / Data Privacy", "Audit Logging"]
    },
    {
        "role": "Unity game programming teacher",
        "company": "Halton STEM Club",
        "date": "Jun 2021 - Jun 2022",
        "location": "Toronto, Ontario, Canada · Remote (Permanent Part-time)",
        "description": "Planned and organized semi-private classes for Unity3D game development and C# programming, catering to students from grades 6 to 10. Designed course materials and activities to enhance understanding of 3D animation and game design principles.",
        "bullets": [],
        "tags": ["C#", "Unity3D", "Teaching"],
        "skills": ["Teaching", "Unity", "C#", "Animation", "3D Modeling", "Python", "Scratch", "Technical Drawing", "Curriculum Design", "Mentorship"]
    },
    {
        "role": "Unity game programming teacher",
        "company": "Wells Academy",
        "date": "Mar 2021 - Feb 2022",
        "location": "Toronto, Ontario, Canada · Remote (Contract Part-time)",
        "description": "Planned and organized semi-private classes for Unity3D game development and C# programming, catering to students from grades 6 to 10. Facilitated hands-on learning experiences, promoting collaboration and creativity.",
        "bullets": [],
        "tags": ["Game Development", "Unity3D", "Mentorship"],
        "skills": ["Teaching", "Unity", "C#", "Animation", "3D Modeling", "Python", "Alison", "Technical Drawing", "Curriculum Design", "Mentorship"]
    },
    {
        "role": "Unity game programming teacher",
        "company": "Thinnox 360",
        "date": "Jul 2018 - Nov 2020",
        "location": "Greater Toronto Area, Canada (Contract Part-time)",
        "description": "Planned and instructed Unity3D game development, C# programming, and 3D animation classes for groups of up to 12 students. Developed and implemented curriculum focused on electronic circuits and game design.",
        "bullets": [],
        "tags": ["Game Development", "Unity3D", "Curriculum Design"],
        "skills": ["Teaching", "Unity", "C#", "C++", "Animation", "3D Modeling", "Python", "Circuits", "Technical Drawing", "Curriculum Design"]
    },
    {
        "role": "System Analyst Developer",
        "company": "Programmers",
        "date": "May 2016 - May 2017",
        "location": "Matão, São Paulo, Brazil (Permanent Full-time)",
        "description": "Developed and maintained front-end modules for automated medical survey systems, ensuring code quality and reliability. Managed database architecture, ensuring efficient data handling and system functionality.",
        "bullets": [],
        "tags": ["Software Development", "C#", "System Architecture"],
        "skills": ["C#", "MVC5", "HTML", "CSS", "Javascript", "JQuery", "SQL/MYSQL", "XML", "System Architecture"]
    },
    {
        "role": "Database Consultant",
        "company": "GRJ Soluções",
        "date": "Mar 2016 - Jan 2017",
        "location": "Araraquara (Contract Part-time)",
        "description": "First point of contact for Database improvements and management. Implementing and fixing features in several marketing and business software using WAMP.",
        "bullets": [],
        "tags": ["Problem Solving", "C#", "Database Architecture"],
        "skills": ["C#", "QA Automation", "Contingency Planning", "Database Management", "SQL/MYSQL", "System Maintenance"]
    },
    {
        "role": "System Analyst Developer",
        "company": "Hewlett-Packard",
        "date": "Jul 2015 - Jul 2016",
        "location": "Araraquara (Permanent Full-time)",
        "description": "Managed and monitored the performance of five critical systems, ensuring operational functionality and reliability. Conducted comprehensive testing and maintenance of database management systems and bank applications.",
        "bullets": [],
        "tags": ["System Analysis", "C#", "Enterprise Systems"],
        "skills": ["C#", "QA Automation", "Contingency Planning", "Database Management", "SQL/MYSQL", "System Maintenance"]
    },
    {
        "role": "System Analyst Developer",
        "company": "CAST",
        "date": "Nov 2014 - Jul 2015",
        "location": "Araraquara (Permanent Full-time)",
        "description": "Developing several governmental and federal applications and web pages using C# MVC5.",
        "bullets": [],
        "tags": ["Federal Applications", "C#", "MVC5"],
        "skills": ["C#", "PHP", "MVC", "HTML", "CSS", "JQuery", "SQL/MYSQL", "Government Relations", "DB Design"]
    },
    {
        "role": "Full Stack Developer",
        "company": "Líder Telecom Ltda.",
        "date": "Apr 2013 - Nov 2014",
        "location": "Araraquara (Permanent Full-time)",
        "description": "Led a team in various internal projects for the company, improving the quality of the calls answered by the telecom operators and the overall work quality of employees. Released 5 applications used internally by 3000+ employees.",
        "bullets": [],
        "tags": ["C#", "HTML", "Full Stack", "SQL/MYSQL"],
        "skills": ["C#", "PHP", "MVC", "HTML", "CSS", "JQuery", "KendoUI", "SQL/MYSQL", "Apache", "IIS", "WAMP/LAMP", "Aheeva", "Active Directory", "Full-Stack Development", "Team Leadership"]
    }
]

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Boldrin | Career History</title>
    
    <link rel="stylesheet" href="css/main.css?v=2">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    
    <!-- FontAwesome for icons -->
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"></script>
</head>
<body>

    <!-- Sticky Navigation -->
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.html" class="logo">Daniel <span class="highlight">Boldrin</span></a>
            
            <form action="search.html" method="GET" class="nav-search-form desktop-search" style="display: flex; flex: 1; max-width: 300px; margin: 0 auto;">
                <input type="text" name="q" placeholder="Search for skills, games, roles, companies..." required style="flex: 1; padding: 8px 15px; border-radius: 20px 0 0 20px; border: 1px solid var(--border); background: rgba(255,255,255,0.05); color: var(--text); outline: none;">
                <button type="submit" style="padding: 8px 16px; border-radius: 0 20px 20px 0; border: none; background: var(--accent); color: #111; font-weight: bold; cursor: pointer; transition: background 0.3s ease;"><i class="fas fa-search"></i></button>
            </form>

            <div class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links">
                <li class="mobile-search">
                    <form action="search.html" method="GET" class="nav-search-form" style="display: flex; flex: 1; max-width: 300px; margin: 0 auto;">
                        <input type="text" name="q" placeholder="Search for skills, games, roles, companies..." required style="flex: 1; padding: 8px 15px; border-radius: 20px 0 0 20px; border: 1px solid var(--border); background: rgba(255,255,255,0.05); color: var(--text); outline: none;">
                        <button type="submit" style="padding: 8px 16px; border-radius: 0 20px 20px 0; border: none; background: var(--accent); color: #111; font-weight: bold; cursor: pointer; transition: background 0.3s ease;"><i class="fas fa-search"></i></button>
                    </form>
                </li>
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="experiences.html" class="nav-link">Experience</a></li>
                <li><a href="education.html" class="nav-link">Education</a></li>
                <li><a href="games.html" class="nav-link">Games</a></li>
                <li><a href="ai-workflow.html" class="nav-link">AI Workflow</a></li>
                <li><a href="Daniel Boldrin - Resume.pdf" target="_blank" class="nav-button">Resume <i class="fas fa-download"></i></a></li>
            </ul>
        </div>
    </nav>

    <div style="height: 100px;"></div> <!-- Spacer for fixed nav -->

    <!-- EXPERIENCE SECTION -->
    <section class="section" id="experience">
        <div class="container">
            <h2 class="fade-up">Full Career History</h2>
            <p class="fade-up" style="margin-bottom: 3rem; color: #94a3b8;">14+ years of professional development experience across engineering, systems architecture, and leadership.</p>
            
            <div class="timeline">
{TIMELINE_ITEMS}
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="social-links fade-up">
                <a href="mailto:daniel_cboldrin@hotmail.com" class="social-link" title="Email me" aria-label="Email"><i class="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/daniel-boldrin/" target="_blank" class="social-link" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/soueuroya" target="_blank" class="social-link" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://danielboldrin.itch.io/" target="_blank" class="social-link" title="Itch.io" aria-label="Itch.io"><i class="fab fa-itch-io"></i></a>
            </div>
            <p class="copyright fade-up delay-1">&copy; 2026 Daniel Boldrin. Built with Unity, C#, and a passion for interactive systems.</p>
        </div>
    </footer>

    <!-- Image Lightbox Modal -->
    <div id="image-modal" class="modal">
        <span class="modal-close">&times;</span>
        <img class="modal-content" id="modal-img">
    </div>

    <!-- unified script -->
    <script src="js/main.js?v=2"></script>
</body>
</html>"""

company_logos = {
    "Anime Universe": "AnimeUniverse Logo Cover.png",
    "Boldreams": "Boldreams LOGO.png",
    "Suprema Gaming": "Suprema Logo Cover.png",
    "ZeMind Studios": "zemindlogo.png",
    "Luxsonic Technologies Inc.": "Luxsonic.png",
    "Halton STEM Club": "halton.png",
    "Wells Academy": "wells academy logo.png",
    "Thinnox 360": "thinnox.png",
    "Programmers": "programmers.png",
    "GRJ Soluções": "grx.png",
    "Hewlett-Packard": "hp.png",
    "CAST": "cast logo.png",
    "Líder Telecom Ltda.": "lider.png"
}

tag_icons = {
    "Unity3D": "unity.png",
    "C#": "csharp.png",
    "HTML": "html5.png",
    "SQL/MYSQL": "mysql.png",
    "Consoles": "xbox.png",
    "OpenXR": "openxr.png",
    "WaveXR": "wave.png",
    "VR UX": "oculus.png",
    "Database Architecture": "sql.png",
    "Full Stack": "javascript.png",
    "MVC5": "css3.png",
    "Leadership": "asana.png",
    "Start-up Leadership": "asana.png",
    "Architecture": "visualstudio.png",
    "System Architecture": "visualstudio.png",
    "Consulting": "email-t.png",
    "Multiplayer Systems": "azuredevops.png",
    "Colyseus": "javascript.png",
    "Pomelo": "javascript.png",
    "Cross-Platform": "windows.png",
    "Web3": "github.png",
    "Teaching": "zoom.png",
    "Game Development": "unity.png",
    "Mentorship": "zoom.png",
    "Curriculum Design": "word.png",
    "Software Development": "visualstudio.png",
    "Problem Solving": "trello.png",
    "System Analysis": "windows.png",
    "Enterprise Systems": "microsoftazure.png",
    "Federal Applications": "visualstudio.png"
}

# Comprehensive priority order for tags
priority_order = ["C#", "Unity3D", "Multiplayer Systems", "Architecture", "System Architecture", "Software Development", "Full Stack", "SQL/MYSQL", "Database Architecture", "Colyseus", "Pomelo", "Javascript", "HTML", "CSS3", "MVC5", "OpenXR", "WaveXR", "VR UX", "Consoles", "Cross-Platform", "Mobile UX", "Optimization", "Web3", "Leadership", "Start-up Leadership", "Consulting", "Teaching", "Mentorship", "Curriculum Design", "Problem Solving", "System Analysis", "Enterprise Systems", "Federal Applications"]

def sort_tags(tags):
    return sorted(tags, key=lambda t: (priority_order.index(t) if t in priority_order else 99, t))

timeline_html = ""
for exp in experiences:
    # Sort tags before generating HTML
    current_tags = sort_tags(exp.get('tags', []))
    
    company_logo_html = f'<img src="Images/{company_logos[exp["company"]]}" alt="{exp["company"]} Logo" style="height: 20px; margin-right: 8px; border-radius: 4px; vertical-align: middle;">' if exp["company"] in company_logos else ''
    
    timeline_html += f'''
            <!-- {exp['company']} -->
            <div class="timeline-item fade-up">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-role">{exp['role']}</h3>
                        <span class="timeline-company" style="display: flex; align-items: center;">{company_logo_html}{exp['company']}</span>
                    </div>
                    <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
                        <span class="timeline-date">{exp['date']}</span>
                        {f'<span class="timeline-location" style="color: var(--sub); font-size: 0.85rem; margin-top: 4px;">{exp["location"]}</span>' if 'location' in exp else ''}
                    </div>
                </div>
                <div class="timeline-content">
                    <p>{exp['description']}</p>'''
    
    if exp['bullets']:
        timeline_html += '''
                    <ul>'''
        for b in exp['bullets']:
            bold_part = b.split(':')[0] + ':' if ':' in b else b
            desc_part = b[len(bold_part):] if ':' in b else ''
            timeline_html += f'''
                        <li><strong>{bold_part}</strong>{desc_part}</li>'''
        timeline_html += '''
                    </ul>'''

    skills = exp.get('skills', [])
    if skills:
        timeline_html += '''
                    <div class="skills-marquee-container">
                        <div class="skills-marquee">'''
        
        # Duplicate the skills array to create a seamless scrolling loop
        display_skills = skills + skills
        for s in display_skills:
            tag_icon_src = tag_icons.get(s, tag_icons.get(s.replace("Unity", "Unity3D")))
            tag_img = f'<img src="Images/BW/{tag_icon_src}" alt="{s}" style="height: 14px; margin-right: 6px; filter: grayscale(1) invert(1) contrast(500%); mix-blend-mode: screen;">' if tag_icon_src else ''
            timeline_html += f'''
                            <span class="skill-pill">{tag_img}{s}</span>'''
                            
        timeline_html += '''
                        </div>
                    </div>'''

    timeline_html += '''
                </div>
            </div>'''

final_html = html_template.replace("{TIMELINE_ITEMS}", timeline_html)

with open("experiences.html", "w", encoding="utf-8") as f:
    f.write(final_html)
    
print("experiences.html successfully built!")
