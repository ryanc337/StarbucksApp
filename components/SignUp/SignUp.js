import React, { useState } from 'react';
import { View, Text, Button, TextInput, CheckBox } from 'react-native';
import { Icon } from 'react-native-elements';

const SignUp = ({ setMode }) => {
  const [ userData, setUserData ] = useState({
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
    const { firstName, lastName, email, password, hasAgreedToTC } = userData
    if (hasAgreedToTC) {
      try {
        console.log(userData)
      } catch {
        console.log('fail')
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
        <Icon 
        name="times"
        type="font-awesome"
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