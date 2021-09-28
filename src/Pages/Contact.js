import React, {useEffect, useState} from 'react';
import * as Svg from 'react-native-svg';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Animated,
  SafeAreaView,
} from 'react-native';

// import * as ImagePicker from 'expo-image-picker';
// import AppLoading from 'expo-app-loading';
// import AvtarImage from "../../assets/avtar.svg";
//

import url from '../BaseURl/baseurl.json';

import axios from 'axios';
import AvtarImage from '../../assets/work-suitcase.svg';
import wifi from '../../assets/mobile-phone-with-wifi.png';
import qrCode from '../../assets/qr-code.png';
import exampleImg from '../../assets/splash.png';
import userIcon from '../../assets/user.svg';
import suitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/contact/avatar2.png';
import contact from '../../assets/contact/contact.png';
import list from '../../assets/contact/list.png';
import home from '../../assets/contact/home-run.png';
import more from '../../assets/myProfile/more.svg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png';
import instagram from '../../assets/instagram.png';
import Scan from '../../assets/myProfile/scan.svg';
import More from '../../assets/myProfile/more.svg';
import Logo from '../../assets/Logo/logo.svg';
import Menu from '../../src/components/Menu';
import bg from '../../assets/Logo/bg.png';
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  getToken,
  getAuthToken,
  getProfile,
  getSocialFlag,
  getRemoveProfile,
} from '../redux/reducer';

