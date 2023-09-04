// navigation/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import AboutScreen from '../components/AboutScreen';
import LoginScreen from '../components/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={username ? 'About' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
