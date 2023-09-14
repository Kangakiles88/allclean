import React from "react";
import { useInView } from "react-intersection-observer";

const Description = () => {
  const [ref, inView] = useInView();

  return (
    <section className="text-gray-200 body-font w-screen bg-slate-800">
      <div
        ref={ref}
        className={`container flex-col items-center justify-center mx-auto py-16 mt-10 transition-opacity duration-700 ease-in-out delay-100 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-center font-bold mb-10">
          <h1 className="text-3xl">이사, 입주 청소 고민 이제 그만하세요!</h1>
        </div>
        <div className="flex flex-col mx-auto items-center w-1/2 text-center">
          <span>
            <h2 className="text-blue-400">
              전문적인 인력을 통해 최고 등급의 청소 서비스를 경험해보세요!
            </h2>
          </span>
          <br />
          <span>
            <p>
              저희 털보클린은 전문적인 팀을 구성하여 사장인 제가 직접
              방문합니다.
            </p>
          </span>
          <span>
            <p>
              내 집을 청소한다는 그런 마음으로 정말 깨끗하고 성심성의껏
              작업해드립니다.
            </p>
          </span>
          <br />
          <span>
            <p>
              거실부터 주방, 테라스, 욕실 모든 공간에 적합한 클리닝 솔루션으로
            </p>
          </span>
          <span>
            <p>최상의 컨디션을 만들어드리고자 노력합니다.</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Description;
