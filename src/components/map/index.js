import React from 'react'
import './style.css'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 50.891, lng: 34.801 }}
    >
      <Marker
        position={{ lat: 50.891, lng: 34.801 }}
      />
    </GoogleMap>
  ));

const Map = () => (
  <div className="map">
    <div className="container">
        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwO055rrHQ5MjLiuFyMIe9F3uB10iLGdg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
  </div>
)

export default Map