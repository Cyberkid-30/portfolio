import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto">
        <Hero />
      </section>
    </main>
  );
}

export default App;
