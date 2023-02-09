import React from "react";
import "./Footer.css";
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs'

import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-details">
        <div className="Address div-1">
          <h1>World Walk</h1>
          <h6>Immigration club and visa consultancy</h6>
          <br></br>
          <p>Near Nehru Park</p>
          <p>Baba Ranadhir Road</p>
          <p>125111</p>
          <div className="number">
          <BsFillTelephoneFill style={{'fontSize': '24'}} />
          <p style={{'paddingLeft': '10px'}}>+91 7696692000</p>
          </div>
          <div className="number">
          <AiOutlineWhatsApp style={{'fontSize': '24'}}/>
          <p style={{'paddingLeft': '10px'}}>+91 7696692000</p>
          </div>
          
          <div className="number mail">
          <AiOutlineMail style={{'fontSize': '24px',alignSelf:'center'}} />
          
          <Nav vertical className="navbar">
            <NavItem>
               <NavLink href="mailto:worldwalkclub@gmail.com">worldwalkclub@gmail.com</NavLink>
            </NavItem>
          </Nav>
          </div>
          
        </div>
        <div className="div-2">
          <h5>Company</h5>
          <Nav vertical>
            <NavItem>
              <NavLink href="/" active>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="div-3">
          <h5>Study Destinations</h5>
          <Nav vertical>
            <NavItem>
              <NavLink href="/" active>
                Study in Australia
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Study in Canada</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Study in United Kingdom</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Study in USA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Study in Europe</NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="div-4">
          <h5>Opening Hours</h5>
          <p>Monday-Saturday</p>
          <p>9:30am-5:30pm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
