import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";

gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  // Always open the main "My Projects" (work) view in Finder
  // when clicking any desktop folder icon
  const handleOpenProjectFinder = () => {
    setActiveLocation(locations.work);
    openWindow("finder");
  };

  const handleFolderClick = () => {
    handleOpenProjectFinder();
  };

    // Enable drag for project folders (desktop + mobile) via GSAP Draggable
    useGSAP(() => {
      if (typeof window === "undefined") return;

      const folders = gsap.utils.toArray(".folder");

      const draggables = folders.map((folder) =>
        Draggable.create(folder, {
          type: "x,y",
          edgeResistance: 0.9,
          bounds: window,
          minimumMovement: 6, // small taps stay clicks, real moves drag
        })[0]
      );

      return () => {
        draggables.forEach((d) => d && d.kill());
      };
    }, []);
    return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
              onClick={handleFolderClick}
              onDoubleClick={handleOpenProjectFinder}
              onTouchEnd={handleFolderClick}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;