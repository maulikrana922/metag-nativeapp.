// In App.js in a new project

import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup';
import ForgotPassword from '../src/Pages/ForgotPassword';
import ResetPassword from '../src/Pages/ResetPassword';
import VerifyOTP from '../src/Pages/VerifyOTP';
import CreateProfile from '../src/Pages/CreateProfile';
import UploadBusinessLogo from '../src/Pages/UploadBusinessLogo';
import MediaAccount from '../src/Pages/MediaAccount';
import Home from '../src/Pages/Home';
import Nfc from '../src/Pages/Nfc';
import MyProfile from '../src/Pages/MyProfile';
import Contact from '../src/Pages/Contact';
import ContactDetails from '../src/Pages/CotactDetail';
import MyOrders from '../src/Pages/MyOrders';
import OrderDetails from '../src/Pages/OrderDetails';
import Interaction from '../src/Pages/Interaction';
import ChangePassword from '../src/Pages/ChangePassword';
import Location from '../src/Pages/Location';
import ViewAll from '../src/Pages/ViewAll';
import TabNavigator from './tabs/TabNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

import {
  getToken,
  getAuthToken,
  getProfile,
  getLink,
  getSocialFlag,
  getRemoveProfile,
} from '../src/redux/reducer';
import TagDetail from '../src/Pages/TagDetail'
import Loader from '../src/components/Loader';

const Stack = createStackNavigator();

function StackNavigator() {
  const dispatch = useDispatch();
  const {token, flag, profile, removeProfile} = useSelector(state => state);
  console.log('printing profile', profile);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const flag = await AsyncStorage.getItem('@flag_Key');
      const parseValue = JSON.parse(value);
      if (flag) {
        console.log('flag in signup page');
        await dispatch(getSocialFlag(flag));
      }
      if (parseValue) {
        await dispatch(getProfile(parseValue));
        // props.navigation.navigate('Home');
        console.log('parseValue', parseValue);
        setLoading(false);
      } else {
        console.log('does not exist');
        setLoading(false);
      }
      console.log(parseValue);
    } catch (e) {
      console.log('e', e);
    }
    setLoading(false);
  }, []);

  if (loading === true) {
    return (
      <Modal transparent={true} statusBarTranslucent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size={60} color="white" />
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Stack.Navigator headerMode="none">
        {profile == null
          ? loading == false && (
              <>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
              </>
            )
          : loading == false && (
              <>
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                />
                <Stack.Screen name="Interaction" component={Interaction} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
                <Stack.Screen name="MyOrders" component={MyOrders} />
                <Stack.Screen
                  name="ContactDetails"
                  component={ContactDetails}
                />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="MediaAccount" component={MediaAccount} />
                <Stack.Screen
                  name="UploadBusinessLogo"
                  component={UploadBusinessLogo}
                />
                <Stack.Screen name="CreateProfile" component={CreateProfile} />
                <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Location" component={Location} />
                <Stack.Screen name="ViewAll" component={ViewAll} />
                <Stack.Screen name="Nfc" component={Nfc} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="TagDetail" component={TagDetail}/>
              </>
            )}
        {/* <Stack.Screen name=""
      {/* <Stack.Screen name="order " component={ChangePassword} /> */}
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 'auto',
    height: '100%',
    // margin: 'auto',
    // paddingLeft: 'auto',
    // paddingRight: 'auto',
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    // justifyContent: 'space-around',
    // backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    // alignSelf: 'center',
    // borderRadius: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
