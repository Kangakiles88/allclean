import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
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
        <div>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            사업자등록번호: 117-16-96538
            <Link
              href="tel:+821067554922"
              className="text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 hover:text-indigo-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              HP: 010-6755-4922
            </Link>
          </p>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            주소: 인천광역시 연수구 컨벤시아대로252번길 50(송도 더샵 퍼스트파크)
          </p>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2023 올클린 All Rights Reserved —
            <Link
              href="tel:+821067554922"
              className="text-gray-600 ml-1 hover:text-indigo-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              @올클린
            </Link>
          </p>
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
