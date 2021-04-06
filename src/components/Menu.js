import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

// import avtar from '../../assets/contact/avatar2.png';
// import contact from '../../assets/contact/contact.png';
// import list from '../../assets/contact/list.png';
// import home from '../../assets/contact/home-run.png';
import avatar from '../../assets/TabIcons/avatar.png';
import avatard from '../../assets/TabIcons/avatard.png';
import contact from '../../assets/TabIcons/contact.png';
import contactd from '../../assets/TabIcons/contactd.png';
import homerun from '../../assets/TabIcons/home-run.png';
import homerund from '../../assets/TabIcons/home-rund.png';
import list from '../../assets/TabIcons/list.png';
import listd from '../../assets/TabIcons/listd.png';
import {ForceTouchGestureHandler} from 'react-native-gesture-handler';

export default function Menu(props) {
  const [avatarI, setAvatarI] = useState(false);
  const [contactI, setContactI] = useState(false);
  const [homerunI, setHomerunI] = useState(false);
  const [listI, setListI] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#EEEEEE',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setAvatarI(false);
              setContactI(false);
              setHomerunI(true);
              setListI(false);
              navigation.navigate('Home');
            }}>
            {homerunI ? (
              <Image source={homerund} style={styles.menuIcon}></Image>
            ) : (
              <Image source={homerun} style={styles.menuIcon}></Image>
            )}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setAvatarI(false);
              setContactI(true);
              setHomerunI(false);
              setListI(false);
              navigation.navigate('Contact');
            }}>
            {contactI ? (
              <Image source={contactd} style={styles.menuIcon}></Image>
            ) : (
              <Image source={contact} style={styles.menuIcon}></Image>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setAvatarI(false);
              setContactI(false);
              setHomerunI(false);
              setListI(true);
              navigation.navigate('MyOrders');
            }}>
            {listI ? (
              <Image source={listd} style={styles.menuIcon}></Image>
            ) : (
              <Image source={list} style={styles.menuIcon}></Image>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setAvatarI(true);
              setContactI(false);
              setHomerunI(false);
              setListI(false);
              navigation.navigate('MyProfile');
            }}>
            {avatarI ? (
              <Image source={avatard} style={styles.menuIcon}></Image>
            ) : (
              <Image source={avatar} style={styles.menuIcon}></Image>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    width: 30,
    height: 30,
    // backgroundColor: 'yellow',
  },
});
