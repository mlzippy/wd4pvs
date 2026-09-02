# Recall — product page

A plain HTML/CSS/JS site, ready to host on GitHub Pages. No build step required.

## Files

- `index.html` — page structure and copy
- `style.css` — all styling (colors, type, layout)
- `script.js` — the flip-card interaction and copy-to-clipboard button

## Customize it

This ships with placeholder content for a fictional product called "Recall." To make it yours:

1. **Text** — edit the copy directly in `index.html` (headline, subhead, step descriptions, catalog rows, install command, GitHub links).
2. **Colors** — all colors are CSS variables at the top of `style.css` under `:root`. Change the hex values there and the whole site updates.
3. **Fonts** — currently Courier Prime + Source Serif 4, loaded from Google Fonts in the `<head>`. Swap the `<link>` tag and the `--font-display` / `--font-body` variables in `style.css` to change them.
4. **Hero visual** — the flip card is plain HTML/CSS (see `.index-card` in `style.css` and `#flip-card` in `index.html`). Replace it with a screenshot, GIF, or different demo if your product doesn't fit the card metaphor.

## Deploy to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repo root — or to a `/docs` folder if you'd rather keep them out of the root.
   ```bash
   git init
   git add index.html style.css script.js
   git commit -m "Add product page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and the folder to `/ (root)` (or `/docs` if you used that folder).
6. Save. GitHub will give you a URL like `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

### Using a custom domain (optional)

Add a `CNAME` file to the repo root containing just your domain (e.g. `example.com`), then point your domain's DNS at GitHub's Pages servers per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Notes

- No dependencies to install — just static files.
- Respects `prefers-reduced-motion` for the card flip.
- Fully responsive down to small mobile widths.
