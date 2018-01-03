import {combineReducers} from "redux";

function shelters(state = [], action) {
  if (action.type === "SHELTERS_LOADED") {
    return action.value;
  }
  return state
}

function shelter(state = {}, action) {
  if (action.type === "GET_SHELTER_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  shelters, shelter
});
export default rootReducer;
