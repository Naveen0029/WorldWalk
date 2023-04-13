import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <div className='Map'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'key' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={10}
      >
        {/* You can add markers, polygons, and other elements here */}
      </GoogleMapReact>
    </div>
  )
}

export default Map