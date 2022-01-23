import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import MainNavigator from './src/navigation/MainNavigator';
import {store} from './src/reducers/store';
import {colors} from './src/helper/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <MainNavigator />
    </Provider>
  );
};

export default App;
