# Script: Khởi động web server và Bot tự động đăng nhập cùng lúc
# Cách chạy: Mở PowerShell ở thư mục dự án, gõ: .\start.ps1

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "   SINH HOC 3D - KHOI DONG HE THONG TU DONG" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor Cyan

# Bước 1: Khởi động Vite Dev Server trong cửa sổ mới
Write-Host ""
Write-Host "[1/2] Dang khoi dong Vite Dev Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WorkingDirectory (Get-Location)

# Bước 2: Đợi 5 giây để server khởi động xong
Write-Host "      Dang doi server khoi dong (5 giay)..." -ForegroundColor DarkYellow
Start-Sleep -Seconds 5

# Bước 3: Chạy Bot Puppeteer
Write-Host "[2/2] Dang chay Bot tu dong dang nhap..." -ForegroundColor Green
Write-Host ""
Set-Location -Path "puppeteer-bot"
node bot.js
