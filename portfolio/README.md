# Daniel Boldrin's Personal Portfolio Website

Welcome to the repository for my personal portfolio website. This site serves as an interactive showcase of my work, experience, and educational background as a **Unity Lead Developer**.

## Overview

This repository uses a custom static site generation approach powered by Python scripts. Instead of relying on full-fledged JS frameworks, tThe site uses Python scripts to read data and templates, which are then compiled into static HTML files (`index.html`, `games.html`, `education.html`, and `experiences.html`).

## Repository Structure

- **Python Generators**: The core builder scripts.
  - `generate_index.py` - Generates the main `index.html` file (sometimes pulling data from another local repository).
  - `generate_games.py` - Parses a list of projects and games and generates the `games.html` page.
  - `generate_experiences.py` - Generates the professional experience history in `experiences.html`.
  - `generate_education.py` - Generates the educational background in `education.html`.
- **Static Assets**:
  - `css/` - Styling for the site (Vanilla CSS).
  - `js/` - Interactive functionality (Vanilla UI interactivity).
  - `Images/` - Project thumbnails, logos, and personal pictures.
- **HTML Output**: The final generated HTML pages ready to be served from any static file host like GitHub Pages.

## How to Build

If you make modifications to the styling templates or the Python script configurations, you can rebuild the website pages by simply running the corresponding Python scripts:

```bash
python generate_index.py
python generate_games.py
python generate_experiences.py
python generate_education.py
```

These scripts will automatically overwrite the existing HTML files with the updated content.

## Technologies Used

- **Python**: Custom static HTML generation logic.
- **HTML5 & CSS3**: For the frontend layout, typography, animations, and dark theme support.
- **JavaScript**: For navigation interaction, smooth scrolling, and mobile menu toggling.
- **FontAwesome**: For external icons used throughout the site.

## Contact

You can check out my games and projects on my [Itch.io profile](https://danielboldrin.itch.io/) or reach out to me directly via [LinkedIn](https://www.linkedin.com/in/daniel-boldrin/).
