import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Hero from './Hero';
import OfferList from './OfferList';

const style = StyleSheet.create({
  image: {
    margin: 12, 
    height: 400,
    width: 410, 
    borderRadius: 15
  },
  buttonHolder: {
    top: '88%',
    left: '65%',
    width: 130, 
    height: 60, 
    backgroundColor: '#079a4e', 
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    zIndex: 5, 
    position: 'absolute'
  },
  button: {
    paddingLeft: 22, 
    padding: 15, 
    fontWeight: 'bold', 
    fontSize: 20, 
    color: '#f6f6f6'
  }
})

const Landing = ({ setMode }) => {
  return (
  <View >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Hero setMode={setMode} />
          <OfferList setMode={setMode} />
        </View>
        <View>
          <Image 
            style={style.image}
            source={require('../../assets/image5.png')}
          />
        </View>
      </View>
    </ScrollView>
    <View style={style.buttonHolder}>
      <TouchableOpacity onPress={() => setMode('Sign Up')}>
        <Text style={style.button}>Join Now</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
};

export default Landing;
