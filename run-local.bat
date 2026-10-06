@echo off
cd /d "%~dp0"

echo.
echo Ayaisha Portfolio Local Server
echo --------------------------------
echo Local site: http://localhost:8000/
echo CV page:    http://localhost:8000/cv/
echo.
echo Keep this window open while using the local preview.
echo Close this window to stop the server.
echo.

python -m http.server 8000