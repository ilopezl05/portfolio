function ProjectCard() {
  return (
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
  );
}

export default ProjectCard;
