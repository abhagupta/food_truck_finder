import {FETCH_TRUCKS} from '../actions/index';

const INITIAL_STATE = {all:[]} // ask this.

export default function(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_TRUCKS:
    return {...state, all:action.payload.data} // ask this.
  }
  return state;
}
