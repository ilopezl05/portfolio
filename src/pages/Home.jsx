import Ishy from "../assets/images/ishy_profile.svg";

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
          <a
            href=""
            className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5"
          >
            More about me
          </a>
          <a
            href=""
            className="font-semibold h-full w-auto py-2 px-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg text-sky-100 hover:bg-fuchsia-500"
          >
            Download CV
          </a>
        </article>
        <article className="w-full md:w-[45%] lg:w-[25%] mx-auto relative text-sky-500 mt-20">
          <div className="w-72 h-72 md:w-86 md:h-86 lg:w-94 lg:h-94 mx-auto rounded-full border border-sky-100 border-4 bg-sky-50/10 overflow-hidden">
            <img src={Ishy} alt="Ishy" className="h-96 mx-auto object-cover" />
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
          <a
            href=""
            className="font-semibold h-full w-auto py-2 px-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg text-sky-100 hover:bg-fuchsia-500"
          >
            See more
          </a>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center my-4">
          {/* //------- Card ----> */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-white/20 p-3 animate-pulse">
            <img
              src=""
              alt=""
              className="w-full h-[200px] bg-gray-500/50 rounded-2xl mb-4"
            />
            <h4 className="oxanium-font text-xl text-left bg-gray-500/50 rounded-2xl">
              Project in Construction
            </h4>
            <p className="text-left my-3 text-base bg-gray-500/50 rounded-2xl">
              Project Description
            </p>
            <ul className="flex flex-wrap items-center justify-start">
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 1
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 2
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 3
              </li>
            </ul>
          </div>
          {/* //------- Card ----> */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-white/20 p-3 animate-pulse">
            <img
              src=""
              alt=""
              className="w-full h-[200px] bg-gray-500/50 rounded-2xl mb-4"
            />
            <h4 className="oxanium-font text-xl text-left bg-gray-500/50 rounded-2xl">
              Project in Construction
            </h4>
            <p className="text-left my-3 text-base bg-gray-500/50 rounded-2xl">
              Project Description
            </p>
            <ul className="flex flex-wrap items-center justify-start">
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 1
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 2
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 3
              </li>
            </ul>
          </div>
          {/* //------- Card ----> */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-white/20 p-3 animate-pulse">
            <img
              src=""
              alt=""
              className="w-full h-[200px] bg-gray-500/50 rounded-2xl mb-4"
            />
            <h4 className="oxanium-font text-xl text-left bg-gray-500/50 rounded-2xl">
              Project in Construction
            </h4>
            <p className="text-left my-3 text-base bg-gray-500/50 rounded-2xl">
              Project Description
            </p>
            <ul className="flex flex-wrap items-center justify-start">
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 1
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 2
              </li>
              <li className="m-1 rounded-2xl border border-white/20 text-[12px] bg-gray-500/50 rounded-2xl">
                Technology 3
              </li>
            </ul>
          </div>
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
          <a
            href=""
            className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5"
          >
            Get in touch
          </a>
          <a
            href=""
            className="font-semibold h-full w-auto py-2 px-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg text-sky-100 hover:bg-fuchsia-500"
          >
            Check my skills
          </a>
        </div>
      </section>
    </main>
  );
}

export default Hero;
