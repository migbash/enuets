// Import Libraries & Files //
import React from 'react';
// ----- //
import './Footer.css'
// ----- //
import { HashLink as Link } from 'react-router-hash-link';
// ------------------------ //

// Footer Structure

// ----------------
// TODO:
// Responsive Footer - Yes/No on using Email Gathering
// ----------------

function Footer() {
  return (
        <footer id="footer">
          <div className="container-fluid h-100">
           <div className="row mx-auto">

              <div id="brand" className="col-md-2 col-xs-12 my-auto">
                Enterprise <br />
                Technology Society
              </div>

              {/* Placeholder Column */}
              <div className="col-md-1 col-xs-12">
              </div>

              <div className="col-md-2 col-xs-12">
                <ul>
                  <Link to="/"><li> Home </li></Link>
                  <Link to="/#Partners"><li> Partners </li></Link>
                  <Link to="/#Calendar"><li> Events </li></Link>
                </ul>
              </div>

              <div className="col-md-2 col-xs-12">
                <ul>
                  <Link to="/about"><li> About </li></Link>
                  <Link to="/about#Contact_us"><li> Contact </li></Link>
                  <Link to="/#Support_us"><li> Support Us </li></Link>
                </ul>
              </div>

              <div className="col-md-2 col-xs-12">
                <ul>
                  <a href="https://www.napierstudents.com/organisation/societies/napierenterprise/"><li> Become a Member </li></a>
                </ul>
              </div>

              {/* Placeholder Column */}
              <div className="col-md-1 col-xs-12">
              </div>

              <div className="col-md-2 col-xs-12 my-auto">
                <div id="social_links">

                {/* E-mail Form PlaceHolder */}
                <template>
                  <form id="email_forum" className="form-inline">
                    <input className="form-control mr-sm-2" type="email" placeholder="E-mail" aria-label="E-mail"></input>
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Subscribe</button>
                  </form>
                </template>

                  <div>
                    <p> Follow us! </p>
                    <a href="https://www.facebook.com/ENUETS/"> <i className="fa-fw fab fa-facebook-f"></i> </a>
                    <a href="https://twitter.com/ENUETS"> <i className="fa-fw fab fa-twitter"></i> </a>
                    <a href="https://join.slack.com/t/enuets/shared_invite/enQtNzE1MTExNzgxMTg5LTE0OWNlYWUzZGM3MTRlYzVlYmVmYmMzYzAyZWI2NzkxOTQ5NzUwM2M0NGIwZDcxNmJkMWNkN2RiYjQzN2NhYmU"> <i className="fa-fw fab fa-slack"></i> </a>
                    <a href="https://www.instagram.com/enuets/"> <i className="fa-fw fab fa-instagram"></i> </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </footer>

  );
}

// Exporting function 'Footer' to App.js Wrapper
export default Footer;
