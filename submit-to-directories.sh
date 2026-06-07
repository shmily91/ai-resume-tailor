#!/bin/bash
# ResumeAI 自动提交到产品目录脚本

# 产品信息
PRODUCT_NAME="ResumeAI"
PRODUCT_URL="https://ai-resume-tailor-taupe.vercel.app"
PRODUCT_TAGLINE="AI-powered resume tailoring - 3 free uses, Pro $9/month, Lifetime $49"
PRODUCT_DESC="ResumeAI uses AI to tailor your resume to specific job descriptions in seconds. Increase your interview rate by 89%. Free tier available with 3 uses."
PRODUCT_EMAIL="resumeai@shmily91.com"

echo "ResumeAI 自动提交脚本"
echo "======================="
echo "产品: $PRODUCT_NAME"
echo "URL: $PRODUCT_URL"
echo ""

# 简单目录列表（可直接通过浏览器填写）
SIMPLE_DIRECTORIES=(
  "https://startupproject.org/submit-startup|The Startup Project"
  "https://thestartupinc.com/submit-startup|The Startup Inc"
)

echo "需要提交的目录: ${#SIMPLE_DIRECTORIES[@]} 个"
echo ""

# 记录提交状态
LOG_FILE="/c/Users/djs02/ai-resume-tailor/submissions.log"
echo "$(date) - 开始批量提交" > "$LOG_FILE"

for dir in "${SIMPLE_DIRECTORIES[@]}"; do
  URL="${dir%%|*}"
  NAME="${dir##*|}"

  echo "[$(date '+%H:%M:%S')] 处理: $NAME"
  echo "URL: $URL"

  # 使用 browser-harness 填写表单
  browser-harness <<PY_END
import time

# 打开提交页面
js("window.location.href = '$URL'")
time.sleep(8)

# 查找所有可见输入框
inputs = js("""(function(){
    var all = document.querySelectorAll('input, textarea, select');
    var result = [];
    for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.offsetParent !== null && el.type !== 'submit' && el.type !== 'hidden') {
            result.push({
                tag: el.tagName,
                type: el.type,
                name: el.name,
                id: el.id,
                placeholder: el.placeholder || ''
            });
        }
    }
    return result;
})()""")

print(f"找到 {len(inputs)} 个字段")
for i, inp in enumerate(inputs):
    print(f"  {i+1}. {inp['type']} - name={inp['name']} id={inp['id']}")

# 智能填写字段
for inp in inputs:
    el_id = inp['id'] or inp['name']
    el_type = inp['type'].lower()

    if el_type == 'email' or 'email' in inp['name'].lower() or 'email' in inp['id'].lower():
        js(f"document.querySelector('#{el_id}').value = '$PRODUCT_EMAIL'")
        print(f"  ✓ 填写邮箱")
    elif el_type == 'url' or 'url' in inp['name'].lower() or 'website' in inp['name'].lower():
        js(f"document.querySelector('#{el_id}').value = '$PRODUCT_URL'")
        print(f"  ✓ 填写网站 URL")
    elif el_type == 'text' and 'name' in inp['name'].lower():
        js(f"document.querySelector('#{el_id}').value = '$PRODUCT_NAME'")
        print(f"  ✓ 填写产品名称")

# 等待用户确认
print("\n表单已自动填写，请检查并手动点击提交按钮")
PY_END

  echo "状态: 已打开浏览器，请检查填写内容并提交"
  echo "------------------------"

  # 等待用户手动操作
  read -p "完成提交后按 Enter 继续..." -t 60 || echo "超时，继续下一个"

  echo "$NAME - 已处理" >> "$LOG_FILE"
  echo ""
done

echo "======================="
echo "批量提交完成！"
echo "详细日志: $LOG_FILE"