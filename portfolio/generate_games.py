import json

games_txt = """RAWMEN - Food Fighter Arena Action - https://danielboldrin.itch.io/rawmen
Rodeo Poker - Bet Game Template Card Game - https://danielboldrin.itch.io/rodeo-poker
hoame - Meditation App Educational - https://danielboldrin.itch.io/hoame
Courting Glory - Card Fighting Game - https://danielboldrin.itch.io/cg
ColoRise - A colorful head-breaking platformer! - https://danielboldrin.itch.io/colorise
Chalko - Puzzle Platformer - https://danielboldrin.itch.io/chalko
Heist of Whiskers - 2D obstacle patformer - https://oswald-studios.itch.io/heist-of-whiskers
Qbert - Arcade Game Remake - https://danielboldrin.itch.io/qbert
CrocGame - Infinite Runner Platformer - https://danielboldrin.itch.io/crocgame
Diedle36 - Daily dice guessing game. Puzzle - https://danielboldrin.itch.io/diedle
BattleBots - Battle Arena Game Fighting - https://danielboldrin.itch.io/battlebots
Nail Down - Mobile Post-Apocalyptic Puzzle Platform - https://danielboldrin.itch.io/nail-down
Hacking Minigame - https://danielboldrin.itch.io/hacking-minigame
Sky Runner - Endless Runner Platformer - https://danielboldrin.itch.io/sky-runner
Fruit Splash - Unity Match - Match 3 Game Template for Unity projects - https://danielboldrin.itch.io/fruit-splash
Lockpicking Minigame - Unity lockpicking puzzle template - https://danielboldrin.itch.io/lockpicking-minigame-template
Unity Multiplayer - Template Project for Multiplayer Unity WebGL projects - https://danielboldrin.itch.io/unity-multiplayer-rooms-template
Simple Unity Audio - Unity project that reacts to the song is currently being played. - https://danielboldrin.itch.io/simple-unity-audio-visualizer
Wired Saintz - 2d survival base defense inventory management repairing - https://danielboldrin.itch.io/wired-saintz
Sword - Survival game where you are the sword. - https://danielboldrin.itch.io/sword"""

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Boldrin | Games</title>
    
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

    <!-- GAMES SECTION -->
    <section class="section section-alt" id="games">
        <div class="container">
            <h2 class="fade-up">All Games & Prototypes</h2>
            <p class="fade-up" style="max-width: 800px; margin-bottom: 3rem; font-size: clamp(0.95rem, 2vw, 1.1rem); line-height: 1.6;">
                A complete catalog of my shipped titles, prototypes, game jams, and open-source Unity frameworks. For playable builds, visit my <a href="https://danielboldrin.itch.io/" target="_blank" class="highlight">Itch.io profile</a>.
            </p>
            
            <div class="game-grid">
{GAME_ITEMS}
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

game_items = ""
delay = 1
for line in games_txt.split('\n'):
    if not line.strip(): continue
    parts = line.split(' - ')
    if len(parts) >= 3:
        title = parts[0]
        desc = " - ".join(parts[1:-1])
        link = parts[-1]
    elif len(parts) == 2:
        title = parts[0]
        desc = ""
        link = parts[1]
    else:
        continue
    
    # Simple mapping to add some aesthetic tags to generic descriptions if needed
    cat = "Game"
    if "Game" in desc or "Platformer" in desc or "Remake" in desc or "Runner" in desc:
        cat = "Game Dev"
    if "Template" in desc or "projects" in desc:
        cat = "Unity Tool / Framework"
    if title == "RAWMEN": cat = "Action / Arena Shooter"
    
    # Image mapper
    img_name = ""
    covers = {
        "RAWMEN": "Rawmen Cover.png",
        "Rodeo Poker": "Rodeo cover.png",
        "hoame": "hoame Cover.png",
        "Courting Glory": "Courting Glory Cover.png",
        "ColoRise": "Colorise Cover.png",
        "Chalko": "Chalko Cover.gif",
        "Heist of Whiskers": "Heist of Whikers Cover.png",
        "Qbert": "QBert Cover.png",
        "CrocGame": "Croc Game Cover.png",
        "Diedle36": "Diedle36 Cover.png",
        "BattleBots": "Battlebots Cover.png",
        "Nail Down": "NailDown Coverpng.png",
        "Hacking Minigame": "Hackign Minigame Cover.png",
        "Sky Runner": "Sky Runner.png",
        "Fruit Splash": "Fruit Splash Cover.png",
        "Lockpicking Minigame": "Lockpicking Cover.png",
        "Unity Multiplayer": "Unity Multiplayer Template Cover.png",
        "Simple Unity Audio": "Unity Audio visualizer Cover.png",
        "Wired Saintz": "Wired Saintz Cover.png",
        "Sword": "Sword Cover.png"
    }
    
    if title in covers:
        img_url = f"Images/{covers[title]}"
        bg_html = f'<div class="game-block-bg" style="background-image: url(\'{img_url}\');"></div>'
    else:
        bg_html = ""
    
    game_tags = " ".join([title, cat, desc]).lower()
    
    game_items += f'''
                <!-- Game Item -->
                <a href="{link}" target="_blank" class="game-block fade-up delay-{(delay % 3) + 1}" data-tags="{game_tags}">
                    {bg_html}
                    <div class="game-content">
                        <span class="game-category">{cat}</span>
                        <h3 class="game-title">{title}</h3>
                        <p class="game-desc">{desc}</p>
                    </div>
                </a>'''
    delay += 1

final_html = html_template.replace("{GAME_ITEMS}", game_items)

with open("games.html", "w", encoding="utf-8") as f:
    f.write(final_html)
    
print("games.html successfully built!")
