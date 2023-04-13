import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='Map'>
        <iframe
          title="My Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.2819031568806!2d75.70789747628992!3d29.53728367518296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911797bd916e4cd%3A0x8b0ddf66e07fc2cd!2sWorld%20walk!5e0!3m2!1sen!2sin!4v1681407830337!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    </div>
    //<iframe src= width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default Map