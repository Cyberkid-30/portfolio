const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 bg-zinc-900/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto py-3 flex items-center justify-between">
        <a className="font-extrabold text-3xl" href="#">
          Phandoh
          <span className="text-pink-700">.</span>dev
        </a>

        <nav>
          <ul className="flex gap-5 text-zinc-400">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
