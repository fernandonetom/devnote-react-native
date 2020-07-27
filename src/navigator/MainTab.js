import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStack from './MainStack';

import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabel: 'Valor padrão',
    }}>
    <Tab.Screen
      name="TabHome"
      component={MainStack}
      options={{
        tabBarLabel: 'Página inicial',
        tabBarIcon: ({focused}) => {
          return (
            <Icon name="home" size={20} color={focused ? '#FF0000' : '#333'} />
          );
        },
      }}
    />
  </Tab.Navigator>
);
