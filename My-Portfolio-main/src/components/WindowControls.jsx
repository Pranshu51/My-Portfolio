import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div 
        className="close" 
        onClick={() => closeWindow(target)} 
        title="Close"
        style={{ cursor: "pointer" }}
      />
      <div 
        className="minimize" 
        onClick={() => minimizeWindow(target)} 
        title="Minimize"
        style={{ cursor: "pointer" }}
      />
      <div 
        className="maximize" 
        onClick={() => maximizeWindow(target)} 
        title="Maximize"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default WindowControls;