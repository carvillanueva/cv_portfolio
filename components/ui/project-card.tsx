import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import Github from "@/public/assets/social-github.svg";

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
      <div className="flex flex-col md:items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-full">
        <Image
          className="object-cover w-full h-auto md:h-auto md:w-48"
          src={projectImg}
          alt={projectImg}
          height={300}
          width={200}
        ></Image>
        <div className="flex flex-col tracking-tighter">
          <div className="p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p className="font-normal text-gray-700">{description}</p>
          </div>
          <div className="flex pl-4 pb-2">
            <a href={ghURL} target="_blank">
              <Github className="h-6 w-6" />
            </a>
            <Github className="h-6 w-6" />
          </div>
          <div className="flex flex-wrap p-1 gap-2">
            {projectTech.map((tech, index) => (
              <div key={index} className="">
                <Badge key={index} variant="outline" className="p-2">
                  {tech}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
