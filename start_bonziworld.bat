@echo off
echo Starting..
start ./server/bot/start.bat
:b
node index.js
goto b
pause