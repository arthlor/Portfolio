'use client';
import Script from 'next/script';

const GoogleAnalytics = ({ gaId }: { gaId: string }) => (
  <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `}
    </Script>
  </>
);
export default GoogleAnalytics; 