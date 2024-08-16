import Image from "next/image";
import React from "react";

const ProjectCard = ({title, description, projectImg, ghURL}: {title:string, description:string, projectImg: string, ghURL?: string }) => {
  return (
    <section className="">
      <div className="m-3">
        <div
          className="flex flex-col md:items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
        >
          <Image
            className="object-cover w-full h-auto md:h-auto md:w-48"
            src={projectImg}
            alt={projectImg}
            height={300}
            width={200}
          ></Image>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
