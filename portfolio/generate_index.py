import os
import re

PORTFOLIO_DIR = r"c:\Users\danie\Documents\GitHub\Portfolio"
OUTPUT_DIR = r"c:\Users\danie\Documents\GitHub\soueuroya.github.io"

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def clean_cshtml(content):
    # Remove ASP.net directives safely
    content = re.sub(r'@page.*?\n', '', content)
    content = re.sub(r'@model.*?\n', '', content)
    content = re.sub(r'@\{[^}]*\}', '', content, flags=re.DOTALL)
    # Remove simple @ variables like @ViewData["Title"]
    content = re.sub(r'@ViewData\["[^"]+"\]', 'Portfolio', content)
    # Replace ~/ with ./
    content = content.replace('~/', '')
    return content.strip()

layout = read_file(os.path.join(PORTFOLIO_DIR, "Pages", "Shared", "_Layout.cshtml"))
layout = clean_cshtml(layout)

# In layout, remove @RenderBody() and @RenderSection()
layout = layout.replace('@RenderSection("Scripts", required: false)', '')
layout = layout.replace('<div class="scrollable">', '<div>')

home = clean_cshtml(read_file(os.path.join(PORTFOLIO_DIR, "Pages", "Index.cshtml")))

# Adjust Home resume links
home = home.replace('Documents/Daniel_Boldrin_CV.docx', 'Daniel%20Boldrin%20-%20Resume.pdf')
home = home.replace('Documents/Daniel_Boldrin_CV.pdf', 'Daniel%20Boldrin%20-%20Resume.pdf')

experience = clean_cshtml(read_file(os.path.join(PORTFOLIO_DIR, "Pages", "Experience.cshtml")))
education = clean_cshtml(read_file(os.path.join(PORTFOLIO_DIR, "Pages", "Education.cshtml")))

games = clean_cshtml(read_file(os.path.join(PORTFOLIO_DIR, "Pages", "Games.cshtml")))

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

game_items = ""
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
    
    game_items += f'''
    <a href="{link}" target="_blank" class="game-card">
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>'''

games_html = f'''
{games}
<div style="clear:both; border-bottom: 1px solid black; width: 100%; height: 10px;"></div>
<br/>
<div class="container" style="max-width: 1200px; margin-top: 40px; margin-bottom: 60px;">
    <h1 style="text-align: center; color: #333; font-weight: bold; margin-bottom: 30px;">More Games & Projects</h1>
    <div class="games-grid">
        {game_items}
    </div>
</div>
<style>
.games-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    margin-top: 30px;
}}
.game-card {{
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    text-decoration: none;
    color: inherit;
    display: block;
    transition: transform 0.2s;
    border: 1px solid #ddd;
}}
.game-card:hover {{
    transform: translateY(-5px);
    text-decoration: none;
    color: inherit;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}}
.game-card h3 {{ font-size: 1.2rem; margin-bottom: 10px; color: #333; }}
.game-card p {{ font-size: 0.9rem; color: #666; }}
</style>
'''

html_injection = f'''
<div id="section-home" class="page-section">
{home}
</div>
<div id="section-experience" class="page-section" style="display:none;">
{experience}
</div>
<div id="section-education" class="page-section" style="display:none;">
{education}
</div>
<div id="section-games" class="page-section" style="display:none;">
{games_html}
</div>
'''

final_html = layout.replace('@RenderBody()', html_injection)

# Add Navigation Logic
nav_scripts = """
<script>
function showSection(id) {
    document.querySelectorAll('.page-section').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById('section-' + id).style.display = 'block';
    window.scrollTo(0,0);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-home a').addEventListener('click', function(e) { e.preventDefault(); showSection('home'); });
    document.querySelector('.menu-experience a').addEventListener('click', function(e) { e.preventDefault(); showSection('experience'); });
    document.querySelector('.menu-education a').addEventListener('click', function(e) { e.preventDefault(); showSection('education'); });
    document.querySelector('.menu-games a').addEventListener('click', function(e) { e.preventDefault(); showSection('games'); });
    
    // Also change navbar brand to home
    document.querySelector('.navbar-brand').addEventListener('click', function(e) { e.preventDefault(); showSection('home'); });
});
</script>
"""

