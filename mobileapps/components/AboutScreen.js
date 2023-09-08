]// components/AboutScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const AboutScreen = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <View>
      <Text>About Page</Text>
      {username && <Text>Hello, {username}!</Text>}
    </View>
  );
};

export default AboutScreen;
