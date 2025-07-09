import { Gamehub, TicketBounty } from "../assets";

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack?: string[];
  img: string;
  githubURL: string;
  liveURL: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Gamehub",
    description:
      "GameHub Discovery is your go-to platform for exploring a wide variety of games across different genres and platforms. Instantly see where each game is available—PC, PlayStation, Xbox, Mac, or Nintendo—and discover top-rated titles sorted by relevance. Whether you're into action-packed shooters or immersive RPGs, GameHub helps you find your next favorite game effortlessly.",
    img: Gamehub,
    techStack: ["React", "Typescript", "Chakra UI", "Zustand", "React Query"],
    githubURL: "https://github.com/Cyberkid-30/game-hub",
    liveURL: "https://game-hub-eta-lac.vercel.app/",
  },
  {
    id: 2,
    name: "Ticket Bounty",
    description:
      "Ticket Bounty is your ultimate platform for creating and claiming tasks with exciting rewards. Users can post tasks—big or small—and attach bounties to them, while others can complete these tasks and claim the rewards. Whether it's fixing a bug, designing a logo, or solving a challenge, Ticket Bounty connects task creators with skilled solvers in a seamless, rewarding experience. Earn money for your skills or get things done faster—all in one place!",
    img: TicketBounty,
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "React Query",
      "Oslo.js",
    ],
    githubURL: "https://github.com/Cyberkid-30/ticket-bounty.git",
    liveURL: "https://ticket-bounty-sooty.vercel.app/",
  },
];
