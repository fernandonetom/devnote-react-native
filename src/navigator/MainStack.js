import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';

import ListScreen from '../screens/List';
import EditScreen from '../screens/Edit';

const MainStack = createStackNavigator();

import dark from '../components/dark';

import light from '../components/light';

export default () => {
  const darkTheme = useSelector((state) => state.theme.dark);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <StatusBar
        barStyle={darkTheme ? 'light-content' : 'dark-content'}
        backgroundColor="#333"
      />
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: darkTheme
              ? dark.headerBackground
              : light.headerBackground,
          },
          headerTintColor: darkTheme ? dark.headerText : light.headerText,
          headerBackTitle: 'Voltar',
          headerTitleAlign: 'center',
        }}>
        <MainStack.Screen name="ListScreen" component={ListScreen} />
        <MainStack.Screen name="EditScreen" component={EditScreen} />
      </MainStack.Navigator>
    </ThemeProvider>
  );
};
