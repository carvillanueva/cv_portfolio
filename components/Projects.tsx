import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ui/project-card";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";

const Projects = () => {
  const calendarConfig = {
    username: "carvillanueva",
    theme: {
      light: ['#f0f0f0', '#a3ccb4', '#004225', '#002d1b', '#00170d'],
    },
    colorScheme: "light" as const,
    showWeekdayLabels: true
  };

  return (
    <section className="container pt-[130px] pb-10" id="projects">
      <p className="xl:mx-20 text-3xl md:text-4xl font-semibold mb-3">
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-6 overflow-x-hidden max-w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            projectImg={project.projectImg}
            projectURL={project.projectURL}
            ghURL={project.ghURL}
            projectTech={project.projectTech}
          />
        ))}
      </div>
      <div className="mt-10 mx-auto ">
        <div className="w-full lg:flex lg:justify-center">
          <Link href="https://github.com/carvillanueva">
            <GitHubCalendar {...calendarConfig} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
