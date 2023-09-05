import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, nofollow " />
        <title>입주청소 이사청소 전문 All Clean 올클린</title>
        <meta
          name="description"
          content=" 이사와 입주, 리모델링, 새로운 계절을 맞이하기 위한 대청소 등 다양한 청소를 올클린과 함께하시면 더욱 밝고 깨끗하게 만들어드립니다. 인천, 안산, 수원, 광명 등 수도권 전국 입주청소, 이사청소, 대청소 올클린 서비스"
        />
        <meta name="application-name" content="올클린 청소 서비스" />
        <meta name="author" content="올클린 입주청소" />
        <meta
          name="keyword"
          content="이사청소, 대청소, 청소대행, 입주청소, 안산 청소, 인천 청소, 수원 청소, 광명 청소, 대청소, 수도권 청소, 경기 청소, 전국 청소, 서울 청소"
        />
        <meta property="og:url" content="https://a-llclean.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RedKiwi, YouTube-based English Trainer"
        />
        <meta
          property="og:description"
          content="How could you speak English if you cannot understand it? It's time to improve your English listening skills! Try RedKiwi right now :)"
        />
        <meta property="og:image" content="redkiwi.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
