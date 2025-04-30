import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { SidebarContext } from "../context/SidebarContext";
import { links } from "../constants/Links";

const Sidebar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="bg-zinc-800 size-full relative flex items-center justify-center">
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
