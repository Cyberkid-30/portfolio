import ProjectCard from "../components/ProjectCard";
import { Projects as ProjectItems } from "../constants/Projects";
const Projects = () => {
  return (
    <div id="projects" className="py-16">
      <h1 className="text-4xl mb-16">Projects</h1>
      <div className="flex">
        {ProjectItems.map((item) => (
          <ProjectCard
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
