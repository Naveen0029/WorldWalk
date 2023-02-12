import React from "react";
import "./Footer.css";
import Address from '../Reusablecomponents/Address';

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
        <Address />
        <div className="div-2">
          <h5>Company</h5>
          <Nav vertical>
            <NavItem>
              <NavLink href="/" active>
                Tours & Travels
              </NavLink>
            </NavItem>
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
