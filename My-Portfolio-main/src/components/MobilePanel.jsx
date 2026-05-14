import { useState, useRef, useEffect } from "react";
import useWindowStore from "#store/window";
import { FolderOpen, Mail, FileText } from "lucide-react";

const MobilePanel = ({ showPanel, setShowPanel }) => {
  const { openWindow } = useWindowStore();
  const startY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    // Swipe down to show panel
    if (diff > 50 && !showPanel) {
      setShowPanel(true);
    }
    // Swipe up to hide panel
    if (diff < -50 && showPanel) {
      setShowPanel(false);
    }
  };

  const apps = [
    {
      id: "finder",
      name: "Projects",
      icon: FolderOpen,
      color: "bg-blue-500",
    },
    {
      id: "contact",
      name: "Contact",
      icon: Mail,
      color: "bg-red-500",
    },
    {
      id: "resume",
      name: "Resume",
      icon: FileText,
      color: "bg-green-500",
    },
  ];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`fixed top-0 left-0 w-full h-full transition-all duration-300 z-40 max-sm:block hidden ${
        showPanel ? "bg-black/40" : ""
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg rounded-b-3xl transition-all duration-300 max-sm:block hidden ${
          showPanel ? "translate-y-0 shadow-2xl" : "-translate-y-full"
        }`}
      >
        <div className="p-6 pt-8">
          <h2 className="text-sm text-gray-500 mb-4">Available</h2>
          <div className="grid grid-cols-3 gap-4">
            {apps.map(({ id, name, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => {
                  openWindow(id);
                  setShowPanel(false);
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-gray-100 transition"
              >
                <div className={`${color} p-3 rounded-full`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-xs text-center text-gray-700">{name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePanel;
