import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import Github from "@/public/assets/social-github.svg";
import Website from "@/public/assets/website.svg";

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
  projectURL: string | null;
  projectImg: string | null;
  ghURL?: string | null;
  projectTech: string[];
}) => {
  return (
    <section className="">
      <div className="flex flex-col md:items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-full">
        <Image
          className="object-cover w-full h-auto md:h-auto md:w-48"
          src={projectImg || '/assets/default.jpg'}
          alt={projectImg || 'default'}
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
          <div className="flex pl-4 pb-2 gap-1">
            {ghURL && (
              <a href={ghURL} target="_blank">
                <Github className="h-6 w-6" />
              </a>
            )}
            {projectURL && (
              <a href={projectURL} target="_blank">
                <Website className="h-6 w-6" />
              </a>
            )}
          </div>
          <div className="flex flex-wrap p-1 gap-2">
            {projectTech.map((tech, index) => (
              <div key={index} className="">
                <Badge key={index} variant="outline" className="p-2 bg-[#004225]/60 text-white hover:bg-[#004225]/70">
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
