import React from 'react';
import help from '../images/help3.jpeg';
import Button from '../inc/Button.js'
import ChatForm from '../inc/ChatForm.js'

function Slider() {
    return (
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'100px'}}src={help} className="d-block min-vh-100 w-100" alt="..."/>
      <div className="carousel-caption ">
        <div>
          <Button/>
        </div>
      </div>
    </div>
   
  </div>
</div>
    );
}

export default Slider;
