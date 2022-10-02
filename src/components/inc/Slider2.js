import React from 'react';
import help from '../images/help3.jpeg';
import "../styles/slider.css";
import LoremIpsum from 'react-lorem-ipsum';
import "bootstrap-icons/font/bootstrap-icons.css";







function Slider2 () {
    return( 
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">

          <div class="carousel-item active">

            <img src={help} class="d-block min-vh-100 w-100" alt="..."/>
            <div class="carousel-caption">
              <h5 class="fs-1">Contact Us</h5>
              <p>{LoremIpsum()}</p>
              <div class="slider-btn mt-4">

                <button class="btn btn-primary mt-3">Contact us on email.</button> 
                <button class="btn btn-secondary ms-lg-3 mt-3">Contact us on email.</button>

                <div class="social-buttons mt-lg-3 mt-3">
                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/';
                }}class="btn btn-link me-lg-3 me-3">
                <i class="bi-facebook" ></i>
                </button>

                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.twitter.com/';
                }}class="btn btn-link ms-lg-3 ms-3 me-lg-3 me-3">
                <i class="bi-twitter"></i>
                </button>
                
                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.instagram.com/';
                }}class="btn btn-link ms-lg-3 ms-3">
                <i class="bi-instagram"></i>
                </button>
                
                
                </div>

                
              </div>
            </div>

          </div>
          
        </div>
        
      </div>
      
    );
}


export default Slider2;
