import { ReactNode, useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setVisibilty] = useState(false);

  const toggleSidebar = () => {
    setVisibilty((prev) => !prev);
  };
  return (
    <SidebarContext.Provider value={{ isVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;
