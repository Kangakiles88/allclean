"use client";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../home/hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return isOpen === false ? (
    <header>
      <nav className="container flex justify-around items-center py-8 mx-auto bg-transparent">
        <div className="flex items-center">
          <h3 className="text-[0.9rem] sm:text-[0.9rem] md:text-1xl lg:text-2xl font-bold text-sky-500">
            A L L C L E A N
          </h3>
        </div>
        {/* <!-- left header section --> */}
        <div className="hidden flex-row md:flex-row lg:flex items-center font-bold text-slate-700 md:block space-x-10 ">
          <Link href="/">Home</Link>
          <Link href="/service">서비스</Link>
          <Link href="/project">시공갤러리</Link>
          <Link href="/FAQ">FAQ</Link>
        </div>
        {/* <!-- right header section --> */}
        <div className="flex items-center space-x-2">
          <Link
            href="tel:01099204922"
            className="w-30 hidden md:hidden lg:flex text-white font-bold items-center justify-center bg-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600  rounded text-base mt-4 md:mt-0"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="w-4 h-4 mr-2 text-white"
            />
            문의하기
          </Link>
        </div>
      </nav>
    </header>
  ) : (
    <div className="-mr-2 block">
      <Hamburger isOpen={isOpen} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};

export default Header;
