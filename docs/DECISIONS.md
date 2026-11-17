# Current integration decisions — 17 November 2026

These decisions supersede earlier local-only, CV-only, and Canva-publication instructions for this explicitly authorized integration/publication task.

1. Preserve the finished portfolio. Its entire main content is byte-for-byte identical after relative asset/route paths are rebased for `/portfolio/`. Keep the existing Resume content/design.
2. Home is a short introduction reusing the original cover, with clear links to Portfolio, Resume and CV. Shared navigation is plain HTML and CSS, always visible without a mobile menu dependency.
3. Use the existing repository and its established main/root GitHub Pages deployment. A custom Actions workflow is unnecessary. `_config.yml` excludes development files from the hosted site.
4. Keep local reference PDFs, backups, unused original images, temporary work and extraction metadata off GitHub using `.gitignore`. Do not delete originals. Use a separate public-only package to check the runtime files.
5. Ayaisha selected the public English CV PDF only, retaining Canva locally. Remove personal contact and personal-status fields from that separate public copy. Do not embed or link Canva on the current public page. Never rewrite Git history or alter Canva sharing without a separate instruction.
6. CV previews are derived from the same public PDF. The PDF download is the formal document; the existing online Resume provides readable text on small screens. Do not duplicate the Resume into another HTML page.
7. Preserve the existing preview launcher requirements: py first, python second, own folder, port 8000, open /cv/. No installations, administrator privileges or OS changes.
8. Use relative paths throughout, so navigation works locally and beneath GitHub Pages' /Portfolio/ prefix. Keep normal vertical scrolling, accessible anchors, reduced-motion support and the existing image viewer.

Older decisions follow as history.

# Project decisions

## Current design — continuous vertical portfolio, 2026-11-16

Ayaisha's latest request explicitly supersedes the previous horizontal-deck design. Earlier records remain below as history.

1. Present the complete 16-page portfolio content at `/` as one continuous vertical document. No horizontal page navigation, page picker, presentation frames or nested section scroll areas remain.
2. The sole portfolio source is `References/Creative Portfolio - Ayaisha Jahan Sheikh.pdf`. Preserve its storytelling order, written professional content, achievements, authorship, photographs, illustrations, diagrams, charts and cobalt-blue/white identity. No older PDF or substitute stock visual is used.
3. Adapt the compositions into editorial website sections with spacious typography, natural heights and multi-column desktop layouts. Stack intelligently on mobile, preserve original image proportions and keep names, headings and labels readable.
4. Meiwen See is a spacing, typography and visual-storytelling reference only: https://www.meiwensee.com/. Do not copy that site's writing, identity, assets or projects.
5. The Portfolio Map remains the project index. All seven category/project links smoothly scroll to meaningful section IDs. A small sticky header and closing/footer links provide returns to the top or map.
6. Preserve normal browser scrolling and keyboard reading. Smooth internal links move keyboard focus to their destination headings. There are no left/right page-switching handlers or inactive portfolio sections.
7. Keep interactions modest: short heading-only entrances, refined hover/focus states and a fitted image dialog with optional source-detail zoom. Disable decorative motion when the device requests reduced motion. Content stays visible without JavaScript.
8. Use standalone HTML/CSS and minimal plain JavaScript, with no framework, package installation, build step or external font dependency. Original image dimensions reserve layout space; lower images load lazily.
9. The source cover Resume keeps its local visual-CV destination, `cv/`. Header/closing Resume opens `resume/`, and CV opens `cv/`. Preserve both routes, their stylesheets, original assets and `run-local.bat`.
10. Retain preceding horizontal HTML/CSS/JS in backups. Preserve existing unrelated changes. Source PDF and image bytes must not change during this adaptation.
11. Keep everything local. No push, deployment, GitHub Pages change, release or publication is authorized. The next step is local visual review and refinement only.
12. Verification distinguishes source/file checks from browser observations. Four responsive widths, all 16 sections, map/navigation/viewer behavior and route loading were checked. Physical touch hardware, external email/LinkedIn activation, Canva's remote display and actual system motion settings remain separate manual checks.

## Superseded historical decisions

## Current scope — complete 16-page portfolio, 2026-11-16

Ayaisha's latest instruction explicitly replaces the Page 1-only scope below. Older records remain as history.

