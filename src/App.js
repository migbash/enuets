// Import Libraries & Files //
import React from 'react';
// ----- //
import './App.css';
// ----- //
import { HashLink as Link }  from 'react-router-hash-link';
// ----- //
import Header from './components/Header'
import Welcome from './components/Welcome'
import Calendar from './components/Calendar'
import Mission from './components/Mission'
import Partners from './components/Partners'
import Support_us from './components/Support_us'
import Footer from './components/Footer'
// ------------------------ //

// Main (Homepage) Structure

function App() {

  return (

    <div>

      {/* Navigation | Header Link */}
      <Header />

      {/* Welcome Text & Image Section */}
      <Welcome />

      {/* Our mission Section */}
      <Mission />

      {/* Upcoming events Section */}
      <Calendar />

      {/* Advertisment (Follow_us) */}
      <aside id="stay_in_touch">
        <div className="container-fluid text-center">
          <div className="row h-100">
            <div className="col-12 my-auto mx-auto">
              <div>
                <h4> Stay in touch, follow us to never miss on our future events </h4>
                <br />
                <Link to="#footer">
                  <button id="blue_btn" className='btn btn-lg'>
                    <b> Stay in touch </b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Partners Section */}
      <Partners />


      {/* Advertisment (Sponsor_us) */}
      <aside id="partners_ad">
        <div className="container-fluid text-center">
          <div className="row h-100">
            <div className="col-xl-12 my-auto">
              <h4> We are always seeking sponsors & partners that share the same <br />
                   aims and ideas to grow the society.
              </h4>
              <br />
              <Link to="/about#Contact_us">
                <button id="red_btn" className='btn btn-lg'>
                  <b> Get in touch </b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Support Section */}
      <Support_us />

      {/* Footer Link */}
      <Footer />

    </div>
  );
}

// Exporting function 'App', to wherever its being called to
export default App;
