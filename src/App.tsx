import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto">
        <Hero />
        <TechStack />
        <Experience />
      </section>
    </main>
  );
}

export default App;
