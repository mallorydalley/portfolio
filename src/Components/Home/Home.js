import React, {useState, useEffect} from 'react';
import './Home.css'
import ContactForm from '../Contact/ContactForm/ContactForm'
import WebDevelopment from '../../assets/images/web-development.png'
import MalloryDalley from '../../assets/images/mallory-dalley.jpg'
import Mallory from '../../assets/images/mallory.jpg'

function Home(props){

    return (
      <div>
        <div className="container-fluid">
          <div className="landing row d-flex justify-content-center">
            <div className="headline col-lg-6">
              <div className="headline-text">
                <h1 className="header-text">Hello!</h1>
                <h3 className="mallory-dalley">I'm Mallory Dalley</h3>
                <h5>
                  Full stack web developer with experience in marketing and
                  design
                </h5>
              </div>
            </div>

            <div className="col-lg-6 picture-side">
              <img
                className="profile-pic "
                src={MalloryDalley}
              />
            </div>
          </div>
        </div>

        {/* <div className="landing container">
          <div className="col-md-6">
            <div className="headline-text">
              <h1 className="header-text">Hello!</h1>
              <h3 className="mallory-dalley">I'm Mallory Dalley</h3>
            </div>
            <h5>
              Full stack web developer with experience in marketing and design
            </h5>
          </div>

          <div className="col-md-6 picture-side">
            <img
              className="profile-pic "
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/01/dark-brown-hair-color-mahogany-shutterstock.jpg"
            />
          </div>
        </div> */}

        <div className="container-fluid intro-container">
          <p className="intro">
            I started my career as a marketing generalist but gravitated towards
            website and design work. I now focus on web development but my dream
            job would be combining all three of the fields I love. If you'd like
            more details on my experience, check out{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mallory-dalley/"
            >
              my LinkedIn page
            </a>
            .
          </p>
        </div>

        <div className="colored-background"></div>

        <div className="container-fluid skill-container">
          <div className="row skill-block">
            <div className="col-md-4 container skills marketing-skills d-flex align-items-center text-center">
              <img
                className="dummy row"
                src="data:image/png;base64,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"
              />
              <h4 className="section-head">Marketing</h4>
              <p>
                Watching engagement and awareness increase is one of the most
                satisfying things in life
              </p>
              <br />
              <h6 className="skill-section">Marketing Experience</h6>
              <p>
                Digital Marketing
                <br /> Email
                <br /> Social Media
                <br /> Content
                <br /> Search Engine Optimization (SEO)
              </p>
              <br />
              <h6 className="skill-section">Marketing Tools</h6>
              <p>
                MailChimp
                <br /> Google Analytics
                <br /> Tag Manager
                <br /> Google Keyword Manager
                <br /> Hootsuite
                <br /> Ahrefs
                <br /> Moz
              </p>
            </div>

            <div className="col-md-4 container skills web-skills d-flex align-items-center text-center">
              <img className="dummy row" src={WebDevelopment} />
              <h4 className="section-head">Full Stack Web Development</h4>
              <p>I love coding projects from the ground up </p>
              <br />
              <h6 className="skill-section">Languages I speak</h6>
              <p>
                JavaScript
                <br /> React.js
                <br /> Node.js
                <br /> PostgreSQL
                <br /> HTML5
                <br /> CSS3
              </p>
              <br />
              <h6 className="skill-section">Dev Tools</h6>
              <p>
                Bootstrap
                <br /> Sass
                <br /> Nodemailer
                <br /> Socket io
                <br /> Express.js
                <br /> Git & GitHub
                <br /> WordPress
                <br /> Shopify
                <br />
              </p>
            </div>

            <div className="col-md-4 container skills designer-skills d-flex align-items-center text-center">
              <img
                className="dummy row"
                src="https://climatech.ps/wp-content/uploads/2018/04/icon-design.png"
              />
              <h4 className="section-head">Design</h4>
              <p>
                I love making anything from simple, elegant designs to vibrant,
                bold ones.
              </p>
              <br />
              <h6 className="skill-section">Things I enjoy designing</h6>
              <p>
                UX
                <br /> UI
                <br /> Web
                <br /> Mobile
                <br /> Apps
                <br /> Posters
                <br /> Banners
              </p>
              <br />
              <h6 className="skill-section">Design Tools</h6>
              <p>
                Adobe Creative Suite
                <br /> Photoshop
                <br /> Illustrator
                <br /> Canva
                <br /> Lucidchart
                <br /> Mockplus
              </p>
            </div>
          </div>
        </div>

        <div className="gray-section">
          <ContactForm />
        </div>
      </div>
    );
}

export default Home;