import React, { useEffect, useState } from "react";
import Image from "next/image";

const GalleryItem = ({ data }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [curIndex, setCurIndex] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // 'data'가 존재하고, 'data.results'가 비어있지 않은 경우 아래 로직 실행
    if (data.results && data.results.length > 0 && data.results[curIndex]) {
      // 'title', 'description', 'tags' 상태를 현재 인덱스에 해당하는 'data.results'에서 가져온 정보로 업데이트
      setTitle(data.results[curIndex].properties.Name.title[0].plain_text);
      setDescription(
        data.results[curIndex].properties.Description.rich_text[0].plain_text
      );
      setTags(data.results[curIndex].properties.Tags.multi_select);
    }
  }, [data, curIndex]);

  const urls = data.results.map(
    (item) => item.properties.Image.files[0].file.url
  );

  const handlePopupImg = (url) => {
    setImgUrl(url);
    const index = urls.findIndex((item) => item === url);
    setCurIndex(index);
    setIsPopup(!isPopup);
  };

  const nextImage = () => {
    // 다음 이미지의 인덱스 계산
    const newIndex = curIndex >= urls.length - 1 ? 0 : curIndex + 1;

    // 새 인덱스로 상태 업데이트
    setCurIndex(newIndex);

    // 새 인덱스에 해당하는 이미지 URL 설정
    setImgUrl(urls[newIndex]);
  };

  const prevImage = () => {
    // 이전 이미지의 인덱스 계산
    const newIndex = curIndex <= 0 ? urls.length - 1 : curIndex - 1;

    // 새 인덱스로 상태 업데이트
    setCurIndex(newIndex);

    // 새 인덱스에 해당하는 이미지 URL 설정
    setImgUrl(urls[newIndex]);
  };

  return (
    <>
      {urls.map((url, index) => (
        <a
          key={index}
          onClick={() => handlePopupImg(url)}
          className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <Image
            alt={title}
            onClick={handlePopupImg}
            src={url}
            width={720}
            height={480}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
          />
        </a>
      ))}
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
                    <Image
                      key={data.id}
                      alt={title}
                      src={imgUrl}
                      width={720}
                      height={480}
                      className="transform scale-150"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
                <div className="relative aspect-[3/2] max-h-full w-full">
                  <button
                    onClick={nextImage}
                    className="absolute right-3 lg:right-28 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </button>
                  {curIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-3 md:left-28 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        ></path>
                      </svg>
                    </button>
                  )}
                  <div className="absolute md:top-5 md:left-24 flex items-center gap-2 p-3 text-white">
                    <button
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                      onClick={handlePopupImg}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-2 md:bottom-20 md:left-24 bg-opacity-50 text-white p-4">
                    <h1 className="text-[1.2rem]">{title}</h1>
                    <p className="text-[0.7rem]">{description}</p>
                    <div>
                      {tags.map((aTag, index) => (
                        <span
                          key={index}
                          className="text-[0.4rem] px-2 py-1 mr-2 rounded-md bg-black/25"
                        >
                          #{aTag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                  <div className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14">
                    {urls.map((url, index) => (
                      <button
                        key={index} // 반복되는 요소에는 고유한 key가 필요합니다.
                        onClick={() => {
                          setImgUrl(url); // 클릭된 이미지의 URL로 imgUrl 상태를 업데이트합니다.
                          setCurIndex(index); // 현재 이미지의 인덱스를 업데이트합니다.
                        }}
                        className={
                          curIndex === index
                            ? "z-20 rounded-md relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none"
                            : "z-10 relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none"
                        }
                        style={{
                          width: "100%",

                          transform:
                            curIndex === index
                              ? "translateX(0%) scale(1.5) translateZ(0px)"
                              : "translateX(0%) scale(1) translateZ(0px)",
                        }}
                      >
                        <Image
                          key={index}
                          alt={title}
                          src={url}
                          width={180}
                          height={120}
                          className={
                            curIndex === index
                              ? "brightness-110 hover:brightness-110 h-full transform object-cover transition"
                              : "brightness-50 contrast-125 hover:brightness-75 h-full transform object-cover transition"
                          }
                          style={{ color: "transparent" }}
                        />
                      </button>
                    ))}
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
