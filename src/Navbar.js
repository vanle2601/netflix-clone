import React, { useState, useEffect } from 'react'

const Navbar = () => {

    const [show, setShow] = useState(false);
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix logo"
        />
         <img 
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix user logo"
        />
    </div>
  )
}

export default Navbar