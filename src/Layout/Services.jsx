import React, { useEffect } from 'react'
import service1 from "../Images/services-1.png"
import service2 from "../Images/services-2.png"
import service3 from "../Images/services-3.png"
import Footer from './Footer'

export default function Services() {

  useEffect(() => {

    const img = document.querySelectorAll(".img")

    for (let i = 0; i < img.length; i++) {
      window.
        addEventListener("mousemove", (event) => {
          let x = event.pageX / 80;
          let y = event.pageY / 80;
          img[i].style.transform = `translateX(-${x}px) translateY(-${y}px)`;
        });
    }

  }, []);

  return (
    <>
      <section className='services'>
        <h1 data-aos="zoom-in-up" className='info'>Our Services</h1>

        <div className="service-card container">

          <div data-aos="flip-left" className="box">
            <img className='img' src={service1} alt="" />
            <div className="text">
              <h1>Responsive Web Sites</h1>
              <p>I will create responsive and functional websites for you at a low cost in the design you want.</p>
              <a target="_blank" href='https://t.me/AVANGARD2007'><button>To Order</button></a>
            </div>
          </div>

          <div data-aos="flip-left" className="box">
            <div className="text">
              <h1>Web Applications</h1>
              <p>I will create web applications for you in a quality and beautiful design, using PWA technology.</p>
              <a target="_blank" href='https://t.me/AVANGARD2007'><button>To Order</button></a>
            </div>
            <img className='img' src={service2} alt="" />
          </div>

          <div data-aos="flip-left" className="box">
            <img className='img' src={service3} alt="" />
            <div className="text">
              <h1>Single Page Web Sites</h1>
              <p>I can quickly create one-page fast websites for you!</p>
              <a target="_blank" href='https://t.me/AVANGARD2007'><button>To Order</button></a>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}
