import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const navRef = useRef();
    const [showHide, setShowHide] = useState(false)

    function isActive() {
        navRef.current.classList.toggle("nav-active");
        setShowHide(!showHide);
    }

    function navLinkClose() {
        navRef.current.classList.remove("nav-active");
        setShowHide(false)
    }

    return (
        <nav data-aos="slide-down">
            <div className="container nav justify-content-around">

                <h1 className='logo'><i class="fa-brands fa-react"></i> <b>AVAN<span>CODER</span></b></h1>
                <ul ref={navRef} className="nav">
                    <li className="nav-item">
                        <NavLink onClick={navLinkClose} to="/" className="nav-link">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink onClick={navLinkClose} to="/about" className="nav-link">About Me</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink onClick={navLinkClose} to="/services" className="nav-link">Services</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink onClick={navLinkClose} to="/portfolio" className="nav-link">Portfolio</NavLink>
                    </li>


                    <NavLink onClick={navLinkClose} to="/contact">
                        <button className="btn-global">Contact Me</button>
                    </NavLink>

                </ul>

                <h2 onClick={isActive} className='mob-nav'>
                    {showHide ? (<i class="fa-solid fa-xmark"></i>)
                        :
                        <i class="fa-solid fa-bars"></i>}
                </h2>
            </div>
        </nav>
    )
}
