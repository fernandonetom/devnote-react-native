/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './store';
import {NavigationContainer} from '@react-navigation/native';

import MainTab from './navigator/MainTab';
import Loading from './components/Loading';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
