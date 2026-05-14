import dayjs from 'dayjs'
import {  navIcons, navLinks } from '../constants'
import useWindowStore from '#store/window'



const Navbar = ({ togglePanel }) => {
    const {openWindow} = useWindowStore();
  return <nav>
    <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className='font-bold'>Pranshu's Portfolio</p>
        <ul>
            {navLinks.map(({id, name, type}) => (
                <li key={id} onClick={()=> openWindow(type)}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    </div>
    <div>
        <ul className="max-sm:gap-2">
            {navIcons.map(({id,img}) => (
                <li key={id} onClick={togglePanel}>
                    <img src={img} className='icon-hover' alt={`icon-${id}`} />
                </li>
            ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
    </div>
  </nav>
}

export default Navbar
