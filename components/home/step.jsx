import Image from "next/image";
import React from "react";
import StepAnimation from "../animations/stepAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faCalendarDays,
  faCircleCheck,
  faRectangleList,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const Step = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center justify-center flex-wrap">
        <div className="flex justify-center items-center flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                ref={ref1}
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 transition-opacity duration-700 delay-400 ${
                  inView1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <FontAwesomeIcon icon={faRulerCombined} className="w-5" />
              </div>
              <div
                ref={ref1}
                className={`flex-grow pl-4 transition-opacity duration-700 delay-400 ${
                  inView1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="font-bold title-font text-sm text-violet-900 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  청소를 원하는 공간의 대략적인 면적을 측정해주세요. 특별히
                  청소를 원하시는 공간에 대해 자세하게 말씀해주시면 좀 더 정확한
                  금액 산출이 가능합니다.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                ref={ref2}
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 transition-opacity duration-700 delay-400 ${
                  inView2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <FontAwesomeIcon icon={faRectangleList} className="w-5" />
              </div>
              <div
                ref={ref2}
                className={`flex-grow pl-4 transition-opacity duration-700 delay-400 ${
                  inView2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="font-bold title-font text-sm text-violet-900 mb-1 tracking-wider">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                  원하시는 청소 종류를 선택해주세요. 입주 청소, 이사 청소 등
                  고객님이 원하시는 청소 종류를 말씀해주시면 알맞은 장비와
                  약품을 선정합니다.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                ref={ref3}
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 transition-opacity duration-700 delay-400 ${
                  inView3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <FontAwesomeIcon icon={faCalendarDays} className="w-5" />
              </div>
              <div
                ref={ref3}
                className={`flex-grow pl-4 transition-opacity duration-700 delay-400 ${
                  inView3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="font-bold title-font text-sm text-violet-900 mb-1 tracking-wider">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                  원하시는 날짜와 시간을 고객님이 편하신 일정에 따라 조율하여
                  방문 일정을 설정합니다.. 최대한 고객님의 스케줄에 맞춰
                  편의성을 제공할 수 있도록 하고 있습니다.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                ref={ref4}
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 transition-opacity duration-700 delay-400 ${
                  inView4 ? "opacity-100" : "opacity-0"
                }`}
              >
                <FontAwesomeIcon icon={faBroom} className="w-5" />
              </div>
              <div
                ref={ref4}
                className={`flex-grow pl-4 transition-opacity duration-700 delay-400 ${
                  inView4 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="font-bold title-font text-sm text-violet-900 mb-1 tracking-wider">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                  고객님과 조율하여 확정된 날짜와 시간에 방문하여, 청소를
                  진행합니다. 현장 점검 후 컨디션에 따라 좀 더 깨끗한 공간으로
                  거듭날 수 있도록 브리핑 및 청소 방법을 협의하여 작업을
                  실행합니다.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div
                ref={ref5}
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 transition-opacity duration-700 delay-400 ${
                  inView5 ? "opacity-100" : "opacity-0"
                }`}
              >
                <FontAwesomeIcon icon={faCircleCheck} className="w-5" />
              </div>
              <div
                ref={ref5}
                className={`flex-grow pl-4 transition-opacity duration-700 delay-400 ${
                  inView5 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="font-bold title-font text-sm text-violet-900 mb-1 tracking-wider">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                  청소 완료 후 고객님 확인이 이뤄진 후 결제가 진행됩니다.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={ref5}
            className={`lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 transition-opacity duration-700 delay-400 ${
              inView5 ? "opacity-100" : "opacity-0"
            }`}
          >
            <StepAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
