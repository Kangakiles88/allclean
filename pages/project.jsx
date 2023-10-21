import React from "react";
import TitleBox from "./../components/gallery/titleBox";
import { TOKEN, DATABASE_ID } from "../config/index";
import Header from "../components/projects/header";
import GalleryItem from "../components/gallery/galleryItem";

const Project = ({ projects }) => {
  return (
    <section className="mx-auto max-w-[1960px] p-4">
      <Header />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
          <TitleBox />
        </div>
        <GalleryItem data={projects} key={projects.id} />
      </div>
    </section>
  );
};

export default Project;

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options,
      { cache: "no-store" }
    );

    // 응답 상태 코드 확인
    if (!res.ok) {
      throw new Error(`Notion API error, status code: ${res.status}`);
    }

    const projects = await res.json();

    // projects.results가 존재하고 배열인지 확인
    if (projects.results && Array.isArray(projects.results)) {
      projects.results.forEach((project, index) => {
        console.log(
          `Project ${index} Image Files:`,
          project.properties.Image.files
        );
      });

      return {
        props: { projects },
      };
    } else {
      throw new Error("Notion API error: No results in response");
    }
  } catch (error) {
    // 오류 로깅
    console.error("Data fetch error:", error.message);

    // 오류 상황에서 빈 props 반환
    return {
      props: { projects: [] },
    };
  }
}
