import React from "react";
import HeroAnimation from "../animations/heroAnimation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col after:items-center border-b-2">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-600">
            All Clean
          </h1>
          <h3 className="title-font sm:text-2xl text-1.5xl mb-1">
            깨끗한 공간, 행복한 시작
          </h3>
          <h3 className="title-font sm:text-2xl text-1.5xl mb-1">
            당신의 새로운 시작을 위한 완벽한 청소 서비스{" "}
          </h3>
          <h3 className="title-font sm:text-2xl text-1.5xl mb-6">
            {" "}
            올클린에게 맡겨주세요
          </h3>
          <p className="mb-8 leading-relaxed">
            프로페셔널한 청소로 당신의 새 시작을 완벽하게 지원합니다. 이사와
            입주, 리모델링, 새로운 계절을 맞이하기 위한 대청소 등 다양한 청소를
            올클린과 함께하시면 더욱 밝고 깨끗하게 만들어드립니다. 전문성을 갖춘
            올클린과 함께하시면 깨끗한 시작을 맞이할 수 있습니다.
          </p>
          <div className="flex justify-center">
            <Link
              href="tel:+821067554922"
              className="inline-flex text-white bg-slate-900  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              견적문의
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center rounded-lg bg-white text-center shadow-xl shadow-black/5 dark:shadow-black/30">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;