1. The complete portfolio lives at `/`, with all 16 PDF pages in order. Its sole source is `References/Creative Portfolio - Ayaisha Jahan Sheikh.pdf`; no previous 15-page PDF is used.
2. Preserve original content, achievements, project authorship, visuals, diagrams, original portrait, typography character and blue/white identity. Meiwen See is a spacing/interaction reference only: https://www.meiwensee.com/.
3. Use real HTML, CSS and minimal plain JavaScript. The saved cover stylesheet is reused locally; no framework, package system, build pipeline or external asset dependency is introduced.
4. Keep a horizontal, page-by-page experience. Native horizontal movement, scroll snap, Previous/Next, arrow keys and a compact numbered picker provide access to every page. Do not hijack ordinary vertical wheel input.
5. Smaller screens reflow content and allow vertical reading inside each panel. Images keep their proportions; important text is not hidden to force a fixed slide height. Some detailed panels also scroll vertically on shorter desktop screens.
6. The three-category Portfolio Map is interactive. Category 1 opens the applied thesis, with separate Sunspectra and ChatGPT links; category 2 opens Mjunik photography; category 3 opens KU Winter School. MAP always returns to the top of Page 2.
7. The source dashboard, research model and photos may open in a simple native dialog. Fit is the default. Detail zoom may scroll inside that explicit viewer; individual portfolio panels must not gain accidental sideways scrolling.
8. Source grades, conversion figures and Nature Nook's independent-origin/later-collaboration distinction remain unchanged. JWL and Dhaka Hats are not added, because they are absent from this portfolio PDF.
9. The cover's Resume follows the source visual-CV destination at `cv/`. Persistent RESUME and closing Resume links open `resume/`; CV opens `cv/`. Both existing pages, their stylesheets and the launcher are preserved.
10. Save preceding local versions in backups. Do not reset unrelated existing file changes. Keep all work local; no push, deployment, publication, GitHub Pages change or release is authorized.
11. Browser verification covered 64 panel/size combinations and the listed navigation/viewer interactions. Physical touch hardware, device-specific Shift + wheel, remote links, Canva display and actual system reduced-motion behavior remain separate manual checks.
12. The immediate next step is local visual refinement of this complete portfolio. Do not add unrelated pages or publish automatically.

## Historical decisions

## Current scope — Page 1 only, 2026-11-16

This latest request supersedes the earlier full-deck homepage scope and its Resume-link decision. Historical decisions remain below for context.

1. Build and refine only Page 1 at `/`. Do not work on Page 2 or later panels until Ayaisha separately instructs it. The preceding 16-panel root HTML is preserved in `backups/portfolio-before-page1-2026-11-16.html`; existing deck styles, script and assets are left intact.
2. Use Page 1 of the explicitly supplied `Creative Portfolio - Ayaisha Jahan Sheikh.pdf`. The requested alternate filename `Portfolio 1 to 16 page.pdf` is absent; no older source is substituted.
3. Preserve the exact cover wording, original portrait, cobalt blue/white/pale gradients, editorial hierarchy, split desktop composition and layered identity card. Meiwen See is spacing inspiration only: https://www.meiwensee.com/. Do not copy that site's writing, assets or identity.
4. Use real HTML and an isolated `css/homepage.css`. No framework, package system or JavaScript is necessary for this cover.
5. Use the supplied email and LinkedIn URL. Resume follows Page 1's actual visual-CV destination, localized to `cv/` so it works both on localhost and when the HTML file is opened directly. `/resume/` remains a separate preserved page.
6. Smaller screens stack the introduction and portrait with normal vertical scrolling. Subtle entrance and hover effects are allowed by this request; reduced-motion CSS disables them when requested by the device.
7. Preserve `/cv/`, `/resume/`, their existing stylesheets, original assets and `run-local.bat`. No Windows settings, administrator access, installs or downloads are needed.
8. Keep this work local for review. Do not push, deploy, publish, enable GitHub Pages or begin Page 2 automatically.
9. Distinguish observed checks from untested behavior: responsive browser checks and local navigation were completed; external email/LinkedIn activation, Canva viewer display and physical-phone behavior remain unverified.

## Previous decisions

## Current portfolio decisions — 2026-11-16

These decisions supersede older portfolio/homepage decisions below. Approved résumé content and the original Canva CV remain separate.

1. `References/Creative Portfolio - Ayaisha Jahan Sheikh.pdf` is the sole current portfolio source. It is the verified 16-page PDF copied unchanged from Ayaisha's attached E: drive location. Never use older portfolio PDFs.
2. The main portfolio at `/` follows all 16 pages in order, from the original cover and three-category Portfolio Map to Thank You.
3. Desktop presentation is horizontal with CSS scroll snap. Smaller screens retain horizontal major panels, with vertically readable content inside each panel. Ordinary vertical scrolling is not intercepted.
4. Page 2 is the project navigation interface. Category 1 opens the applied thesis; Sunspectra and ChatGPT links also open their specific panels. Category 2 opens Mjunik, and category 3 opens KU Winter School. MAP is always available.
5. Web improvements must preserve Ayaisha's original identity, wording, blue/white palette, editorial hierarchy, real portraits, diagrams, dashboards and collage compositions. No generated substitute visuals, fake interactive dashboard, or external design template is used.
6. JWL and Dhaka Hats are excluded from Version 1 because the current PDF does not include them. Do not import projects from the CV, résumé or older portfolio.
7. Nature Nook retains the distinction between independently originating the concept and later collaborative academic work. Source grades and performance statistics must not be invented or altered.
8. Plain HTML, CSS and minimal vanilla JavaScript keep the site static. No framework, package system or website build step is introduced. Image extraction uses existing local tools only.
9. New web images are stored separately in `assets/portfolio/`; original images and the original PDF are not overwritten. `SOURCE.json` records the new source and extraction locations.
10. Resume links now open `/resume/`, as explicitly requested. The existing LinkedIn destination was already present in the project. `/cv/`, `/resume/`, their stylesheets and the launcher were preserved byte for byte from this task's starting state.
11. No public push, deployment, GitHub Pages setting change, release or publishing action is authorized. Version 1 stays for local review; do not publish before a separate instruction.
12. Browser interaction and responsive-layout checks are pending. A source-file check or PDF inspection is not evidence that a viewer, link activation or website layout works in a browser.

