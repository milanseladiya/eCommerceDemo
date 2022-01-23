import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getMainData} from '../../actions';
import {Header, OfferSection, CategoryItem} from '../../components';
import {Pages} from '../../navigation/Routes';
import {style} from './styles';

const MainScreen = () => {
  const {offer, categories} = useSelector(state => state.common);
  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainData());
  }, []);

  const onCategoryPress = data =>
    navigate(Pages.ProductListingScreen, {category: data?.name || ''});

  const renderItem = ({item}) => (
    <CategoryItem data={item} onPress={() => onCategoryPress(item)} />
  );

  const keyExtractor = item => item.id;

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header title={'Welcome!'} />
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<OfferSection data={offer} />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
