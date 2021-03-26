// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import ForgotPassword from '../src/components/ForgotPassword';
import ResetPassword from '../src/components/ResetPassword';
import VerifyOTP from '../src/components/VerifyOTP';
import CreateProfile from '../src/components/CreateProfile';
import UploadBusinessLogo from '../src/components/UploadBusinessLogo';
import MediaAccount from '../src/components/MediaAccount';
import Home from '../src/components/Home';
import MyProfile from '../src/components/MyProfile';
import Contact from '../src/components/Contact';
import ContactDetails from '../src/components/CotactDetail';
import MyOrders from '../src/components/MyOrders';
import OrderDetails from '../src/components/OrderDetails';
import Interaction from '../src/components/Interaction';
import ChangePassword from '../src/components/ChangePassword';

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

      {/* <Stack.Screen name="order " component={ChangePassword} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
