import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Hero from './Hero';
import OfferList from './OfferList';

const Landing = ({ setMode }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Hero setMode={setMode} />
          <OfferList setMode={setMode} />
        </View>
        <View>
          <Image 
          style={{margin: 12, height: 400, width: 410, borderRadius: 15}}
          source={require('../../assets/image5.png')}
          />
        </View>
        <View style={{margin: 20, width: 100, backgroundColor: '#f6f6f6', borderWidth: 1, borderColor: 'black', borderRadius: 18}}>
          <TouchableOpacity onPress={() => setMode('Sign Up')}>
            <Text style={{paddingLeft: 14, padding: 5, fontWeight: 'bold', fontSize: 16}}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
};

export default Landing;
