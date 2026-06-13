# Boldreams

Boldreams is a professional software and game development studio led by Daniel Boldrin.
This repository contains the source code for the Boldreams company website (`boldreams.app`).

## Structure

- `index.html`: The main landing page for Boldreams.
- `css/`: Stylesheets for the site.
- `js/`: Scripts for animations and interactions.
- `portfolio/`: An embedded copy of Daniel's personal portfolio for preservation and easy access.

## Deployment Instructions

This website is designed to be deployed as a static site using **GitHub Pages**.

1. Go to the Settings tab of this GitHub repository.
2. Navigate to **Pages** on the left sidebar.
3. Under **Source**, select the `main` branch and the `/ (root)` folder, then click **Save**.
4. GitHub will begin building and deploying your site. It may take a minute or two.

## Custom Domain Setup (boldreams.app)

1. In the **Pages** settings, scroll down to the **Custom domain** section.
2. Enter `boldreams.app` and click **Save**. This will automatically create a `CNAME` file in your repository.
3. In your domain registrar's DNS settings (where you bought `boldreams.app`), add the following records:
   - **A Records** pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record** for `www` pointing to `soueuroya.github.io` (or your GitHub username).
4. Wait for DNS changes to propagate (can take a few minutes to hours).
5. Ensure the **Enforce HTTPS** option is checked in your GitHub Pages settings.