import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  layoutItems: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10
  },
  banner: {
    fontFamily: 'sans-serif-light',
    fontSize: 30,
    fontWeight: 'bold', 
    marginHorizontal: 20,
    marginVertical: 60,
  },
  settings: {
    marginLeft: 140
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});

const Hero = ({ setMode }) => {  
  return(
    <View style={style.border}>
      <View>
        <Text style={style.banner}>
          It's a great day for coffee 
          <Text>{'\n'}☕</Text>
        </Text>
      </View>
      <View style={style.layoutItems}>
        <View>
          <TouchableOpacity onPress={() => setMode('Log In')}>
            <Image 
              style={{width: 100, height: 22}}
              source={require('../../assets/signin.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image 
            style={{width: 100, height: 20}}
            source={require('../../assets/inbox.png')}
          />
        </View>
        <View style={style.settings}>
          <Image 
            style={{ width: 25, height: 25 }}
            source={require('../../assets/settings.png')}
          />
        </View>
      </View>
    </View>
  )
};

export default Hero; 