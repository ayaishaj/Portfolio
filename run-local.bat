@echo off
cd /d "%~dp0"
echo Ayaisha Portfolio Local Server
echo Local site: http://localhost:8000/
echo CV page: http://localhost:8000/cv/
echo Keep this window open while using the preview. Closing it stops the server.
where py >nul 2>nul
if not errorlevel 1 (
  start "" http://localhost:8000/cv/
  py -m http.server 8000
  goto :end
)
where python >nul 2>nul
if not errorlevel 1 (
  start "" http://localhost:8000/cv/
  python -m http.server 8000
  goto :end
)
echo Python was not found. Please ask for help setting up the local preview.
pause
:end
