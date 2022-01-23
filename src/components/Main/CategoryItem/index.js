import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../../../helper/imageConstants';

import {style} from './styles';

const CategoryItem = ({data, onPress}) => {
  const title = data?.name || '';
  const categoryImage = images[data?.imageName] || null;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={style.container}>
      <Text style={style.titleText}>{title}</Text>
      {categoryImage ? (
        <Image
          source={categoryImage}
          resizeMode={'cover'}
          style={style.categoryImage}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CategoryItem;
