// Import Libraries & Files //
import React from 'react';
// ----- //
import './Contact_us.css';
// ------------------------ //

// Contact Us Section

function Contact_us() {
  return(
      <div id="Contact_us">
        <div className="container-fulid h-100">
          <div className="row h-100 w-100 mx-auto">

            {/* Section header */}
            <div className="col-xl-12 col-xs-12 my-auto">
              <header>
                <h1> Contact Us </h1>
              </header>
            </div>

            <div className="col-xl-12 col-xs-12 my-auto">
              <br />
              <p> For any general questions about the society, sponsorships & partnerships, upcoming events... <br />
                  get in touch: napierenterpriseandtech@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

// Exporting function 'Team', to wherever its being called to
export default Contact_us;
