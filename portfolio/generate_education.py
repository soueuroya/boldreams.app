import json

education_items = [
    {
        "title": "Game Programming - Advanced Diploma",
        "institution": "George Brown College",
        "date": "Graduated April 2021",
        "location": "Toronto, ON - Canada",
        "description": "Graduated with honours. Studied networking, console programming, mobile development, 3D animation, and design. Mastered Unity3D, Unreal Engine, OpenGL, C#, C++, and Python.",
        "type": "Education",
        "icon": "fa-graduation-cap",
        "images": ["george brown college diploma.png"],
        "logo_img": "georgebrown.png",
        "tags": ["C#", "C++", "Unity3D", "Unreal Engine", "OpenGL", "Python"]
    },
    {
        "title": "System Analysis and Development - Diploma",
        "institution": "Federal Institute of São Paulo (IFSP)",
        "date": "Graduated January 2017",
        "location": "Araraquara, SP - Brazil",
        "description": "Studied C, C++, C#, Java, Lua, and Python. Specialized in networking, security, OS, and database management. Volunteered as a tutor in Object Oriented Programming and Data Structures.",
        "type": "Education",
        "icon": "fa-graduation-cap",
        "images": ["ifsp college diploma.png"],
        "logo_img": "ifsp araraquara.png",
        "tags": ["C", "C++", "C#", "Java", "Python", "SQL", "Linux", "Windows"]
    },
    {
        "title": "Web Accessibility - Undergraduate Research",
        "institution": "IFSP",
        "date": "Presented 2012",
        "location": "Brazil (Various cities)",
        "description": "Researched human-computer interaction and accessibility implications for users with disabilities. Developed a specialized survey targeting governmental systems based on W3C affordance best practices.",
        "type": "Research",
        "icon": "fa-microscope",
        "images": ["florianopolis Undergraduate Research.png", "web accessibility forum certification.png", "araraquara Web Accessibility certificate.png", "IC certification Web Accessibility.png"],
        "logo_img": "ifsp sp.png",
        "tags": ["HTML", "CSS3", "PHP", "Javascript", "Photoshop", "Word", "Excel"]
    },
    {
        "title": "Biz Game Development Presenter",
        "institution": "SESC Araraquara",
        "date": "Presented November 2013",
        "location": "Araraquara, SP - Brazil",
        "description": "Volunteered as a Business and Game Development presenter. Created and demoed 3 minigames targeting different genres using C# and XNA.",
        "type": "Presentation",
        "icon": "fa-chalkboard-teacher",
        "images": ["bizgames presentation.png"],
        "logo_img": "moura.png",
        "tags": ["C#", "XNA", "Visual Studio"]
    },
    {
        "title": "Standards of Business Conduct Certification",
        "institution": "Hewlett Packard",
        "date": "Completed July 2015",
        "location": "Araraquara, SP - Brazil",
        "description": "Corporate certification covering ethical and professional standards in enterprise environments.",
        "type": "Certification",
        "icon": "fa-certificate",
        "images": ["HP CERTIFICATION standard business conduct.png"],
        "logo_img": "hp.png",
        "tags": ["Enterprise Systems", "Compliance"]
    },
    {
        "title": "Secret Acting Role (Volunteer)",
        "institution": "Hand Eye Society",
        "date": "Volunteered August 2018",
        "location": "Toronto, ON - Canada",
        "description": "Volunteered as an undercover agent acting role. Facilitated guest interaction for the main alternate reality game played during the Hand Eye Society Ball.",
        "type": "Volunteer Work",
        "icon": "fa-hands-helping",
        "images": [],
        "logo_img": "handeyesociety.png",
        "tags": ["Acting", "Game Direction", "Live Events"]
    }
]

