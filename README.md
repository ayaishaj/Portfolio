# Ayaisha Portfolio

This project will eventually present Ayaisha's own work. Two pages now exist: `/cv/`, the Canva-based visual CV, and `/resume/`, a readable HTML web résumé. The main `/` homepage and project case studies are future work and have not been built.

HTML describes a webpage's content and structure. CSS controls how it looks and fits different screen sizes. This site uses plain HTML and CSS, with no additional page programming required.

The web résumé's current positioning is Marketing Analytics | Business Intelligence | Digital Marketing | Generative AI | Creative Content | E-commerce UX. Its approved profile is: Marketing Intelligence & Growth Specialist combining performance analytics, digital experiences, creative content, and Generative AI to translate customer insights into data-driven growth strategies. Its three skill groups (Marketing Skills, Data & BI Tools, Creative & Digital Tools) and language wording retain Ayaisha's approved content. These web résumé edits do not update the separately managed Canva design.

The CV page contains the actual Canva display code supplied by Ayaisha, with its original design address. It also has a "View CV on Canva" link using https://canva.link/8f87e4ifjle92k9. Including the code does not by itself prove Canva will display it: see `docs/NEXT_STEPS.md` for verification status.

## Start the preview on your computer

1. Open `D:\Github Repo\Portfolio` in File Explorer, the Windows app for browsing your files.
2. Double-click `run-local.bat`.
3. A Command Prompt window (a Windows window that runs written instructions) will start the local server. A local server lets your browser display the project as a website on your own computer.
4. Open your browser and visit http://localhost:8000/resume/ for the web résumé, or http://localhost:8000/cv/ for the visual CV.
5. Keep the server window open while testing. Closing it stops this local server.

The current launcher uses `python -m http.server 8000`. Python is a programming language with an included tool for serving local webpages. The launcher prints the preview addresses and runs the server in the same window; it does not automatically open the browser. This is the existing launcher found at the start of the résumé task and was left unchanged as requested. Python must already be available for it to run. It installs nothing and changes no Windows settings.

Localhost means your own computer. The number 8000 is a port, a numbered doorway through which your browser reaches this server. This preview does not publish the website to a hosting service.

If you see an error that port 8000 is already in use, look for an existing preview window. Use that preview if it belongs to this project; otherwise close the known conflicting server before trying again. Do not repeatedly double-click the launcher while a preview is already running.

## Current folder structure

```text
Portfolio/
  AGENTS.md                 Instructions for Codex
  README.md                 This project overview
  run-local.bat             Windows preview launcher
  cv/
    index.html              The CV webpage
  resume/
    index.html              The readable web résumé
  css/
    main.css                Its appearance and screen-size rules
    resume.css              Appearance rules used only by the résumé
  docs/
    BEGINNER_GUIDE.md        Plain-English glossary
    CHANGELOG.md             Record of meaningful changes
    DECISIONS.md             Agreed project decisions
    NEXT_STEPS.md            Current status and immediate next step
  References/               Existing reference folder, left unchanged
```

A folder groups files. A file is one saved item. A web server delivers webpage files to a browser. It normally treats `index.html` as the default webpage within a folder: `/cv/` therefore displays `cv/index.html`.

## Check the page

For `/resume/`, check the identity area, Sunspectra emphasis, and section links. On desktop there are two columns; on tablet and phone, there is one vertical column. The section links move to parts of this same page. Email opens your email app, and Visual CV opens the existing `/cv/` page. LinkedIn is a labelled placeholder in the source file only, until an approved address is supplied.

The résumé's primary design reference is https://brittanychiang.com/: persistent desktop identity, a long content column, date-led experience entries, skill labels, and restrained hover feedback. The résumé uses original code, approved Ayaisha content, system fonts, a charcoal background, and a warm accent. It loads its own appearance file so the visual CV is unaffected. No page JavaScript, extra website libraries, or build tools are used.

Confirm the address is http://localhost:8000/cv/. Look for the CV and the Canva link. Resize the browser window to check that the surrounding page fits without sideways scrolling. Press Tab to move keyboard focus to the fallback link, and Enter to open it. Canva controls the CV content and any controls inside its display area.

The real Canva code is already included. To replace it later, open the CV design in Canva, choose Share, then Embed (possibly under More or See all), and copy the HTML embed code. The wording can vary. The labelled comment in `cv/index.html` marks the display area. Keep the fallback link and an accessible description on the embedded window.

See `docs/BEGINNER_GUIDE.md` for definitions and `docs/NEXT_STEPS.md` for the remaining check.
