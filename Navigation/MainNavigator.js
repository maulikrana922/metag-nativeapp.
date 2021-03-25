// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import StackNavigator from './StackNavigator';

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
