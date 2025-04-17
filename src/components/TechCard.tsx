import { TechCardType } from "../types";

const TechCard = ({ name, img }: TechCardType) => {
  return (
    <div className="w-[120px] h-[90px] flex flex-col items-center justify-center border border-zinc-600 rounded-md">
      <img src={img} width={30} height={30} /> {name}
    </div>
  );
};

export default TechCard;
