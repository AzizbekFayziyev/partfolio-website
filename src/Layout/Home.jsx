import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Images/Hero.jpg'

export default function Home() {

  return (
    <main className='container'>

      <div className="img">
        <div data-aos="fade-left" className="social">
          <a target="_blank" href="https://t.me/AVANGARD2007"> <i class="fa-brands fa-telegram"></i></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCkB-Ymo4ICLi-yCgVkXoq5g"><i class="fa-brands fa-youtube"></i></a>
          <a target="_blank" href="https://github.com/AzizbekFayziyev"> <i class="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://t.me/itdarslariUz_bot"><i class="fa-solid fa-robot"></i></a>
        </div>

        <img className='hero' src={Hero} alt="" />
      </div>
      <div className="text" data-aos="slide-up">
        <h1 className='typeWrite'> Hi I'm Azizbek Fayziyev</h1>
        <h2>Front-End Web Developer.</h2>
        <p></p>
        <div className="btn-cnt">
          <Link to="/contact"><button className="btn-global">Contact Me</button></Link>
          <Link to="/portfolio"><button className="btn-global">My Portfolio</button></Link>
        </div>
      </div>

    </main>
  )
}
