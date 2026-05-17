import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        SELECTED WORK
      </h1>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/JobNest-SS.png"
          title="UrbanNest"
          link="https://github.com/shresthanikhil16/UrbanNest"
          description="Smart real estate platform with modern UI/UX and robust features. Built with React, Tailwind, and Node.js (2024)."
        />

        <ProjectCard
          src="/ShedCal.png"
          title="GuildEngine"
          link="https://github.com/shresthanikhil16/GuildEngine"
          description="Lightweight game engine and tooling for rapid prototyping. Frontend focused build with React and Tailwind (2023)."
        />

        <ProjectCard
          src="/NVM-SS.png"
          title="LugaHub"
          link="https://github.com/shresthanikhil16/LugaHub"
          description="Community hub and collaboration platform with scalable backend. Full-stack platform built with React and Node.js (2023)."
        />
      </div>
    </section>
  );
};

export default Projects;
