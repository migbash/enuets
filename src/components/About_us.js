// Import Libraries & Files //
import React from 'react';
// ----- //
import './About_us.css';
// ------------------------ //

// About Us Section

function About_us() {
  return (
        <section id="About_us">
          <div className="container-fulid h-100">
            <div className="row h-100 w-100 mx-auto">
              <div className="col-xl-12 my-auto">                                 {/* Section header */}
                <header>
                  <h1> About us </h1>
                </header>
              </div>
              <div className="col-md-8 my-auto ml-auto mx-auto text-left">
                <div className="container-fluid">
                  <br />
                  <p> The "Enterprise Technology Society", is a merger from 2 pre-existing Napier Societies:
                      "Blockchain & Fintech Society" & "Enterprise Society". No major changes have occurred,
                      we just sprinkled the Enterprise Society with more Technology & gave it a start-up mindset.
                      <br />
                      <br />
                      We are a group enthusiastic students, that want to revolutionize the way in which people
                      think & treat a university society. We aim to be at the forefront of the world of enterprise,
                      technology, research, innovation, and bring those worlds closer to our society members & students.
                      We live in an unprecendented revolution of technological & scientific advancements that are daily
                      changing the future of our enterprise, with which is hard to keep up and know what is going on in this
                      hectic, yet exciting world of tomorrow.
                      <br />
                      <br />
                      We work will work hard to bring the leading companies, researchers, entrepreneurs
                      to our society members. Our end goal is to become a well know society across Scotland,
                      establishing partnerships amongst other Scottish Universities & their societies.
                      <br />
                      <br />
                      ...and we want you to be a part of us
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 my-auto">                                {/* Merger-image */}
                <img className="img-fluid" src={"./img/web_img/Component.png"}/>
              </div>

              <div className="col-md-12 my-auto">                                       {/* Full-width column - "Join Us" */}
                <div className="container-fluid">
                  <a href="https://www.napierstudents.com/organisation/societies/napierenterprise/">
                    <button id="blue_btn" className='btn btn-lg'>
                      Join us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}


// Exporting function 'Aboutpage', to wherever its being called to
export default About_us;
