import { projectsData } from "../data/projectsData";

function ProjectCard() {
  return (
    <section className="flex flex-wrap gap-6 items-center justify-center my-4">
      {projectsData.map((project) => (
        <div
          key={project.projectId}
          className="p-4 text-left w-full md:w-[45%] lg:w-[30%]  align-top rounded-2xl border border-white/20 bg-white-500/20 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            srcset=""
            className="w-full h-auto mb-1 rounded-lg"
          />
          <p className="text-[12px] text-sky-500">{project.type}</p>
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap mb-5">
            {project.technologies.map((tech) => (
              <div key={tech} className="flex flex-col mr-2">
                <span className="mt-2 px-3 text-sm bg-fuchsia-500 rounded-2xl">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 justify-end">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5"
              >
                See on GitHub
              </a>
            )}
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectCard;
