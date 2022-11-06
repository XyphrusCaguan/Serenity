import React from "react";
import help from '../images/help3.jpeg';


function Login (){
    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height:'100px'}}src={help} className="d-block min-vh-100 w-100" alt="..."/>
            <div className="carousel-caption ">
              <h5>Login</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
         
        </div>
      </div>
    );
}

export default Login;