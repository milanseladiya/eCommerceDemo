import React from 'react';
import {Image, View} from 'react-native';

import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

const Rating = ({count}) => {
  const starData = [];

  for (let index = 0; index < 5; index++) {
    if (index < count) {
      starData.push(
        <Image
          key={`key_${index}`}
          source={icons.star}
          resizeMode={'contain'}
          style={style.starIcon}
        />,
      );
    } else {
      starData.push(
        <Image
          key={`key_${index}`}
          source={icons.star}
          resizeMode={'contain'}
          style={[style.starIcon, style.unfilledStarIcon]}
        />,
      );
    }
  }

  return <View style={style.container}>{starData}</View>;
};

export default Rating;
