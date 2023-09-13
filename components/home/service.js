import React from "react";
import Image from "next/image";
import styles from "../../styles/service.module.css";
import Link from "next/link";
import Header from "../projects/header";
import Footer from "../projects/footer";
import ServiceMenu from "../service/serviceMenu";

const Service = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container h-[100%] flex-col mx-auto flex items-center justify-center">
          <div className={styles.service}>
            <div className="animate-fadeIn w-full flex flex-col text-center items-center justify-center">
              <h1 className="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-5xl mb-4 font-bold text-sky-500">
                O U R S E R V I C E
              </h1>

              <h2 className="text-white text-[0.8rem]  sm:text-[0.8rem] md:text-[0.9rem] lg:text-2xl  mb-1">
                Turbo Clean
              </h2>
              <p className="text-[0.5rem] text-white">
                Professional Cleaning Service
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-3/4 mb-20">
            <h2 className=" text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-5xl mb-4 font-bold text-slate-600">
              누구나 만족하는
            </h2>
            <h2 className=" text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-5xl mb-10 font-bold text-slate-600">
              털보클린 서비스
            </h2>
            <div className="flex flex-wrap items-center justify-between w-full">
              <div className="w-full sm:w-full md:w-full lg:w-1/2 text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">
                <p className="mb-10">
                  이사만으로도 충분히 받는 스트레스 저희 터보클린이
                  덜어드리겠습니다. <br /> 새로운 공간에 시작을 터보클린에게
                  맡겨주세요. <br /> 최상의 서비스로 보답하겠습니다.
                </p>

                <Link
                  href="tel:01088806076"
                  className="inline-flex text-white bg-sky-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  무료 견적 문의
                </Link>
              </div>
              <div>
                <Image
                  className="mt-20"
                  width={500}
                  height={400}
                  src="/500x300.png"
                  alt="털보클린 서비스"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto items-start justify-start w-3/4 mt-20 mb-10">
            <div className="flex flex-col">
              <h4 className=" text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-3xl mb-10 font-bold text-slate-600">
                이사, 입주 청소 서비스 안내
              </h4>
              <p className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] ">
                털보클린에서 기본으로 제공하는 청소 서비스는 다음과 같습니다.
              </p>
            </div>
          </div>

          <ServiceMenu />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
