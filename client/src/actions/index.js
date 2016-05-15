import axios from 'axios'

const ROOT_URL="https://data.sfgov.org/resource/6a9r-agq8.json";
const LOCALHOST_URL ="http://localhost:3080/location_address";
const API_KEY = "XBATFlFkQlwEHtiHPzkyEuMfz";

export const FETCH_TRUCKS = 'fetch_trucks';

export function fetchTrucks(value){
  const urlForLatLong = `${LOCALHOST_URL}/${value}`;
  const requestForLatLong = axios.get(urlForLatLong);
  requestForLatLong.then((resp) => {
    console.log('Lat and Long: ' , resp);
      const lat = resp.data.Latitude;
      const long = resp.data.Longitude;
      const url = `${ROOT_URL}?$where=within_circle(location,${lat},${long}, 100000)`;
      const config = {
          headers: {'X-App-Token': API_KEY}
        };
    

  })
  return {
    type:FETCH_TRUCKS,
    payload:request
  }
}
