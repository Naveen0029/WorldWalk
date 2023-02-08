import React,{useEffect, useState} from "react";
import "./Navbar.css";
import Navstyle from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import { FaBars } from 'react-icons/fa';

const NavbarComponent = () => {
  const [navToggler,setNaveToggler] = useState(false);
  const [navStyle,setnavStyle] = useState(false);
  const [verticalNav,setverticalNav] = useState(false);
  const [toggleButton,settoggleButton] = useState(false);//button will be visible or not

 
  const actualWidth = ()=>{
    //setWidth(window.innerWidth);
    window.innerWidth>=1134?settoggleButton(false):settoggleButton(true);
   // window.innerWidth>=1134?verticalNav(false):null;
  }

  let showVerticalNav = () =>{
    setverticalNav(!verticalNav);
  }
  useEffect(()=>{
    window.addEventListener("resize",actualWidth);
    return ()=>{
      window.removeEventListener("resize",actualWidth)
    }
  });

  useEffect(()=>{
    console.log('i am here');
    setverticalNav(false);
  },[toggleButton])

  return (
    <>
      <div className="container-fluid Header">
        <div className="row">
          <div className="col-8 col-sm-4 align-self-center webName">
          <h1>WorldWalk</h1>
          </div>

          <div className='col-4 col-sm-8 Links align-self-center justify-content-end'>
          
          {toggleButton===false?<Navstyle />:<FaBars onClick={showVerticalNav} />}
          
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12">
          {verticalNav&&<VerticalNavbar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
