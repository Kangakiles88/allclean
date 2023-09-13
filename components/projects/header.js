"use client";

import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // 768px는 Tailwind CSS의 md 뷰포인트
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav
        className={`container flex ${
          isOpen ? "justify-center" : "justify-between"
        } items-center py-8 mx-auto bg-transparent`}
      >
        <div className="flex items-center">
          <Link href="/">
            <h3 className="text-[1.5rem] sm:text-[1.5rem] md:text-1xl lg:text-2xl font-bold text-sky-500 ml-2">
              TURBO CLEAN
            </h3>
          </Link>
        </div>
        <div className="lg:hidden">
          {!isOpen && (
            <button onClick={handleMenuOpen}>
              <FontAwesomeIcon
                icon={faBars}
                className="w-6 h-6 text-sky-600 mr-4"
              />
            </button>
          )}
        </div>
        <div className={`lg:flex ${isOpen ? "" : "hidden"}`}>
          <div className="flex-row hidden lg:flex items-center font-bold text-slate-700 space-x-10">
            <Link href="/">Home</Link>
            <Link href="/service">서비스</Link>
            <Link href="/project">시공갤러리</Link>
            <Link href="/FAQ">FAQ</Link>
          </div>
        </div>
        <div
          className={`hidden lg:flex items-center space-x-2 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link
            href="tel:01088806076"
            className="w-30 flex row text-white font-bold items-center justify-center bg-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="w-4 h-4 mr-2 text-white"
            />
            문의하기
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center space-y-5 lg:hidden">
          <Link href="/">Home</Link>
          <Link href="/service">서비스</Link>
          <Link href="/project">시공갤러리</Link>
          <Link href="/FAQ">FAQ</Link>
          <button onClick={handleMenuOpen} className="mb-8 text-red-400">
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
