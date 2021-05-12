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
  Modal,
} from 'react-native';
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg';
import wifi from '../../assets/mobile-phone-with-wifi.png';
import qrCode from '../../assets/qr-code.png';
import exampleImg from '../../assets/splash.png';
import userIcon from '../../assets/user.svg';
import suitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/avatar-home.svg';
import contact from '../../assets/contact.svg';
import list from '../../assets/list.svg';
import home from '../../assets/home-run.svg';
// import more from '../../assets/myProfile/more.svg'
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png';
import instagram from '../../assets/instagram.png';
import more from '../../assets/myOrders/more.png';
import More from '../../assets/myProfile/more.svg';

import Menu from '../../src/components/Menu';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useSelector, useDispatch} from 'react-redux';

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function MyProfile(props) {
  const dispatch = useDispatch();
  const {token, profile, link, flag} = useSelector(state => state);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [show, setShow] = useState(false);

  console.log(flag);

  const apiToken =
    flag == 'true' ? profile.data[0].api_token : profile.api_token;
  // useEffect(() => {
  //   ;(async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!')
  //       }
  //     }
  //   })()
  // }, [])

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   })

  //   console.log(result)

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri)
  //   }
  // }
  // const logout = async () => {
  // axios({
  //   method: 'POST',
  //   url: 'http://testyourapp.online/metag/api/logout',
  //   headers: {
  //     Authorization: 'Bearer ' + profile.api_token,
  //   },
  // })
  //   .then(response => {
  //     if (response.data.status === 200) {
  //       // setNext(true);
  //       console.log('success', response.data);
  //       removeValue();

  //       // removeData();
  //     } else {
  //       console.log('Failed', response.data);
  //     }
  //   })
  //   .catch(error => console.log('logout data', error));
  // try {
  //   await GoogleSignin.revokeAccess();
  //   await GoogleSignin.signOut();
  //   props.navigation.navigate('Signup');
  //   // this.setState({user: null}); // Remember to remove the user from your app's state as well
  // } catch (error) {
  //   console.error(error);
  // }
  // };
  // dispatch(getSocialFlag(false));
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      await AsyncStorage.setItem('@flag_key', 'false');
      // await AsyncStorage.removeItem('@flag_Key')
      await dispatch(getProfile({}));
      await dispatch(getSocialFlag(false));
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      props.navigation.navigate('Login');
      // props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };
  const logout = () => {
    axios({
      method: 'POST',
      url: 'http://testyourapp.online/metag/api/logout',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);
          console.log('success', response.data);
          removeValue();
          // removeData();
        } else {
          console.log('Failed', response.data);
        }
      })
      .catch(error => console.log('logout data', error));
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

                {/* here */}
                <View style={styles.headerBackground}>
                  {/* <Image
                  source={require('../../assets/logo.jpg')}
                  style={{width: 50, height: 'auto'}}
                /> */}
                  <Logo width={54} height={54} />
                  <View style={styles.header_text}>
                    <Text style={styles.text_metag}>meTAG</Text>
                    <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                  </View>
                </View>
                {/* <Text style={styles.next}>  </Text> */}
                {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
                <View
                  style={{
                    alignSelf: 'center',
                    // marginLeft: '30%',
                    position: 'relative',
                    left: 60,
                  }}>
                  {/* <Image source={more}></Image> */}
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
              </View>
              {show && (
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: 10,
                    marginLeft: 'auto',
                    marginRight: 22,
                    marginTop: -20,
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
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        borderBottomColor: '#E5E5E5',
                        borderBottomWidth: 1,
                        paddingBottom: '2%',
                        fontFamily: 'Poppins-Reguler',
                      }}
                      onPress={() =>
                        props.navigation.navigate('ChangePassword')
                      }>
                      Settings
                    </Text>
                    <Text
                      onPress={() => {
                        logout();
                      }}
                      style={{
                        fontSize: 16,
                        paddingTop: '2%',
                        fontFamily: 'Poppins-Reguler',
                      }}>
                      Logout
                    </Text>
                  </View>
                </View>
              )}
              <Text style={styles.completeProfile}>My Orders</Text>
            </View>
          </View>
          {/* list  */}
          <View style={{padding: 8}}>
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => props.navigation.navigate('OrderDetails')}>
              <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.orderTitleFont}>
                    Order No 84766132132{' '}
                  </Text>
                  <Text style={styles.orderTitleFont}>$50.00</Text>
                </View>
                <Text style={{fontFamily: 'Poppins-Reguler'}}>
                  09:13 PM 10 Jun 2019
                </Text>
              </View>
              <View style={styles.productListView}>
                <View style={styles.productView}></View>
                <View
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
                    Successful
                  </Text>
                  <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                    Lorem Ipsum is simply dummy {`\n`}text of the printing and
                    type
                    {'\n'}setting industry.
                  </Text>
                </View>
                <View
                  style={{
                    width: 'auto',
                    marginLeft: 'auto',
                    alignSelf: 'flex-end',
                  }}>
                  <TouchableOpacity style={styles.buyBtnBg}>
                    <Text style={{color: 'white'}}>Repeat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => props.navigation.navigate('OrderDetails')}>
              <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.orderTitleFont}>
                    Order No 84766132132{' '}
                  </Text>
                  <Text style={styles.orderTitleFont}>$50.00</Text>
                </View>
                <Text style={{fontFamily: 'Poppins-Reguler'}}>
                  09:13 PM 10 Jun 2019
                </Text>
              </View>
              <View style={styles.productListView}>
                <View style={styles.productView}></View>
                <View
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
                    Successful
                  </Text>
                  <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                    Lorem Ipsum is simply dummy {`\n`}text of the printing and
                    type
                    {'\n'}setting industry.
                  </Text>
                </View>
                <View
                  style={{
                    width: 'auto',
                    marginLeft: 'auto',
                    alignSelf: 'flex-end',
                  }}>
                  <TouchableOpacity style={styles.buyBtnBg}>
                    <Text style={{color: 'white'}}>Repeat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* <Menu /> */}
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // justifyContent: 'space-around',
    justifyContent: 'center',
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
    paddingBottom: 20,
    alignSelf: 'center',
    // borderBottomColor: 'white',
    // paddingRight: 40,
  },
  header_text: {
    // flex: 1,
    flexDirection: 'column',
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-Reguler',
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
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
    paddingBottom: 10,
    backgroundColor: 'black',
    // alignContent:"center",
    textAlign: 'center',
    width: 200,

    // width: "auto",
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
    // marginTop: 'auto',
    // alignItems: 'flex-end',
  },
  productView: {
    width: 40,
    height: 'auto',
    backgroundColor: '#b8b8b8',
    // backgroundColor: 'red',
    color: 'pink',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 5,
  },
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
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
  choiceMenu: {
    width: 90,
    height: 'auto',
    backgroundColor: '#FFFFFF',
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
  orderTitleFont: {
    fontFamily: 'Poppins-Bold',
  },
  shadow: {
    borderRadius: 1,
    shadowColor: 'black',
    elevation: 4,
    padding: 4,
    margin: 4,
  },
});
