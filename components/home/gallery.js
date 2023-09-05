import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            All Clean Gallery
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            갤러리소개
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="500"
                height="300"
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/500x300.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="501"
                height="301"
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/501x301.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="600"
                height="360"
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/600x360.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="601"
                height="361"
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/601x361.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="502"
                height="302"
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/502x302.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-110 transition-all hover:bg-white hover:rounded-xl">
              <Image
                width="503"
                height="303"
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/503x303.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
