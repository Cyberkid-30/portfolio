import { Gojo } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16">
      <h1 className="text-4xl mb-16">About me</h1>

      <div className="flex flex-col gap-10 md:flex-row overflow-x-hidden">
        <motion.img
          initial={{
            x: -200,
            opacity: 0.05,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          src={Gojo}
          className="shrink-0 border-4 border-white mx-auto rounded-xl size-[320px] object-cover"
          alt=""
        />

        <motion.div
          initial={{
            x: 200,
            opacity: 0.05,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <p className="text-lg text-zinc-400">
            I'm a passionate and driven individual with a strong interest in
            technology, problem-solving, and continuous learning. Currently
            pursuing a degree in Computer Science, I enjoy building creative and
            impactful software solutions, especially in web development and
            cybersecurity. I’m always eager to take on new challenges,
            collaborate with others, and grow both personally and
            professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
