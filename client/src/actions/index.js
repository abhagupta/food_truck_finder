import axios from 'axios'

const ROOT_URL="https://data.sfgov.org/resource/6a9r-agq8.json";
const LOCALHOST_URL ="http://localhost:3080/location_address";
const API_KEY = "XBATFlFkQlwEHtiHPzkyEuMfz";

export const GET_LAT_LONG = 'get_lat_long';
export const FETCH_TRUCKS = 'fetch_trucks';

export function getLatLong(address){
  const urlForLatLong = `${LOCALHOST_URL}/${address}`;
  const request = axios.get(urlForLatLong);
  console.log("Request :", request);
  return {
    type:GET_LAT_LONG,
    payload:request
  }
}

export function fetchTrucks(lat, long){

}