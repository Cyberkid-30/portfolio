import { ExperienceCardType } from "../types";

const ExperienceCard = ({
  year,
  jobDescription,
  position,
  place,
}: ExperienceCardType) => {
  return (
    <div className="flex flex-col-reverse gap-3 items-start pl-4 py-4 w-full border-l-4 border-zinc-600 md:w-[80%] md:gap-5 md:flex-row">
      <h2 className="shrink-0 font-bold text-zinc-400">{year}</h2>
      <div>
        <h3 className="font-bold text-xl">{position} </h3>
        <h4 className="mb-2">{place}</h4>
        <p className=" text-zinc-400">{jobDescription}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
