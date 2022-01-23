import React from 'react';
import {View, Text} from 'react-native';

import {style} from './styles';

const OfferSection = ({data}) => {
  const title = data?.name || '';
  const discountInfo = data?.discount ? `Up to ${data?.discount}% off` : '';

  return (
    <View style={style.container}>
      <Text style={style.titleText}>{title}</Text>
      <Text style={style.infoText}>{discountInfo}</Text>
    </View>
  );
};

export default OfferSection;
