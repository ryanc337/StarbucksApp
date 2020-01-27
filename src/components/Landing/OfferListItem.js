import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  title: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    fontWeight: 'bold', 
  },
  titleHolder: {
    flex: 1,
    paddingLeft: 10, 
    paddingTop: 10
  },
  image: {
    flex: 1, 
    width: null, 
    borderRadius: 10, 
    height: null, 
    resizeMode: 'cover'
  },
  imageHolder: {
    height: 260, 
    width: 330, 
    marginLeft: 20
  }
});

const OfferListItem = ({ title, image }) => {
  return(
    <View style={style.imageHolder}>
      <View style={{flex: 2}}>
        <Image source={image} style={style.image}/>
      </View>
      <View style={style.titleHolder}>
        <Text style={style.title}>{title}</Text>
      </View>
  </View>
  )
};

export default OfferListItem;