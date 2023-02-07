import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Cotainer">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h1>WorldWalk</h1>
          </div>
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <p>Home</p>
              </div>
              <div className="col-sm-6">
                <p>AboutUs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
