import Head from "next/head";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <title>입주청소 이사청소 전문 TURBO CLEAN 털보클린</title>
        <meta
          name="description"
          content=" 이사와 입주, 리모델링, 준공청소, 사무실청소, 새로운 계절을 맞이하기 위한 대청소 등 다양한 청소를 올클린과 함께하시면 더욱 밝고 깨끗하게 만들어드립니다. 인천, 안산, 수원, 광명 등 수도권 전국 입주청소, 이사청소, 대청소 올클린 서비스"
        />
        <meta name="application-name" content="털보클린 청소 서비스" />
        <meta name="author" content="털보클린 입주청소" />
        <meta
          name="keyword"
          content="이사청소, 입주청소, 사무실청소, 대청소, 청소대행, 입주청소, 안산 청소, 인천 청소, 수원 청소, 광명 청소, 대청소, 수도권 청소, 경기 청소, 전국 청소, 서울 청소"
        />
        <meta property="og:url" content="https://turboclea-n.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="털보클린 이사, 입주, 사무실 청소 TURBO CLEAN 꺠끗한 공간 행복한 시작"
        />
        <meta
          property="og:description"
          content="프로페셔널한 입주, 이사, 사무실 청소로 당신의 새 시작을 완벽하게 지원합니다. 이사와 입주, 리모델링, 새로운 계절을 맞이하기 위한 대청소를 올클린과 함께하세요"
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

        <link rel="canonical" href="https://turboclea-n.com" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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