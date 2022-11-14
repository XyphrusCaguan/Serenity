import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import help from '../images/help1.jpg'


function Aboutus() {
    document.body.style = 'background: #c7bfc2;';
    return (
        
      <div className="container">
        <div className="row mt-5 mb-5">
        <div className="text-center">
        <h1>
            About Us
        </h1>
        <p>
        {LoremIpsum()}
        </p>
        </div>
            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={help} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Front-End
                            </h4>
                            <h6>Gene</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={help} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Back-End
                            </h4>
                            <h6>Von</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={help} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Data/Document
                            </h4>
                            <h6>Joshreen</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={help} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Document
                            </h4>
                            <h6>Jirah</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

      </div>
  

    );
    

}

export default Aboutus;