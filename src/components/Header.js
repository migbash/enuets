// Import Libraries & Files //
import React from 'react';
// ----- //
import './Header.css';
// ----- //
import { HashLink as Link } from 'react-router-hash-link';
// ------------------------ //

// Navigation + Welcome Section

function Header() {
  return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
          {/* Nabar Logo + Company Name */}
          <Link className="navbar-brand vertical-align" to="/">
            <img src={"./img/web_img/society_logo.png"} className="img-fluid"/>
            <h1> Enterprise <br /> Technology Society </h1>
          </Link>
          {/* Menu Burger */}
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span> <i className="fas fa-bars fa-2x"> </i> </span>
          </button>
          {/* Collapsable Navbar */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto vertical-align float-right">
              <Link className="nav-item nav-link mx-auto" to="/">Home</Link>
              <Link className="nav-item nav-link mx-auto" to="/about">About</Link>
              <Link className="nav-item nav-link mx-auto" to="/#Calendar">Events</Link>
              <a className="nav-item nav-link mx-auto" href="https://www.napierstudents.com/organisation/societies/napierenterprise/">
                <button id="join_us" className="btn">
                  Join Us
                </button>
              </a>
            </div>
          </div>
        </nav>
  );
}

// Exporting function 'App', to wherever its being called to
export default Header;
