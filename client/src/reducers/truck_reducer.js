import FETCH_TRUCKS from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case 'fetch_trucks':
    return action.payload.data;
  }
  return state;

}


// return [
//   {address : '1277 EL Camino, Burlingame'},
//   {address : '564 Anchor Circle, Redwoood Shores'},
//   {address : '850 Cherry Avenue, San Bruno'},
//   {address : '950 Elm Street, San Bruno'}
// ]