## Historical decisions

The numbered records below are history. Any older reference-PDF, page-count, map-category, visual-design or Resume-link decision is superseded by the current decisions above.

These decisions distinguish implemented pages from future plans.

1. `/cv/` displays Ayaisha's Canva CV using the actual code she supplied.
2. `/resume/` is now a separate HTML-based résumé. Brittany Chiang's website, https://brittanychiang.com/, is its primary visual and information-architecture reference.
3. The main `/` page is now the page 1 portfolio homepage, based on Ayaisha's supplied PDF.
4. The future portfolio's visual direction will draw on Abdel's project-first presentation style, curated entirely around Ayaisha's own work and identity.
5. Sunspectra will be the primary featured project in the future portfolio.
6. Plain HTML (webpage structure) and CSS (appearance rules) are used because the website presents saved content and Ayaisha is learning from the beginning.
7. Python's included HTTP server (a tool for delivering webpage files) is used only for local testing on Ayaisha's computer.
8. The Canva share link must never be treated as an embed address unless verified. This page instead uses the exact embed address in Ayaisha's supplied Canva code.
9. The visual CV page has a light background, restrained spacing, and no decorative sections, navigation, animations, or invented personal details.
10. No other pages will be started without Ayaisha's explicit instruction.
11. The résumé uses original code and Ayaisha's approved content, with no copied reference source, writing, assets, or projects. Its charcoal and warm accent palette is original.
12. Sunspectra is the primary recent professional experience. Quantified evidence is emphasized without altering the approved claims. Its separate thesis project entry records the academic credential without duplicating the entire experience.
13. The résumé uses its own `css/resume.css` so changes cannot alter the existing visual CV's appearance. Desktop has a persistent identity column; smaller screens have one vertical column.
14. The homepage follows the supplied PDF, with spacious presentation inspired by Meiwen See. The résumé retains its separate design.
15. No invented LinkedIn address, unavailable download, or unfinished case-study link is displayed. Labelled source comments reserve places for approved future links.
16. Ayaisha's approved 2026-10-03 content revision replaces the original introductory positioning, profile, overall skills groups, and language wording. The positioning now includes Generative AI and Creative Content. The skills groups are Marketing Skills, Data & BI Tools, and Creative & Digital Tools, with Github and Codex explicitly approved. Job-specific historical labels remain separate from the overall skills list; the Canva design is edited independently.
17. The earlier approved positioning was Marketing Analytics | Business Intelligence | Digital Marketing | Generative AI | Creative Content | E-commerce UX. The introductory profile uses Ayaisha's Marketing Intelligence & Growth Specialist statement; that profile wording does not change historical job titles.
18. On 2026-10-06, Ayaisha supplied the exact three-paragraph ABOUT wording for `/resume/`. Preserve its substance and proper names in future edits; this replaces the previous ABOUT copy.
19. Ayaisha's current ABOUT first paragraph, supplied on 2026-10-06, is: “My work connects marketing intelligence, digital experience, and growth-from performance analytics to creative content, e-commerce, and AI-assisted workflows.” The second and third ABOUT paragraphs remain as previously approved.
20. Ayaisha's current résumé positioning line, supplied on 2026-10-06, is Marketing Analytics | Business Intelligence | Digital Experience | Generative AI | Creative Content | E-Commerce UX.

21. The homepage uses the PDF portrait, exact page 1 wording and LinkedIn destination. Its Resume link follows the PDF destination to `/cv/`; `/resume/` remains available separately.

22. The homepage was inspected in a local browser at desktop, phone, and the 801-pixel layout boundary. Resume opens the visual CV; external destinations were checked against the PDF rather than activated.

23. The redesign uses Meiwen See as the primary editorial reference, with cobalt accents and Ayaisha’s own PDF content and assets. The homepage is reviewed before separate project pages are built.

24. Ayaisha replaced the reference-site direction with an original design and requested all information from the 15-page PDF on the homepage. The PDF is the source for portfolio facts; its dashboard visualization is included locally, subject to a privacy review before publication.

25. The homepage hero uses viewport-aware desktop sizing, while smaller screens can scroll to preserve readable text. Supporting labels use a consistent, larger size.

Local portfolio: http://localhost:8000/
Resume: http://localhost:8000/resume/
CV: http://localhost:8000/cv/

Local portfolio: http://localhost:8000/
Resume: http://localhost:8000/resume/
CV: http://localhost:8000/cv/

Local portfolio: http://localhost:8000/
Resume: http://localhost:8000/resume/
CV: http://localhost:8000/cv/

Local portfolio: http://localhost:8000/
Resume: http://localhost:8000/resume/
CV: http://localhost:8000/cv/
Local site: http://localhost:8000/

Current page: http://localhost:8000/cv/
