import React from 'react';
import { View, Text } from 'react-native';
import Hero from './Hero';
import OfferList from './OfferList'

const Landing = ({ setMode }) => {
  return (
    <View>
      <Hero setMode={setMode} />
      <OfferList setMode={setMode} />
    </View>
  )
};

export default Landing;
