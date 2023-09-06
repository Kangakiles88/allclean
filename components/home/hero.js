import React from "react";
import HeroAnimation from "../animations/heroAnimation";
import Link from "next/link";
import styles from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles.hero}>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="w-full flex flex-col text-center items-center justify-center z-10">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 font-bold text-sky-600">
            A L L C L E A N{" "}
            <span className="text-white">- 깨끗한 공간, 행복한 시작</span>
          </h1>

          <h3 className="text-white text-[0.8rem]  sm:text-[0.8rem] md:text-1xl lg:text-2xl  mb-1">
            당신의 새로운 시작을 위한 완벽한 청소 서비스{" "}
          </h3>
          <h3 className="text-white text-[0.8rem]  sm:text-[0.8rem] md:text-1xl lg:text-2xl  mb-6">
            {" "}
            올클린에게 맡겨주세요
          </h3>

          <div className="flex justify-center">
            <Link
              href="tel:01099204922"
              className="inline-flex text-white bg-sky-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              전화 상담하기
            </Link>
          </div>
          <div className="text-white w-1/2 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-2xl">
            <p className="mt-10  leading-relaxed">
              프로페셔널한 청소로 당신의 새 시작을 완벽하게 지원합니다. 이사와
              입주, 리모델링, 새로운 계절을 맞이하기 위한 대청소 등 다양한
              청소를 올클린과 함께하시면 더욱 밝고 깨끗하게 만들어드립니다.
              전문성을 갖춘 올클린과 함께하시면 깨끗한 시작을 맞이할 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
