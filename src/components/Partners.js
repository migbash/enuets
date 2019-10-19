// Import Libraries & Files //
import React from 'react';
// ----- //
import './Partners.css';
// ------------------------ //

// Society Partners

function Partners() {
  return (
    <section id="Partners">
      <div className="container-fluid text-center h-100">
        <div className="row h-100">

          <div className="col-xl-12 my-auto">
            <header>
              <h1> Partners </h1>
            </header>
          </div>

          <div className="col-xl-12">
            <div className="container-fluid">
              <img className="img-fluid" src={"./img/web_img/partners-example-2.png"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }

  // Exporting function 'App', to wherever its being called to
  export default Partners;
