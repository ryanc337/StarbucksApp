import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Login = ({ setMode }) => {
  const [isSignedIn, setIsSignedIn ] = useState({
    firstname: '',
    signedIn: false
  });
  const [signInData, setSignInData ] = useState({
    email: '',
    password: ''
  });

  const onValueChange = (key, val) => {
    setSignInData(prevState => {
      return ({
        ...prevState,
        [key]: val
      })
    })
  };

  const signIn = async () => {
    const { email, password } = signInData;
    try {
      const response = await fetch('https://ag0g52181d.execute-api.us-west-2.amazonaws.com/prod/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         'email': email,
         'password': password
        })
      });
      const status = response["status"];
      const res = await response.json();
      if (status === 201) {
        setIsSignedIn(prevState => {
          return ({
            ...prevState,
            firstname: res.firstname,
            signedIn: true
          })
        });
      } else {
        console.log('alert error');
      }
    } catch (error) {
      console.log(error);
    } 
  };

  return(
    <View>
      <View>
        <Text>
          Login
        </Text>
        <Button 
          title="goback"
          onPress={() => setMode('Landing')}
        />
      </View>
      <View>
        <TextInput 
          placeholder='Email'
          onChangeText={val => onValueChange('email', val)}
        />
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={val => onValueChange('password', val)}
        />
      </View>
      <View>
        <Button 
          title={'Sign In'}
          onPress={signIn}
        />
      </View>
      {isSignedIn.signedIn && 
      <View>
        <Text>Signed In Succesfully as {isSignedIn.firstname}!</Text>
      </View>
      }
    </View>
  )
};

export default Login;
