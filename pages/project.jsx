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
        {projects.results.map((aProject) => (
          <GalleryItem key={projects.id} data={aProject} projects={projects} />
        ))}
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

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  projects.results.forEach((project, index) => {
    console.log(
      `Project ${index} Image Files:`,
      project.properties.Image.files
    );
  });

  return {
    props: { projects },
  };
}
