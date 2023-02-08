import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-12 col-sm-6">
        
          <img
            alt="Sample"
            src="https://static.toiimg.com/photo/86797680.cms"
            width="100%"
            height="400px"
            className="AustraliaImg"
          />
          <label className="Australia">Australia</label>
        </div>
        <div className="col-12 col-sm-6">
          <img
            alt="Sample"
            src="https://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?b=1&s=170667a&w=0&k=20&c=83crVlfiIrVw2LpAeyaNCh8ZMRbCiHWLYi50jpQv4dM="
            width="100%"
            height="400px"
            className="AustraliaImg"
          />
          <label className="Australia">Australia</label>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4">
          <img
            alt="Sample"
            src="https://media.istockphoto.com/id/904523520/photo/big-ben-clock-tower-and-london-bus.jpg?s=612x612&w=0&k=20&c=sy2eUc8tLiibOjT-Pg4Iw0oQtA_9gEUmNONxLtcyBuI="
            width="100%"
            height="400px"
          />
        </div>
        <div className="col-12 col-sm-4">
          <img
            alt="Sample"
            src="https://img.freepik.com/free-photo/usa-united-states-america-flag-flagpole-near-skyscrapers-cloudy-sky_181624-5054.jpg"
            width="100%"
            height="400px"
          />
        </div>
        <div className="col-12 col-sm-4">
          <img
            alt="Sample"
            src="https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?cs=srgb&dl=pexels-julius-silver-753337.jpg&fm=jpg"
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
