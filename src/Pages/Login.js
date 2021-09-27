import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Modal,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
// import { useFonts } from '@use-expo/font'
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import axios from 'axios';
import {
  Svg,
  Path,
  Defs,
  RadialGradient,
  Stop,
  Circle,
  LinearGradient,
} from 'react-native-svg';

import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import cancel from '../../assets/CreateProfile/cancel.png';
import {
  getToken,
  getAuthToken,
  getProfile,
  getSocialFlag,
  getRemoveProfile,
} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import close from '../../assets/close.png';
import loginFail from '../../assets/loginFail.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import InstagramLogin from 'react-native-instagram-login';
// import InstagramLogin from 'react-native-instagram-login';
// import CookieManager from '@react-native-community/cookies';
import url from '../BaseURl/baseurl.json';
import {SafeAreaView} from 'react-navigation';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [error, setError] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  // const [tokenback, setTokenBack] = useState('');

  const dispatch = useDispatch();
  const {token, profile, removeProfile} = useSelector(state => state);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {}
  };
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');

  //     if (value !== null) {
  //       const parseValue = JSON.parse(value);
  //       console.log('val...', parseValue);
  //     }
  //     if (value) {
  //       console.log('value', value);
  //     } else {
  //       console.log('does not exist');
  //     }
  //   } catch (e) {
  //     console.log('e', e);
  //   }
  //   // console.log('no value is printes');
  // };
  // getData();
  const storeFlag = async value => {
    try {
      await AsyncStorage.setItem('@flag_Key', value);
    } catch (e) {}
  };

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log('Done.');
  // };

  // const setTokenBack = val => {
  //   dispatch(getProfile(val));
  //   // console.log(token);
  // };

  // const getProfileDetail = newToken => {
  //   axios({
  //     method: 'get',
  //     url: 'http://testyourapp.online/metag/api/profile',
  //     headers: {
  //       Authorization: 'Bearer ' + newToken,
  //     },
  //   }).then(res => {
  //     if (res.data.status === 200) {
  //       console.log('200', res.data.data);
  //       console.log('printing res.data', res.data);
  //       dispatch(getProfile(res.data.data[0]));
  //       console.log('array data', res.data.data[0]);
  //     } else {
  //       console.log('false', 'error');
  //     }
  //   });
  // };
  // console.log(flag);
  const upload = data => {
    console.log('data>>>', data);
    let data2 = JSON.stringify({
      email: data.email,
      password: data.password,
    });
    let config = {
      method: 'post',
      url: 'https://testyourapp.online/metag-backend/api/login',
      headers: {
        'Content-Type': 'application/json',
        // Cookie:
        //   'XSRF-TOKEN=eyJpdiI6IjloUGFWU3VIZFN3QUJSZUV4alpGUlE9PSIsInZhbHVlIjoiVy8zZUJJaG90elpETk11cTJVWFY2eUI4aGV1aElzQjh3bExEa0wweFdSbnlBUzg2ZTFNMUY1OEx4a0hBOVhnK2FOa0U0ZHlhR2hNOEpSL0xpYlFnR1lDUm9KMVh0UXVvdGdJbFRSa3UrRlQzTkxaZVFObm9JSGhxMGNSRUdjcXUiLCJtYWMiOiI4YmJlNWY4NjZkZDMzNjIzMzQ1NmFjOTgxMzQ3MjJlZWUzZWM4ZDljN2ZlZjdhZmFlM2JiNzdiZGNkNmJhOWNlIn0%3D; laravel_session=eyJpdiI6ImFwOUlsVlQrSmYzQmJDdFcxbHM3YVE9PSIsInZhbHVlIjoiUHp3MVJING0zYnFoS1ZxQVMyYTBzNFgrSDdKQTU0OGNLcGhWM1cxY1luRFVCMVZLTi9ieVhsZ1RqQ25kTmVpMDZoUDQ2MFJNcFZSVDJjNXZwbjJwdHFVekpWMXBseVl0MUd6Y1cxVXNja1pFZ0NkRjdsRUIwZXAwVjcwUlYwK3oiLCJtYWMiOiI4Y2UwNDc1YWI4NGEwZjkwNTBlOTdhZjFkYjU1ZGYwOWM5YmExNmEzNjYzMjY3YzMwYmFlZmQ2MGUxODY5ODJkIn0%3D',
      },
      data: data2,
    };

    axios(config)
      .then(function (res) {
        console.log('>>>res', JSON.stringify(res.data));
        setShowLoader(false);
        if (res.data.status !== 200) {
          console.log('errr', res.data.errors);
          let e = [];
          if (res.data.errors.email) {
            e.push(res.data.errors.email);
          }

          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          setServerError(e);
        } else {
          // setTokenBack(res.data.data.token);
          // getProfileDetail(res.data.data.token);
          dispatch(getProfile(res.data.data));
          // dispatch(getProfile({...profile, name: 'hinalchanged'}));
          // console.log
          storeData(res.data.data);
          storeFlag('false');
          console.log('printing flag', res.data.data.flag);
          if (res.data.data.flag === 'true') {
            props.navigation.navigate('CreateProfile');
          } else {
            props.navigation.navigate('Home');
          }
        }

        //---
        //--
      })
      .catch(function (error) {
        console.log('err>>>>', error);
        setShowLoader(false);
      });
    // try {
    // axios
    //   .post(`${url.baseurl}login`, {
    //     email: data.email,
    //     password: data.password,
    //   })
    //   .then(res => {
    //     setShowLoader(false);
    //     if (res.data.status !== 200) {
    //       console.log('errr', res.data.errors);
    //       let e = [];
    //       if (res.data.errors.email) {
    //         e.push(res.data.errors.email);
    //       }

    //       console.log(modalVisible);
    //       setModalVisible(true);
    //       console.log(modalVisible);
    //       console.log(e);
    //       setServerError(e);
    //     } else {
    //       // setTokenBack(res.data.data.token);
    //       // getProfileDetail(res.data.data.token);
    //       dispatch(getProfile(res.data.data));
    //       // dispatch(getProfile({...profile, name: 'hinalchanged'}));
    //       // console.log
    //       storeData(res.data.data);
    //       storeFlag('false');
    //       console.log('printing flag', res.data.data.flag);
    //       if (res.data.data.flag === 'true') {
    //         props.navigation.navigate('CreateProfile');
    //       } else {
    //         props.navigation.navigate('Home');
    //       }
    //     }
    // });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };

  const submit = () => {
    // storeData('hiiiiiinal');
    // getData();
    // removeValue();

    // getProfileDetail();
    const data = {};

    const errorTemplate = {};
    if (email === '') {
      errorTemplate.email = "Email can't be empty";
    }

    if (password === '') {
      errorTemplate.password = "Password can't be empty";
    }

    // if () {
    //   console.log(errorTemplate);
    // }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.email = email), (data.password = password), upload(data);
      setShowLoader(true);
    }
  };

  const sendUserData = async userInfo => {
    // await console.log('setUserData33333', userInfo);
    // uri: imageResponse
    await console.log('userData', userInfo);
    let formData = new FormData();
    console.log(formData);
    await console.log('printing Id..', userInfo.user.id);
    // await formData.append('social_id', userInfo.user.id);
    await formData.append('name', userInfo.user.name);
    await formData.append('email', userInfo.user.email);
    await formData.append('social_account_token', userInfo.idToken);
    // await formData.append('avtar', userInfo.user.photo);
    await formData.append('social_flag', true);
    await formData.append('provider_id', userInfo.user.id);
    await formData.append('provider', 'Google');
    console.log('printing form data', formData);

    // props.navigation.navigate('Home');
    await axios({
      method: 'post',
      url: `${url.baseurl}social-login`,
      headers: {
        'content-type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(response => {
        if (response.data.status === 200) {
          // setShowLoader(false),
          console.log('printing response', response.data);
          dispatch(getProfile(response.data));
          dispatch(getSocialFlag(response.data.data[0].flag));
          storeData(response.data);
          storeFlag(response.data.data[0].flag);

          console.log('res print', response);
          props.navigation.navigate('Home');
        } else {
          console.log('printing Response', response);
          setShowLoader(false);
        }
        console.log(response);
        setShowLoader(false);
      })
      .catch(error => {
        console.log('error log...', error);
        setShowLoader(false);
      });
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // setUserInfo(userInfo);
      await sendUserData(userInfo);
      props.navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  useEffect(() => {
    if (removeProfile == true) {
      dispatch(getProfile(null));
      dispatch(getRemoveProfile(false));
    }
    GoogleSignin.configure({
      webClientId:
        '981119860372-h2i63fmjo5q885p8er2r9uv0lpv3tq78.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [profile]);

  if (!isLoaded) {
    return null;
  } else {
    // const color = modalVisible ? 'rgba(255, 255, 255, 10)' : '';
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
            {/* {console.log(profile)}
        {}
        {console.log('prinitng profile', profile)} */}
            <Modal
              statusBarTranslucent={true}
              transparent={true}
              visible={modalVisible}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
                }}>
                <View
                  style={{
                    // backgroundColor: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    width: '80%',
                    height: 'auto',
                  }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                      // backgroundColor: 'red',
                      width: '8%',
                      height: '8%',
                      marginLeft: 'auto',
                      // marginRight: '5%',
                      marginTop: '3%',
                    }}>
                    <Image
                      source={close}
                      resizeMode="contain"
                      style={{width: '100%', height: '100%'}}></Image>
                  </TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'white',
                      // marginTop: '5%',
                      padding: '5%',
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      display: 'flex',
                      justifyContent: 'space-evenly',
                    }}>
                    <Image
                      source={loginFail}
                      resizeMode="contain"
                      style={{
                        width: '50%',
                        height: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}></Image>
                    <Text
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        // marginTop: 'auto',
                        // marginBottom: 'auto',
                        color: '#000000',
                        fontSize: 17,
                      }}>
                      Oops! something went wrong.
                    </Text>
                    <Text
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        // marginTop: 'auto',
                        // marginBottom: 'auto',
                        color: '#808080',
                        fontSize: 16,
                        textAlign: 'center',
                      }}>
                      It seems you have typed an incorrect email or password.
                    </Text>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                      // onPress={() => props.navigation.navigate('CreateProfile')}
                      style={{
                        // marginTop: 20,
                        alignItems: 'center',
                        padding: 8,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 50,
                        width: '100%',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 16,
                        }}>
                        Got it!
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.container}>
              {showLoader && <Loader />}
              <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
              />
              <View style={styles.headerBackground}>
                <Logo width={100} height={100} />
                <View style={styles.header}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
              </View>
              <View style={styles.background}>
                <Text style={styles.signin}>Sign in</Text>
                {/* <Text>hii</Text> */}

                <View style={styles.inputTextBg}>
                  <Image
                    source={require('../../assets/signup/email.png')}
                    style={styles.icon}
                    resizeMode="contain"></Image>
                  <TextInput
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.inputEmail}
                    placeholder="Email"
                    placeholderTextColor="white"
                    onChangeText={text => setEmail(text)}
                    value={email}
                  />
                </View>
                {/* <Text style={{color: 'white'}}>Hint: example@domain.com</Text> */}
                {error.email && (
                  <Text style={{color: 'red'}}>{error.email}</Text>
                )}
                <View style={styles.inputTextBg}>
                  <Image
                    source={require('../../assets/signup/lock.png')}
                    style={styles.icon}
                    resizeMode="contain"></Image>
                  <TextInput
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.inputEmail}
                    secureTextEntry={true}
                    // keyboardType="numeric"
                    placeholder="Password"
                    placeholderTextColor="white"
                    onChangeText={text => setPassword(text)}
                    value={password}
                  />
                </View>
                {error.password && (
                  <Text style={{color: 'red'}}>{error.password}</Text>
                )}
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: 'auto',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      submit();
                      // props.navigation.navigate('CreateProfile');
                    }}
                    // onPress={() => props.navigation.navigate('CreateProfile')}
                    style={styles.signin_btn}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                      }}>
                      Sign in
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.key_text_parent}>
                  <Image
                    source={require('../../assets/Login/key.png')}
                    style={styles.key_img}
                    resizeMode="contain"></Image>
                  <Text
                    style={styles.forgotpasword_text}
                    onPress={() => props.navigation.navigate('ForgotPassword')}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.icon_parent}>
                <Text style={styles.text}>Sign up with:</Text>

                <View
                  style={{
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'yellow',
                  }}>
                  <TouchableOpacity
                  //  onPress={() => this.instagramLogin.show()}
                  >
                    <Image
                      source={require('../../assets/Login/instagram.png')}
                      style={styles.img_icon}></Image>
                  </TouchableOpacity>
                  <Image
                    source={require('../../assets/Login/linkedin.png')}
                    style={styles.img_icon}></Image>
                  <TouchableOpacity onPress={() => signIn()}>
                    <Image
                      source={require('../../assets/Login/google.png')}
                      style={styles.img_icon}></Image>
                  </TouchableOpacity>
                  {/* <InstagramLogin
                ref={ref => (this.instagramLogin = ref)}
                appId="948203199310677"
                appSecret="f1c766dbd42990d7ed9b8cc0d57ed24a"
                redirectUrl="https://localhost:3000/redirect"
                scopes={['user_profile', 'user_media']}
                onLoginSuccess={data => console.log(ImageData)}
                onLoginFailure={data => console.log(data)}
              /> */}
                </View>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footer_normal_text}>New User? </Text>
                <Text
                  onPress={() => props.navigation.navigate('Signup')}
                  style={styles.footer_bold_text}>
                  SIGN UP
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    padding: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    backgroundColor: 'black',
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 0,
    padding: 30,
    height: 'auto',
    marginTop: 40,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: -15,

    // paddingLeft: 20,
  },
  headerBackground: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: '5%',
    // borderWidth: 1,
    paddingLeft: 15,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    padding: 30,
    fontSize: 16,
    color: 'black',
  },
  signin: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
    // paddingBottom: 20,
  },
  text_metag: {
    // fontFamily: 'Poppins-ExtraBold',
    // fontSize: 40,
    // letterSpacing: 3,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 45,
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 12,
    marginTop: -15,
    // backgroundColor: 'red',
    padding: 0,
    color: 'black',
  },
  inputEmail: {
    // backgroundColor: 'red',
    width: '90%',
    fontSize: 20,
    color: 'white',
  },
  signin_btn: {
    marginTop: 20,
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    width: 100,
  },
  key_text_parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingTop: 60,
    // flex: 1,
  },
  forgotpasword_text: {
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'red',
  },
  key_img: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  icon_parent: {
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
    marginTop: 4,
  },
  img_icon: {
    width: 45,
    height: 46,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginLeft: 5,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 'auto',
    backgroundColor: 'pink',
  },
  footer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    // backgroundColor: 'yellow',

    // paddingBottom: 20,
    // borderBottomColor: "#c2c2a3",
    // borderBottomWidth: 1,
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
  },
  inputTextBg: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderWidth: 1,
    marginTop: 40,
    paddingBottom: 10,
  },
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
});
