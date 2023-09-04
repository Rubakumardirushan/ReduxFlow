// reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';

const initialState = {
  username: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
