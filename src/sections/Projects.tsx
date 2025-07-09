import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects as projectItems } from "../constants/Projects";
const Projects = () => {
  return (
    <div id="projects" className="py-[150px]">
      <h1 className="text-4xl mb-16">Projects</h1>
      <motion.div
        initial={{
          y: 100,
          opacity: 0.05,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex gap-12 flex-wrap place-content-center md:place-content-start"
      >
        {projectItems.map((item) => (
          <ProjectCard
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
            techStack={item.techStack}
            githubURL={item.githubURL}
            liveURL={item.liveURL}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
