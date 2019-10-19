// Import Libraries & Files //
import React from 'react';
// ----- //
import './Team.css';
// ------------------------ //

// Funtion showhide descriptions

// TODO: Change the Team Description from "hover" to "click" button "Learn_more"
// TODO: Condense the function of Team Descritpion Here:

class Team extends React.Component {

constructor(){
  super();
  this.state = {
    showItems:[]
  }
}

// Hide-Show Committee Extra Info
onClick(index){
  let showItems = this.state.showItems.slice(0);
  showItems[index] = !showItems[index];
  this.setState({showItems});
}

render () {
  return (
      <section id="Team">
        <div className="container-fulid h-100">
          <div className="row h-100 w-100 mx-auto">
            <div className="col-xl-12 col-xs-12 my-auto p-5">
              <header>
                <h1> Our Team </h1>
              </header>
            </div>

{/* Team Showcase */}
            <div className="col-12">
              <div className="card-deck mx-auto w-100">

{/* Myles [0] -- Working / Updated */}
                <div className="card">
                  <img className="card-img-top img-fluid" src={"./img/web_img/myles_img.jpg"}/>
                  <div className="card-body">
                    <p className="card-title"> Myles Robertson </p>
                    <h5 className="card-text"> President </h5>
                  </div>
                  <div className="card-footer vertical-align">
                    <a href="https://www.linkedin.com/in/MDMR/"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                    <i onClick={this.onClick.bind(this,0)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                  </div>
{/* Extra Member Information */}
                  {this.state.showItems[0] ?
                    <div className="info">
                      <i onClick={this.onClick.bind(this,0)} className="fas fa-arrow-left fa-1x"></i>
                      <p> 4th Year, BA Business Management with
                          Entrepreneurship <br />
                      </p>
                    </div>
                     : null}

                  </div>

{/* Olivier Chaligne [2] -- Working / Updated */}
                  <div className="card">
                    <img className="card-img-top img-fluid" src={"./img/web_img/oliver_img.png"}/>
                    <div className="card-body">
                      <p className="card-title"> Olivier Chaligne </p>
                      <h5 className="card-text"> Secretary </h5>
                    </div>
                    <div className="card-footer vertical-align">
                      <a href="https://www.linkedin.com/in/olivier-chaligne/"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                      <i onClick={this.onClick.bind(this,2)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                    </div>

{/* Extra Member Information */}
                    {this.state.showItems[2] ?
                      <div className="info">
                        <i onClick={this.onClick.bind(this,2)} className="fas fas fa-arrow-left fa-1x"></i>
                        <p> 4th Year, B.Eng Mechatronics <br />
                            Passionate about encouraging students,
                            to use their skills and studies, to be innovative and
                            start their own commercial or social enterprise with the
                            aim to drive the socio-economic fabric and wealth of their
                            localities, whilst boosting their own well-being and life satisfaction.
                        </p>
                      </div>
                       : null}

                    </div>

{/* Kirsty MacNiven [3] -- Working / Updated */}
                    <div className="card">
                      <img className="card-img-top img-fluid" src={"./img/web_img/kirsty_img.jpg"}/>
                      <div className="card-body">
                        <p className="card-title"> Kirsty MacNiven </p>
                        <h5 className="card-text"> Vice President & Treasurer </h5>
                      </div>
                      <div className="card-footer vertical-align">
                        <a href="http://www.linkedin.com/in/kirstymmacniven"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                        <i onClick={this.onClick.bind(this,3)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                      </div>
{/* Extra Member Information */}
                      {this.state.showItems[3] ?
                        <div className="info">
                          <i onClick={this.onClick.bind(this,3)} className="fas fas fa-arrow-left fa-1x"></i>
                          <p> 4th Year, BA (Hons) International Business Management <br />
                              Having just returned from completing my Erasmus Study Abroad exchange
                              in the start-up capital of Europe, Berlin, I’m super excited to broaden
                              my enterprise and tech know how surrounded by like-minded and ambitious people.
                          </p>
                        </div>
                         : null}

                      </div>


                    </div>

{/* New Committee Row */}

                    <div className="card-deck mx-auto w-100">

{/* Isla Saunders [5] -- Working / Updated */}
                      <div className="card">
                        <img className="card-img-top img-fluid" src={"./img/web_img/isla2_img.png"}/>
                        <div className="card-body">
                          <p className="card-title"> Isla Saunders </p>
                          <h5 className="card-text"> Marketing & Engagement Manager </h5>
                        </div>
                        <div className="card-footer vertical-align">
                          <a href="http://linkedin.com/in/isla-saunders"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                          <i onClick={this.onClick.bind(this,5)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                        </div>

{/* Extra Member Information */}
                        {this.state.showItems[5] ?
                          <div className="info">
                            <i onClick={this.onClick.bind(this,5)} className="fas fas fa-arrow-left fa-1x"></i>
                            <p> 4th year, Marketing with Digital Media <br />
                                I’m the person behind the society’s social media posts!
                                I’ll be the one taking up some of your timeline to show you pictures from
                                our events, socials and lots more! I can’t wait to show you everything
                                we get up to over the year and inspire all you innovative enthusiasts.
                            </p>
                          </div>
                           : null}

                        </div>

{/* Valentina Planchestainer [6] -- Working / Updated */}
                        <div className="card">
                          <img className="card-img-top img-fluid" src={"./img/web_img/valentina_img.jpg"}/>
                          <div className="card-body">
                            <p className="card-title"> Valentina Planchestainer </p>
                            <h5 className="card-text"> Events & PR Manager </h5>
                          </div>
                          <div className="card-footer vertical-align">
                            <a href="https://www.linkedin.com/in/valentina-planchestainer-77620a136"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                            <i onClick={this.onClick.bind(this,6)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                          </div>

{/* Extra Member Information */}
                          {this.state.showItems[6] ?
                            <div className="info">
                              <i onClick={this.onClick.bind(this,6)} className="fas fas fa-arrow-left fa-1x"></i>
                              <p> 4th Year International Festival and Events Management with German <br />
                                  Enthusiastic and curious about innovations and new initiatives I will be managing
                                  events for the society. I am very excited to embark this role within the
                                  society and help make the experience of students the best it can be.
                              </p>
                            </div>
                             : null}

                          </div>

{/* Arran Dinsmore [7] -- Working / Updated*/}
                          <div className="card">
                            <img className="card-img-top img-fluid" src={"./img/web_img/arran_img.jpg"}/>
                            <div className="card-body">
                              <p className="card-title"> Arran Dinsmore </p>
                              <h5 className="card-text"> Technical Manager </h5>
                            </div>
                            <div className="card-footer vertical-align">
                              <a href="https://www.linkedin.com/in/arran-dinsmore-0ba929164"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                              <i onClick={this.onClick.bind(this,7)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                            </div>

{/* Extra Member Information */}
                            {this.state.showItems[7] ?
                              <div className="info">
                                <i onClick={this.onClick.bind(this,7)} className="fas fas fa-arrow-left fa-1x"></i>
                                <p> 4th Year BSc (Hons) Computing Science <br />
                                    Focusing in the field of
                                    computer vision and natural language processing
                                    for his Honour's Project. Co-Founder and back-end
                                    developer in an exciting new start-up within the
                                    Bright Red Triangle incubator.
                                </p>
                              </div>
                               : null}

                            </div>

                          </div>


                          <div className="card-deck mx-auto w-100">


{/* Miguel [1] -- Working / Updated */}
                            <div className="card">
                              <img className="card-img-top img-fluid" src={"./img/web_img/miguel_img.jpg"}/>
                              <div className="card-body">
                                <p className="card-title"> Miguel Bacharov </p>
                                <h5 className="card-text"> Technical Manager </h5>
                              </div>
                              <div className="card-footer vertical-align">
                                <a href="https://www.linkedin.com/in/miguel-bacharov-1131b0176"> <i className="fa-fw fab fa-linkedin fa-2x"></i> </a>
                                <i onClick={this.onClick.bind(this,1)} class="more_info fa-fw ml-auto fas fa-align-left fa-1x"></i>
                              </div>
{/* Extra Member Information */}
                              {this.state.showItems[1] ?
                                <div className="info">
                                  <i onClick={this.onClick.bind(this,1)} className="fas fas fa-arrow-left fa-1x"></i>
                                  <p> 2nd Year Computer Science (BSc Hons) <br />
                                      Technology, data & research enthusiast. Excited to bring
                                      the world of high end technologies, current world changing
                                      companies & startups to students.
                                  </p>
                                </div>
                              : null}

                              </div>

{/* Extra Cards for Design Purpouses // TODO: Change this */}
                              <div className="card">
                              </div>

                              <div className="card">
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
}
}

// Exporting function 'Team', to wherever its being called to
export default Team;
