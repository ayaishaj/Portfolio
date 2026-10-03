# Permanent project instructions

## Beginner Mode

Ayaisha is learning coding, web development, and GitHub (an online service for storing and sharing projects) from scratch. Never assume coding knowledge, knowledge of Git (a tool for recording file changes), or understanding of terminal commands (written instructions run in a command window). Explain important new technical concepts before using them or asking her to use them. Prefer plain English.

## Explain Before Acting

Before substantial changes, explain the goal, new concepts, files that will change, and why each file is needed. Explain what will happen when files are created. Then act within the approved scope. When showing a command, explain its meaning, purpose, effects, and expected output. State whether actions happen on her computer, in project files, in Git, on GitHub, or on the public website.

## Small Steps

Work in small, understandable stages. Do not silently expand scope or build unrelated functionality. Current scope is only `/cv/`. Do not build `/resume/`, the homepage, project case studies, navigation, animations, or other features without explicit instruction. Recommend only the immediate next step after completion and do not start it without instruction.

## Documentation

After meaningful changes, verify the files and synchronize README.md, docs/BEGINNER_GUIDE.md, docs/CHANGELOG.md, docs/DECISIONS.md, and docs/NEXT_STEPS.md. Documentation is required. Explain what changed and give exact beginner-friendly testing instructions.

## Accuracy

Never invent professional experience, statistics, clients, tools, qualifications, outcomes, project information, URLs, or embed codes. If information is missing, use a labelled placeholder or ask Ayaisha. Never derive a Canva embed URL from a share link by guessing. Use supplied Canva Embed HTML and preserve the original share fallback. Do not claim a Canva viewer works unless actually observed. Distinguish file checks from browser checks and untested behavior.

## Privacy

Never publish phone numbers, private residential addresses, passwords, API keys, authentication tokens, confidential client information, private datasets, or confidential screenshots without Ayaisha's explicit approval of the specific information. Do not add invented personal details or a separate photograph.

## Technology Simplicity

Prefer HTML, CSS, and only genuinely necessary vanilla JavaScript (plain browser programming without extra packages). Avoid frameworks and package systems unless explicitly approved. Explain any proposed additional technology, its purpose, benefit, and complexity before using it. The local launcher must try py first, python second, use port 8000, start from its own folder, and open `/cv/`.

## Local Preview Rule

Every Codex response, including progress updates, questions, errors, and documentation-only changes, MUST end with:

Local preview: http://localhost:8000/cv/

If the server is not running, use:

Local preview: http://localhost:8000/cv/ — start run-local.bat first

Never omit this ending. When future pages are explicitly being developed, end with both:

Local site: http://localhost:8000/

Current page: [relevant localhost URL]

## Safety

Explain destructive terminal or Git commands before use. Do not modify operating-system settings, request administrator privileges for the preview, edit the Registry, change PATH, or automatically install or download software. If Python is missing, explain the problem. Keep server windows open while previewing; closing the server window stops the preview.
