import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, StyleSheet, TouchableOpacity } from 'react-native';
import uuidv1 from 'uuid/v1';

const style = StyleSheet.create({
  close: {
    fontFamily: 'sans-serif-light',
    fontSize: 24,
    marginHorizontal: 20,
    marginBottom: 0,
    marginVertical: 45,
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
    marginTop: 580, 
    marginLeft: 290, 
    width: 130, 
    height: 60, 
    backgroundColor: '#079a4e', 
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    position: 'absolute'
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
  },
  checkBox: {
    flexDirection: 'row',
    margin: 8,
  },
  TC: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    marginTop: 3
  }
})
const SignUp = ({ setMode }) => {
  const [ userData, setUserData ] = useState({
    id: '5',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    hasAgreedToTC: false
  })

  const onValueChange = (key, val) => {
    setUserData(prevState => {
      return ({
        ...prevState,
        [key]: val
      })
    })
  };

  const submit = async () => {
    const { firstName, lastName, email, password, hasAgreedToTC } = userData;
    const id = uuidv1();
    if (hasAgreedToTC) {
      try {
        await fetch('https://ag0g52181d.execute-api.us-west-2.amazonaws.com/prod/signup', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'id': id,
           'first_name': firstName,
           'last_name': lastName,
           'email': email,
           'password': password
          })
        })
        console.log('clicked')
      } catch (error) {
        console.log(error)
      } finally {
        setMode('Landing');
      }
    } else {
      console.log('agree to TC first')
    }
  }
  return(
    <View>
      <View style={style.headerBorder}>
        <Text
          onPress={() => setMode('Landing')}
          style={style.close}
        >X</Text>
        <Text
          style={style.header}
        >
          Starbucks Rewards
        </Text>
      </View>
      <View>
        <View>
          <Text style={style.sectionTitle}>Personal Info</Text>
          <TextInput 
            style={style.input}
            placeholderTextColor='black'
            placeholder='First name'
            onChangeText={val => onValueChange('firstName', val)}
          />
          <TextInput
            style={style.input}
            placeholderTextColor='black' 
            placeholder='Last name'
            onChangeText={val => onValueChange('lastName', val)}
          />
        </View>
        <View>
          <Text style={style.sectionTitle}>Security</Text>
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
        <View>
          <View>
            <Text style={style.sectionTitle}>Preferences & Terms</Text>
          </View>
          <View style={style.checkBox}>
            <CheckBox 
            onChange={() => onValueChange('hasAgreedToTC', true)}/>
            <Text style={style.TC}>I accept the terms of use</Text>
          </View>
        </View>
        <View style={style.buttonHolder}>
          <TouchableOpacity onPress={submit}>
            <Text style={style.button}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default SignUp;