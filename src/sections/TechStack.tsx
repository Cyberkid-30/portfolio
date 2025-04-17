import { TechStackItems } from "../TechStackItems";
import TechCard from "../components/TechCard";

const TechStack = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl mb-10">Tech Stack</h1>
      <div className="grid gap-4 grid-cols-[120px_120px] md:grid-cols-[120px_120px_120px] lg:grid-cols-[120px_120px_120px_120px] xl:grid-cols-[120px_120px_120px_120px_120px]">
        {TechStackItems.map((item) => (
          <TechCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
