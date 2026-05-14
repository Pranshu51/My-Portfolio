import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, setPrevStyles } = useWindowStore();
    const { isOpen, zIndex, isMinimized, isMaximized, prevStyles } = windows[windowKey];
    const ref = useRef(null);
    const resizeHandleRef = useRef(null);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 1, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      // Kill any existing animations on this element
      gsap.killTweensOf(el);

      if (isMinimized) {
        const dockArea = window.innerHeight - 100;
        gsap.to(el, {
          scale: 0.2,
          opacity: 0,
          y: dockArea,
          duration: 0.3,
          ease: "power2.in",
        });
      } else if (!isOpen) {
        el.style.display = "none";
      } else if (isMaximized) {
        if (!prevStyles) {
          const rect = el.getBoundingClientRect();
          setPrevStyles(windowKey, {
            width: rect.width,
            height: rect.height,
            top: el.offsetTop,
            left: el.offsetLeft,
          });
        }

        gsap.to(el, {
          width: "100dvw",
          height: "100dvh",
          top: 0,
          left: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (prevStyles) {
        gsap.to(el, {
          width: `${prevStyles.width}px`,
          height: `${prevStyles.height}px`,
          top: `${prevStyles.top}px`,
          left: `${prevStyles.left}px`,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        setPrevStyles(windowKey, null);
      } else {
        el.style.display = "block";
        gsap.to(el, { scale: 1, opacity: 1, y: 0, duration: 0.3 });
      }
    }, [
      isOpen,
      isMinimized,
      isMaximized,
      prevStyles,
      setPrevStyles,
      windowKey,
    ]);

    // Desktop drag from anywhere in the window (except controls/interactive)
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el || isMobile) return;

      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let startLeft = 0;
      let startTop = 0;

      const isInteractive = (target) =>
        target.closest("#window-controls") ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select");

      const handleMouseDown = (e) => {
        if (e.button !== 0) return;
        if (isInteractive(e.target)) return;

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = el.offsetLeft;
        startTop = el.offsetTop;

        focusWindow(windowKey);
        document.body.style.userSelect = "none";
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        el.style.left = `${startLeft + dx}px`;
        el.style.top = `${startTop + dy}px`;
      };

      const handleMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = "auto";
      };

      el.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        el.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isMobile, focusWindow, windowKey]);

    // Add resize functionality for desktop
    useLayoutEffect(() => {
  const el = ref.current;
  if (!el || isMaximized || isMobile) return;

  let isResizing = false;
  let currentWidth = el.offsetWidth;
  let currentHeight = el.offsetHeight;
  let startX = 0;
  let startY = 0;

  // Create resize handle
  let resizeHandle = el.querySelector(".resize-handle");
  if (!resizeHandle) {
    resizeHandle = document.createElement("div");
    resizeHandle.className = "resize-handle";
    resizeHandle.style.cssText = `
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      cursor: nwse-resize;
      background: linear-gradient(135deg, transparent 50%, #999 50%);
      z-index: 1000;
    `;
    el.appendChild(resizeHandle);
  }

  const handleResizeMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    currentWidth = el.offsetWidth;
    currentHeight = el.offsetHeight;
    document.body.style.cursor = "nwse-resize";
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    e.preventDefault();
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;

    const newWidth = Math.max(300, currentWidth + diffX);
    const newHeight = Math.max(200, currentHeight + diffY);

    el.style.width = newWidth + "px";
    el.style.height = newHeight + "px";
  };

  const handleMouseUp = (e) => {
    if (!isResizing) return;
    isResizing = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  };

  resizeHandle.addEventListener("mousedown", handleResizeMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  return () => {
    resizeHandle.removeEventListener("mousedown", handleResizeMouseDown);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    if (el.contains(resizeHandle)) {
      el.removeChild(resizeHandle);
    }
  };
  }, [isOpen, isMaximized, isMobile]);

// Add touch support for mobile
  useLayoutEffect(() => {
  const el = ref.current;
  if (!el || !isMobile) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  const handleTouchStart = (e) => {
    // Don't drag if clicking on buttons or interactive elements
    if (e.target.closest("#window-controls") || e.target.closest("button")) return;
    
    if (isMaximized) return;
    isDragging = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    
    // Convert from centered position to absolute position
    const rect = el.getBoundingClientRect();
    offsetX = rect.left;
    offsetY = rect.top;
    
    // Clear any CSS transforms that might interfere with dragging
    el.style.transform = "none";
    el.style.left = offsetX + "px";
    el.style.top = offsetY + "px";
    
    el.style.cursor = "grabbing";
    focusWindow(windowKey);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isMaximized) return;
    e.preventDefault();
    
    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;

    const diffX = touchCurrentX - touchStartX;
    const diffY = touchCurrentY - touchStartY;

    const newLeft = offsetX + diffX;
    const newTop = offsetY + diffY;

    // Allow dragging freely without tight constraints - allow partial off-screen
    const minLeft = -window.innerWidth * 0.3;
    const maxLeft = window.innerWidth * 1.3;
    const minTop = -200; // Allow dragging up a bit
    const maxTop = window.innerHeight;
    
    el.style.left = Math.max(minLeft, Math.min(maxLeft, newLeft)) + "px";
    el.style.top = Math.max(minTop, Math.min(maxTop, newTop)) + "px";
  };

  const handleTouchEnd = () => {
    isDragging = false;
    el.style.cursor = "grab";
  };

  el.addEventListener("touchstart", handleTouchStart);
  el.addEventListener("touchmove", handleTouchMove);
  el.addEventListener("touchend", handleTouchEnd);

  return () => {
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchmove", handleTouchMove);
    el.removeEventListener("touchend", handleTouchEnd);
  };
  }, [isOpen, isMaximized, isMobile, focusWindow, windowKey]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute max-sm:z-40"
        onMouseDown={(e) => {
          e.stopPropagation();
          focusWindow(windowKey);
        }}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
