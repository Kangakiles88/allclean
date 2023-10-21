import React from "react";
import Link from "next/link";
import Image from "next/image";

const TitleBox = () => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <span className="flex max-h-full max-w-full items-center justify-center">
          <Image src={"/titleboximg.jpg"} width={620} height={1000} />
        </span>
        <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
      </div>

      <h1 className="mt-8 mb-4 text-black/75 text-base font-bold uppercase tracking-widest">
        털보클린 입주청소 갤러리
      </h1>
      <p className="max-w-[40ch] text-black/75 sm:max-w-[32ch]">
        청결이 필요한 모든 곳에 털보클린이 함께합니다. 전문적인 관리로 건강하고
        편안한 환경을 만들어드립니다.
        <br /> 털보클린 입주청소 지금 함께 하세요
      </p>
      <Link
        href="/"
        className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
      >
        Contact
      </Link>
    </>
  );
};

export default TitleBox;
