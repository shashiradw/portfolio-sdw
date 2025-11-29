"use client";

import { Sparkles, SquareChevronLeft } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

function SidebarToggleButton() {

  const { toggleSidebar, open, isMobile, openMobile } = useSidebar();
  const isSidebarOpen = isMobile ? openMobile : open;
  if (isSidebarOpen) return null;

 const buttonStyles = `relative w-16 h-16 rounded-full
    bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900
    dark:from-gray-900 dark:via-gray-800 dark:to-black
    hover:shadow-[0_0_35px_rgba(0,0,0,0.7)]
    transition-all duration-500
    hover:scale-105 hover:-rotate-3
    flex items-center justify-center
    border border-gray-700/40
    backdrop-blur-sm`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Sparkle badge */}
      <div className="absolute -top-1 -right-1 z-10">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-gray-500 to-red-700 shadow-lg flex items-center justify-center animate-bounce [animation-duration:2s]">
          <Sparkles className="h-3 w-3 text-white" />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-white/20 text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
         Chat with My AI
        {/* Tooltip arrow */}
        <div className="absolute -bottom-1 right-6 w-2 h-2 rotate-45 bg-white/90 dark:bg-black/90 border-r border-b border-white/40 dark:border-white/20" />
      </div>

      <button
          type="button"
          onClick={toggleSidebar}
          className={buttonStyles}
          aria-label="Chat with AI Twin"
        >
          <SquareChevronLeft className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
        </button>
    </div>
  );
}

export default SidebarToggleButton;
