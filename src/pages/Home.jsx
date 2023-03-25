import React from "react";
import "./Home.css";
import ContactUs from "./ContactUs";
import Canada from '../img/CANADA.jpg';
import australia from '../img/australia.png';
import unitedkingdom from '../img/unitedkingdom.png';
import usa from '../img/usa.png';
import europe from '../img/europe.png';

const Home = () => {
  return (
    <>
    <ContactUs />
    <div className="container-fluid home">
      <div className="cardContainer">
      <div className="cards">
        <div><img alt="Canada" src={Canada} className="country"/></div>
        <div><h3>CANADA</h3></div>
        <div><p>Student Visa & Admission</p></div>
        <div><p>Work Visa</p></div>
        <div><p>Business Visa</p></div>
        <div><p>PR Visa - Express Entry</p></div>
        <div><p>PR Visa - PNP</p></div>
      </div>
      <div className="cards">
      <div><img alt="Australia" src={australia} className="country"/></div>
        <div><h3>AUSTRALIA</h3></div>
        <div><p>Student Visa & Admission</p></div>
        <div><p>Work Visa</p></div>
        <div><p>Business Visa</p></div>
        <div><p>PR Visa - Express Entry</p></div>
        <div><p>PR Visa - PNP</p></div>
      </div>
      <div className="cards">
      <div><img alt="United Kingdom" src={unitedkingdom} className="country"/></div>
        <div><h3>UNITED KINGDOM</h3></div>
        <div><p>Student Visa & Admission</p></div>
        <div><p>Work Visa</p></div>
        <div><p>Business Visa</p></div>
        <div><p>PR Visa - Express Entry</p></div>
        <div><p>PR Visa - PNP</p></div>
      </div>
      <div className="cards">
      <div><img alt="USA" src={usa} className="country"/></div>
        <div><h3>USA</h3></div>
        <div><p>Student Visa & Admission</p></div>
        <div><p>Work Visa</p></div>
        <div><p>Business Visa</p></div>
        <div><p>PR Visa - Express Entry</p></div>
        <div><p>PR Visa - PNP</p></div>
      </div>
      <div className="cards">
      <div><img alt="Europe" src={europe} className="country"/></div>
        <div><h3>EUROPE</h3></div>
        <div><p>Student Visa & Admission</p></div>
        <div><p>Work Visa</p></div>
        <div><p>Business Visa</p></div>
        <div><p>PR Visa - Express Entry</p></div>
        <div><p>PR Visa - PNP</p></div>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default Home;
