import { createContext } from "react";

interface SidebarContextType {
  isVisible: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextType);
