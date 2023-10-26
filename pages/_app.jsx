import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import getConfig from "next/config";

import "../styles/globals.css";

const jsonLdData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "털보클린",
  url: "http://www.turboclea-n.com",
  sameAs: [
    "https://www.instagram.com/turboclea_n",
    "http://blog.naver.com/allclean_",
  ],
};

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    // 페이지 로드 후 JSON-LD 스크립트를 추가
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLdData); // 정의한 데이터 사용
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return (
    <>
      <Script
        id="gtag-manager"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      ></Script>
      <Script
        id="gtag-inline-script"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `,
        }}
      />
      <Script type="text/javascript" src="//wcs.naver.net/wcslog.js"></Script>
      <Script
        id="naver-script"
        dangerouslySetInnerHTML={{
          __html: `
      if(!wcs_add) var wcs_add = {};
      wcs_add["wa"] = "1d699130be5ab60";
      if(window.wcs) {
        wcs_do();
      }
    `,
        }}
      />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://turboclea-n.com" />
        <title>
          서울, 인천, 수도권 입주청소 이사청소 전문 털보클린-깨끗한 공간, 행복한
          시작
        </title>
        <link rel="icon" href={publicRuntimeConfig.favicon} />
        <meta
          name="description"
          content="서울, 인천, 수도권, 충청도 입주청소 전문 털보클린. 입주, 이사, 리모델링, 사무실, 준공, 대청소 - 깨끗한 공간, 행복한 시작. 이사청소 입주청소 문의."
        />
        <meta name="application-name" content="털보클린 청소 서비스" />
        <meta name="author" content="털보클린 입주청소" />
        <meta
          name="keywords"
          content="이사청소, 입주청소, 사무실청소, 대청소, 청소대행, 안산 입주청소, 인천 입주청소, 수원 입주청소, 광명 입주청소, 대청소, 수도권 입주청소, 경기 입주청소, 전국 입주청소, 서울 입주청소"
        />
        <meta property="og:url" content="https://turboclea-n.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="털보클린 이사, 입주, 사무실 청소 TURBO CLEAN 깨끗한 공간 행복한 시작"
        />
        <meta
          property="og:description"
          content="프로페셔널한 입주, 이사, 사무실 청소로 당신의 새 시작을 완벽하게 지원합니다. 이사와 입주, 리모델링, 새로운 계절을 맞이하기 위한 대청소를 털보클린과 함께하세요."
        />
        <meta property="og:image" content="/ogImage.png" />
        <meta
          name="google-site-verification"
          content="xQQPRPE-xzW3X661sjOPJH2u3o4YEebOA5jeU_Sz-_o"
        />
        <meta
          name="naver-site-verification"
          content="713835fa0e8b06eb884d5e39b6f9aeb1527598d8"
        />
        <meta name="geo.region" content="KR-GG" />
        <meta name="content-language" content="ko" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