final_html = final_html.replace('</body>', nav_scripts + '\n</body>')

# Replace asp-area="" asp-page="/Index" with href="#"
final_html = final_html.replace('asp-area="" asp-page="/Index"', 'href="#"')
final_html = final_html.replace('asp-area="" asp-page="/Experience"', 'href="#"')
final_html = final_html.replace('asp-area="" asp-page="/Education"', 'href="#"')
final_html = final_html.replace('asp-area="" asp-page="/Games"', 'href="#"')
final_html = final_html.replace('asp-area="" asp-page="/Assets"', 'href="https://assetstore.unity.com/publishers/67786" target="_blank"')

# Fix CDN for bootstrap/jquery since they were local
final_html = final_html.replace('<link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.min.css" />', '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />')
final_html = final_html.replace('<script src="lib/jquery/dist/jquery.min.js"></script>', '<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>')
final_html = final_html.replace('<script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>', '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>')

dark_theme_css = """
<style>
:root {
    --bg: #0f172a;
    --card: #1e293b;
    --accent: #22c55e;
    --text: #e2e8f0;
    --sub: #94a3b8;
}

body {
    background-color: var(--bg) !important;
    color: var(--text) !important;
    font-family: 'Segoe UI', Inter, sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--text) !important;
}

a {
    color: var(--accent) !important;
    text-decoration: none !important;
}
a:hover {
    color: #16a34a !important;
}

.navbar, .footer {
    background-color: var(--bg) !important;
    border-color: #333 !important;
    color: var(--text) !important;
}

.navbar .nav-link, .footer .nav-link, .navbar-brand {
    color: var(--text) !important;
}

.navbar .nav-link:hover, .footer .nav-link:hover, .navbar-brand:hover {
    color: var(--accent) !important;
}

.game-card {
    background-color: var(--card) !important;
    border: none !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
    color: var(--text) !important;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.4) !important;
}

.game-card h3 {
    color: var(--text) !important;
}
.game-card p {
    color: var(--sub) !important;
}

p {
    color: var(--sub);
}
.section__title, .intro__hello {
    color: var(--accent) !important;
}

/* Modernize Experience and Education sections */
.intro__wrap {
    border-left: 4px solid var(--accent) !important;
    background: var(--card) !important;
    padding: 30px 40px !important;
    margin-bottom: 40px !important;
    border-radius: 8px !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
    transition: transform 0.2s;
    width: 100% !important;
    box-sizing: border-box;
}
.intro__wrap:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.4) !important;
}
.intro__hello {
    font-size: 2rem !important;
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    min-width: 0 !important;
}
.company {
    float: none !important;
    text-align: left !important;
    margin-top: 15px !important;
    margin-bottom: 25px !important;
}
.company img {
    max-width: 120px !important;
    max-height: 120px !important;
    border-radius: 8px !important;
    margin-bottom: 15px;
}
.company span, .company a {
    display: inline-block;
    color: var(--sub) !important;
    font-size: 0.95rem;
    margin-right: 15px;
}
.intro__tagline {
    font-size: 1rem !important;
    color: var(--text) !important;
    line-height: 1.7 !important;
    max-width: 100% !important;
}
.alt-wrap {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    background: rgba(255,255,255,0.05);
    padding: 8px;
    border-radius: 8px;
}
.alt-wrap img {
    max-width: 30px !important;
    max-height: 30px !important;
    filter: brightness(100%);
}
div[style*="clear:both"] {
    display: none !important;
}

/* Home Page specific tweaks */
#section-home .intro__wrap {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    text-align: center;
    padding: 40px 10px !important;
}
#section-home .intro__hello {
    color: var(--text) !important;
    font-size: 3rem !important;
}
#section-home .avatar__wave {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--accent);
}

</style>
"""

final_html = final_html.replace('</head>', dark_theme_css + '\n</head>')

final_html = final_html.replace('navbar-light bg-white border-bottom box-shadow mb-3', 'navbar-dark mb-3')
final_html = final_html.replace('navbar-light bg-white border-bottom box-shadow', 'navbar-dark')
final_html = final_html.replace('bg-white', '')
final_html = final_html.replace('text-dark', '')
final_html = final_html.replace('body-back-color', '')


with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(final_html)
print("index.html generated successfully.")
