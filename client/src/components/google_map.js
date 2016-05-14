import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapLoader
    containerElement={ <div style={{height: '100%'}}></div> }
    googleMapElement={
      <GoogleMap
         defaultZoom={12}
         defaultCenter={{lat: props.lat, lng:props.lon }} >
         
    </GoogleMap>
    }
    ></GoogleMapLoader>
  );
}
