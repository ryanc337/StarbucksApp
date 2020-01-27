import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OfferListItem from './OfferListItem';

const style = StyleSheet.create({
  buttonHolder: {
    margin: 20, 
    width: 100, 
    backgroundColor: '#f6f6f6', 
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 18
  },
  button: {
    paddingLeft: 14, 
    padding: 5, 
    fontWeight: 'bold', 
    fontSize: 16
  }
})

const OfferList = ({ setMode }) => {
  const titles = [
    'Let Starbucks Rewards add a little joy to your day',
    'Signing up is easy and fast',
    'Exclusive offers, personalized for you',
    'Rewards in as few as 2-3 visits'
  ]

  return (
    <View>
      <ScrollView
      scrollEventThrottle={16}
      >
        <View style={{ flex: 1, paddingTop: 20}}>
          <Text style={{marginLeft: 20}}>STARBUCKS REWARDS</Text>

          <View style={{height: 230, marginTop: 20}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
              <OfferListItem 
              image={require('../../assets/image0.png')}
              title={titles[0]}
              />
              <OfferListItem 
              image={require('../../assets/image1.png')}
              title={titles[1]}
              />
              <OfferListItem 
              image={require('../../assets/image2.png')}
              title={titles[2]}
              />
              <OfferListItem 
              image={require('../../assets/image3.png')}
              title={titles[3]}
              />
            </ScrollView>
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

export default OfferList;