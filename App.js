import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './Navigation/MainNavigator';
// import Signup from './src/components/Signup';
// import ForgotPassword from './src/components/ForgotPassword';
// import ResetPassword from './src/components/ResetPassword';
// import VerifyOTP from './src/components/VerifyOTP';
// import CreateProfile from './src/components/CreateProfile';
// import UploadBusinessLogo from './src/components/UploadBusinessLogo';
// import MediaAccount from './src/components/MediaAccount';
// import Home from './src/components/Home';
// import MyProfile from './src/components/MyProfile';
// import Contact from './src/components/Contact';
// import ContactDetails from './src/components/CotactDetail';
// import MyOrders from './src/components/MyOrders';
// import OrderDetails from './src/components/OrderDetails';
// import Interaction from './src/components/Interaction';
// import ChangePassword from './src/components/ChangePassword';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return <MainNavigator />;
}

export default App;
