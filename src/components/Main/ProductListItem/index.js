import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

import {Rating} from '../..';
import {images} from '../../../helper/imageConstants';
import {style} from './styles';

const ProductListItem = ({data, onPress}) => {
  const title = data?.name || '';
  const productImage = images[data?.imageName] || null;
  const brand = data?.brand || '';
  const price = data?.price || '';
  const rating = data?.rating || 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={style.container}>
      <Image
        source={productImage}
        resizeMode={'cover'}
        style={style.productImage}
      />
      <Rating count={rating} />
      <Text style={style.brandText}>{brand}</Text>
      <Text style={style.titleText}>{title}</Text>
      {price ? <Text style={style.priceText}>{price}$</Text> : null}
    </TouchableOpacity>
  );
};

export default ProductListItem;
