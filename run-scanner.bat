@echo off
echo.
echo Preparing AV Sync Scanner...
echo.

REM Install dependencies locally
call npm install local-devices axios --silent

echo.
echo 🚀 Running Network Scanner...
echo.

REM Run the scanner
node avsync-scanner.js

echo.
pause