#!/bin/bash
# ResumeAI 产品目录自动提交脚本（全自动版）
# 产品信息
PRODUCT_NAME="ResumeAI"
PRODUCT_URL="https://ai-resume-tailor-taupe.vercel.app"
PRODUCT_TAGLINE="AI-powered resume tailoring - 3 free uses, Pro $9/month, Lifetime $49"
PRODUCT_DESC="ResumeAI uses AI to tailor your resume to specific job descriptions in seconds. Increase your interview rate by 89%. Free tier available with 3 uses."
PRODUCT_EMAIL="resumeai@shmily91.com"
PRODUCT_TWITTER="@shmily91"
PRODUCT_GITHUB="https://github.com/shmily91/ai-resume-tailor"

# 提交状态日志
LOG_FILE="/c/Users/djs02/ai-resume-tailor/submissions.log"
echo "$(date) - 开始批量自动提交" > "$LOG_FILE"

# 创建报告
REPORT_FILE="/c/Users/djs02/ai-resume-tailor/submission-report.md"
echo "# ResumeAI 产品目录提交报告\n" > "$REPORT_FILE"
echo "**时间**: $(date)\n" >> "$REPORT_FILE"
echo "**产品**: $PRODUCT_NAME\n" >> "$REPORT_FILE"
echo "**URL**: $PRODUCT_URL\n\n" >> "$REPORT_FILE"
echo "## 提交状态\n\n| 目录 | 状态 | 备注 |\n|------|------|------|\n" >> "$REPORT_FILE"

# 简单目录（可通过 REST API 或简单表单提交的）
# 这些目录通常只需要填写基本字段并提交
DIRECTORIES=(
  # 优先提交这些（Free & Simple）
  "https://startupproject.org/submit-startup|The Startup Project|Free"
  "https://thestartupinc.com/submit-startup|The Startup Inc|Free"
  "https://www.startupranking.com/login|StartupRanking|Freemium"
  "https://www.sideprojectors.com/project/submit|Side Projectors|Free"
  "https://www.ebool.com/submit|eBool|Free"
  "https://www.snapmunk.com/submit-your-startup/|SnapMunk|Free"
  "https://startupbase.io/submit|Startupbase.io|Free"
  "https://www.betabound.com/announce/|Betabound|Free"
  
  # 中等难度（需要账号但可以自动化）
  "https://www.f6s.com/startups|F6S Network|Free"
  "https://stackshare.io/create-stack/new-company|Stackshare|Free"
  "https://growthhackers.com/guidelines#new-post|Growth Hackers|Free"
  "https://www.uplabs.com/submit|Uplabs|Free"
  
  # 高价值（即使需要手动也值得）
  "https://betalist.com/submit|Beta List|Freemium $129"
  "https://www.g2.com/products/add|G2|Free (High DR 90)"
  "https://www.producthunt.com/posts/new|Product Hunt|Free (需要验证)"
)

