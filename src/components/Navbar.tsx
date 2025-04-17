import { useEffect, useContext } from "react";
import { MenuIcon } from "lucide-react";
import { SidebarContext } from "../context/SidebarContext";

const Navbar = () => {
  const { isVisible, toggleSidebar } = useContext(SidebarContext);

  useEffect(() => {
    console.log("Sidebar visibility changed:", isVisible);
  }, [isVisible]); // Logs whenever `isVisible` changes

  return (
    <header
      id="home"
      className="sticky z-40 left-0 top-0 bg-zinc-900/80 backdrop-blur-sm px-3"
    >
      <div className="max-w-5xl mx-auto py-3 flex items-center justify-between">
        <a className="font-extrabold text-3xl" href="#">
          Phandoh
          <span className="text-pink-700">.</span>dev
        </a>

        <button
          onClick={toggleSidebar} // No need to log here
          className="flex cursor-pointer md:hidden"
        >
          <MenuIcon size={30} />
        </button>

        <nav className="hidden md:flex">
          <ul className="flex gap-5 text-zinc-400">
            <a href="#home">Home</a>
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
