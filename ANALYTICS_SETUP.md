# Analytics Setup Guide

## 📊 如何查看数据

### 方法 1：Vercel Analytics（已自动启用）

**查看方式：**
1. 访问 https://vercel.com
2. 登录你的账号
3. 找到项目 `ai-resume-tailor`
4. 点击 **"Analytics"** 标签

**能看到的数据：**
- 📈 访问量（Page Views）
- 👤 独立访客（Visitors）
- ⏱️ 平均访问时长
- 🌍 访客地理分布
- 📱 设备类型（桌面/移动）
- 🔗 流量来源

---

### 方法 2：Google Analytics（推荐，免费）

**优点：**
- 更详细的数据
- 实时流量监控
- 用户行为分析
- 转化追踪

**配置步骤：**

1. **创建 GA 账号**
   - 访问：https://analytics.google.com
   - 使用你的 Google 账号登录
   - 点击 "开始设置"

2. **创建媒体资源**
   - 账号名称：`ResumeAI`（任意）
   - 媒体资源名称：`ResumeAI Website`
   - 时区：选择你的时区
   - 货币：USD

3. **创建数据流**
   - 平台：Web
   - 网站网址：`https://ai-resume-tailor-taupe.vercel.app`
   - 数据流名称：`ResumeAI Production`

4. **获取 Measurement ID**
   - 创建后会显示类似：`G-XXXXXXXXXX`
   - 复制这个 ID

5. **配置环境变量（Vercel）**
   ```bash
   cd /c/Users/djs02/ai-resume-tailor
   npx vercel env add NEXT_PUBLIC_GA_ID production
   ```

   提示输入时，粘贴你的 `G-XXXXXXXXXX`

6. **部署**
   ```bash
   npx vercel --prod
   ```

7. **查看数据**
   - 访问 https://analytics.google.com
   - 点击左侧菜单的 "报告" → "实时"
   - 可以看到实时访客

---

### 方法 3：检查产品使用情况

**查看方式：**

当前产品通过 cookie 追踪用户使用次数，但**没有可视化界面**。

**查看代码：**
```bash
cat src/lib/usage.ts
```

**想要更好的追踪？我可以：**
1. ✅ 配置 Google Analytics（上面已说明）
2. ✅ 集成 Supabase 或 Vercel Postgres（持久化用户数据）
3. ✅ 创建管理后台查看使用统计
4. ✅ 集成 Stripe 付费追踪

---

### 🎯 快速开始（推荐）

**现在（立即能看到数据）：**
- 使用 Vercel Analytics
  - 访问：https://vercel.com
  - 找到 `ai-resume-tailor` 项目
  - 点击 Analytics 标签

**30 分钟内（Google Analytics）：**
1. 访问 https://analytics.google.com
2. 创建账号 + 媒体资源
3. 获取 Measurement ID
4. 告诉我 ID，我帮你配置环境变量并部署

**未来（高级分析）：**
- 创建管理后台
- 查看用户使用统计
- 付费转化追踪
- 邮件营销追踪

---

### ❓ 需要帮助？

告诉我：
1. 你想用哪种方式？（Vercel Analytics / Google Analytics）
2. 如果选择 Google Analytics，告诉我你获取到的 Measurement ID

我帮你完成配置。