import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { ThemeToggle } from "./ui/ThemeToggle";
import { selectTheme } from "../features/themeSlice";
import {
  IconHome,
  IconShoppingCart,
  IconChartBar,
  IconChevronDown,
  IconChevronRight,
  IconDownload,
  IconUpload,
  IconUserCircle
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const AppSidebar = () => {
  const [open, setOpen] = useState(true);
  const [dashboardExpanded, setDashboardExpanded] = useState(false);
  const theme = useSelector(selectTheme);
  const location = useLocation();

  const links = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-900 dark:text-neutral-200" />
      ),
    },
    {
      label: "Marketplace",
      href: "/marketplace",
      icon: (
        <IconShoppingCart className="h-5 w-5 shrink-0 text-neutral-900 dark:text-neutral-200" />
      ),
    },
    {
      label: "Dashboard",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-neutral-900 dark:text-neutral-200" />
      ),
      hasSubmenu: true,
      expanded: dashboardExpanded,
      onToggle: () => setDashboardExpanded(!dashboardExpanded),
      submenu: [
        {
          label: "Purchased",
          href: "/dashboard/purchased",
          icon: (
            <IconDownload className="h-4 w-4 shrink-0 text-neutral-900 dark:text-neutral-200" />
          ),
        },
        {
          label: "Published",
          href: "/dashboard/published",
          icon: (
            <IconUpload className="h-4 w-4 shrink-0 text-neutral-900 dark:text-neutral-200" />
          ),
        },
      ],
    },
  ];

  const SidebarLinkWithSubmenu = ({ link }) => {
    const isActive = location.pathname === link.href;
    const hasActiveChild = link.submenu?.some(
      (subItem) => location.pathname === subItem.href
    );

    return (
      <div className="flex flex-col">
        {link.hasSubmenu ? (
          <>
            <button
              onClick={link.onToggle}
              className={cn(
                "flex items-center justify-between px-2 py-2 rounded-md relative",
                theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-neutral-100",
                "group/sidebar",
                hasActiveChild && "font-normal"
              )}
            >
              <div className="flex items-center gap-2">
                {link.icon}
                {open && (
                  <span className="text-sm whitespace-pre font-light">
                    {link.label}
                  </span>
                )}
              </div>
              {open &&
                (link.expanded ? (
                  <IconChevronDown className="h-4 w-4 text-neutral-400" />
                ) : (
                  <IconChevronRight className="h-4 w-4 text-neutral-400" />
                ))}
              {hasActiveChild && (
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                    theme === "dark" ? "bg-neutral-400" : "bg-neutral-900"
                  }`}
                ></div>
              )}
            </button>

            {link.expanded && open && (
              <div className="ml-3 pl-3 mt-1 border-l border-zinc-800 dark:border-zinc-700">
                {link.submenu.map((subItem, idx) => {
                  const isSubItemActive = location.pathname === subItem.href;
                  return (
                    <SidebarLink
                      key={idx}
                      link={subItem}
                      className={cn(
                        "ml-0 pl-0",
                        isSubItemActive && "relative",
                        isSubItemActive &&
                          `${
                            theme === "dark" ? "bg-zinc-800" : "bg-neutral-100"
                          } font-normal`
                      )}
                    >
                      {isSubItemActive && (
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                            theme === "dark"
                              ? "bg-neutral-400"
                              : "bg-neutral-900"
                          }`}
                        ></div>
                      )}
                    </SidebarLink>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <SidebarLink
            link={link}
            className={cn(
              "relative",
              isActive &&
                `${
                  theme === "dark" ? "bg-zinc-800" : "bg-neutral-100"
                } font-normal`
            )}
          >
            {isActive && (
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                  theme === "dark" ? "bg-neutral-400" : "bg-neutral-900"
                }`}
              ></div>
            )}
          </SidebarLink>
        )}
      </div>
    );
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 relative group">
            {open ? (
              <div className="flex items-center space-x-2">
                <img
                  src="/vite.svg"
                  alt="Nivaran Logo"
                  className="h-8 w-auto"
                />
                <span className="font-medium whitespace-pre">Nivaran</span>
              </div>
            ) : (
              <div className="relative">
                <img
                  src="/vite.svg"
                  alt="Nivaran Logo"
                  className="h-8 w-auto"
                />
                <div
                  className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 ${
                    theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"
                  } px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none`}
                >
                  Nivaran
                </div>
              </div>
            )}
          </div>

                <div className="mt-8 flex flex-col space-y-1">
                {links.map((link, idx) => (
                  <SidebarLinkWithSubmenu key={idx} link={link} />
                ))}
                </div>
                <div className={`mt-auto p-4 ${open ? "" : "flex justify-center"}`}>
                <SignedOut>
                  {open ? (
                  <SignInButton mode="modal">
                    <button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-800 w-full">
                    <div className="h-5 w-5 rounded-full bg-neutral-200 dark:bg-zinc-700 flex items-center justify-center">
                      <IconUserCircle className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                    </div>
                    <span className="text-sm font-light">Sign in</span>
                    </button>
                  </SignInButton>
                  ) : (
                  <SignInButton mode="modal">
                    <button className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-zinc-700 flex items-center justify-center hover:opacity-80">
                    <IconUserCircle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                    </button>
                  </SignInButton>
                  )}
                </SignedOut>
                <SignedIn>
                  <UserButton 
                  appearance={{
                    elements: {
                    avatarBox: open ? 
                      "w-8 h-8" : 
                      "w-8 h-8",
                    userButtonBox: open ?
                      "flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-800 w-full" :
                      "flex justify-center"
                    }
                  }}
                  showName={open}
                  />
                </SignedIn>
                </div>

                {/* Theme Toggle Button */}
          <div className={` p-4 ${open ? "" : "flex justify-center"}`}>
            <ThemeToggle className={open ? "w-full" : "w-8 h-8"} />
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default AppSidebar;
