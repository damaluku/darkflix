import React, { useEffect, useState} from 'react'
import "./Navbar.css"
import { GiFrozenArrow } from 'react-icons/gi'
import Fade from 'react-reveal/Fade';

const Navbar = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <h1 className="nav_heading">DARKFLIX</h1>
      <div className="nav_avatar">
        <Fade top>
          <GiFrozenArrow />
        </Fade>
      </div>
    </div>
  )
}

export default Navbar