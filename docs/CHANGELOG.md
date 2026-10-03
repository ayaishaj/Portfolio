# Change record

## 2026-10-03

- Created the initial `/cv/` webpage with a page title, description, and accessible Canva display window.
- Added centered styling with a maximum width and sizing that follows the supplied Canva proportions.
- Included Ayaisha's real Canva Embed HTML address, removing pasted formatting escapes and moving appearance rules into the CSS file.
- Kept the original Canva share link as an always-available fallback.
- Added a Windows preview launcher that tries `py` then `python`, uses port 8000, opens `/cv/`, and explains missing Python without installing anything.
- Added beginner documentation, project decisions, current status, and permanent Codex instructions.
- Verification results are recorded in `NEXT_STEPS.md`; displaying the Canva CV must not be assumed from the presence of its code.
- Verified required files, local page and styling delivery, the exact fallback address, keyboard focus, and page sizing at four screen widths. Verified the launcher's missing-Python behavior. The test browser's Canva request was denied by the environment, so actual CV display and a successful double-click launch remain unconfirmed.
