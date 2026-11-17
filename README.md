# Ayaisha Jahan Sheikh — Professional Portfolio

One website brings together the homepage, complete creative portfolio, professional Resume, and downloadable public CV. The portfolio remains a continuous vertical experience with its original 16 content areas, wording, photographs, diagrams, charts, and blue-and-white identity. The existing Resume content and design are preserved.

| Address | Content |
| --- | --- |
| `/` | Short landing page using the original cover design. |
| `/portfolio/` | Complete vertical portfolio and interactive Portfolio Map. |
| `/resume/` | Existing readable HTML Resume. |
| `/cv/` | Public CV previews, PDF download, and online Resume link. |

Publication target: https://ayaishaj.github.io/Portfolio/ . Deployment verification is recorded in docs/NEXT_STEPS.md.

## Preview on your computer

1. Open this project folder in File Explorer.
2. If the preview is not already running, double-click `run-local.bat`.
3. Keep the server window open. It opens `/cv/`; use Home, Portfolio, Resume, and CV to explore.
4. Refresh the browser after changing a file. The local preview does not publish anything.

The launcher tries `py` first, then `python`, starts from its own folder, uses port 8000, and opens `/cv/`. Python must already be installed. No software installation or Windows setting changes are needed.

## Files and publishing

HTML files hold page content. CSS files control appearance. JavaScript provides portfolio map scrolling and image enlargement. There is no framework or package installation.

- `index.html`: homepage; `portfolio/index.html`: full portfolio.
- `resume/index.html` and `cv/index.html`: established route addresses.
- `css/site.css` and `js/site.js`: shared navigation appearance and heading clearance.
- `css/portfolio.css` and `js/portfolio.js`: existing vertical portfolio presentation and interactions.
- `assets/portfolio/`: 26 optimized original visuals; `assets/cv/`: two previews of the public CV.
- `downloads/Ayaisha-Jahan-Sheikh-CV.pdf`: the approved public English CV.
- `tools/build_site.py`: checks internal links and prepares a public-only `_site` preview package.
- `_config.yml`: tells the existing GitHub Pages publisher which development files to exclude.
- `.gitignore`: keeps reference PDFs, backups, temporary files, unused originals, and common credential files off GitHub.

GitHub Pages already publishes the `main` branch from the repository root. Keep that existing publishing source. Its automatic build uses `_config.yml`; it does not publish the local `_site` folder. No additional custom publishing workflow or account credentials are stored here.

The public CV is a separate copy of the original English CV. Its home address, telephone, birth date, nationality and residence-permit/personal-information block were removed. Professional wording on both pages was verified unchanged. Ayaisha chose the public PDF instead of the Canva viewer. The original Canva HTML and fallback remain in an excluded local backup; the original PDFs remain unchanged. Existing historical GitHub commits may still contain the old Canva link; this update does not rewrite history or change Canva sharing settings.

## Update the website later

1. Edit the relevant HTML file for wording, or its CSS file for appearance. Ask for help if unsure.
2. Preview locally, check the four navigation links, Portfolio Map, images, and CV download.
3. To replace the CV, use a public-safe PDF and update its two preview images together. Keep private originals outside published files.
4. In GitHub Desktop, review the changed files, write a short description, choose Commit to main, then Push origin. A commit records a version; pushing sends it to GitHub and updates the public website automatically.
5. In the repository's Actions tab, wait for “pages build and deployment” to succeed. Refresh the live website.

Do not add private documents, credentials, reference folders or backups to a commit. `.gitignore` protects common locations, but always review the changed-file list. Documentation is kept in GitHub for maintenance and excluded from the hosted website.

Local site: http://localhost:8000/

Current page: http://localhost:8000/cv/
