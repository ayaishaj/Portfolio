# Integrated website: beginner guide — 17 November 2026

This section supersedes older instructions below about homepage scope, horizontal navigation, Canva publication, and local-only status.

A route is a website address. Home uses `/`, Portfolio uses `/portfolio/`, Resume uses `/resume/`, and CV uses `/cv/`. The same menu appears on every page. Scroll normally through the full portfolio. Portfolio Map links jump to the corresponding work; image links open an enlarged view. Escape closes the image view.

The CV page displays a public English CV and offers its PDF download. The original Canva version is saved locally in backups, excluded from publication as Ayaisha requested. The professional Resume remains a separate readable webpage, so its content is not copied into a second HTML CV.

A local server previews files on your own computer. Double-click `run-local.bat` once if it is not already running. It opens the CV page; choose Home to start at the landing page. Keep the server window open. Refresh after editing. This does not update the live website.

GitHub stores the project. Git records versions of files. A commit records a reviewed version; a push sends it to GitHub. GitHub Pages then automatically builds the public website from main / root. The `_config.yml` file excludes maintenance files from the website; `.gitignore` excludes local originals and private working locations from GitHub itself. These are different protections.

For a check before publishing, the optional command `py tools/build_site.py` runs Python's existing installation on this computer. It verifies local links and prepares `_site`, a folder containing only public website files. Expected output starts with PASS and lists four routes. It does not commit, push, publish, or delete originals. There are no extra packages to install. Do not run this if Python is unavailable; ask for help.

Testing steps: open Home, Portfolio, Resume, and CV from the menu; try a category in Portfolio Map; enlarge an image and press Escape; download the CV; narrow the browser window and check the same menu and headings. After a reviewed commit and push, wait for the GitHub Actions “pages build and deployment” check to turn green, then repeat these checks at the live address.

Older project history follows; the current overview is README.md.

# Beginner guide

These concepts describe files on your own computer unless explicitly stated otherwise.

| Term | Plain-English meaning |
| --- | --- |
| Website | A collection of webpages, often connected by links. This project currently has three implemented pages. |
| Webpage | One page that you view in a browser. |
| HTML | The language used to describe a webpage's content and structure. HTML5 is its modern form. |
| CSS | Instructions controlling appearance, spacing, and fitting different screen sizes. |
| Folder | A named container that groups files and other folders. |
| File | An individual saved item, such as a webpage or a note. |
| index.html | The conventional name for the default webpage inside a folder. |
| URL | An address used to visit a webpage. |
| Localhost | Your own computer, as seen by your browser. |
| Local server | A small program serving website files from your computer to your browser for testing. |
| Web server | A program that delivers webpage files when a browser requests them. Our local server is one example. |
| Port | A numbered doorway through which a browser communicates with a server. This preview uses 8000. |
| BAT file | A Windows file containing commands that run in sequence when you double-click it. |
| Python | A programming language. Its included tools can run our local preview without additional website tools. |
| Python local HTTP server | Python's included tool for delivering local website files. HTTP is the set of communication rules used here between the browser and server. |
| Browser | An app for viewing websites, such as Edge, Chrome, or Firefox. |
| Command Prompt | A Windows window that runs written instructions, called commands. |
| Responsive | Able to adjust its size and spacing to fit computer, tablet, and phone screens. |
| Embed | Content from another service displayed inside your webpage. |
| iframe | An HTML window within a webpage that displays another webpage, such as Canva's CV viewer. |
| Markdown | A plain-text format for notes with simple headings and lists; these documentation files end in `.md`. |
| Keyboard focus | The currently selected link or control when moving around with the keyboard. Tab moves focus; Enter activates a link. |

## What the launcher instructions mean

You do not need to type these commands: `run-local.bat` runs them for you on your computer.

- `cd /d "%~dp0"` switches to the folder containing the BAT file, including switching drives when needed. It changes the command window's working location, not your files.
- `python -m http.server 8000` starts Python's included tool for delivering local webpage files on port 8000. Expect a server message followed by records of webpage requests. The launcher first tries `py -m http.server 8000` and falls back to this `python` command; it changes no project files and installs nothing.

The address http://localhost:8000/cv/ requests the `cv` folder's default page, `index.html`. That page asks for `css/main.css` to apply the appearance rules and asks Canva to display the supplied CV. An internet connection and Canva's availability are needed for that last part.

## Concepts introduced with the web résumé

