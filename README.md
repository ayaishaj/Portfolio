# Ayaisha Portfolio

This project will eventually present Ayaisha's own work. For now, only the first CV webpage at `/cv/` exists. The homepage, `/resume/`, and project pages have not been built.

HTML describes a webpage's content and structure. CSS controls how it looks and fits different screen sizes. This site uses plain HTML and CSS, with no additional page programming required.

The CV page contains the actual Canva display code supplied by Ayaisha, with its original design address. It also has a "View CV on Canva" link using https://canva.link/8f87e4ifjle92k9. Including the code does not by itself prove Canva will display it: see `docs/NEXT_STEPS.md` for verification status.

## Start the preview on your computer

1. Open `D:\Github Repo\Portfolio` in File Explorer, the Windows app for browsing your files.
2. Double-click `run-local.bat`.
3. A Command Prompt window (a Windows window that runs written instructions) will start the local server. A local server lets your browser display the project as a website on your own computer.
4. Your browser should open http://localhost:8000/cv/ after a short wait.
5. Keep the separate server window open while testing. Closing it stops this local server.

The launcher tries the Windows Python launcher named `py` first, then `python`. Python is a programming language with an included tool for serving local webpages. The file checks that this tool can actually run. If neither works, it displays a friendly message and waits so you can read it. It installs nothing and changes no Windows settings.

Localhost means your own computer. The number 8000 is a port, a numbered doorway through which your browser reaches this server. The server is restricted to this computer. This preview does not publish the website.

If you see an error that port 8000 is already in use, look for an existing preview window. Use that preview if it belongs to this project; otherwise close the known conflicting server before trying again. Do not repeatedly double-click the launcher while a preview is already running.

## Current folder structure

```text
Portfolio/
  AGENTS.md                 Instructions for Codex
  README.md                 This project overview
  run-local.bat             Windows preview launcher
  cv/
    index.html              The CV webpage
  css/
    main.css                Its appearance and screen-size rules
  docs/
    BEGINNER_GUIDE.md        Plain-English glossary
    CHANGELOG.md             Record of meaningful changes
    DECISIONS.md             Agreed project decisions
    NEXT_STEPS.md            Current status and immediate next step
  References/               Existing reference folder, left unchanged
```

A folder groups files. A file is one saved item. A web server delivers webpage files to a browser. It normally treats `index.html` as the default webpage within a folder: `/cv/` therefore displays `cv/index.html`.

## Check the page

Confirm the address is http://localhost:8000/cv/. Look for the CV and the Canva link. Resize the browser window to check that the surrounding page fits without sideways scrolling. Press Tab to move keyboard focus to the fallback link, and Enter to open it. Canva controls the CV content and any controls inside its display area.

The real Canva code is already included. To replace it later, open the CV design in Canva, choose Share, then Embed (possibly under More or See all), and copy the HTML embed code. The wording can vary. The labelled comment in `cv/index.html` marks the display area. Keep the fallback link and an accessible description on the embedded window.

See `docs/BEGINNER_GUIDE.md` for definitions and `docs/NEXT_STEPS.md` for the remaining check.
