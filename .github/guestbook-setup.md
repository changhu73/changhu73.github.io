# 主页留言板维护

主页的留言由 giscus 保存到本仓库 `changhu73/changhu73.github.io` 的 GitHub Discussions，分类为 `Announcements`。主页的 Comments 模块和 `/comments/` 完整页面共同使用本仓库 Discussion #16；每条顶层评论是一条留言。访客登录 GitHub 后可以留言、回复和表态。

- giscus App 必须安装在本仓库，拥有 Discussions 读写权限；仓库和 Discussions 必须保持公开。
- 仓库与分类的 ID 已写入根目录 `_config.yml` 的 `comments.giscus`。若更换仓库或分类，使用 https://giscus.app/zh-CN 重新获取对应 ID。
- 留言区的 GitHub Discussions 链接指向 Discussion #16。站点管理员在 GitHub 管理或删除留言；giscus 嵌入界面本身没有删除按钮。
- 网站不存储 GitHub OAuth 密钥。不要把个人访问令牌或 giscus 安装凭据提交到本仓库。
