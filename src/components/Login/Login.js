import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  close: {
    fontFamily: 'sans-serif-light',
    fontSize: 24,
    marginHorizontal: 20,
    marginBottom: 15,
    marginVertical: 35,
  },
  header: {
    marginHorizontal: 20,
    fontFamily: 'sans-serif-light',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15
  },
  headerBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginTop: 20
  },
  buttonHolder: {
    width: 130, 
    marginTop: 20,
    left: '65%',
    width: 130, 
    height: 60, 
    backgroundColor: '#079a4e', 
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    zIndex: 5, 
    position: 'relative'
  },
  button: {
    paddingLeft: 30, 
    padding: 15, 
    fontWeight: 'bold', 
    fontSize: 20, 
    color: '#f6f6f6'
  }, 
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 400,
    fontSize: 14,
    marginLeft: 15,
    marginTop: 15
  }
});

const Login = ({ setMode, setIsSignedIn, alert, setAlert }) => {
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

  const handlePress = () => {
    setMode('Landing');
    setAlert(prevState => {
      return({
        message: '',
        show: false
      })
    });
  }

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

      const res = await response.json();
      setIsSignedIn(prevState => {
        return ({
          firstname: res.firstname,
          signedIn: true
        })
      });
      setMode('SignedIn');
    } catch (error) {
      setAlert(prevState => {
        return({
          message: 'There was an error signing you in, please try again.',
          show: true
        })
      });
    }
  };

  return(
    <View>
      <View style={style.headerBorder}>
        <Text
          onPress={handlePress}
          style={style.close}
        >X</Text>
        <Text style={style.header}>Sign in to Rewards</Text>
      </View>
      <View>
        <TextInput 
          style={style.input}
          placeholderTextColor='black'
          placeholder='Email'
          onChangeText={val => onValueChange('email', val)}
        />
        <TextInput
          style={style.input}
          placeholderTextColor='black' 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={val => onValueChange('password', val)}
        />
      </View>
        {alert.show && <View><Text>{alert.message}</Text></View>}
      <View style={style.buttonHolder}>
          <TouchableOpacity onPress={signIn}>
            <Text style={style.button}>Sign In</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};

export default Login;
