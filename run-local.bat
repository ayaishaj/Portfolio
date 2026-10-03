@echo off
setlocal
cd /d "%~dp0"
if errorlevel 1 goto folder_error

echo Ayaisha Portfolio Local Server
echo.
echo CV Preview:
echo http://localhost:8000/cv/
echo.

py -c "import http.server" >nul 2>&1
if not errorlevel 1 goto use_py
python -c "import http.server" >nul 2>&1
if not errorlevel 1 goto use_python
goto missing_python

:use_py
start "Ayaisha Portfolio Local Server - keep this window open" cmd /k "py -m http.server 8000 --bind 127.0.0.1"
goto open_preview

:use_python
start "Ayaisha Portfolio Local Server - keep this window open" cmd /k "python -m http.server 8000 --bind 127.0.0.1"
goto open_preview

:open_preview
echo Keep the separate server window open while you preview the site.
echo Closing that server window stops the local preview.
echo If the server window reports an error, read README.md for help.
timeout /t 3 /nobreak >nul
start "" "http://localhost:8000/cv/"
exit /b 0

:missing_python
echo Python could not be found or could not run its included web server.
echo This file uses Python only to run the preview on your own computer.
echo Nothing has been damaged. No software has been installed.
echo Python needs to be installed before this preview file can run.
echo After Python is installed, double-click run-local.bat again.
echo.
pause
exit /b 1

:folder_error
echo The project folder could not be opened. Nothing has been changed.
echo Keep run-local.bat inside the portfolio project folder and try again.
pause
exit /b 1
