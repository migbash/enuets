// Import Libraries & Files //
import React from 'react';
// ----- //
import Header from './components/Header'
import About_us from './components/About_us'
import Team from './components/Team'
import Contact_us from './components/Contact_us'
import Footer from './components/Footer'
// ------------------------ //

// About Page Structure

function Aboutpage() {
  return (
        <div>

          {/* Navigation | Header Link */}
          <Header />

          {/* "About us" Section Link */}
          <About_us />

          {/* Team Section */}
          <Team />

          {/* Contact us */}
          <Contact_us />

          {/* Footer Link */}
          <Footer />

        </div>
  );
}


// Exporting function 'Aboutpage', to wherever its being called to
export default Aboutpage;
