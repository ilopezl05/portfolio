import Ishy_profile from "../assets/images/ishy_profile.svg";
import ProjectCard from "../components/ProjectCard";
import PrimaryCTAButton from "../components/PrimaryCTAButton";
import SecondaryCTAButton from "../components/SecondaryCTAButton";

function Hero() {
  return (
    <main className="py-20">
      <section className="flex flex-wrap py-20">
        <article className="text-left w-full md:w-[45%] lg:w-[60%]">
          <div className="border-2 rounded-2xl px-3 py-1 w-fit">
            <span class="inline-block w-3 h-3 bg-fuchsia-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sky-100">Software Engineer</span>
          </div>
          <h1 className="oxanium-font text-6xl md:text-7xl lg:text-8xl pt-8 bg-gradient-to-r from-sky-500 via-45% via-fuchsia-500 via-10% to-indigo-500 via-45% text-transparent bg-clip-text inline-block">
            Ismael Lopez
          </h1>
          <h2 className="oxanium-font text-3xl md:text-4xl lg:text-5xl mt-5 mb-5">
            Designing & Developing Clean,
            <br /> Modern Web Apps
          </h2>
          <p className="text-sky-100 mb-12">
            A curious developer at the start of an exciting journey, passionate
            about building delightful, tech-inspired web experiences that
            everyone can use.
          </p>
          {/* CTA Buttons -----------> */}
          <PrimaryCTAButton resourceLink={""} text={"More about me"} />
          <SecondaryCTAButton resourceLink={""} text={"Download CV"} />
        </article>
        <article className="w-full md:w-[45%] lg:w-[25%] mx-auto relative text-sky-500 mt-20">
          <div className="w-72 h-72 md:w-86 md:h-86 lg:w-94 lg:h-94 mx-auto rounded-full border border-sky-100 border-4 bg-sky-50/10 overflow-hidden">
            <img
              src={Ishy_profile}
              alt="Ishy"
              className="h-96 mx-auto object-cover"
            />
          </div>
        </article>
      </section>
      <section className="py-30">
        <h3 className="oxanium-font text-3xl md:text-4xl text-left">
          Featured Projects
        </h3>
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-left">
            Allow me to introduce you to some of my recent projects.
          </p>
          <SecondaryCTAButton resourceLink={""} text={"See more"} />
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center my-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section className="py-20">
        <h3 className="oxanium-font text-3xl md:text-4xl">
          Have an idea in mind?
        </h3>
        <p className="py-6">
          I'm open to freelance and full-time opportunities. Let's build
          something great.
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <PrimaryCTAButton resourceLink={""} text={"Get in touch"} />
          <SecondaryCTAButton resourceLink={""} text={"Check my skills"} />
        </div>
      </section>
    </main>
  );
}

export default Hero;
