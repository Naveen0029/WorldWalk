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

const Navstyle = () => {
    const [dropdownOpen,setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
    <Nav tabs >
      <NavItem>
        <NavLink href="/" active>
          Home
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Study Destinations
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Australia</DropdownItem>
          <DropdownItem >Canada</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>USA</DropdownItem>
          <DropdownItem>Europe</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
              <NavLink href="/" active>
                Tours & Travels
              </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">AboutUs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Our Services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Contact Us
        </NavLink>
      </NavItem>
    </Nav>
    </>
  )
}

export default Navstyle