import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Finder, Resume, Safari, Terminal } from '#windows';
import { Navbar, Welcome, Dock } from '#components';

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
    </main>
  )
}

export default App
