import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm'

function Contact(props) {

    return (
      <div>
        <div className="container-fluid">
          <div className="landing row d-flex justify-content-center">
            <div className="headline col-lg-6">
              <div className="headline-text">
                <h1 className="hello">Contact</h1>
              </div>
              <p>
                Don't be shy! Send me a message to say hi.
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
        <ContactForm />
      </div>
    );
}

export default Contact;