import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../screens/List';
import EditScreen from '../screens/Edit';

const MainStack = createStackNavigator();

const options = {};

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#FFF',
      headerBackTitle: 'Voltar',
      headerTitleAlign: 'center',
    }}>
    <MainStack.Screen name="ListScreen" component={ListScreen} />
    <MainStack.Screen name="EditScreen" component={EditScreen} />
  </MainStack.Navigator>
);
