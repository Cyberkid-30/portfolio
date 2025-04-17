import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { SidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const links = [
    {
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="bg-zinc-800 size-full  flex items-center justify-center">
      <div
        onClick={toggleSidebar}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <GrClose size={24} />
      </div>
      <nav>
        <ul className="flex flex-col gap-5 text-zinc-400">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.id}
              onClick={toggleSidebar}
              className="px-10 py-3 text-lg hover:bg-zinc-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
