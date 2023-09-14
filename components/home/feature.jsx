import {
  faCalendarDays,
  faHandsPraying,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Feature = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.1,
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div
          ref={ref1}
          className={`text-center mb-20 transition-opacity duration-700 ease-in-out delay-100 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-sky-600 mb-4 animate-fade-up animate-ease-linear">
            최상의 청소 서비스를 위한 우리의 약속
          </h1>

          <div className="flex mt-6 justify-center animate-once">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div
          ref={ref2}
          className={`flex flex-wrap mb-6 transition-opacity duration-700 ease-in-out delay-200 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-base text-center mb-5 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            우리는 전문성, 편의성, 그리고 안전을 통해 당신의 생활 공간을 빛나게
            만들겠다는 약속을 드립니다. <br /> 고객님의 만족과 행복이 우리의
            최우선 목표이며, 그를 위해 우리는 언제나 더 나은 서비스를 제공하기
            위해 노력하고 있습니다
          </p>
        </div>
        <div
          ref={ref3}
          className={`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 duration-700 ease-in-out delay-300 ${
            inView3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <FontAwesomeIcon className="w-8" icon={faUserTie} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-700 text-lg title-font font-bold mb-3">
                전문성과 품질
              </h2>
              <p className="leading-relaxed text-base">
                저희 털보클린 직원 일동은 엄선된 교육을 통해 고객에게 최상의
                서비스를 제공합니다. 안전하고 효과적인 청소제를 사용하여
                고객님의 공간을 더욱 깨끗하게 만들어 드립니다.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <FontAwesomeIcon className="w-8" icon={faCalendarDays} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                편의성과 가성비
              </h2>
              <p className="leading-relaxed text-base">
                온라인을 통해 편리하게 청소서비스를 예약할 수 있습니다. 숨겨진
                비용 없이 명확한 가격을 제시하고 가격대비 최상의 품질을
                제공합니다. 고객님 원하시는 일정에 최대한 맞춰서 진행합니다.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <FontAwesomeIcon className="w-8" icon={faHandsPraying} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                안전과 신뢰
              </h2>
              <p className="leading-relaxed text-base">
                저희 털보클린 청소 서비스는 고객들의 만족도가 높고 신뢰성을
                보장합니다. 현장에 맞는 맞춤형 청소 기법을 통해 최상의 컨디션을
                끌어올리기 위하여 노력하고 있습니다.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <Link
          ref={ref4}
          href="tel:01088806076"
          className={`w-[140px] h-[40px] flex items-center justify-center mx-auto mt-16 text-white bg-indigo-500 border-0  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg duration-700 ease-in-out delay-400 ${
            inView4 ? "opacity-100" : "opacity-0"
          }`}
        >
          견적문의
        </Link>
      </div>
    </section>
  );
};

export default Feature;
