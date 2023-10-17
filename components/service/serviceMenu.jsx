import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const ServiceMenu = () => {
  const [activeMenu, setActiveMenu] = useState("방/거실");

  const menuItems = [
    "방/거실",
    "주방",
    "화장실/욕실",
    "창문/베란다",
    "소파/매트리스/카페트",
    "추가옵션",
  ];

  const itemContents = {
    "방/거실": {
      imgSrc: "/livingroom.jpg",
      list: ["내부 바닥 먼지 제거", "바닥 물청소"],
    },
    주방: {
      imgSrc: "/kitchen.jpg",
      list: [
        "조리대, 싱크대, 수납장 청소",
        "가스레인지, 인덕션, 전자레인지 및 각종 소형 주방가전 청소",
      ],
    },
    "화장실/욕실": {
      imgSrc: "/bathroom.jpg",
      list: [
        "욕조 및 세면대 화장실 수납장 청소",
        "샤워기 및 수전 등 청소 및 소독",
        "바닥 타일 및 물때제거 청소",
      ],
    },
    "창문/베란다": {
      imgSrc: "/terrace.jpg",
      list: ["베란다, 테라스, 보일러실 청소", "창틀 먼지 제거 청소"],
    },
    "소파/매트리스/카페트": {
      imgSrc: "/fabric.png",
      list: [
        "소파/매트리스/카페트 묶은때 제거",
        "소파/매트리스/카페트 얼룩 제거",
        "패브릭 제품 정기 청소(멤버쉽)",
      ],
    },
    추가옵션: {
      imgSrc: "/etc.jpg",
      list: [
        "세탁기, 에어컨필터, 냉장고, 방충망",
        "비확장형 베란다",
        "심한 오염도로 인한 특수 약품 처리",
        "심한 곰팡이 제거",
        "스티커 및 시트지 제거",
        "반려견/반려묘로 인한 다량의 동물 털 제거",
      ],
    },
  };

  const handleActiveMenu = (selectItem) => {
    setActiveMenu(selectItem);
  };

  return (
    <div className="flex flex-col w-3/4 items-center justify-between mb-20">
      <div className="flex items-start w-full pb-3 text-[0.4rem] sm:text-[0.4rem] md:text-[0.6rem] lg:text-[1.2rem] font-bold text-slate-300 mb-6 border-b-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`mr-5 cursor-pointer ${
              activeMenu === item ? "text-sky-600" : index === 0 ? "active" : ""
            }`}
            onClick={() => handleActiveMenu(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row justify-between w-full">
        {itemContents[activeMenu]?.imgSrc && (
          <Image
            src={itemContents[activeMenu].imgSrc}
            width={600}
            height={200}
            alt="털보클린 청소 서비스"
            className="mr-10"
          />
        )}
        <div className="flex w-full items-start leading-loose">
          <ul>
            {itemContents[activeMenu]?.list.map((item, index) => (
              <li key={index}>
                <span className="text-[0.4rem] sm:text-[0.4rem] md:text-[0.8rem] lg:text-[1rem] flex items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 mr-4 self-center text-sky-500"
                  />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceMenu;
