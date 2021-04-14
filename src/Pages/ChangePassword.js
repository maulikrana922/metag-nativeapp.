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
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Svg, Path, Defs} from 'react-native-svg';
import Hotspot from '../../assets/Home/hotspot.svg';
import Tick from '../../assets/CreateProfile/tick.svg';
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg';
import applePay from '../../assets/orderDetails/apple_pay_1170221.png';
import wifi from '../../assets/mobile-phone-with-wifi.png';
import qrCode from '../../assets/qr-code.png';
import exampleImg from '../../assets/splash.png';
import userIcon from '../../assets/user.svg';
import suitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/avatar-home.svg';
import contact from '../../assets/contact.svg';
import list from '../../assets/list.svg';
import home from '../../assets/home-run.svg';
import bg from '../../assets/Logo/bg.png';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function CreateProfile(props) {
  const {token, profile} = useSelector(state => state);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [checked, setChecked] = useState(true);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorTemplate, SetErrorTemplate] = useState({});
  const [error, setError] = useState({});
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

  const upload = data => {
    // try {
    // axios
    //   .post('http://testyourapp.online/metag/api/change-password', {
    //     currentpassword: data.name,
    //     c_password: data.number,
    //     password: data.password,
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //   });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
    axios({
      method: 'post',
      url: 'http://testyourapp.online/metag/api/change-password',
      data: {
        currentpassword: data.oldPassword,
        c_password: data.newPassword,
        password: data.confirmPassword,
      },
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + profile.api_token,
      },
    })
      .then(response => {
        console.log('printing', response);
      })
      .catch(error => console.log(error));
  };

  const submit = () => {
    const data = {};
    if (oldPassword === '') {
      errorTemplate.oldPassword = "Old password can't be empty";
    }
    if (newPassword === '') {
      errorTemplate.newPassword = "New password cant't be empty";
    }
    if (confirmPassword === '') {
      errorTemplate.confirmPassword = "Confirm  password can't be empty";
    }
    if (newPassword !== confirmPassword) {
      errorTemplate.match = 'newPassword and confirm password should match';
    }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.oldPassword = oldPassword),
        (data.newPassword = newPassword),
        (data.confirmPassword = confirmPassword),
        upload(data);
    }
  };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View>
          <View style={styles.header_parent}>
            <View>
              <View style={styles.header}>
                {/* <View style={styles.arrowback}></View> */}
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={styles.arrowback}>
                  <Image
                    source={require('../../assets/CreateProfile/back.png')}></Image>
                </TouchableOpacity>
                <View style={styles.headerBackground}>
                  <Image
                    source={require('../../assets/logo.jpg')}
                    style={{width: 50, height: 'auto'}}
                  />
                  <View style={styles.header_text}>
                    <Text style={styles.text_metag}>meTAG</Text>
                    <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                  </View>
                </View>
                <Text style={styles.next}></Text>
              </View>
              <Text style={styles.completeProfile}>Change Password</Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: 'auto',
                  paddingLeft: 50,
                  paddingRight: 50,
                  // paddingBottom: 50,
                }}>
                <View>
                  <View
                    style={{
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      // padding: 15,
                    }}>
                    <Image
                      source={require('../../assets/signup/lock.png')}
                      style={styles.icon}
                      resizeMode="contain"></Image>
                    <TextInput
                      placeholder="Old Password"
                      value={oldPassword}
                      onChangeText={text => setOldPassword(text.trim())}
                      placeholderTextColor="white"
                      style={{
                        color: 'white',
                        marginLeft: 10,
                      }}></TextInput>
                  </View>
                  {error.oldPassword && (
                    <Text style={{color: 'white'}}>{error.oldPassword}</Text>
                  )}
                </View>
                <View>
                  <View
                    style={{
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      // padding: 15,
                    }}>
                    <Image
                      source={require('../../assets/signup/lock.png')}
                      style={styles.icon}
                      resizeMode="contain"></Image>
                    <TextInput
                      value={newPassword}
                      onChangeText={text => setNewPassword(text.trim())}
                      placeholder="New Password"
                      placeholderTextColor="white"
                      style={{
                        color: 'white',
                        marginLeft: 10,
                      }}></TextInput>
                  </View>
                  {error.newPassword && (
                    <Text style={{color: 'white'}}>{error.newPassword}</Text>
                  )}
                </View>
                <View>
                  <View
                    style={{
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      // padding: 15,
                    }}>
                    <Image
                      source={require('../../assets/signup/lock.png')}
                      style={styles.icon}
                      resizeMode="contain"></Image>
                    <TextInput
                      value={confirmPassword}
                      onChangeText={text => setConfirmPassword(text.trim())}
                      placeholderTextColor="white"
                      placeholder="Confirm New Password"
                      style={{
                        color: 'white',
                        marginLeft: 10,
                      }}></TextInput>
                  </View>
                  {error.confirmPassword && (
                    <Text style={{color: 'white'}}>
                      {error.confirmPassword}
                    </Text>
                  )}
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => submit()}
              style={{
                marginLeft: 'auto',
                backgroundColor: 'red',
                marginRight: 20,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: 'white',
              }}>
              <Text style={{padding: 10, color: 'black'}}>Save</Text>
            </TouchableOpacity>
          </View>

          {/* here */}
          <View
            style={{
              margin: 14,
              borderRadius: 1,
              shadowColor: 'black',
              elevation: 4,
              padding: 4,
              margin: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                padding: 8,
              }}>
              Manage Card
            </Text>
            <View
              style={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 39,
                    margin: 10,
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <Hotspot height={40} width={40} fill="black" />
                </View>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{color: 'white'}}>Product title</Text>
                  <Text style={{color: '#9FAA11'}}>Currently in use</Text>
                </View>
              </View>
              <TouchableOpacity
                // checkBoxColor="orange"
                // checkedCheckBoxColor="red"
                // uncheckedCheckBoxColor="yellow"
                style={{
                  borderRadius: 50,
                  width: 20,
                  height: 20,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  marginRight: 10,
                  // backgroundColor: 'black',
                  // backgroundColor: '#F5FCFF',
                  // checkedCheckBoxColor: 'pink',
                  // uncheckedCheckBoxColor: 'red',
                  // checkBoxColor: 'pink',

                  // color: 'black',
                  backgroundColor: 'white',
                }}
                onPress={() => setChecked(!checked)}
                isChecked={checked}
                // leftText={'CheckBox'}
              >
                <Tick
                  height={10}
                  width={10}
                  fill={checked ? 'black' : 'white'}
                  style={{
                    marginTop: 'auto',
                    marginRight: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                  }}
                />
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
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'space-around',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    alignSelf: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    marginLeft: 20,
    // backgroundColor: 'white',
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    alignSelf: 'center',
    // backgroundColor: 'pink',
    width: 200,
    // borderBottomColor: 'white',
    // paddingRight: 40,
  },
  header_text: {
    // flex: 1,
    display: 'flex',
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
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '700',
    paddingBottom: 20,
    backgroundColor: 'black',
    // borderWidth: 2,
    // borderBottomColor: 'white',
    // alignContent:"center",
    textAlign: 'center',
    width: 150,

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
    backgroundColor: '#000000',
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: '10%',
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
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
});
