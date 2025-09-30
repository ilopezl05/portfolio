import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faGraduationCap,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryCTAButton from "../components/PrimaryCTAButton";
import SecondaryCTAButton from "../components/SecondaryCTAButton";

let techSkills = [
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "Java",
  "MySQL",
  "HTML/CSS",
  "Git/GitHub",
  "Flask",
];

let opportunities = [
  "Full-time Position",
  "Remote",
  "Hybrid",
  "On-site",
  "Opportunities Worldwide",
];

function About() {
  const [showStory, setShowFullStory] = useState(false);

  const handleStoryClick = () => {
    setShowFullStory(!showStory);
  };

  return (
    <main className="mb-20">
      <div className="flex flex-col mt-15">
        <p className="text-left text-fuchsia-500 pb-2">About me</p>
        <h1 className="w-full oxanium-font text-3xl md:text-5xl text-left">
          Hola! I'm Ismael.
        </h1>
        <h2 className="w-full text-xl md:text-2xl text-left md:mt-0 text-sky-500">
          Software Engineer
        </h2>
      </div>
      <section className="my-10 p-5 text-left rounded-2xl border border-white/20 text-[16px] bg-white-500/5 ">
        <p className="w-full py-5 md:py-8">
          From a small town in Mexico where technology was scarce, to becoming a
          software engineer in
          <span className="inline md:inline-block relative transform text-fuchsia-400 p-2 font-bold hover:-translate-y-1 transition-transform duration-200 ease-in-out">
            San Antonio, Texas
          </span>
          — my journey has been anything but ordinary. end‑to‑end.
        </p>
        <p
          className="p-2 bg-sky-500/10 border-l-4 border-sky-500 mb-5 hover:bg-sky-400/20 hover:border-l-12 cursor-pointer transition-all duration-200 ease-in-out"
          onClick={handleStoryClick}
        >
          Click here to {showStory ? "hide" : "discover"} my "wizard moment"
          story!{" "}
        </p>
        <p
          className={
            showStory ? "inline-block p-4 bg-sky-500/20 rounded-2xl" : "hidden"
          }
        >
          Picture this:
          <i>
            13-year-old me, touching a computer for the first time, feeling like
            I had discovered magic. Fast forward to 2009 in high school — I
            created my first program and genuinely felt like I could conquer the
            world. That spark never died; it just grew stronger with every line
            of code.
          </i>
        </p>
        <p className="w-full py-2 md:py-4">
          Soon, I'll be finishing my
          <span className="inline md:inline-block relative transform text-fuchsia-400 p-2 font-bold hover:-translate-y-1 transition-transform duration-200 ease-in-out">
            Bachelor's in Computer Science with a concentration in Software
            Engineering at the University of Texas at San Antonio,
          </span>
          and I'm passionate about transforming ideas into interactive digital
          solutions. When I'm not coding, you'll find me exploring new
          technologies, learning foreign languages, or planning my next travel
          adventure.
        </p>
        <p className="w-full py-2 md:py-4">
          My friends describe me as friendly but reserved, patient, organized,
          and insightful — qualities that I bring to every project and team
          collaboration. I'm
          <span className="inline md:inline-block relative transform text-fuchsia-400 p-2 font-bold hover:-translate-y-1 transition-transform duration-200 ease-in-out">
            open to opportunities worldwide
          </span>
          because great code knows no borders!
        </p>
      </section>
      <section className="flex flex-row flex-wrap justify-center mx-auto container gap-6">
        <div className="w-full p-5 md:w-[48%] rounded-2xl border border-white/20 text-[16px] bg-white-500/5 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
          <h2 className="w-full oxanium-font text-xl text-left mb-4">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="1x"
              className="pr-3 text-sky-500"
            />
            Education and learning
          </h2>
          <div className="text-left">
            <h3 className="font-extrabold mb-1">Bachelor of Science</h3>
            <ul className="text-left leading-relaxed mb-5">
              <li>University of Texas at San Antonio (UTSA)</li>
              <li>
                Computer Science with a concentration in Software Engineering
              </li>
              <li>August 2022 - December 2025</li>
            </ul>
            <h3 className="font-extrabold mb-1">
              Associates of Applied Science
            </h3>
            <ul className="text-left leading-relaxed mb-5">
              <li>St. Philip's College</li>
              <li>Web and Mobile Development</li>
              <li>June 2020 - May 2022</li>
            </ul>
            <p>
              My academic journey has been hands-on and project-driven, focusing
              on real-world applications rather than just theory. From designing
              prototypes to deploying full-stack applications, every course has
              been a stepping stone toward mastering the craft of software
              engineering.
            </p>
          </div>
        </div>
        <div className="w-full p-5 md:w-[48%] rounded-2xl border border-white/20 text-[16px] bg-white-500/5 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
          <h2 className="w-full oxanium-font text-xl text-left mb-4">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="1x"
              className="pr-3 text-sky-500"
            />
            Professional Experience
          </h2>
          <div className="text-left">
            <h3 className="font-extrabold mb-1">IT Trainee</h3>
            <ul className="text-left leading-relaxed mb-5">
              <li>Hispanic Association of Colleges and Universities</li>
              <li>Subcontractor at USDA</li>
              <li>June 2022 - September 2022</li>
              <li>
                Redesigned and modernized government web pages, improving user
                experience and accessibility while maintaining strict compliance
                standards.
              </li>
            </ul>
            <h3 className="font-extrabold mb-1">Academic Projects</h3>
            <p>
              Extensive coursework experience spanning the full development
              lifecycle:
            </p>
            <ul className="text-left leading-relaxed mb-5 px-3">
              <li>UI/UX design and prototyping.</li>
              <li>Full-stack web and mobile application development.</li>
              <li>Database design and management.</li>
              <li>API development and integration.</li>
            </ul>
            <ul className="flex flex-row flex-wrap gap-2 text-left leading-relaxed">
              {techSkills.map((skill) => (
                <li key={skill} className="px-3 bg-fuchsia-500 rounded-2xl">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full p-5 md:w-[48%] rounded-2xl border border-white/20 text-[16px] bg-white-500/5 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
          <h2 className="w-full oxanium-font text-xl text-left mb-4">
            <FontAwesomeIcon
              icon={faDumbbell}
              size="1x"
              className="pr-3 text-sky-500"
            />
            Strengths
          </h2>
          <div className="text-left">
            <ul className="text-left leading-relaxed mb-5">
              <li>
                <h3 className="font-extrabold mb-1">Technical Excellence</h3>
                <p className="mb-5">
                  Full-stack development expertise with a passion for clean,
                  efficient code. I excel at transforming complex problems into
                  elegant, user-friendly solutions.
                </p>
              </li>
              <li>
                <h3 className="font-extrabold mb-1">
                  Cross-Cultural Communication
                </h3>
                <p className="mb-5">
                  Bilingual abilities and diverse background enable me to work
                  effectively with global teams and understand varied user
                  perspectives.
                </p>
              </li>
              <li>
                <h3 className="font-extrabold mb-1">Problem-Solving Mindset</h3>
                <p className="mb-5">
                  Patient and methodical approach to debugging and optimization.
                  I enjoy the entire journey from concept to deployment,
                  especially seeing ideas come to life as interactive products.
                </p>
              </li>
              <li>
                <h3 className="font-extrabold mb-1">Continuous Learning</h3>
                <p className="mb-5">
                  Technology enthusiast who stays current with emerging trends
                  and tools. Self-motivated learner comfortable with adapting to
                  new frameworks and languages.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-5 text-left md:w-[48%] rounded-2xl border border-white/20 text-[16px] bg-white-500/5 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
          <h2 className="w-full oxanium-font text-xl text-left mb-4">
            <FontAwesomeIcon
              icon={faRocket}
              size="1x"
              className="pr-3 text-sky-500"
            />
            What I'm Looking For
          </h2>
          <ul>
            <li className="mb-5">
              <h3 className="font-extrabold mb-1">The Ideal Opportunity</h3>
              <p className="mb-5">
                I'm seeking a full-stack software developer role with a company
                that values:
              </p>
              <ul className="px-3">
                <li>
                  <span className="font-bold py-1">Work-Life Balance</span> -
                  Sustainable growth and well-being
                </li>
                <li>
                  <span className="font-bold py-1">
                    Professional Development
                  </span>{" "}
                  - Investment in employee growth, skills and passions.
                </li>
                <li>
                  <span className="font-bold py-1">Innovation</span> -
                  Opportunities to work with cutting-edge technologies and on
                  meaningful projects.
                </li>
                <li>
                  <span className="font-bold py-1">Collaboration</span> -
                  supportive team environment that values diverse perspectives.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-extrabold mb-3">Open to Opportunities</h3>
              <ul className="flex flex-row flex-wrap gap-2 text-left leading-relaxed">
                {opportunities.map((opportunity) => (
                  <li
                    key={opportunity}
                    className="px-3 bg-fuchsia-500 rounded-2xl"
                  >
                    {opportunity}
                  </li>
                ))}
              </ul>
              <p className="my-3">
                Ready to contribute my skills while continuing to grow as a
                software engineer. Let's build something amazing together!
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <PrimaryCTAButton
            resourceLink={"/contact"}
            text={"Get in touch with me"}
          />

          <SecondaryCTAButton
            resourceLink={"/projects"}
            text={"Check out my projects"}
          />
        </div>
      </section>
    </main>
  );
}

export default About;
