import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/Serenity (1).png';
import "bootstrap-icons/font/bootstrap-icons.css";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg shadow sticky-top" style={{backgroundColor:'#C576F6',}}>
        <div class="container-fluid">
          <Link to="/" class="navbar-brand ms-3">
            <img src={logo} width="158px" height="45px" alt='navbar-brand'/>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-lg-5 h6">

              <li class="nav-item">
                <Link to="/" class="nav-link active text-white">Home</Link>
              </li>

              <li class="nav-item">
              <Link to="/about" class="nav-link active text-white">About Us</Link>
              </li>

              <li class="nav-item">
              <Link to="/contact" class="nav-link active text-white">Contact</Link>
              </li>
              

            </ul>

            <ul class="nav navbar-nav mb-2 mb-lg-0 ms-5 me-lg-5 gap-lg-4 h6">
            <Link to="/signup" class="nav-link active text-white"><i class="bi-person-plus-fill"></i> Sign Up</Link>
            <Link to="/login" class="nav-link active text-white"><i class="bi-person-check-fill"></i> Login</Link>
            </ul>
          </div>
        </div>
      </nav>
      

    );

}

export default Navbar;