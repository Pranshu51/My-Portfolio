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
