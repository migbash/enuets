// Import Libraries & Files //
import React from 'react';
// ----- //
import './Welcome.css';
// ----- //
import { HashLink as Link }  from 'react-router-hash-link';
// ------------------------ //

// Welcome Section

function Welcome() {
  return (
      <section id="welcome">
        <div className="text-left container-fulid h-100">
          <div className="row h-100 w-100 mx-auto">
            <div className="col-xl-6 col-xs-12 my-auto">
              <div id="welcome_box" className="mx-auto">
                <h1> welcome to,
                <br />
                <span>
                   enterprise  <br />
                   technology society
                </span>
                </h1>
                <br />
                <h2> for the curious, passionate & <br /> world changers. </h2>
                <br />
                <Link to="#mission">
                  <button id="red_btn" type='button' className='btn btn-lg'>
                    <b> Discover us </b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


// Exporting function 'Welcome Section', to wherever its being called to
export default Welcome;