import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Contact(props) {
  const dispatch = useDispatch();
  // let [isLoaded] = useFonts({
  //   'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
  //   'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  // });
  const {token, profile, link, flag} = useSelector(state => state);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);
  const [activeBtnAll, setAvtiveBtnAll] = useState(false);
  const [activeBtnReceive, setAvtiveBtnReceive] = useState(false);
  const [activeBtnSent, setAvtiveBtnSent] = useState(false);

  const apiToken =
    profile !== null && flag === 'true'
      ? profile.data[0].api_token
      : profile !== null && profile.api_token;

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri);
  //   }
  // };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      await AsyncStorage.setItem('@flag_key', 'false');
      // await AsyncStorage.removeItem('@flag_Key')
      props.navigation.navigate('Login');
      await dispatch(getSocialFlag('false'));
      // dispatch(getSocialFlag('false'));
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // dispatch(getProfile(null));
      dispatch(getRemoveProfile(true));
      //props.navigation.navigate('Login');
      // dispatch(getProfile(null));

      // props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };

  const logout = () => {
    axios({
      method: 'POST',
      url: `${url.baseurl}logout`,
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);true
          removeValue();
          console.log('success', response.data);

          // removeData();
        } else {
          console.log('Failed', response.data);
        }
      })
      .catch(error => console.log('logout data', error));
  };

  const close = () => {
    setRemove(true);
  };

  console.log(remove);

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <TouchableOpacity style={styles.leftAction} onPress={close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          deleted
        </Animated.Text>
      </TouchableOpacity>
      // <View></View>
    );
  };
  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View style={{flex: 1}}>
          <View style={styles.header_parent}>
            <View>
              <View style={styles.header}>
                {/* <View style={styles.arrowback}></View> */}
                {/* <Image
                source={require('../../assets/arrow-back.svg')} 
                style={styles.arrowback}
              ></Image> */}

                <Scan style={{alignSelf: 'center'}} />
                <View style={styles.headerBackground}>
                  <Logo width={60} height={70} />

                  <View style={styles.header_text}>
                    <Text style={styles.text_metag}>meTAG</Text>
                    <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                  </View>
                </View>
                {/* <Text style={styles.next}>  </Text> */}
                {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
                {/* <More style={{alignSelf: 'center'}} /> */}
                <TouchableOpacity
                  // onPress={() => props.navigation.navigate('Contact')}
                  onPress={() => setShow(!show)}
                  style={{
                    alignSelf: 'center',
                    padding: 10,
                    // backgroundColor: 'red',
                  }}>
                  <More />
                </TouchableOpacity>
              </View>
              {show && (
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: 10,
                    marginLeft: 'auto',
                    // marginRight: -10,
                    // marginRight: '10%',
                    // marginTop: -20,
                    marginRight: 12,
                    zIndex: 10,
                    display: 'flex',
                    position: 'absolute',
                    right: 5,
                    marginTop: 80,
                  }}>
                  <View
                    style={{
                      transform: [{rotate: '-45deg'}],
                      backgroundColor: '#FFFFFF',
                      width: 15,
                      height: 15,
                      position: 'relative',
                      bottom: 5,
                      marginLeft: 'auto',
                      marginRight: 10,
                    }}></View>
                  <View
                    style={{
                      paddingRight: 10,
                      paddingLeft: 10,
                      paddingBottom: 10,
                      width: 120,
                    }}>
                    <View
                      style={{
                        borderBottomColor: '#E5E5E5',
                        borderBottomWidth: 1,
                        padding: 1,
                        paddingBottom: '10%',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'Poppins-Regular',
                        }}
                        onPress={() =>
                          props.navigation.navigate('ChangePassword')
                        }>
                        Settings
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingTop: '10%',
                        padding: 1,
                      }}>
                      <Text
                        onPress={() => {
                          logout();
                        }}
                        style={{
                          fontSize: 16,
                          paddingTop: '2%',
                          fontFamily: 'Poppins-Regular',
                        }}>
                        Logout
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              <View style={styles.completeProfileView}>
                <Text style={styles.completeProfile}>Contacts</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 'auto',
                justifyContent: 'space-around',
                marginLeft: 40,
                marginRight: 40,
              }}>
              <TouchableOpacity
                style={[
                  !activeBtnAll ? styles.choiceMenuActive : styles.choiceMenu,
                ]}
                onPress={() => {
                  setAvtiveBtnAll(!activeBtnAll);
                  setAvtiveBtnReceive(!activeBtnReceive);
                  setAvtiveBtnSent(!activeBtnSent);
                }}>
                <Text style={styles.choiceMenuText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  activeBtnReceive
                    ? styles.choiceMenuActive
                    : styles.choiceMenu,
                ]}
                onPress={() => {
                  setAvtiveBtnAll(!activeBtnAll);
                  setAvtiveBtnReceive(!activeBtnReceive);
                  // setAvtiveBtnSent(!activeBtnSent);
                }}>
                <Text style={styles.choiceMenuText}>Received</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  !activeBtnSent ? styles.choiceMenuActive : styles.choiceMenu,
                ]}
                onPress={() => {
                  setAvtiveBtnAll(!activeBtnAll);
                  setAvtiveBtnReceive(!activeBtnReceive);
                  // setAvtiveBtnSent(!activeBtnSent);
                }}>
                <Text style={styles.choiceMenuText}>Sent</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* list  */}
          <View style={{margin: 20}}>
            <View style={{display: 'flex'}}>
              {remove === false && (
                <Swipeable renderLeftActions={renderLeftActions}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ContactDetails')}>
                    <View
                      style={styles.shadow}
                      shadowOffset={{height: 2, width: 0}}
                      shadowColor="#000"
                      shadowOpacity={0.25}
                      shadowRadius={3.84}
                      elevation={5}>
                      <View style={styles.avatarBg}>
                        <Image
                          source={require('../../assets/contact/avatar.png')}
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#f2f2f2',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}></Image>
                      </View>

                      <View
                        style={{
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          paddingLeft: 10,
                        }}>
                        <Text style={{fontFamily: 'Poppins-Regular'}}>
                          James wink
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            color: '#9E9E9E',
                          }}>
                          Aqua system LLC
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Swipeable>
              )}
              <TouchableOpacity>
                <View
                  style={styles.shadow}
                  shadowOffset={{height: 2, width: 0}}
                  shadowColor="#000"
                  shadowOpacity={0.25}
                  shadowRadius={3.84}
                  elevation={5}>
                  <View style={styles.avatarBg}>
                    <Image
                      source={require('../../assets/contact/avatar.png')}
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f2f2f2',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      paddingLeft: 10,
                    }}>
                    <Text style={{fontFamily: 'Poppins-Regular'}}>
                      James wink
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#9E9E9E',
                      }}>
                      Aqua system LLC
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#676767',
                      padding: 10,
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      borderRadius: 100,
                      marginLeft: '5%',
                    }}>
                    <Image
                      source={require('../../assets/contact/pen.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#E61D1D',
                      padding: 10,
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      borderRadius: 100,
                      marginLeft: '4%',
                    }}>
                    <Image
                      source={require('../../assets/contact/bin.png')}
                      resizeMode="contain"
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    padding: 20,
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 20,
    // color: "white",
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5,
    alignSelf: 'center',
    // borderBottomColor: 'white',
    // paddingRight: 40,
  },
  header_text: {
    // flex: 1,
    flexDirection: 'column',
    // paddingLeft: 20,
    marginLeft: 5,
  },
  text_metag: {
    fontFamily: 'Poppins-Regular',
    fontSize: 34,
    color: 'white',
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 10,
    marginTop: -3,
    // backgroundColor: 'red',
    padding: 0,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
    alignSelf: 'center',
  },
  completeProfileView: {
    borderWidth: 1,
    borderBottomColor: 'white',
    alignSelf: 'center',
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    paddingBottom: 10,
    // backgroundColor: 'black',
    borderWidth: 3,
    borderBottomColor: 'white',
    // alignContent:"center",
    textAlign: 'center',

    width: 230,
  },
  connectedByProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    paddingBottom: 10,
    backgroundColor: 'black',
    borderWidth: 2,
    // borderBottomColor: 'white',
    // // alignContent:"center",
    // textAlign:"center",
    // width:150,

    // width: "auto",
  },
  header_parent: {
    paddingTop: '10%',
    backgroundColor: '#000000',
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avtarImage: {
    height: 100,
    width: 100,
    flexDirection: 'column',
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    // alignContent: "center",
    // marginTop: "right",
    // marginBottom: "right",
  },
  avtar_bg: {
    display: 'flex',
    backgroundColor: 'black',
    height: 240,
    width: 200,
    justifyContent: 'center',
    borderRadius: 20,
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
  },
  camera_img: {
    width: 20,
    height: 20,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    // padding: 20,
    // marginTop: 40,
    // marginRight: 10,
    // borderRadius: 20,
  },
  camera_bg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 50,
    marginRight: 5,
    marginBottom: 10,
    // width: "auto",
    // borderRadius: 20,
    // backgroundColor: "white",
  },
  white_bg: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    // padding: 10,
    justifyContent: 'flex-end',
  },
  backgroundIcon: {
    width: 70,
    // backgroundIcon:"auto",
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    //   margin:"auto",
    alignItems: 'center',
  },
  backgroundIcon2: {
    width: 70,
    // backgroundIcon:"auto",
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    // marginRight: 15,
    //   margin:"auto",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
  },
  iconFlex: {
    display: 'flex',
    //   justifyContent:"column"
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    justifyContent: 'center',
    // width:500
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  infoBox: {
    width: 'auto',
    // marginLeft: 20,
    // marginTop: 20,
    margin: 20,
    // marign: 30,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  eachInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    // marign: 10,
  },
  productTitle: {
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
  },
  productsText: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
  },
  viewAll: {
    textDecorationLine: 'underline',
  },
  buyBtnBg: {
    backgroundColor: '#40A41D',
    width: 'auto',
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // alignSelf: 'flex-end',
  },
  productView: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
  },
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoPadding: {
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  choiceMenuText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    padding: 5,
  },
  choiceMenuActive: {
    width: '30%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  choiceMenu: {
    width: '30%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  avatarBg: {
    backgroundColor: '#f2f2f2',
    width: 70,
    height: 70,
    // padding: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    // selfAlign: 'center',
    display: 'flex',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: 100,
  },
  shadow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 1,
    backgroundColor: '#fff',
    padding: 10,
    // borderWidth: 1,
  },
});
