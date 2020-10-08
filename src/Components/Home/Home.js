import React, {useState, useEffect} from 'react';
import './Home.css'
import ContactForm from '../Contact/ContactForm/ContactForm'

function Home(props){

    return (
      <div>
        <div className="container-fluid">
          <div className="landing row d-flex justify-content-center">
            <div className="headline col-lg-6">
              <div className="headline-text">
                <h1 className="hello">Hello!</h1>
                <h3 className="mallory-dalley">I'm Mallory Dalley</h3>
              </div>
              <h6>
                I'm a full stack web developer with experience in marketing and design
              </h6>
            </div>

            <div className="col-lg-6">
              <img
                className="profile-pic "
                src="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/01/dark-brown-hair-color-mahogany-shutterstock.jpg"
              />
            </div>
          </div>
        </div>


        <div className='colored-background'>Colored</div>
        <div className="container-fluid rounded skill-container">
          <div className="row skill-block">
            <div className="col-md-4 container skills marketing-skills d-flex align-items-center text-center">
              <img
                className="dummy row"
                src="https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png"
              />
              <h4 className="section-head">Marketing</h4>
              <p>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <h6 className="skill-section">Marketing Experience</h6>
              <p>
                Digital Marketing
                <br /> Email
                <br /> Social Media
                <br /> Content
                <br /> Search Engine Optimization (SEO)
              </p>
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
              <img
                className="dummy row"
                src="https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png"
              />
              <h4 className="section-head">Full Stack Web Development</h4>
              <p>I love coding from scratch and </p>
              <h6 className="skill-section">Languages I speak</h6>
              <p>
                JavaScript
                <br /> React.js
                <br /> Node.js
                <br /> PostgreSQL
                <br /> HTML5
                <br /> CSS3
              </p>
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
                src="https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png"
              />
              <h4 className="section-head">Design</h4>
              <p>I love making anything from simple, elegant designs to vibrant, bold ones.</p>
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
              <h6 className="skill-section">Design Tools</h6>
              <p>
                Photoshop
                <br /> Illustrator
                <br /> Canva
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    );
}

export default Home;