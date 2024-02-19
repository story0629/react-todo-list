import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className={`${Styles.navbar} ${isOpen ? '' : Styles.navbarClose}`}>
        <div className={Styles.icon}>
        {
          isOpen ?
          <FiX size={"2.5rem"} color="white" onClick={toggleHandler}/> :
          <FiAlignJustify size={"2.5rem"} color="white" onClick={toggleHandler}/>
        }
        </div>
          <ul>
              <li>Home</li>
              <li>React Hook</li>
              <li>React Classic</li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar
