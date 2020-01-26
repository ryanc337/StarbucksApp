import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Login = ({ setMode }) => {
  return(
    <View>
      <Text>
        Login
      </Text>
      <Icon 
      name="times"
      type="font-awesome"
      onPress={() => setMode('Landing')}
      />
    </View>
  )
};

export default Login;