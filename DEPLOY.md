# 🚀 ResumeAI 部署指南（5 分钟上线）

## 第一步：创建 GitHub 仓库

1. 在 Edge 浏览器打开：https://github.com/new
2. 仓库名填：`ai-resume-tailor`
3. 选 **Public**（公开）
4. **不要勾选** "Add a README file"、".gitignore"、"License"
5. 点 **Create repository**
6. 复制仓库地址（类似 `https://github.com/你的用户名/ai-resume-tailor.git`）

## 第二步：推送代码

打开 **Git Bash**（不是 CMD/PowerShell），运行：

```bash
cd C:\Users\djs02\ai-resume-tailor
git remote add origin https://github.com/你的用户名/ai-resume-tailor.git
git push -u origin master
```

会弹出 Edge 浏览器让你授权，点 **Authorize** 即可。

## 第三步：Vercel 部署

1. 在 Edge 浏览器打开：https://vercel.com
2. 点 **"Continue with GitHub"** 登录
3. 点 **"Add New → Project"**
4. 找到 `ai-resume-tailor` 仓库，点 **Import**
5. Framework Preset 确认是 **Next.js**
6. **不用改任何设置**，直接点 **Deploy**
7. 等 1-2 分钟 → 🎉 上线！

部署完成后 Vercel 会给你一个地址，类似：
`https://ai-resume-tailor-xxx.vercel.app`

## 第四步（可选但推荐）：注册 LemonSqueezy 接入支付

1. 打开 https://lemonsqueezy.com → 用 GitHub 登录
2. 创建产品：
   - **Pro Monthly**: $9/月, recurring
   - **Lifetime**: $49 一次性, one-time
3. 每个产品点进去 → **Get Checkout Link**
4. 把链接告诉我，我帮你更新到代码里

---

## 完成后把以下信息告诉我：
- ✅ GitHub 仓库地址
- ✅ Vercel 部署地址
- ✅ LemonSqueezy checkout 链接（如果注册了）

拿到地址后我会帮你：
- 更新 sitemap/SEO 配置中的域名
- 提交到 Google Search Console
- 优化 SEO 进一步引流
