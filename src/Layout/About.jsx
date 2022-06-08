import React, { useEffect, useState } from 'react'
import about from '../Images/about.png'
import Footer from './Footer'


export default function About() {

  const [more, setMore] = useState(true)

 

  useEffect(() => {

    const img = document.querySelector(".img")
    window.
      addEventListener("mousemove", (event) => {
        let x = event.pageX / 40;
        let y = event.pageY / 40;
        img.style.transform = `translateX(-${x}px) translateY(-${y}px)`;
      });

  }, []);

  return (
    <>

      <section className='about container'>

        <div data-aos="flip-left" className="about-card">

          <div className="img">
            <img src={about} alt="" />
          </div>

          <div className="text">
            <h1>About Me</h1>

            <p>Hello, my name is Fayziyev Azizbek. I am a young programmer.
              I am currently learning programming. My dreams for the future
              are huge. My dream is to become a famous programmer in the
              future and implement projects that benefit the community.</p>

            <a href="#more"><button className="btn-global">Learn More</button></a>
          </div>

        </div>

        <div className="skills">

          <h1 data-aos="zoom-in-up" className='info'>My Skills</h1>

          <div className="row">

            <div className="col col-md-4">

              <div className="skl-card" data-aos="slide-up">
                <h2>HTML</h2>
                <i class="fa-brands fa-html5"></i>
              </div>

              <div className="skl-card" data-aos="slide-up">
                <h2>BOOTSTRAP</h2>
                <i class="fa-brands fa-bootstrap"></i>
              </div>

            </div>

            <div className="col col-md-4">

              <div className="skl-card" data-aos="slide-up">
                <h2>CSS</h2>
                <i class="fa-brands fa-css3-alt"></i>

              </div>

              <div className="skl-card" data-aos="slide-up">
                <h2>REACT.JS</h2>
                <i class="fa-brands fa-react"></i>
              </div>

            </div>

            <div className="col col-md-4">

              <div className="skl-card" data-aos="slide-up">
                <h2>JAVASCRIPT</h2>
                <i class="fa-brands fa-js-square"></i>
              </div>

              <div className="skl-card" data-aos="slide-up">
                <h2>REDUX</h2>
                <i class="fa-solid fa-registered"></i>
              </div>

            </div>

          </div>

        </div>

        <div id='more' className="more">
          <h1 data-aos="zoom-in-up" className='info'>More Info</h1>

          <div data-aos="slide-up" className="menu">

            <button
              onClick={() => setMore(true)}
              className="btn-global">
              Education
            </button>

            <button
              onClick={() => setMore(false)}
              className="btn-global">
              Social Media
            </button>

          </div>

          {
            more ?
              <div className="edu">
                <ul>
                  <li><i class="fa-solid fa-school"></i> One Million Uzbek Coders</li>
                  <li><i class="fa-solid fa-school-flag"></i> It Park Front-End Course</li>
                  <li><i class="fa-solid fa-award"></i> Self Study...</li>
                </ul>
              </div>
              :
              <div className="social">
                <ul>
                  <li><i class="fa-brands fa-telegram"></i> My <a target="_blank" href="https://t.me/Fayziyev_Azizbek">Telegram</a> Channel</li>
                  <li><i class="fa-brands fa-github"></i> My <a target="_blank" href="https://github.com/AzizbekFayziyev">Git Hub</a> Profile</li>
                  <li><i class="fa-brands fa-youtube"></i> My <a target="_blank" href="https://www.youtube.com/channel/UCkB-Ymo4ICLi-yCgVkXoq5g">You Tube</a> Channel</li>
                  <li><i class="fa-solid fa-robot"></i> My <a target="_blank" href="https://t.me/itdarslariUz_bot">Telegram</a> Bot</li>
                </ul>
              </div>
          }



        </div>
      </section>

      <Footer />
    </>
  )
}
