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


        <div className="container-fluid skill-container">


          <div className="row skill-block">
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <img className="portfolio-thumbnail" src={TaskBox} />  
            </div>
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <h4 className="section-head">TaskBox</h4>
              <p>Project management tool that allows a user to create tasks, update the status, assign a person, organize in folders, and has a chat feature. </p>
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


          <div className="row skill-block">
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <img className="portfolio-thumbnail" src={FlashDrills} />
            </div>
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <h4 className="section-head">Flash Drills</h4>
              <p>Full stack app created with a team that allows you to build a deck of flashcards, edit, study, delete, and search. When studying, rate a card from 1-5 indicating how well you know the card. Those rated lower will show up more often.</p>
              <br />
              <h6 className="skill-section">Code Technologies Used</h6>
              <p>
                React.js
                <br /> Node.js
                <br /> PostgreSQL
                <br /> GitHub
                <br /> Material-UI
                <br /> Jest
              </p>
            </div>
          </div>


          <div className="row skill-block">
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <img className="portfolio-thumbnail" src={TaskBox} />
            </div>
            <div className="col-md-6 container skills d-flex align-items-center text-center rounded">
              <h4 className="section-head">Cooking with Collin</h4>
              <p>A play off Binging with Babish, Cooking with Collin is a recipe app that allows you to search for and save recipes. Sort of like Pinterest.</p>
              <br />
              <h6 className="skill-section">Code Technologies Used</h6>
              <p>
                React.js
                <br /> Node.js
                <br /> CSS3
                <br /> RESTful API
                <br /> Express.js
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