import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ui/project-card";

const Projects = () => {
  return (
    <section className="container pt-[130px] pb-10" id="projects">
      <p className="text-3xl md:text-4xl font-semibold mb-3">Projects</p>
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            projectImg={project.projectImg}
            ghURL={project.ghURL}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
