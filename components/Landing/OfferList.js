import React from 'react';
import { View } from 'react-native';
import OfferListItem from './OfferListItem';
import Join from './Join';

const OfferList = ({ setMode }) => {
  return (
    <View>
      <OfferListItem />
      <Join setMode={setMode}/>
    </View>
  )
};

export default OfferList;