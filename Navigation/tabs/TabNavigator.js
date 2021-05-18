import AvatarI from '../../assets/TabIcons/avatar.svg';
import ContactI from '../../assets/TabIcons/contact.svg';
import ListI from '../../assets/TabIcons/list.svg';
import HomeRunI from '../../assets/TabIcons/home-run.svg';

import Home from '../../src/Pages/Home';
import Contact from '../../src/Pages/Contact';
import MyOrders from '../../src/Pages/MyOrders';
import MyProfile from '../../src/Pages/MyProfile';

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => <HomeRunI fill={color} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => <ContactI fill={color} />,
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => <ListI fill={color} />,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => <AvatarI fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// export default function App() {
//   return (
//     <Contain/>
//   );
// }
