import React,{useState} from 'react'
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink
  } from 'reactstrap';

const VerticalNavbar = () => {
    const [dropdownOpen,setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
    <Nav vertical>
      <NavItem>
        <NavLink href="/" active>
          Home
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Immigration Club
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Immigration</DropdownItem>
          <DropdownItem >Dependent Visa</DropdownItem>
          <DropdownItem>Study Visa</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Tourist Visa</DropdownItem>
          <DropdownItem>Business Visa</DropdownItem>
          <DropdownItem>Work Visa</DropdownItem>
          <DropdownItem>Money Transfer</DropdownItem>
          <DropdownItem>Tours & Travels</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">AboutUs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/services">Our Services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact-us">
          Contact Us
        </NavLink>
      </NavItem>
    </Nav>
    </>
  )
}

export default VerticalNavbar