// import React from 'react';
import React, {useEffect} from 'react';
import App from './App';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch, Provider as StateProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './Navigation/MainNavigator';
// import React, {Component} from 'react';
import store from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getToken,
  getAuthToken,
  getProfile,
  getLink,
  getSocialFlag,
  getRemoveProfile,
} from './src/redux/reducer';

// import {useNavigation} from '@react-navigation/native';

export default function AppStore() {
  const {token, flag, profile, removeProfile} = useSelector(state => state);
  // const navigation = useNavigation();

  const dispatch = useDispatch();
  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //     await AsyncStorage.removeItem('@flag_Key');
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log('Done.');
  // };

  // removeValue();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const flag = await AsyncStorage.getItem('@flag_Key');
      const parseValue = JSON.parse(value);
      if (flag) {
        // console.log('flag in signup page');
        await dispatch(getSocialFlag(flag));
      }
      if (parseValue) {
        await dispatch(getProfile(parseValue));

        // navigation.navigate('Home');
        console.log('parseValue', parseValue);
      } else {
        console.log('does not exist');
      }
      console.log(parseValue);
    } catch (e) {
      console.log('e', e);
    }
  };
  useEffect(() => {
    getData();
  });

  // console.log('printing token from app store', profile);
  return (
    // <StateProvider store={store}>
    <MainNavigator />
    //   </StateProvider>
  );
}