tag_icons = {
    "Unity3D": "unity.png",
    "C#": "csharp.png",
    "C++": "cplusplus.png",
    "C": "c.png",
    "Java": "java.png",
    "Python": "python.png",
    "HTML": "html5.png",
    "CSS3": "css3.png",
    "SQL": "sql.png",
    "Linux": "linux.png",
    "Windows": "windows.png",
    "Javascript": "javascript.png",
    "Photoshop": "photoshop.png",
    "Word": "word.png",
    "Excel": "microsoftexcel.png",
    "PHP": "php.png",
    "Unreal Engine": "unrealengine.png",
    "OpenGL": "opengl.png",
    "XNA": "xna.png",
    "Visual Studio": "visualstudio.png"
}

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Boldrin | Education & Certifications</title>
    
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

    <!-- EDUCATION SECTION -->
    <section class="section" id="education">
        <div class="container">
            <h2 class="fade-up">Full Background</h2>
            <p class="fade-up" style="margin-bottom: 3rem; color: #94a3b8;">Degrees, research, certifications, and volunteer work.</p>
            
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

# Comprehensive priority order for tags
priority_order = ["C#", "Unity3D", "C++", "C", "Java", "Python", "SQL", "HTML", "CSS3", "Javascript", "PHP", "Unreal Engine", "OpenGL", "XNA", "Visual Studio", "Linux", "Windows", "Photoshop", "Working", "Excel"]

def sort_tags(tags):
    return sorted(tags, key=lambda t: (priority_order.index(t) if t in priority_order else 99, t))

timeline_html = ""
for item in education_items:
    # Sort tags
    current_tags = sort_tags(item.get("tags", []))
    
    img_html = ""
    for img in item.get('images', []):
        img_html += f'<img src="Images/{img}" alt="Doc" class="timeline-img fade-up delay-1 clickable-image" style="max-height: 100px; border-radius: 4px; margin-top: 1rem; margin-right: 1rem; border: 1px solid var(--border); opacity: 0.9; cursor: pointer; transition: transform 0.3s ease;">'
    if img_html:
        img_html = f'<div style="display: flex; flex-wrap: wrap;">{img_html}</div>'
        
    logo_html = f'<img src="Images/{item["logo_img"]}" alt="{item["institution"]} Logo" style="height: 20px; margin-right: 8px; border-radius: 4px; vertical-align: middle;">' if 'logo_img' in item else ''
    
    skills_marquee_html = ""
    if current_tags:
        skills_marquee_html += '''
                        <div class="skills-marquee-container" style="margin-top: 1.5rem;">
                            <div class="skills-marquee">'''
        display_skills = current_tags + current_tags
        for s in display_skills:
            tag_icon_src = tag_icons.get(s)
            tag_img = f'<img src="Images/BW/{tag_icon_src}" alt="{s}" style="height: 14px; margin-right: 6px; filter: grayscale(1) invert(1) contrast(500%); mix-blend-mode: screen;">' if tag_icon_src else ''
            skills_marquee_html += f'''
                                <span class="skill-pill">{tag_img}{s}</span>'''
        skills_marquee_html += '''
                            </div>
                        </div>'''
    
    all_tags = " ".join([item['title'], item['institution'], item['description']] + item.get('tags', [])).lower()
    
    timeline_html += f'''
                <div class="timeline-item fade-up" data-tags="{all_tags}">
                    <div class="timeline-header">
                        <div>
                            <h3 class="timeline-role"><i class="fas {item['icon']}" style="margin-right: 10px; color: var(--accent);"></i>{item['title']}</h3>
                            <span class="timeline-company" style="display: flex; align-items: center;">{logo_html}{item['institution']} - {item['location']}</span>
                        </div>
                        <span class="timeline-date">{item['date']}</span>
                    </div>
                    <div class="timeline-content">
                        <p>{item['description']}</p>
                        {img_html}
                        {skills_marquee_html}
                    </div>
                </div>'''

final_html = html_template.replace("{TIMELINE_ITEMS}", timeline_html)

with open("education.html", "w", encoding="utf-8") as f:
    f.write(final_html)
    
print("education.html successfully built!")
