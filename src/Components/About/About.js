import React, {useState, useEffect} from 'react';
import './About.css'

function About(props){

    return (
      <div>
        <div className="container-fluid">
          <div className="landing row d-flex justify-content-center">
            <div className="headline col-lg-6">
              <div className="headline-text">
                <h1 className="hello">About</h1>
                <p>
                  Here's some more details about me
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                className="profile-pic "
                src="https://www.outsideonline.com/sites/default/files/styles/img_600x339/public/2019/10/31/salt-lake-city-snow-capped-mountain_h.jpg?itok=806sVVUE"
              />
            </div>
          </div>
        </div>
        <div className="container center-content cv">
          <button
            className="btn btn-info btn-lg"
            href="src/assets/files/Mallory Dalley Resume.pdf"
            color="transparent"
            target="_blank"
          >
            Download my CV
          </button>
        </div>
        <div className="container">
          <h2>Who I am</h2>
          <p className="paragraph">
            My name is Mallory and I live in Salt Lake City, Utah. I'm a full
            stack web developer with experience in marketing and design.
            <br /> I graduated from the University of Utah with a Bachelors in
            Strategic Communication to start my career in marketing. While I
            loved marketing, I realized there were some parts of it I loved
            more. Mainly working with websites and design. So I made the jump
            and attended a coding bootcamp where I learned JavaScript, React.js,
            Node.js, PostgreSQL, HTML5, CSS3, and more. Designing has always
            been my favorite, and whether that’s working with Photoshop or
            designing a website from CSS, I thoroughly enjoy it. Collaborating
            on a project is real treat, so if you have a project in mind, I’d
            love to hear from you
            <br />
            I'm a hardworking and driven web developer who is constantly
            striving to learn more. I excel in organization, catching on to new
            technologies quickly, preparation, and planning. If you'd like to
            know more about my past experience visit my LinkedIn profile for
            more details.
            <br />
            When I’m not working some of my favorite things to do are hiking,
            playing sports, video games, and being in the outdoors.
          </p>
        </div>
      </div>
    );
}

export default About;