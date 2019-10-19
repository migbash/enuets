// Import Libraries & Files //
import React from 'react';
// ----- //
import './Calendar.css';
// ------------------------ //

// Calendar Section

function Calendar() {
  return (

      <section id="Calendar">
        <div className="container-fulid h-100">
          <div className="row h-100 w-100 my-auto mx-auto">

          {/* Section header */}
            <div className="col-xl-12 col-xs-12 my-auto">
              <header>
                <h1> Upcoming Events </h1>
              </header>
            </div>

{/* None Events Upcoming (TBA) */}

            <div id="no_events" className="col-xl-12 mx-auto">
              <div className="container-fluid">
                <img className="img-fluid" src={"./img/web_img/no_events_cal.png"} />
              </div>
            </div>

{/* Events Upcoming */}

            <template>

            <div className="col-12">
              <div className="card-deck mx-auto w-100">

{/* Freshers Fair -- Ready */}
                <div className="card">
                  <h1 className="card-header">12<sup>th</sup> Sep</h1>
                  <img className="card-img-top img-fluid" src={"./img/web_img/freshers_img.jpg"} alt="Event Image" / >
                  <div className="card-footer vertical-align">
                    <p> Learn More </p>
                    <div className="ml-auto">
                      <a href="https://www.facebook.com/ENUETS/photos/a.597801647348906/733669057095497/?type=3&theater"> <i className="fa-fw fab fa-facebook-f fa-2x"></i> </a>
                    </div>
                  </div>
                </div>

{/* First Members Meeting -- UPDATE! */}
              <div className="card">
                <h1 className="card-header">16<sup>th</sup> Sep</h1>
                <img className="card-img-top" src={"./img/web_img/Events-NonUsable.jpg"} alt="Event Image" / >
                <div className="card-body">
                  <h4 className="card-title">Introduction to Bright Red Triangle</h4>
                  <p className="card-text">
                  Come to our first members events where you will get the chance to meet us, and know more about
                  te society as we talk about Bright Red Trianlge.
                  </p>
                  <p>Event details TBA </p>
                  </div>
                </div>

{/* Intorduction to BRT -- UPDATE! */}
                <div className="card">
                  <h1 className="card-header">18<sup>th</sup> Sep</h1>
                  <img className="card-img-top" src={"./img/web_img/Events-NonUsable.jpg"} alt="Event Image" / >
                  <div className="card-body">
                    <h4 className="card-title">The Future of Work</h4>
                    <p className="card-text">Ever wondered what is the work of the future will be like? Come along
                    to learn more & expand your knowledge.
                    </p>
                    <p>Event details TBA </p>
                  </div>
                </div>

              </div>
            </div>

            </template>

            {/* Section Content End */}

          </div>
        </div>
      </section>

  );
}

// Exporting function 'App', to wherever its being called to
export default Calendar;
