import axios from 'axios'

const ROOT_URL="https://data.sfgov.org/resource/6a9r-agq8.json";
//const LOCALHOST_URL ="http://localhost:5050/";
const LOCALHOST_URL ="http://localhost:3080/";
const MOCKED_LOCALHOST_URL ="http://dev.walmart.com:8000/location_address";
const API_KEY = "XBATFlFkQlwEHtiHPzkyEuMfz";

export const GET_LAT_LONG = 'get_lat_long';
export const FETCH_TRUCKS = 'fetch_trucks';
export const LAT_LONG_RECIEVED = 'lat_long_recieved';
export const GET_WELCOME_MESSAGE = 'get_welcome_message';


export function getWelcomeMessage(){
  const urlForWelcomeMessage = `${LOCALHOST_URL}welcome_message`;



  const request = axios.get(urlForWelcomeMessage);


  return {
    type:GET_WELCOME_MESSAGE,
    payload:request
  }
}

export function getLatLong(address){
  const urlForLatLong = `${LOCALHOST_URL}location_address/${address}`;
   console.log(urlForLatLong);
  const request = axios.get(urlForLatLong);

  return {
    type:GET_LAT_LONG,
    payload:request
  }
}


export function fetchTrucks(lat, long){
 const url = `${ROOT_URL}?$where=within_circle(location,${lat},${long}, 100000)`;
 const config = {
          headers: {'X-App-Token': API_KEY}
  };
  const request = axios.get(url, config);
  return {
   type:FETCH_TRUCKS,
   payload:request
 }
}

export function setLatLongReceived() {
  return {
    type: LAT_LONG_RECIEVED
  }
}


export function fetchMockedLatLong(address){
  const urlForLatLong = `${MOCKED_LOCALHOST_URL}/${address}`; //localhost:8000/location_address/94010

  const request = axios.get(urlForLatLong);
  return {
    type:GET_LAT_LONG,
    payload:request
  }
}
