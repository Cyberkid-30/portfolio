import { Gojo } from "../assets";
import { Github, Home, LinkedIn } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="h-[70vh] flex gap-[50px] items-center">
        <motion.div
          initial={{
            x: 100,
            opacity: 0.05,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="lg:w-[60%]"
        >
          <p className="text-5xl mb-4">
            {" "}
            Hey, I'm Kwabena Eyiah Phandoh.{" "}
            <span className="text-zinc-400">
              I'm a Frontend Software Developer.
            </span>
            <span className="text-xs font-bold bg-green-700/30 text-green-600 p-2 rounded-full ml-1">
              <span className="text-6xl leading-0">.</span> Open to work
            </span>
          </p>

          <div className="flex items-center">
            <a href="" className="flex gap-2 mr-auto">
              <img src={Home} alt="" width={24} height={24} />
              <p>Ghana, Accra.</p>
            </a>
            <a href="" className="flex gap-2 mr-4">
              <img src={LinkedIn} alt="" width={24} height={24} color="white" />{" "}
              <p>LinkedIn</p>
            </a>
            <a href="" className="flex gap-2">
              <img
                className="bg-white rounded-md"
                src={Github}
                alt=""
                width={24}
                height={24}
              />
              <p>Github</p>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: -100,
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
