// In App.js in a new project

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch, Provider as StateProvider} from 'react-redux';

const SwitchNavigator = createSwitchNavigator({
  StackNavigator: {
    screen: StackNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

let AppContainer = createAppContainer(SwitchNavigator);

function MainNavigator() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}

export default MainNavigator;
