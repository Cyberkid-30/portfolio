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
        className="flex gap-5 flex-wrap place-content-center md:place-content-start"
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
