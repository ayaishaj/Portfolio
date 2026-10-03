# Beginner guide

These concepts describe files on your own computer unless explicitly stated otherwise.

| Term | Plain-English meaning |
| --- | --- |
| Website | A collection of webpages, often connected by links. This project currently has one implemented page. |
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
- `py -c "import http.server"` checks whether the Windows Python launcher can load Python's included server tool. If it works, the check is silent and changes no project files. The equivalent check using `python` runs only if the first check fails.
- `py -m http.server 8000 --bind 127.0.0.1` starts Python's included local server on port 8000, restricted to your own computer. `python -m http.server 8000 --bind 127.0.0.1` does the same through the other Python command. Expect a server message followed by records of webpage requests.
- `start` opens a separate server window, and later your default browser. It does not install software.
- `timeout /t 3 /nobreak` waits about three seconds to give the server time to start. It does not change files.

The address http://localhost:8000/cv/ requests the `cv` folder's default page, `index.html`. That page asks for `css/main.css` to apply the appearance rules and asks Canva to display the supplied CV. An internet connection and Canva's availability are needed for that last part.
