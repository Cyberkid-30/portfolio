import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import { SidebarContext } from "./context/SidebarContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const { isVisible } = useContext(SidebarContext);

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto pb-3 px-5 md:px-0">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </section>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed z-50 top-0 left-0 w-full h-screen"
            key="sidebar"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
