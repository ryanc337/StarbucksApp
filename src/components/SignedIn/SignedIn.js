import React from 'react';
import { Text, View, Button } from 'react-native';

const SignedIn = ({ setMode, isSignedIn, setIsSignedIn }) => {
  const handlepress = () => {
    setMode('Landing');
    setIsSignedIn(prevState => {
      return ({
        firstname: '',
        signedIn: false
      })
    })
  }

  return(
  <View>
    <View>
      <Text>Signed In as {isSignedIn.firstname}!</Text>
    </View>
    <View>
      <Button title={'Sign Out'} onPress={handlepress} ></Button>
    </View>
  </View>

  )
};

export default SignedIn;