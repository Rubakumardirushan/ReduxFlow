// actions/authActions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { Alert } from 'react-native';
// Action creator for successful login
export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

// Action creator for login failure
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// Async action for handling login
export const login = (username, password, navigation) => {
  return (async (dispatch) => {
    





    try {
      const response = await axios.post(
        'https://fakestoreapi.com/auth/login',
        {
          username,
          password,
        }
        
      );
      const { token } = response.data;
      if (!token) {
        Alert.alert('Login Success', 'You are now logged in.');
      //  const loggedInUsername = response.data.user.username;
      //  dispatch(loginSuccess(loggedInUsername));
        console.log("pass da")
        navigation.navigate('About');
      } else {
        console.log("pass da")
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
      console.error('Login Error:', error);
    }
  });
};
