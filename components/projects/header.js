import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="26"
            height="26"
          >
            <path d="M23.715,2.285a1.013,1.013,0,0,0-1.43,0L17.521,7.049l-.32-.313a5.008,5.008,0,0,0-6.429-.479A16.618,16.618,0,0,1,6.224,8.685L4.15,9.293a5.036,5.036,0,0,0-3.113,2.635A4.973,4.973,0,0,0,.9,15.947a12.95,12.95,0,0,0,12.112,8.064h.924a1.011,1.011,0,0,0,.578-.182A15.288,15.288,0,0,0,21.224,13.62a5.029,5.029,0,0,0-1.453-4.374l-.8-.784,4.747-4.747A1.013,1.013,0,0,0,23.715,2.285Zm-10.107,19.7h-.6A11.3,11.3,0,0,1,8.7,21.138l.011-.006a11.546,11.546,0,0,0,4.351-3.8l.518-.761a1.01,1.01,0,0,0-1.67-1.138l-.518.761A9.535,9.535,0,0,1,7.8,19.327l-1.251.63a10.757,10.757,0,0,1-2.583-2.57,11.625,11.625,0,0,0,4.377-2.664,1.011,1.011,0,0,0-1.414-1.446,9.617,9.617,0,0,1-3.98,2.32c-.061-.135-.127-.267-.182-.406a2.906,2.906,0,0,1,.085-2.381,3.023,3.023,0,0,1,1.864-1.578l2.073-.608a15.364,15.364,0,0,0,3.426-1.588l7.915,7.712A14.192,14.192,0,0,1,13.608,21.989Zm5.62-8.683a12.421,12.421,0,0,1-.309,1.387L11.948,7.9l0,0a3.011,3.011,0,0,1,1.755-.566,2.973,2.973,0,0,1,2.084.849l2.569,2.509A3.01,3.01,0,0,1,19.228,13.306Z" />
          </svg>
          <span className="text-slate-900 hover:text-indigo-600 font-bold ml-3 text-xl">
            올클린
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="mr-5 hover:text-gray-900">3번 메뉴</a>
          <a className="mr-5 hover:text-gray-900">4번 메뉴</a>
        </nav>
        <Link
          href="tel:01099204922"
          className="text-white inline-flex items-center bg-slate-900 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600  rounded text-base mt-4 md:mt-0"
        >
          연락하기
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
