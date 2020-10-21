import React, {useState, useEffect} from 'react';
import './Portfolio.css'
import TaskBox from '../../assets/images/TaskBox.png'
import FlashDrills from '../../assets/images/flashDrills.jpeg'
import Slider from './Slider/Slider'

function Portfolio(props) {
  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]

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
              <h4 className="section-head">Luciano Pesci</h4>
              <p>Author Luciano Pesci's website for his book series, Subsumption. If you love sci-fi and aliens check it out at lucianopesci.com</p>
              <br />
              <h6 className="skill-section">Code Technologies Used</h6>
              <p>
                WordPress
                <br /> CSS
                <br /> HTML
              </p>
            </div>
          </div>

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


        
  <Slider slides={images}/>
      </div>
    );
}

export default Portfolio;