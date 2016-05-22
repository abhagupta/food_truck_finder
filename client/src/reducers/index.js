import {combineReducers} from 'redux';
import TruckReducer from './truck_reducer';
import LocationReducer from './location_reducer';

const rootReducer = combineReducers({
  trucks: TruckReducer,
  location: LocationReducer

});

export default rootReducer;
