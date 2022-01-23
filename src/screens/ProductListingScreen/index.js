import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getProductsData} from '../../actions';
import {Header, ProductListItem} from '../../components';
import {Pages} from '../../navigation/Routes';
import {style} from './styles';

const ProductListingScreen = ({route}) => {
  const {products} = useSelector(state => state.common);
  const {navigate, goBack} = useNavigation();
  const category = route?.params?.category || '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const onProductPress = data =>
    navigate(Pages.ProductDetailsScreen, {productDetails: data});

  const renderItem = ({item}) => (
    <ProductListItem data={item} onPress={() => onProductPress(item)} />
  );

  const keyExtractor = item => item.id;

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header
        title={category || 'Clothes'}
        hasBackButton={true}
        onBackPress={goBack}
      />
      <FlatList
        data={products}
        style={style.listContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default ProductListingScreen;
