import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 md:px-0">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </section>
    </main>
  );
}

export default App;