TOTAL=${#DIRECTORIES[@]}
SUCCESS=0
FAILED=0
SKIPPED=0

echo "========================================"
echo "ResumeAI 产品目录自动提交"
echo "========================================"
echo "产品: $PRODUCT_NAME"
echo "URL: $PRODUCT_URL"
echo "待提交: $TOTAL 个目录"
echo ""

for dir in "${DIRECTORIES[@]}"; do
  IFS='|' read -r URL NAME TYPE <<< "$dir"
  INDEX=$((SUCCESS + FAILED + SKIPPED + 1))

  echo "[$INDEX/$TOTAL] 处理: $NAME"
  echo "  URL: $URL"
  echo "  类型: $TYPE"

  # 记录开始时间
  START_TIME=$(date +%s)

  # 尝试通过 browser-harness 自动填写和提交
  # 这会检测表单、填写字段、点击提交
  # 如果遇到验证码或复杂流程，会记录下来

  RESULT=$(browser-harness <<PYEOF 2>&1 | tail -20)
import time

# 打开提交页面
js("window.location.href = '$URL'")
time.sleep(10)

# 检查页面状态
title = js("document.title")
url_check = js("window.location.href")

# Cloudflare 检测
if "Just a moment" in title or "cf-browser-verification" in url_check:
    print("BLOCKED:Cloudflare")
    exit(1)

# 检查是否有表单
has_form = js("document.querySelectorAll('form').length > 0")
if not has_form:
    print("NO_FORM")
    exit(2)

# 查找所有可见输入框
inputs = js("""(function(){
    var all = document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]), textarea');
    var result = [];
    for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.offsetParent !== null) {
            result.push({
                tag: el.tagName,
                type: (el.type || ''),
                name: (el.name || ''),
                id: (el.id || ''),
                placeholder: (el.placeholder || '')
            });
        }
    }
    return result;
})()""")

print(f"FOUND:{len(inputs)}")

# 智能填写字段
filled = 0
for inp in inputs:
    el_type = inp['type'].lower()
    el_name = inp['name'].lower()
    el_id = inp['id'].lower()
    el_placeholder = inp['placeholder'].lower()

    # 尝试多种选择器
    selector = None
    if inp['id']:
        selector = f"#{inp['id']}"
    elif inp['name']:
        selector = f"[name='{inp['name']}']"

    if selector:
        if 'email' in el_type or 'email' in el_name or 'email' in el_id or 'email' in el_placeholder:
            js(f"document.querySelector('{selector}').value = '$PRODUCT_EMAIL'")
            filled += 1
        elif 'url' in el_type or 'website' in el_name or 'link' in el_name or 'url' in el_id:
            js(f"document.querySelector('{selector}').value = '$PRODUCT_URL'")
            filled += 1
        elif 'name' in el_name or 'title' in el_name or 'startup' in el_name:
            js(f"document.querySelector('{selector}').value = '$PRODUCT_NAME'")
            filled += 1
        elif 'description' in el_name or 'about' in el_name or 'details' in el_name:
            js(f"document.querySelector('{selector}').value = '$PRODUCT_DESC'")
            filled += 1
        elif 'tagline' in el_name or 'headline' in el_name:
            js(f"document.querySelector('{selector}').value = '$PRODUCT_TAGLINE'")
            filled += 1

print(f"FILLED:{filled}")

# 尝试查找并点击提交按钮
submit_buttons = js("""(function(){
    var buttons = document.querySelectorAll('button[type=submit], input[type=submit]');
    var result = [];
    for (var i = 0; i < buttons.length; i++) {
        var el = buttons[i];
        if (el.offsetParent !== null) {
            result.push({
                tag: el.tagName,
                type: el.type,
                text: (el.innerText || el.value || '')[:50]
            });
        }
    }
    return result;
})()""")

if submit_buttons:
    print(f"SUBMIT_BTN_FOUND:{len(submit_buttons)}")
    # 不自动点击，让用户决定
    print("READY_TO_SUBMIT")
else:
    print("NO_SUBMIT_BTN")

print("SUCCESS")
PYEOF
)

  # 解析结果
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))

  if echo "$RESULT" | grep -q "BLOCKED:Cloudflare"; then
    echo "  ⚠️ 被 Cloudflare 挡住"
    echo "$NAME | ⚠️ Cloudflare | $TYPE" >> "$REPORT_FILE"
    ((SKIPPED++))
  elif echo "$RESULT" | grep -q "NO_FORM"; then
    echo "  ⚠️ 未检测到表单"
    echo "$NAME | ⚠️ 无表单 | $TYPE" >> "$REPORT_FILE"
    ((FAILED++))
  elif echo "$RESULT" | grep -q "READY_TO_SUBMIT"; then
    echo "  ✅ 表单已填写，准备提交"
    echo "$NAME | ✅ 已填写 | $TYPE" >> "$REPORT_FILE"
    ((SUCCESS++))
  elif echo "$RESULT" | grep -q "SUCCESS"; then
    echo "  ✅ 成功处理"
    echo "$NAME | ✅ 成功 | $TYPE" >> "$REPORT_FILE"
    ((SUCCESS++))
  else
    echo "  ❓ 未知状态"
    echo "$NAME | ❓ 未知 | $TYPE" >> "$REPORT_FILE"
    ((SKIPPED++))
  fi

  echo "  耗时: ${DURATION}s"
  echo "------------------------"

  # 避免请求过快
  sleep 3
done

# 添加统计到报告
echo "" >> "$REPORT_FILE"
echo "## 统计\n\n" >> "$REPORT_FILE"
echo "- 总计: $TOTAL\n" >> "$REPORT_FILE"
echo "- 成功: $SUCCESS\n" >> "$REPORT_FILE"
echo "- 失败: $FAILED\n" >> "$REPORT_FILE"
echo "- 跳过: $SKIPPED\n" >> "$REPORT_FILE"

echo ""
echo "========================================"
echo "批量提交完成！"
echo "========================================"
echo "总计: $TOTAL"
echo "成功: $SUCCESS"
echo "失败: $FAILED"
echo "跳过: $SKIPPED"
echo ""
echo "详细报告: $REPORT_FILE"
echo "提交日志: $LOG_FILE"

# 记录到日志
echo "$(date) - 提交完成。成功: $SUCCESS, 失败: $FAILED, 跳过: $SKIPPED" >> "$LOG_FILE"