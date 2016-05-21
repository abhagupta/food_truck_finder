import GET_LAT_LONG from '../actions/index';

export default function (state = null, action){
  console.log('action: ', action);
 switch(action.type){
   case 'get_lat_long':
   return action.payload.data;
 }
  return state;
}
