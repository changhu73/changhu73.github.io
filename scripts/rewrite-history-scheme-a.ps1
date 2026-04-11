# Scheme A (PowerShell): 备份当前 main -> orphan 单提交 -> 重命名 main -> 强推
# 用法：在仓库根目录执行： .\scripts\rewrite-history-scheme-a.ps1
# 可选参数：.\scripts\rewrite-history-scheme-a.ps1 -Remote origin -Branch main

param(
  [string]$Remote = "origin",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

if (-not (Test-Path ".git")) {
  Write-Error "当前目录不是 git 仓库：$(Get-Location)"
}

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backup = "backup/main-before-rewrite-$stamp"

Write-Host "==> 创建备份分支 $backup <- $Branch"
git branch $backup $Branch

Write-Host "==> 当前状态"
git status -sb

Write-Host "==> orphan + 全量提交"
git checkout --orphan clean-main
git add -A
git commit -m "Initial commit"

Write-Host "==> 重命名为 $Branch"
git branch -M clean-main $Branch

Write-Host "==> 强推 $Remote/$Branch"
git push -f $Remote $Branch

Write-Host "==> 最近提交"
git log -3 --oneline

Write-Host "==> 备份分支"
git branch | Select-String "^  backup/"
