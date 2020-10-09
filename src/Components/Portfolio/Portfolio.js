import React, {useState, useEffect} from 'react';

function Portfolio(props) {

    return (
      <div>
        <div className="container-fluid">
          <div className="landing row d-flex justify-content-center">
            <div className="headline col-lg-6">
              <div className="headline-text">
                <h1 className="hello">Portfolio</h1>
              </div>
              <p>
                Take a look at some of my previous projects
              </p>
            </div>

            <div className="col-lg-6">
              <img
                className="profile-pic "
                src="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/01/dark-brown-hair-color-mahogany-shutterstock.jpg"
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
}

export default Portfolio;