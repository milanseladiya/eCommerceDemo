import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Header, ProductListItem, Rating} from '../../components';
import {images} from '../../helper/imageConstants';
import {style} from './styles';

const ProductDetailsScreen = ({route}) => {
  const {products} = useSelector(state => state.common);
  const {goBack} = useNavigation();
  const productDetails = route?.params?.productDetails || {};

  const renderItem = ({item}) => <ProductListItem data={item} />;

  const keyExtractor = item => item.id;

  const title = productDetails?.name || '';
  const productImage = images[productDetails?.imageName] || null;
  const brand = productDetails?.brand || '';
  const price = productDetails?.price || '';
  const rating = productDetails?.rating || 0;
  const description = productDetails?.description || '';

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header title={'Details'} hasBackButton={true} onBackPress={goBack} />
      <ScrollView
        style={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Image
          source={productImage}
          resizeMode={'cover'}
          style={style.productImage}
        />
        <View style={style.infoContainer}>
          <View style={style.namingContainer}>
            <Text style={style.mainText}>{brand}</Text>
            <Text style={style.titleText}>{title}</Text>
            <Rating count={rating} />
          </View>
          <Text style={style.mainText}>${price}</Text>
        </View>
        <Text style={style.descriptionText}>{description}</Text>
        <View style={style.otherProductsContainer}>
          <Text style={style.subTitleText}>{'You can also like this'}</Text>
          <FlatList
            data={products.slice(0, 4)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
