// Import Libraries & Files //
import React from 'react';
// ----- //
import './Mission.css';
// ----- //
import { HashLink as Link } from 'react-router-hash-link';
// ------------------------ //


function Mission() {
  return (
      <section id={"mission"}>
        <div className="container-fulid h-100">
          <div className="row h-100 w-100 mx-auto">

              {/* Section header */}
              <div className="col-xl-12 col-xs-12 my-auto">
                <header>
                  <h1> Our Mission </h1>
                </header>
              </div>

              {/* Section content */}
              <div className="container">
                <p> We aim to bring together students, professionals, entrepreneurs, academics and
                    passionate individuals from their respective industries, with relation to
                    business [enterprise] & technology in and around Edinburgh.
                </p>
                <br />
                <hr />
                <br />
                <p> We want to spark idea generation, inspire learning, research, personal development & networking.
                    Exposing students to business and technological developments in Edinburgh and across the UK.
                </p>
                <br />
                <br />
                <Link to="/about">
                  <button id="blue_btn" className="btn btn-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  );
  }

  // Exporting function 'App', to wherever its being called to
  export default Mission;
