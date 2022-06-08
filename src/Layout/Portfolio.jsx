import React from 'react'
import Footer from './Footer'
// images
import portfolio1 from "../Images/portfolio/1.png"
import portfolio2 from "../Images/portfolio/2.png"
import portfolio3 from "../Images/portfolio/3.png"
import portfolio4 from "../Images/portfolio/4.png"
import portfolio5 from "../Images/portfolio/5.png"
import portfolio6 from "../Images/portfolio/6.png"
import portfolio7 from "../Images/portfolio/7.png"
import portfolio8 from "../Images/portfolio/8.png"


export default function Portfolio() {
  return (
    <div>
      <section data-aos="fade" className='portfolio container'>
        <h1 data-aos="zoom-in-up" className='info'>My Last Works</h1>

        <div className="row">

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio1} />
              <div className="text">
                <h2>SPA Foot App</h2>
                <p>Single Page Foot Application using React.js,React-Router And MealDb Api</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://spa-food-app.netlify.app"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/Single-Page-Foots-App"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio2} />
              <div className="text">
                <h2>Movie Web Site</h2>
                <p>Responsive Movie Search Web Site Using React.js Class Components.</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://react-movie-web-site.netlify.app/"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/React-Movie-Web-Site"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio3} />
              <div className="text">
                <h2>Twitter Analog Clone</h2>
                <p>Twitter Analog Clone using React.js And bootstrap 5</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://twitter-analog-fa.netlify.app"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/Twitter-Analog-React.js-"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio4} />
              <div className="text">
                <h2>Image Search App</h2>
                <p>Image Search Application Using React.js And Unshplash Api</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://img-react.netlify.app"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/image-search-app-using-react.js"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio5} />
              <div className="text">
                <h2>Farniture Web Site</h2>
                <p>Responsive Farniture Web Site Using Html,Css,Bootstrap 5,Javascript And Jquery</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://dilxushmebellari.netlify.app/"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/Real-project---Farniture-Web-site"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio6} />
              <div className="text">
                <h2>School Web Site</h2>
                <p>Responsive School Web Site Using Html,Scss,Bootstrap 5 And Javascript</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://11-mk.netlify.app"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/School-Web-Site-in-Sass"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio7} />
              <div className="text">
                <h2>Agency Web Site</h2>
                <p>Responsive Agency web Site Using Html,Css, Bootstrap 5 and Javascript</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://texnologies-web.netlify.app/"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/Agency-Web-Site-"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-md-6">
            <div className="card m-3">
              <img src={portfolio8} />
              <div className="text">
                <h2>Color Picker App</h2>
                <p>Color Picer Application Using Html,Css And Vanilla javascript</p>
                <div className="btn-cnt">
                  <a target="_blank" href="https://colorpickerr.netlify.app"><button>Demo</button></a>
                  <a target="_blank" href="https://github.com/AzizbekFayziyev/Color-Picker-Creative-Design"><button>Git Hub</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <a target="_blank" className='viewAll' href="https://github.com/AzizbekFayziyev/">
            <button className='btn btn-lg btn-secondary mt-5'>View All Portfolio In My Github</button>
          </a>
        </div>

      </section>

      <Footer />
    </div>
  )
}
