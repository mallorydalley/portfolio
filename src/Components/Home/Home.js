import React, {useState, useEffect} from 'react';
import './Home.css'

function Home(props){

    return(
        <div>
            <div className='container-fluid'>
                <div className='landing row d-flex justify-content-center'>

                    <div className='headline col-lg-6'>
                        <div className='headline-text'>
                            <h1 className='hello'>Hello!</h1>
                            <h3 className='mallory-dalley'>I'm Mallory Dalley</h3>
                        </div>
                        <h6>I'm a full stack web developer with experience in marketing and graphic design</h6>
                    </div>

                    <div className='col-lg-6'>
                        <img className='profile-pic ' src='https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/01/dark-brown-hair-color-mahogany-shutterstock.jpg'/>
                    </div>

                </div>
            </div>
    <div className='container-fluid rounded skill-container'>
            <div className='row skill-block'>
                <div className='col-md-4 container skills d-flex align-items-center text-center'>
                    <img className='dummy row' src='https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png'/>
                    <h4>Marketing</h4>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <span>Marketing Experience</span>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                    <span>Marketing Tools</span>
                    <p>WordPress, Shopify, MailChimp, Constant Contact, Google Analytics, Tag Manager</p>
                </div>

                <div className='col-md-4 container skills d-flex align-items-center text-center'>
                    <img className='dummy row' src='https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png'/>
                    <h4>Full Stack Web Development</h4>
                    <p>Build</p>
                    <span>Languages I speak</span>
                    <p>JavaScript, React.js, Node.js, PostgreSQL</p>
                    <span>Dev Tools</span>
                    <p>Bootstrap, Nodemailer, Socket io, Sass, Express.js</p>
                </div>

                <div className='col-md-4 container skills d-flex align-items-center text-center'>
                    <img className='dummy row' src='https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/marketing_advertising_megaphone_marketing_icon-512.png'/>
                    <h4>Designer</h4>
                    <p>Making things pretty</p>
                    <span>Things I enjoy designing</span>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                    <span>Design Tools</span>
                    <p>Photoshop, Canva</p>

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Home;