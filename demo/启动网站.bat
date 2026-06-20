@echo off
chcp 65001 >nul
cd /d "d:\桌面\demo"
echo 正在启动 Python 学习网站...
start "" "http://localhost:8899"
node server.js
pause
