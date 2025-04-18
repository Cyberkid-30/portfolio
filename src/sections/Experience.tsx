import ExperienceCard from "../components/ExperienceCard";
import { Experiences } from "../constants/Experiences";

const Experience = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl mb-16">Work Experience</h1>

      <div className="flex flex-col gap-10 md:gap-16">
        {Experiences.map((item) => (
          <ExperienceCard
            key={item.id}
            position={item.position}
            place={item.place}
            jobDescription={item.jobDescription}
            year={item.year}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
