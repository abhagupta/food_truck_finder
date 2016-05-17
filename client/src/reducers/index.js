import {combineReducers} from 'redux';
import TruckReducer from './truck_reducer';


const rootReducer = combineReducers({
  trucks: TruckReducer

});

export default rootReducer;
