# CentricVesta V2 Fixed Website

## What was fixed
- The previous version could appear blank because key content used `.reveal { opacity: 0; }`. If JavaScript did not run correctly, the page stayed hidden.
- This fixed version makes content visible by default, then only applies reveal animations when JavaScript successfully loads.
- The ZIP now opens directly from the root folder with `index.html`, `css/`, `js/`, and `assets/` in the correct structure for GitHub Pages.

## GitHub Pages
Upload the contents of this folder to your repository root:
- index.html
- css/style.css
- js/script.js
- assets/images/

Then go to Settings > Pages > Deploy from a branch > main > /(root).
