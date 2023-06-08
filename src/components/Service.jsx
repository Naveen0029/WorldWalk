import React from 'react'
import './Service.css'
import passport from '../../src/img/passport.png'
import moneyTransfer from '../../src/img/bank-transfer.png'
import toursAndTravel from '../../src/img/flight.png'

const Service = () => {
  return (
    <div className='serviceHeader'>
    <h1>Our Services</h1>  
    <div className='Service'>
      <div className='Servicecards'>
        <div><img alt="Immigration" src={passport} className="country" /></div>
        <div className='cardHeader'><h5>Immigration</h5></div>
      </div>
      <div className='Servicecards'>
        <div><img alt="Immigration" src={moneyTransfer} className="country" /></div>
        <div className='cardHeader'><h5>Money Transfer</h5></div>
      </div>
      <div className='Servicecards'>
        <div><img alt="Immigration" src={toursAndTravel} className="country" /></div>
        <div className='cardHeader'><h5>Tours & Travels</h5></div>
      </div>
    </div>
    </div>
  )
}

export default Service
