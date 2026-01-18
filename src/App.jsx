import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { useState } from 'react';
import { Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text } from '#windows';
import { Navbar, Welcome, Dock, Home, MobilePanel } from '#components';

gsap.registerPlugin(Draggable);//=>for windows to be draggable

const App = () => {
  const [showMobilePanel, setShowMobilePanel] = useState(false);

  return (
    <main>
      <Navbar togglePanel={() => setShowMobilePanel(!showMobilePanel)} />
      {/* Mobile-only floating notice */}
    	      <div className="hidden max-sm:flex fixed bottom-48 left-1/2 -translate-x-1/2 z-[60] px-3 py-1 rounded-full bg-black/70 text-white text-[10px]">
          Preferred on desktop • Mobile view simplified
      </div>
      <Welcome />
      <Dock />
      <MobilePanel showPanel={showMobilePanel} setShowPanel={setShowMobilePanel} />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
     
    </main>
  )
}

export default App
