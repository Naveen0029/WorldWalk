import React, { useState } from "react";
import Address from "../Reusablecomponents/Address";
import "./ContactUs.css";
import visa from "../img/visa.jpg";
import Caurosel from "../components/Caurosel";

const ContactUs = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [visaType, setVisaType] = useState({ value: "Study" });
  const [country, setCountry] = useState({ value: "Australia" });

  let handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  let handleLastName = (e) => {
    setLastName(e.target.value);
  };

  let handleMobile = (e) => {
    setMobile(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handleVisa = (e) => {
    setVisaType(e.target.value);
  };

  let handleCountry = (e) => {
    setCountry(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(FirstName, LastName, Mobile, Email, visaType, country);
  };
  return (
    <div className="input-form">
      <div className="imageForm">
        {/* <div className="">
          {/* <img src={visa} className="visa" /> }
        </div> */}
        <div className="know-details">
          <h2 style={{'margin-bottom':'25px','color':'white'}}>GET IN TOUCH</h2>
          <form onSubmit={handleSubmit} >
            <div className="NameTable">
              <div className="FirstName">
                <label>
                  <h4>First Name</h4>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={FirstName}
                    onChange={handleFirstName}
                  />
                </label>
              </div>

              <div className="LastName">
                <label>
                <h4>Last Name</h4>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={LastName}
                    onChange={handleLastName}
                  />
                </label>
              </div>
            </div>

            <div className="EmailTable">
              <div className="">
                <label>
                <h4>Mobile</h4>
                  <input
                    type="text"
                    placeholder="Mobile"
                    value={Mobile}
                    onChange={handleMobile}
                  />
                </label>
              </div>
              <div className="">
                <label>
                <h4>Email</h4>
                  <input
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={handleEmail}
                  />
                </label>
              </div>
            </div>

            <div className="TypeTable">
              <div className="">
                <label>
                <h4>Visa Type</h4>
                  <select value={visaType} onChange={handleVisa}>
                    <option value="Immigration">Immigration</option>
                    <option value="Dependent">Dependent</option>
                    <option value="Study">Study</option>
                    <option value="Work">Work</option>
                    <option value="Tourist">Tourist</option>
                    <option value="Business">Business</option>
                    <option value="Work">Work</option>
                  </select>
                </label>
              </div>
              <div className="">
                <label>
                  <h4>Country</h4>
                  <select value={country} onChange={handleCountry}>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="USA">USA</option>
                    <option value="Europe">Europe</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="submit-button">
              <input type="submit" value="Submit" className="input-submit-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
