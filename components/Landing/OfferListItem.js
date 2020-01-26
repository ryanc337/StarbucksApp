import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const OfferListItem = () => {
  return(
    <View>
      <View>
        <Text>Starbucks Rewards</Text>
      </View>
      <View>
        <Image 
          style={{width: 200, height: 100}}
          source={{uri: 'https://assets-interview-project.s3-us-west-2.amazonaws.com/display-image.png'}}
        />
      </View>
      <View>
        <Text>
          Join Starbucks Rewards to get more of what you love
        </Text>
      </View>
      <View>
        <Button title="Join Now"/>
      </View>
    </View>
  )
};

export default OfferListItem;