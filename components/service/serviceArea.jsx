import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <section className="text-gray-600 body-font w-screen bg-gray-100">
      <div className="container flex flex-col items-center mx-auto py-6">
        <div className="flex flex-col lg:flex-row w-full md:w-3/4 items-center justify-between mb-20">
          <h1 className="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-5xl font-bold mb-3">
            털보클린 청소가능지역
          </h1>
          <div className="w-1/2 flex flex-col items-center md:items-end ">
            <p className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] mb-6 mt-6">
              서울, 인천, 경기 수도권 전 지역과 충청권 지역까지 서비스가
              가능합니다. <br /> 정확한 서비스 가능 지역은 상담을 통해 확인이
              가능합니다.
            </p>
            <Link
              href="tel:01099906076"
              className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-blue-600 border-solid border-2 border-blue-600 py-2 px-2 rounded-lg"
            >
              서비스 지역 확인
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full md:w-3/4 items-center justify-between mb-5">
          <div>
            <h2 className="text-blue-500 text-[1rem] md:text-[1.5rem] mb-1">
              서울
            </h2>
            <p className="mb-6 text-[0.8rem] md:text-[1.2rem]">
              강남, 강북, 서초, 송파, 강서, 종로, 동대문, 용산 등 서울 전지역
            </p>
            <h2 className="text-blue-500 text-[1rem] md:text-[1.5rem] mb-1">
              인천
            </h2>
            <p className="mb-6 text-[0.8rem] md:text-[1.2rem]">
              서구, 동구, 중구, 남구, 계양구, 부평구, 남동구, 연수구 인천 전지역
            </p>
            <h2 className="text-blue-500 text-[1rem] md:text-[1.5rem] mb-1">
              경기
            </h2>
            <p className="mb-6 text-[0.8rem] md:text-[1.2rem]">
              수원, 안산, 시흥, 광명, 부천, 김포, 성남, 과천, 화성, 평택 등 경기
              전지역
            </p>
            <h2 className="text-blue-500 text-[1rem] md:text-[1.5rem] mb-1">
              충청
            </h2>
            <p className="mb-6 text-[0.8rem] md:text-[1.2rem]">
              천안, 아산, 진천, 서산, 태안, 충주, 청주, 세종 등 충청 지역
            </p>
            <h2 className="text-blue-500 text-[1rem] md:text-[1.5rem] mb-5">
              이외 지역은 상담을 통해 가능 지역을 확인 가능합니다.
            </h2>
          </div>
          <div className="bg-blue-100 rounded-xl ">
            <Image
              src={"/kr.svg"}
              width={400}
              height={400}
              alt="털보클린 입주청소 서비스지역"
              className="w-200 h-200 md:w-400 md:h-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
