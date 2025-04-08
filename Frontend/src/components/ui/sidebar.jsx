import { cn } from "../../lib/utils.js";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectTheme } from '../../features/themeSlice';

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return <DesktopSidebar {...props} />;
};

export const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen, animate } = useSidebar();
  const theme = useSelector(selectTheme);
  
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 md:flex md:flex-col shrink-0 font-light",
        theme === 'dark' ? 'bg-zinc-900 text-neutral-200' : 'bg-white text-neutral-900',
        className
      )}
      animate={{
        width: animate ? (open ? "200px" : "60px") : "200px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SidebarLink = ({ link, className, ...props }) => {
  const { open, animate } = useSidebar();
  const theme = useSelector(selectTheme);
  
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center justify-start gap-2 py-2 rounded-md px-2 transition-colors",
        theme === 'dark' 
          ? 'hover:bg-zinc-800' 
          : 'hover:bg-neutral-100',
        "group/sidebar",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn(
          "text-sm font-light group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre",
          theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
