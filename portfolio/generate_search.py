import os
from generate_experiences import timeline_html as exp_html
from generate_education import timeline_html as edu_html
from generate_games import game_items as games_html

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Boldrin | Search Results</title>
    
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

    <!-- SEARCH RESULTS SECTION -->
    <section class="section" id="search-section">
        <div class="container">
            <h2 class="fade-up" id="search-title">Search Results</h2>
            <p class="fade-up" id="search-subtitle" style="margin-bottom: 3rem; color: #94a3b8;">Searching across experiences, education, and games...</p>
            
            <div id="search-results-container" class="timeline">
                <!-- Data injected from python -->
{EXP_HTML}
{EDU_HTML}
            </div>

            <div id="search-results-grid" class="game-grid" style="margin-top: 3rem;">
                <!-- Data injected from python -->
{GAMES_HTML}
            </div>
            
            <div id="no-results" style="display: none; padding: 40px; text-align: center; border: 1px dashed var(--border); border-radius: 8px;">
                <h3>No results found</h3>
                <p style="color: var(--sub);">Try searching for a different skill, company, or role.</p>
                <div id="did-you-mean-container"></div>
                <a href="index.html" class="btn btn-outline" style="margin-top: 20px;"><i class="fas fa-arrow-left"></i> Go Back</a>
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

    <!-- unified scripts -->
    <script src="js/analytics.js" defer></script>
    <script src="js/main.js?v=2" defer></script>
    <script src="js/search.js" defer></script>
</body>
</html>"""

# Add .searchable-item class to the outer divs so we can easily hide/show them in JS
exp_html_modified = exp_html.replace('class="timeline-item fade-up"', 'class="timeline-item fade-up searchable-item"')
edu_html_modified = edu_html.replace('class="timeline-item fade-up"', 'class="timeline-item fade-up searchable-item"')

# In games html, we replace 'class="game-block fade-up' with 'class="game-block fade-up searchable-item'
games_html_modified = games_html.replace('class="game-block fade-up', 'class="game-block fade-up searchable-item')

final_html = html_template.replace("{EXP_HTML}", exp_html_modified)\
                          .replace("{EDU_HTML}", edu_html_modified)\
                          .replace("{GAMES_HTML}", games_html_modified)

with open("search.html", "w", encoding="utf-8") as f:
    f.write(final_html)
    
print("search.html successfully built!")
