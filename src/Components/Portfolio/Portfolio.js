import React, {useState, useEffect} from 'react';
import './Portfolio.css'
import TaskBox from '../../assets/images/TaskBox.png'
import FlashDrills from '../../assets/images/flashDrills.jpeg'

function Portfolio(props) {

    return (
      <div>
        <div className="landing container-fluid">
          <div className="">
            <div className="headline-text">
              <h1 className="header-text">Portfolio</h1>
            </div>
            {/* <h5>
              Full stack web developer with experience in marketing and
              design
              </h5> */}
          </div>
        </div>


        <div className="container-fluid intro-container">
          {/* <p className='intro'>
            I started my career as a marketing generalist but gravitated
            towards website and design work. I now focus on web
            development but my dream job would be combining all three of the
            fields I love. If you'd like more details on my experience, check out my LinkedIn page.
            </p> */}
        </div>

        <div className="colored-background"></div>


        <div className="container-fluid rounded skill-container">
          <div className="row skill-block">
            <div className="col-md-6 container skills marketing-skills d-flex align-items-center text-center">
              <img className="portfolio-thumbnail" src={TaskBox} />
              
            </div>
            <div className="col-md-6 container skills marketing-skills d-flex align-items-center text-center">
              <h4 className="section-head">TaskBox</h4>
              <p>Project Management Tool</p>
              <br />
              <h6 className="skill-section">Code Technologies Used</h6>
              <p>
                React.js
                <br /> Node.js
                <br /> PostgreSQL
                <br /> Socket io
                <br /> Sass
                <br /> Nodemailer
              </p>
            </div>

           

            
          </div>
        </div>


        <div className="thumbnail-collection container-fluid">
          <div className='row portfolio-row'>
            <div className='col-md-6'>
              <img className="portfolio-thumbnail" src={TaskBox} />
            </div>
            <div className='col-md-6'>
              <p>TaskBox is a project management tool</p>
            </div>

          </div>


            <div className='col-md-6'>
              <img className="portfolio-thumbnail" src={FlashDrills} />
            </div>

            <div className='col-md-6'>
              <img className="portfolio-thumbnail" src={FlashDrills} />
            </div>

            <div className='col-md-6'>
              <img className="portfolio-thumbnail" src={FlashDrills} />
            </div>
              
          
        </div>

      </div>
    );
}

export default Portfolio;