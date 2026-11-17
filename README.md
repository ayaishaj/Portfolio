# Ayaisha Jahan Sheikh — Professional Portfolio

One website brings together the homepage, complete creative portfolio, professional Resume, and downloadable public CV. The portfolio remains a continuous vertical experience with its original 16 content areas, wording, photographs, diagrams, charts, and blue-and-white identity. The existing Resume content and design are preserved.

| Address | Content |
| --- | --- |
| `/` | Short landing page using the original cover design. |
| `/portfolio/` | Complete vertical portfolio and interactive Portfolio Map. |
| `/resume/` | Existing readable HTML Resume. |
| `/cv/` | English and German two-page CV previews, PDF downloads, and online Resume link. |

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
- `assets/portfolio/`: 26 optimized original visuals; `assets/cv/`: four previews of the English and German CVs.
- `downloads/Ayaisha-Jahan-Sheikh-CV.pdf`: updated public English CV; `downloads/Ayaisha-Jahan-Sheikh-Lebenslauf.pdf`: updated public German CV.
- `tools/build_site.py`: checks internal links and prepares a public-only `_site` preview package.
- `_config.yml`: tells the existing GitHub Pages publisher which development files to exclude.
- `.gitignore`: keeps reference PDFs, backups, temporary files, unused originals, and common credential files off GitHub.

GitHub Pages already publishes the `main` branch from the repository root. Keep that existing publishing source. Its automatic build uses `_config.yml`; it does not publish the local `_site` folder. No additional custom publishing workflow or account credentials are stored here.

The current downloads are exact copies of Ayaisha's updated English and German PDFs supplied on 17 November 2026. Each has two A4 pages. All four pages were rendered and visually checked for alignment, spacing, clipping and overlap; no PDF formatting edits were needed. The supplied files have no photographs, telephone, home address, birth date or personal-status block. Professional wording, formatting and both local originals remain unchanged. Each language has an expandable preview generated from its own PDF. The previous English download and previews are preserved in excluded local backups.

The current public CV page has no Canva embed or share link. Historical GitHub commits may still contain the retired Canva link; this task does not rewrite Git history or change Canva sharing settings.

## Update the website later

1. Edit the relevant HTML file for wording, or its CSS file for appearance. Ask for help if unsure.
2. Preview locally, check the four navigation links, Portfolio Map, images, and CV download.
3. To replace the CV, use a public-safe English or German PDF and update that language’s two preview images together. Keep the published filenames stable so existing links continue to work. Keep private originals outside published files.
4. In GitHub Desktop, review the changed files, write a short description, choose Commit to main, then Push origin. A commit records a version; pushing sends it to GitHub and updates the public website automatically.
5. In the repository's Actions tab, wait for “pages build and deployment” to succeed. Refresh the live website.

Do not add private documents, credentials, reference folders or backups to a commit. `.gitignore` protects common locations, but always review the changed-file list. Documentation is kept in GitHub for maintenance and excluded from the hosted website.

Local site: http://localhost:8000/

Current page: http://localhost:8000/cv/
