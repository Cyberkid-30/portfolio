import { Gamehub } from "../assets";

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack?: string[];
  img: string;
}

export const Projects: Project[] = [
  {
    id: 1,
    name: "Gamehub",
    description:
      "GameHub Discovery is your go-to platform for exploring a wide variety of games across different genres and platforms. Instantly see where each game is available—PC, PlayStation, Xbox, Mac, or Nintendo—and discover top-rated titles sorted by relevance. Whether you're into action-packed shooters or immersive RPGs, GameHub helps you find your next favorite game effortlessly.",
    img: Gamehub,
    techStack: ["React", "Typescript", "Chakra UI", "Zustand", "React Query"],
  },
];
