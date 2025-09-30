import { skillsData } from "../data/skillsData";
import DevIcon from "../components/DevIcon";

function Skills() {
  return (
    <main className="skills-page">
      <div className="flex flex-col md:flex-row container mx-auto py-20 px-4 gap-4 ">
        <h1 className="w-full h-full md:w-1/2 oxanium-font text-3xl md:text-5xl text-left">
          Skills & Technologies
        </h1>
        <p className="w-full h-full md:w-1/2 text-left mt-4 md:mt-0">
          A showcase of technologies I'm proficient with, developed through
          coursework and hands-on projects.
        </p>
      </div>

      {skillsData.map((category) => (
        <section
          key={category.category}
          className="my-5 rounded-2xl border border-white/20 text-[12px] bg-white-500/5 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20"
        >
          <h2 className="text-xl font-bold p-4">{category.category}</h2>
          <div className="flex flex-wrap justify-center p-4">
            {category.items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col m-2 hover:text-sky-500"
              >
                <DevIcon
                  iconName={tech.iconName}
                  color={tech.color}
                  size="4rem"
                  className="h-15 w-auto px-8"
                />
                <span className="mt-2 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Skills;
