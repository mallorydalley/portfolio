import React, { useState, useEffect } from 'react';
import './ContactForm.css'

function ContactForm(props) {

    return (
        // <div className='row contact-form'>
        //     <input placeholder="Name" className='col-lg-6'/>
        //     <input placeholder="Phone" className='col-lg-6'/>
        //     <input placeholder="Email"/>
        //     <input placeholder="Subject"/>
        //     <input placeholder="Message"/>
            
        //     <button className='btn btn-info'>SEND</button>

            
<div class="contact-section my-5">

  
  <div class="card">

    
    <div class="row">

      
      <div class="col-lg-8">

        <div class="card-body form">

         
          <h3 class="mt-4">Let's connect...</h3>

          
          <div class="row">

            
            <div class="col-md-12">
              <div class="md-form mb-0">
                <input placeholder='Name' type="text" id="form-contact-name" class="form-control" />
                <label for="form-contact-name" class="">Your name</label>
              </div>
            </div>
            

          </div>
          

          
          <div class="row">

            
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input placeholder='Phone' type="text" id="form-contact-phone" class="form-control" />
                <label for="form-contact-phone" class="">Phone</label>
              </div>
            </div>
            

            
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input placeholder='Email' type="text" id="form-contact-company" class="form-control" />
                <label for="form-contact-company" class="">Email</label>
              </div>
            </div>
            

          </div>
          
            <div class="row">


                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input placeholder='Subject' id="form-contact-message" class="form-control md-textarea" rows="3" />
                        <label for="form-contact-message">Subject</label>
                        
                    </div>
                </div>


            </div>

          
          <div class="row">

            
            <div class="col-md-12">
              <div class="md-form mb-0">
                <textarea placeholder='Message' id="form-contact-message" class="form-control md-textarea" rows="3"></textarea>
                <label for="form-contact-message">Your message</label>
                <button className='btn btn-info'>SEND</button>
                <a class="btn-floating btn-lg blue">
                  <i class="far fa-paper-plane"></i>
                </a>
              </div>
            </div>
            

          </div>
          

        </div>

      </div>
      
      <div class="col-lg-4">

        <div class="card-body contact text-center h-100 white-text">

          <h3 class="my-4 pb-2">Contact information</h3>
          <ul class="text-lg-left list-unstyled ml-4">
            <li>
              <p><i class="fas fa-map-marker-alt pr-2"></i>Salt Lake City, Utah, USA</p>
            </li>
            <li>
              <p><i class="fas fa-phone pr-2"></i>+ 01 (385)-210-8134</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pr-2"></i>malloryd28@gmail.com</p>
            </li>
          </ul>
          <hr class="hr-light my-4" />
          <ul class="list-inline text-center list-unstyled">
            <li class="list-inline-item">
              <a class="p-2 fa-lg tw-ic">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="p-2 fa-lg li-ic">
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="p-2 fa-lg ins-ic">
                <i class="fab fa-github"> </i>
              </a>
            </li>
          </ul>

        </div>

      </div>
      

    </div>
    

  </div>
  

</div>


    )
}

export default ContactForm;