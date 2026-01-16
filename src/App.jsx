import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text } from '#windows';
import { Navbar, Welcome, Dock, Home } from '#components';

gsap.registerPlugin(Draggable);//=>for windows to be draggable

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
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
