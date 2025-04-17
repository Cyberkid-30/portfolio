import { Gojo } from "../assets";
import { Github, Home, LinkedIn } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-auto py-16 md:h-[90vh] md:py-0 flex flex-col-reverse px-5 md:px-0 md:flex-row gap-[50px] items-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0.05,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="lg:w-[60%]"
        >
          <p className="md:text-5xl mb-4 text-center md:text-left text-3xl">
            {" "}
            Hi 👋, I'm Kwabena Eyiah Phandoh,{" "}
            <span className="text-zinc-400">
              a Frontend Software Developer.
            </span>
            <span className="text-xs font-bold bg-green-700/30 text-green-600 p-2 rounded-full ml-1">
              Open to work
            </span>
          </p>

          <div className="flex items-center">
            <a href="" className="flex gap-2 mr-auto">
              <img src={Home} alt="" width={24} height={24} />
              <p className="text-zinc-400">Ghana, Accra.</p>
            </a>
            <a href="" className="flex gap-2 mr-4">
              <img src={LinkedIn} alt="" width={24} height={24} color="white" />{" "}
              <p className="text-zinc-400">LinkedIn</p>
            </a>
            <a href="" className="flex gap-2">
              <img
                className="bg-white rounded-md"
                src={Github}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-zinc-400">Github</p>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 200,
            opacity: 0.05,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="size-[260px] rounded-full bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 flex items-center justify-center shrink-0 grow-0"
        >
          <img
            className="size-[250px] rounded-full object-cover object-center border-4 border-white"
            src={Gojo}
            alt="profile pic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
