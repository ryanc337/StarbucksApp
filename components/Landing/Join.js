import React from 'react';
import {Button, View } from 'react-native';

const Join = ({ setMode }) => {
  return (
    <View>
      <Button 
      title="Join Now Button"
      onPress={() => setMode('Sign Up')}
      />
    </View>
  )
};

export default Join;