/**
 * Google Analytics Configuration
 *
 * 环境变量：
 * NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (你的 GA Measurement ID)
 *
 * 获取方式：
 * 1. 访问 https://analytics.google.com
 * 2. 创建账号和媒体资源
 * 3. 在"管理" → "数据流"创建 Web 数据流
 * 4. 复制 Measurement ID (G-XXXXXXXXXX)
 * 5. 添加到 Vercel 环境变量
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

/**
 * 获取 GA 事件追踪函数
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

/**
 * 页面浏览追踪
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * 追踪简历定制事件
 */
export const trackResumeTailor = (params: {
  resumeLength: number;
  jobDescriptionLength: number;
  resultLength: number;
  tier: 'free' | 'pro';
}) => {
  trackEvent('resume_tailor', {
    resume_length: params.resumeLength,
    job_description_length: params.jobDescriptionLength,
    result_length: params.resultLength,
    tier: params.tier,
  });
};

/**
 * 追踪付费升级点击
 */
export const trackUpgradeClick = (plan: 'pro' | 'lifetime') => {
  trackEvent('upgrade_click', {
    plan,
  });
};

/**
 * 追踪博客阅读
 */
export const trackBlogRead = (blogSlug: string, blogTitle: string) => {
  trackEvent('blog_read', {
    blog_slug: blogSlug,
    blog_title: blogTitle,
  });
};