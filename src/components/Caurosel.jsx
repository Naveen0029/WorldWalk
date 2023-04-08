import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Caurosel.css'


let ImageDiv = [
    <div>
        <img
            alt="Sample"
            src="https://static.toiimg.com/photo/86797680.cms"
            width="100%"
            height="415px"
          />
          <label className="ImageLabel australia">Australia</label>
     </div>,
     <div>
     <img
         alt="Sample"
         src="https://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?b=1&s=170667a&w=0&k=20&c=83crVlfiIrVw2LpAeyaNCh8ZMRbCiHWLYi50jpQv4dM="
         width="100%"
         height="415px"
       />
       <label className="ImageLabel">Canada</label>
     </div>,
     <div>
        <img
            alt="Sample"
            src="https://media.istockphoto.com/id/904523520/photo/big-ben-clock-tower-and-london-bus.jpg?s=612x612&w=0&k=20&c=sy2eUc8tLiibOjT-Pg4Iw0oQtA_9gEUmNONxLtcyBuI="
            width="100%"
            height="415px"
          />
          <label className="ImageLabel">United Kingdom</label>
     </div>,
     <div>
        <img
            alt="Sample"
            src="https://img.freepik.com/free-photo/usa-united-states-america-flag-flagpole-near-skyscrapers-cloudy-sky_181624-5054.jpg"
            width="100%"
            height="415px"
          />
          <label className="ImageLabel">USA</label>
     </div>,
     <div>
        <img
            alt="Sample"
            src="https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?cs=srgb&dl=pexels-julius-silver-753337.jpg&fm=jpg"
            width="100%"
            height="415px"
          />
          <label className="ImageLabel">Europe</label>
     </div>

];


const Caurosel = () => {
    let [currentDiv,setCurrentDiv] = useState(0);

    let leftButton = (e) => {
        e.preventDefault();
        let newVal = currentDiv-1 < 0 ? ImageDiv.length-1 : currentDiv-1;
        setCurrentDiv(newVal);
    }

    let rightButton = (e) => {
        e.preventDefault();
        setCurrentDiv((currentDiv+1)%ImageDiv.length);
    }
  return (
    <div className='Caurosels'>
        <div className='leftButton'>
        <FontAwesomeIcon icon={faAngleLeft} onClick={leftButton} style={{'font-size':'50px',color: 'white'}}/>
        </div>
        {
            ImageDiv.map((div,index)=>(
                <div key={index} className={index === currentDiv ? 'CauroselImage' : 'hide' }>
                    {div}
                </div>
            ))
        }
        <div className='rightButton'>
        <FontAwesomeIcon icon={faAngleRight} onClick={rightButton} style={{'font-size':'50px',color: 'white'}}/>
        </div>
    </div>
  )
}

export default Caurosel