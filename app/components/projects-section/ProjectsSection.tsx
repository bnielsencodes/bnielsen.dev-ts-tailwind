import { projects } from "@/app/data";
import Project from "./Project";
import clsx from "clsx";

export default function ProjectsSection({ darkMode }: { darkMode: boolean }) {
  const projectElements = projects.map((project) => {
    return <Project key={project.id} {...{ darkMode, project }} />;
  });

  return (
    <section
      id="projects-section"
      className={clsx("pt-20 overflow-x-clip", {
        "bg-neutral-100": darkMode,
        "bg-neutral-600": !darkMode,
      })}
    >
      {/* section heading */}
      <h2
        className={clsx(
          "relative z-0 w-[130px] mx-auto text-[2.5rem] font-bold text-center lg:w-[143px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[93px] after:h-[14px] lg:after:w-[101px] lg:after:bottom-[7px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        Work
      </h2>
      <div className="flex flex-col justify-center pb-[25px] mt-[220px] text-[0.9rem] lg:mt-[260px]">
        {projectElements}
      </div>
    </section>
  );
}
