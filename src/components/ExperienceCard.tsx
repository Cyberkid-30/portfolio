const ExperienceCard = () => {
  return (
    <div className="flex gap-3 items-start w-full md:w-[80%] md:gap-5">
      <h2 className="shrink-0 font-bold text-zinc-400">2023-2024</h2>
      <div>
        <h3 className="font-bold text-xl">
          Junior Software Engineer (Frontend)
        </h3>
        <h4 className="mb-2">Ghana Revenue Authority, Adabraka</h4>
        <p className=" text-zinc-400">
          Assisted in the design and development of user-friendly web interfaces
          for various GRA applications. Worked with the QA team to ensure that
          applications met quality standards and functioned correctly across
          different browsers and devices.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
