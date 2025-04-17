import { FaGithub } from "react-icons/fa";
import { Project } from "../constants/Projects";
import { Globe } from "lucide-react";

const ProjectCard = ({ name, description, img, techStack }: Project) => {
  return (
    <div className="w-[380px] p-4 rounded-md border-2 border-zinc-600">
      <img
        src={img}
        className="w-full h-[200px] object-cover rounded-md mb-3"
        alt=""
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-zinc-400 mb-3">{description}</p>
      <div>
        <h3 className="mb-2">Tech stack:</h3>
        <div className="flex gap-4 flex-wrap text-zinc-400">
          {techStack?.map((item) => (
            <li
              key={item}
              className="leading-1 px-4 py-2 list-none rounded-full bg-zinc-800/30"
            >
              {item}
            </li>
          ))}
        </div>
        <div className="mt-5 flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 flex items-center gap-3 text-xs rounded-full bg-zinc-800/55 hover:bg-zinc-700 transition-colors"
            href="https://game-hub-eta-lac.vercel.app/"
          >
            <Globe size={20} />
            LIVE DEMO
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 flex items-center gap-3 text-xs rounded-full bg-zinc-800/55 hover:bg-zinc-700 transition-colors"
            href="https://github.com/Cyberkid-30/game-hub"
          >
            <FaGithub size={20} />
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
