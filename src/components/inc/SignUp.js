import React from "react";
import help from '../images/help3.jpeg';


function SignUp (){
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{height:'100px'}}src={help} class="d-block min-vh-100 w-100" alt="..."/>
            <div class="carousel-caption ">
              <h5>Sign Up</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
         
        </div>
      </div>
    );
}

export default SignUp;