import { Gojo } from "../assets";
import { Home } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero">
      <div className="py-16 md:h-[90vh] md:py-0 flex flex-col-reverse px-5 md:px-0 md:flex-row gap-[50px] items-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0.05,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:w-[60%]"
        >
          <p className="md:text-5xl mb-4 text-center md:text-left text-3xl">
            {" "}
            Hi 👋, I'm Kwabena Eyiah Phandoh,{" "}
            <span className="text-zinc-400">
              a Frontend Software Developer.
            </span>
            <span className="text-xs inline-block md:inline font-bold bg-green-700/30 text-green-600 p-2 rounded-full ml-1 ">
              Open to work
            </span>
          </p>

          <div className="flex items-center">
            <a
              href="https://www.google.com.gh/maps/place/Accra/@5.5913738,-0.2621322,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.5592846!4d-0.1974306!16zL20vMGZueWM?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 mr-auto"
            >
              <img src={Home} alt="" width={24} height={24} />
              <p className="text-zinc-400">Ghana, Accra.</p>
            </a>
            <a
              href="https://www.linkedin.com/in/kwabena-eyiah-phandoh-a69b61321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpqkXpZFuRui7bfVV4N7P8Q%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 mr-4"
            >
              <FaLinkedin fill="dodgerblue" size={24} />
              <p className="text-zinc-400">LinkedIn</p>
            </a>
            <a
              href="https://github.com/Cyberkid-30"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <FaGithub size={24} />
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
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="size-[310px] rounded-full bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 flex items-center justify-center shrink-0 grow-0"
        >
          <img
            className="size-[300px] rounded-full object-cover object-center border-4 border-white"
            src={Gojo}
            alt="profile pic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
