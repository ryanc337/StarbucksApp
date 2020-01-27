import React, { useState } from 'react';
import { View, Text, Button, TextInput, CheckBox } from 'react-native';
import uuidv1 from 'uuid/v1';

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

  const signUp = async () => {
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
      <View>
        <Text>
          SignUp
        </Text>
        <Button 
          title="goback"
          onPress={() => setMode('Landing')}
        />
      </View>
      <View>
        <View>
          <Text>Personal Info</Text>
          <TextInput 
            placeholder='First name'
            onChangeText={val => onValueChange('firstName', val)}
          />
          <TextInput 
            placeholder='Last name'
            onChangeText={val => onValueChange('lastName', val)}
          />
        </View>
        <View>
          <Text>Security</Text>
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
          <Text>Terms and Conditions</Text>
          <CheckBox 
          onChange={() => onValueChange('hasAgreedToTC', true)}/>
        </View>
        <View>
          <Button 
            title={'Sign Up'}
            onPress={signUp}
          />
        </View>
      </View>
    </View>
  )
};

export default SignUp;