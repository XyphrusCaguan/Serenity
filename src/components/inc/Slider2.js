import React from 'react';
import help from '../images/help3.jpeg';
import "../styles/slider.css";
import LoremIpsum from 'react-lorem-ipsum';
import "bootstrap-icons/font/bootstrap-icons.css";







function Slider2 () {
    return( 
        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">

          <div className="carousel-item active">

            <img src={help} className="d-block min-vh-100 w-100" alt="..."/>
            <div className="carousel-caption">
              <h5 className="fs-1">Contact Us</h5>
              <p>{LoremIpsum()}</p>
              <div className="slider-btn mt-4">

                <button className="btn btn-primary mt-3">Contact us on email.</button> 
                <button className="btn btn-secondary ms-lg-3 mt-3">Contact us on email.</button>

                <div className="social-buttons mt-lg-3 mt-3">
                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/';
                }}className="btn btn-link me-lg-3 me-3">
                <i className="bi-facebook" ></i>
                </button>

                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.twitter.com/';
                }}className="btn btn-link ms-lg-3 ms-3 me-lg-3 me-3">
                <i className="bi-twitter"></i>
                </button>
                
                <button onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.instagram.com/';
                }}className="btn btn-link ms-lg-3 ms-3">
                <i className="bi-instagram"></i>
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
