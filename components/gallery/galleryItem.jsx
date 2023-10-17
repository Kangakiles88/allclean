import React, { useState } from "react";
import Image from "next/image";

const GalleryItem = ({ data, projects }) => {
  const [isPopup, setIsPopup] = useState(false);

  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgUrls = data.properties.Image.files;
  const tags = data.properties.Tags.multi_select;
  const url = imgUrls.map((item) => item.file.url);
  const allImageUrl = projects.results.flatMap((project) =>
    project.properties.Image.files.map((file) => file.file.url)
  );

  console.log("allImageUrl", allImageUrl);

  const handlePopupImg = () => {
    setIsPopup(!isPopup);
  };

  return (
    <>
      <a className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        {url.map((url) => (
          <Image
            key={data.id}
            alt={title}
            onClick={handlePopupImg}
            src={url}
            width={720}
            height={480}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
          />
        ))}
      </a>
      {isPopup && (
        <div>
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"></div>
            <div className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto">
              <div className="w-full overflow-hidden">
                <div className="relative flex aspect-[3/2] items-center justify-center">
                  <div
                    className="absolute"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    {url.map((url) => (
                      <Image
                        alt={title}
                        src={url}
                        width={720}
                        height={480}
                        className="transform scale-150"
                        priority={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
                <div className="relative aspect-[3/2] max-h-full w-full">
                  <button className="absolute right-3 lg:right-28 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </button>
                  <button className="absolute left-3 md:left-28 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute md:top-5 md:left-24 flex items-center gap-2 p-3 text-white">
                    <button
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                      onClick={handlePopupImg}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-2 md:bottom-20 md:left-24 bg-opacity-50 text-white p-4">
                    <h1 className="text-[1.2rem]">{title}</h1>
                    <p className="text-[0.7rem]">{description}</p>
                    <div>
                      {tags.map((aTag) => (
                        <span
                          className="text-[0.4rem] px-2 py-1 mr-2 rounded-md bg-black/25"
                          key={aTag.id}
                        >
                          #{aTag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