| Term | Plain-English meaning |
| --- | --- |
| Webpage section | A meaningful part of a page, such as experience or education, with its own heading. |
| Navigation | A group of links that helps you move around a website or page. |
| Anchor link | A link to a named place on the same page; About moves directly to the About section. |
| Responsive layout | The arrangement of content changes to fit the screen. Our two desktop columns become one column on smaller screens. |
| CSS variable | A reusable named value, such as a color, controlled in one place. |
| Media query | An appearance rule that applies only under a condition, such as a smaller screen width. |
| Sticky positioning | An element stays visible as you scroll past other content. The résumé identity area uses this on desktop. |
| Hover state | The appearance of a link or entry when your mouse pointer rests over it. |
| Focus state | A visible indication of the link or control selected by the keyboard. |
| Relative URL | An address written from the current page's location. From `/resume/`, `../cv/` goes up one folder and into the CV folder. |
| Skip link | A keyboard-accessible link that lets you pass the introductory navigation and go straight to the main content. |

The résumé opens at http://localhost:8000/resume/ and uses `css/resume.css`. Its links open in the same browser tab. Its appearance file has no effect on `/cv/`.

The introductory profile, ABOUT section, and overall skills list can be updated independently of past job descriptions. Changing these does not rewrite the tools recorded under individual jobs or edit the Canva CV. To check the latest first ABOUT paragraph, start `run-local.bat`, open http://localhost:8000/resume/, and refresh the page after saving an edit.

The résumé's positioning line currently reads: Marketing Analytics | Business Intelligence | Digital Experience | Generative AI | Creative Content | E-Commerce UX. To review it, use the same local résumé page and check the line under Ayaisha's name.

## Current portfolio: one vertical website

The portfolio at `/` now reads from top to bottom as one continuous webpage. It contains all the information represented by the 16 PDF pages, adapted into website sections. There are no sideways page controls or separate reading scrollbars inside sections.

The glossary above explains HTML, CSS, anchors, responsive layouts, CSS variables, media queries, sticky positioning, hover/focus states and keyboard focus. The current implementation also uses these ideas:

| Term | Plain-English meaning |
| --- | --- |
| Editorial layout | A spacious arrangement of headings, writing and visuals that guides someone through a story, like a carefully designed article. |
| Aspect ratio | The relationship between an image's width and height. Keeping it preserves natural proportions and avoids stretched photographs. |
| Lazy loading | Images farther down the website load as someone approaches them, reducing the work needed to open the introduction. |
| Layout shift | Content unexpectedly moves while an image loads. Recording original image dimensions reserves the correct space and reduces this movement. |
| Entrance animation | A short, once-only appearance effect. Here it is limited to headings; photos and body content remain steady and visible. |
| Reduced motion | An existing device preference asking websites to limit movement. The site then disables smooth scroll and decorative transitions. |
| Image lightbox | A temporary larger-image view. Fit shows the whole image; + opens source detail; Close or Escape returns to reading. |

`index.html` contains the real writing and image references. `css/portfolio.css` controls the website's appearance. `js/portfolio.js` provides small browser interactions without an extra package system. The older cover/deck styles are preserved but are not loaded by this version. The résumé and CV keep their own files.

## Review locally

1. Double-click `run-local.bat` in the project folder if the preview is not running. Keep the server window open.
2. It normally opens the CV. Visit http://localhost:8000/ for the portfolio and refresh after any approved saved edits.
3. Scroll down naturally through the introduction, map, academic story, research, Nature Nook, Sunspectra, Mjunik, Winter School and closing.
4. Select Portfolio Map in the header. Its category and project links scroll to the corresponding section. Top and Back to top return to the introduction.
5. Make the browser window narrower. Text and images should stack without sideways scrolling. A real phone can be used for a final personal swipe/reading review.
6. Press Tab to move through links and controls. Look for the visible outline; Enter activates the focused link. The destination heading receives focus after an internal link.
7. Select a dashboard, diagram or photograph marked ↗. Try +, Fit, Close and Escape. The site returns focus to the original image link.
8. Open `/resume/` and `/cv/` for the preserved pages. The Canva viewer still requires a separate check of its remote content.

A file check confirms saved content, source fingerprints and link destinations. A browser check confirms actual display or interaction. The vertical website was checked at four widths across all 16 sections, and map/navigation/image-viewer behavior was exercised. The real-device and remote-service limits are recorded in NEXT_STEPS.

Local portfolio: http://localhost:8000/
Resume: http://localhost:8000/resume/
CV: http://localhost:8000/cv/
Local site: http://localhost:8000/

Current page: http://localhost:8000/cv/
