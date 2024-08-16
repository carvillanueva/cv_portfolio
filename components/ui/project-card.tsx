import Image from "next/image";
import React from "react";
import { Badge } from "./badge";

const ProjectCard = ({
  title,
  description,
  projectURL,
  projectImg,
  ghURL,
  projectTech,
}: {
  title: string;
  description: string;
  projectURL: string;
  projectImg: string;
  ghURL?: string;
  projectTech: string[];
}) => {
  return (
    <section className="">
      <div className="">
        <div className="flex flex-col md:items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
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
            <p className="mb-3 font-normal text-gray-700">{description}</p>
          </div>
          <div className="flex ">LINKS GH - WEB</div>
          <div className="flex">
            {projectTech.map((tech, index) => (
              <Badge key={index} variant="outline">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
