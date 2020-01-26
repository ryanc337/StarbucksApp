import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = ({ setMode }) => {
  return(
    <View>
      <Text>
        Login
      </Text>
      <Button 
      title="goback"
      onPress={() => setMode('Landing')}
      />
    </View>
  )
};

export default Login;