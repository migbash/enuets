// Import Libraries & Files //
import React from 'react';
// ----- //
import './Support_us.css';
// ----- //
import { HashLink as Link } from 'react-router-hash-link';
// ------------------------ //

// Funtion showhide support_us description

class Support_us extends React.Component {

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
  <section id="Support_us">
    <div className="container-fluid text-center h-100">
      <div className="row h-100 mx-auto">

        {/* section header */}
        <div className="col-xl-12 my-auto">
          <header>
            <h1> Support Us </h1>
            <br />
          </header>
        </div>

        {/* section content */}

        <div className="col-xl-2 col-sm-1 col-12 my-auto">
        </div>

        {/* follow us */}
        <div className="col-xl-4 col-sm-5 col-12">
          <div onMouseEnter={this.onClick.bind(this,0)} onMouseLeave={this.onClick.bind(this,0)} className="container support_us-out d-flex justify-content-center flex-column">
            <h1> Follow Us </h1>
            <img className="img-fluid mx-auto my-auto" src={"./img/web_img/follow-us-img.png"}/>
            {this.state.showItems[0] ?
              <div className="support_desc">
                <h1> Follow Us 🎉 </h1>
                <p> You can help us for free! Follow us on social media & share our posts with your friends </p>
                <br />
                <Link to="#footer">
                  <button id="red_btn" type='button' className='btn btn-lg'>
                    <b> Follow us </b>
                  </button>
                </Link>
              </div>
            : null}
          </div>
        </div>


        {/* Become a member */}
        <div className="col-xl-4 col-sm-5 col-12 ">
          <div onMouseEnter={this.onClick.bind(this,1)} onMouseLeave={this.onClick.bind(this,1)} className="container support_us-out d-flex justify-content-center flex-column">
            <h1> Become a member </h1>
            <img className="img-fluid mx-auto my-auto" src={"./img/web_img/become-member-img.png"}/>
          {this.state.showItems[1] ?
            <div className="support_desc">
              <h1> Become a member 🏅 </h1>
              <p>  It is the reasons for which this society exists. Support us direclty by becoming our society member
                   and see us grow...
              </p>
              <br />
              <a href="https://www.napierstudents.com/organisation/societies/napierenterprise/">
                <button id="blue_btn" type='button' className='btn btn-lg'>
                  <b> Join us </b>
                </button>
              </a>
            </div>
          : null}
          </div>
        </div>

        <div className="col-xl-2 col-sm-1 col-12 my-auto">
        </div>

      </div>
    </div>
  </section>
  );
  }
}

  // Exporting function 'App', to wherever its being called to
  export default Support_us;
