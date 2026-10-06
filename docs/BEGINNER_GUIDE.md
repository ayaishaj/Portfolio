# Beginner guide

These concepts describe files on your own computer unless explicitly stated otherwise.

| Term | Plain-English meaning |
| --- | --- |
| Website | A collection of webpages, often connected by links. This project currently has two implemented pages. |
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
- `python -m http.server 8000` starts Python's included tool for delivering local webpage files on port 8000. Expect a server message followed by records of webpage requests. The current launcher uses this command in the same window; it changes no project files and installs nothing.

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

The introductory profile and overall skills list can be updated independently of past job descriptions. Changing those lists does not rewrite the tools recorded under individual jobs or edit the Canva CV. Refresh your browser after saving a page change to see the latest wording.
