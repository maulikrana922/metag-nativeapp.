// In App.js in a new project

import * as React from 'react';
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

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Interaction" component={Interaction} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MediaAccount" component={MediaAccount} />
      <Stack.Screen name="UploadBusinessLogo" component={UploadBusinessLogo} />
      <Stack.Screen name="CreateProfile" component={CreateProfile} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="ViewAll" component={ViewAll} />
      <Stack.Screen name="Nfc" component={Nfc} />
      {/* <Stack.Screen name="order " component={ChangePassword} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
