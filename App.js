import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './Navigation/MainNavigator';
// import React, {Component} from 'react';
import store from './src/redux/store';
import {useSelector, useDispatch, Provider as StateProvider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStore from './AppStore';

// import {useSelector, useDispatch} from 'react-redux';

// import Nav from './Navigation/TabNavigation';
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

import SplashScreen from 'react-native-splash-screen';

// const Stack = createStackNavigator();

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

function App() {
  // const dispatch = useDispatch();
  // const {token, flag, profile, removeProfile} = useSelector(state => state);

  useEffect(() => {
    // Runs after the first render() lifecycle

    console.log('mounted');
    SplashScreen.hide();
  }, []);

  return (
    <StateProvider store={store}>
      {/* <AppStore /> */}
      {/* <MainNavigator /> */}
      <MainNavigator />
    </StateProvider>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   // getData = async () => {
//   //   try {
//   //     const value = await AsyncStorage.getItem('@storage_Key');
//   //     if (value !== null) {
//   //       console.log(value);
//   //     }
//   //     if (value) {
//   //       console.log('value', value);

//   //     } else {
//   //       console.log('does not exist');
//   //     }
//   //   } catch (e) {
//   //     console.log('e', e);
//   //   }
//   //   // console.log('no value is printes');
//   // };

//   componentDidMount() {
//     SplashScreen.hide();
//     // this.getData();
//   }

//   render() {
//     return (
//       <StateProvider store={store}>
//         <MainNavigator />
//       </StateProvider>
//     );
//   }
// }
export default App;
