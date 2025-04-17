import { motion } from "framer-motion";
import { TechStackItems } from "../constants/TechStackItems";
import TechCard from "../components/TechCard";

const TechStack = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl mb-16">Tech Stack</h1>
      <motion.div
        initial={{
          y: 300,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="grid gap-4 place-content-center md:place-content-start grid-cols-[120px_120px] md:grid-cols-[120px_120px_120px] lg:grid-cols-[120px_120px_120px_120px] xl:grid-cols-[120px_120px_120px_120px_120px]"
      >
        {TechStackItems.map((item) => (
          <TechCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
