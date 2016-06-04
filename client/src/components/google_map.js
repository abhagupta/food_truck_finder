import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) => {
  const lat = parseFloat(props.lat);
  const n1 = lat.toFixed(6);

  const long = parseFloat(props.lon);
  const n2 = long.toFixed(6);
  console.log("lat long :"  , n1 , n2)
  return (
    <GoogleMapLoader
    containerElement={ <div style={{height: '100%'}}></div> }
    googleMapElement={
      <GoogleMap
         defaultZoom={12}
         defaultCenter={{lat: parseFloat(n1), lng:parseFloat(n2) }} >

    </GoogleMap>
    }
    ></GoogleMapLoader>
  );
}
