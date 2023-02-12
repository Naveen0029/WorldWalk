import React from 'react'
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink
  } from 'reactstrap';
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs'

const Address = () => {
  return (
    <>
    <div className="Address div-1">
          <h1>World Walk</h1>
          <h6>Immigration club and visa consultancy</h6>
          <br></br>
          <p>First Floor Bhutani Mobile,</p>
          <p>Uklana Road Bhuna</p>
          <p>Pincode 125111</p>
          <p>Fatehabad (Haryana)</p>
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
    </>
  )
}

export default Address