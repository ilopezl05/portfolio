import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="projects-page mb-20">
      <div className="flex flex-col md:flex-row container mx-auto py-20 px-4 gap-4 ">
        <h1 className="w-full h-full md:w-1/2 oxanium-font text-3xl md:text-5xl text-left">
          Projects
        </h1>
        <p className="w-full h-full md:w-1/2 text-left mt-4 md:mt-0">
          These projects tell the story of how I approach
          challenges—transforming complex requirements into elegant solutions.
          From algorithm design to user experience, database architecture to
          deployment pipelines, each represents my commitment to building
          software that's not just functional, but fundamentally sound.
        </p>
      </div>
      <ProjectCard />
    </main>
  );
}

export default Projects;
