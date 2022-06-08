import React, { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom';
// Sections
import About from './Layout/About';
import Contact from './Layout/Contact';
import Error from './Layout/Error';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import Portfolio from './Layout/Portfolio';
import Services from './Layout/Services';
// Photos and Videoes
import bg from "./Images/bg.mp4"
import cursor from "./Images/cursor.png"
// Libarys
import AOS from "aos"
import "aos/dist/aos.css"

export default function App() {

  const Loading = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1200
    })
  })

  useEffect(() => {


    window.replainSettings = { id: '79c10b90-36ed-4a29-9b68-850f2ef07a9d' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');

    setTimeout(() => {
      Loading.current.classList.add("loading-active")
    }, 500)

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.display = "block"
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none"
    });

  }, [])

  return (
    <>

      {/* Cursor */}
      <img className='cursor' src={cursor} alt="" />

      {/* Bacground-video */}

      <video src={bg} autoPlay muted loop />

      {/* Loading Animation */}
      <div ref={Loading} className="loading">
        <span className='spinner-border'></span>
      </div>

      {/* Routing-Elements */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </>
  )

}
