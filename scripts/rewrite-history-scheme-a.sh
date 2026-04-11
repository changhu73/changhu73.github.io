#!/usr/bin/env bash
# Scheme A: 将当前仓库历史重写为「只有一个 Initial commit」的 main，并强推远端。
# 使用前请确认：你已备份、接受协作者需重新 clone、fork/PR 历史会断裂等后果。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "错误：当前目录不是 git 仓库：$ROOT" >&2
  exit 1
fi

REMOTE="${1:-origin}"
BRANCH="${2:-main}"

BACKUP="backup/main-before-rewrite-$(date +%Y%m%d-%H%M%S)"
echo "==> 在旧 $BRANCH 上创建备份分支：$BACKUP"
git branch "$BACKUP" "$BRANCH"

echo "==> 当前状态（含未提交改动将一并进入新初始提交）"
git status -sb

echo "==> 创建 orphan 分支 clean-main 并提交全部文件"
git checkout --orphan clean-main
git add -A
git commit -m "Initial commit"

echo "==> 将 clean-main 重命名为 $BRANCH"
git branch -M clean-main "$BRANCH"

echo "==> 强推到 $REMOTE/$BRANCH（需要网络与写权限）"
git push -f "$REMOTE" "$BRANCH"

echo "==> 完成。最近提交："
git log -3 --oneline

echo "==> 备份分支（本地）："
git branch --list 'backup/*' || true
