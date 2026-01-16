import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import clsx from "clsx";  //=>for highlighting in which folder we are in
import useWindowStore from "#store/window";

const Finder = () => {
    const {openWindow} = useWindowStore();
    const {activeLocation,setActiveLocation} = useLocationStore();
    const openItem = (item) => {
        if(item.fileType==="pdf") return openWindow("resume");
        if(item.kind==="folder") return setActiveLocation(item);
        if(["fig",'url'].includes(item.fileType) && item.href)
            return window.open(item.href,"_blank");

        openWindow(`${item.fileType}${item.kind}`,item);
    }

    const rederList= (name,items) =>(
        <div>
      <h3>{name}</h3>
      <ul>
    {items.map((item) => (
          <li key={item.id} onClick={() => 
            setActiveLocation(item)}
            className={clsx(
            item.id === activeLocation.id ? "active" : "non-active",)}>
            <img src={item.icon} className="w-4" alt={item
              .name} />
            <p className="text-sm font-medium 
              truncate">{item.name}</p>
          </li>
        ))};
        </ul>
        </div>
    );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
  <div className="sidebar">
        {rederList('Favourite',Object.values(locations))}
        {rederList('My Projects',locations.work.children)}
  </div>
  <ul className="content">
  {activeLocation?.children.map((item) => (
    <li
      key={item.id}
      className={item.position}
      onClick={() => openItem(item)}
    >
      <img src={item.icon} alt={item.name} />
      <p>{item.name}</p>
    </li>
  ))}
</ul>
</div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;