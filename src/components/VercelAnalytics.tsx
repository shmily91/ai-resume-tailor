'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

/**
 * Vercel Analytics 组件
 * 自动追踪页面浏览量、访客数等数据
 * 集成到 layout.tsx 中使用
 */
export default function Analytics() {
  return <VercelAnalytics />;
}