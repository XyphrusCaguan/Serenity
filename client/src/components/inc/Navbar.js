import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/Serenity (1).png';
import "bootstrap-icons/font/bootstrap-icons.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow sticky-top" style={{backgroundColor:'#C576F6',}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-3">
            <img src={logo} width="158px" height="45px" alt='navbar-brand'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-lg-5 h6">

              <li className="nav-item">
                <Link to="/" className="nav-link active text-white">Home</Link>
              </li>

              <li className="nav-item">
              <Link to="/about" className="nav-link active text-white">About Us</Link>
              </li>

              <li className="nav-item">
              <Link to="/contact" className="nav-link active text-white">Contact</Link>
              </li>
              

            </ul>

            <ul className="nav navbar-nav mb-2 mb-lg-0 ms-5 me-lg-5 gap-lg-4 h6">
            <Link to="/signup" className="nav-link active text-white"><i className="bi-person-plus-fill"></i> Sign Up</Link>
            <Link to="/login" className="nav-link active text-white"><i className="bi-person-check-fill"></i> Login</Link>
            </ul>
          </div>
        </div>
      </nav>
      

    );

}

export default Navbar;