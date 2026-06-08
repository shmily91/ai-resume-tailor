'use client';

import { GA_ID } from '@/lib/analytics';
import Script from 'next/script';

/**
 * Google Analytics 脚本组件
 * 自动初始化 Google Analytics 追踪
 */
export default function GoogleAnalytics() {
  if (!GA_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}