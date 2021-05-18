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
  ScrollView,
  ImageBackground,
  Modal,
  Platform,
  Alert,
} from 'react-native';
import {
  getToken,
  getAuthToken,
  getProfile,
  getLink,
  getSocialFlag,
  getRemoveProfile,
} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import cancel from '../../assets/CreateProfile/cancel.png';
import axios from 'axios';
import {set} from 'react-native-reanimated';
import Loader from '../components/Loader';
import close from '../../assets/close.png';
import loginFail from '../../assets/loginFail.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import LinkedInModal from 'react-native-linkedin';
//import LinkedInModal from 'react-native-linkedin';

// import OAuthManager from 'react-native-social-login';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

console.log(Platform.OS);

export default function Signup(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [bName, setBName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoaded, setLoaded] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  // const [userInfo, setUserInfo] = useState();
  // const [manager,setManager] = useState(manager)

  const [error, setError] = useState('');
  // // const [data, setData] = useState({});
  // const show = () => setModalVisible(true);

  // useEffect(() => {}, [modalVisible]);

  const dispatch = useDispatch();
  const {token, flag, profile, removeProfile} = useSelector(state => state);
  // const manage = () => {};
  // console.log('printing flag', flag);
  // console.log('remove Profile', removeProfile);
  // console.log('profile', profile);
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {}
  };

  const storeFlag = async value => {
    try {
      await AsyncStorage.setItem('@flag_Key', value);
    } catch (e) {}
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     const flag = await AsyncStorage.getItem('@flag_Key');
  //     const parseValue = JSON.parse(value);
  //     if (flag) {
  //       console.log('flag in signup page');
  //       await dispatch(getSocialFlag(flag));
  //     }
  //     if (parseValue) {
  //       await dispatch(getProfile(parseValue));
  //       props.navigation.navigate('Home');
  //       console.log('parseValue', parseValue);
  //     } else {
  //       console.log('does not exist');
  //     }
  //     console.log(parseValue);
  //   } catch (e) {
  //     console.log('e', e);
  //   }
  // };

  // const isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   // if(isSigned)
  //   console.log('check', isSignedIn);
  // };
  // isSignedIn();

  // if (removeProfile) {
  //   dispatch(getProfile(null));
  //   dispatch(removeProfile(false));
  // }
  useEffect(() => {
    if (removeProfile == true) {
      dispatch(getProfile(null));
      dispatch(getRemoveProfile(false));
    }
    // getData();
    GoogleSignin.configure({
      webClientId:
        '981119860372-h2i63fmjo5q885p8er2r9uv0lpv3tq78.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    // isSignedIn();
  }, []);

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
      url: 'http://testyourapp.online/metag/api/social-login',
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
          dispatch(getSocialFlag('true'));
          storeData(response.data);
          storeFlag('true');

          console.log('res print', response);
          props.navigation.navigate('Home');
        } else {
          console.log('printing Response', response);
        }
      })
      .catch(error => {
        console.log('error log...', error);
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
  const list = () => {
    return serverError.map(e => {
      return (
        <Text
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // marginTop: 'auto',
            // marginBottom: 'auto',
            color: '#808080',
            fontSize: 16,
            textAlign: 'center',
          }}
          key={e}>
          {e}
          {'\n'}
        </Text>
      );
    });
  };

  const upload = data => {
    // try {
    axios
      .post('https://testyourapp.online/metag/api/register', {
        name: data.name,
        email: data.email,
        mobile: data.number,
        business_name: data.Bname,
        password: data.password,
      })
      .then(res => {
        setShowLoader(false);
        if (res.data.errors) {
          console.log('errr', res.data.errors);
          let e = [];

          if (res.data.errors.name) {
            e.push(res.data.errors.name);
          }
          if (res.data.errors.email) {
            e.push(res.data.errors.email);
          }
          if (res.data.errors.mobile) {
            e.push(res.data.errors.mobile);
          }
          if (res.data.errors.business_name) {
            e.push(res.data.errors.business_name);
          }
          if (res.data.errors.password) {
            e.push(res.data.errors.password);
          }
          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          setServerError(e);
        } else {
          storeFlag('false');
          console.log('data', res.data.data);
          props.navigation.navigate('Login');
        }
      })
      .catch(e => {
        console.log(e);
      });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };

  const submit = () => {
    const data = {};

    const errorTemplate = {};
    if (fullName === '') {
      errorTemplate.name = "Name can't be empty";
    }
    if (email === '') {
      errorTemplate.email = "Email can't be empty";
    }
    if (number === '') {
      errorTemplate.number = "Number can't be empty";
    }
    if (bName === '') {
      errorTemplate.bName = "Business name can't be empty";
    }
    if (password === '') {
      errorTemplate.password = "Password can't be empty";
    }
    if (confirmPassword === '') {
      errorTemplate.confirmPassword = "Password can't be empty";
    }
    if (password !== confirmPassword) {
      errorTemplate.passwordMatch = 'Password and confirmPassword should match';
    }
    if (number.length !== 12) {
      errorTemplate.numberLength = 'Mobile Number should be  at 12 digit';
    }
    if (password.length < 8) {
      errorTemplate.passwordLength =
        'Password should be at least 8 characters long';
    }
    if (/[a-z]/.test(password) === false) {
      errorTemplate.lowerCase = 'Must contain lowercase';
    }
    if (/[A-Z]/.test(password) === false) {
      errorTemplate.upperCase = 'Must contain uppercase';
    }
    if (/\d/g.test(password) === false) {
      errorTemplate.passwordNumber = 'Must conain number';
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) === false) {
      errorTemplate.specialSymbol = 'Must contain special symbol';
    }

    // if () {
    //   console.log(errorTemplate);
    // }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.name = fullName),
        (data.email = email),
        (data.number = number),
        (data.Bname = bName),
        (data.password = password),
        (data.confirmPassword = confirmPassword),
        setShowLoader(true);
      upload(data);
    }
  };

  // const

  if (!isLoaded) {
    return null;
  } else {
    // const dispatch = useDispatch();
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {/* {console.log(useSelector(state => state.token))} */}
        {/* {dispatch(getAuthToken('thisIsToken'))}
        {console.log(useSelector(state => state.token))} */}
        {/* <Button >Click</Button> */}

        <ScrollView>
          {/* <Modal
            // style={{
            //   backgroundColor: 'yellow',
            //   // margin: '30%',
            //   // width: '60%',
            //   // height: '60%',
            //   // margin: '40%',
            // }}
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                backgroundColor: '#eeeeee',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
                width: '80%',
                height: '80%',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  // backgroundColor: 'red',
                  width: '5%',
                  height: '5%',
                  marginLeft: 'auto',
                  marginRight: '5%',
                  marginTop: '3%',
                }}>
                <Image
                  source={cancel}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}></Image>
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                {list()}
              </View>
            </View>
          </Modal> */}
          <Modal
            // style={{
            //   backgroundColor: 'yellow',
            //   // margin: '30%',
            //   // width: '60%',
            //   // height: '60%',
            //   // margin: '40%',
            // }}
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
                {/* <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    color: 'red',
                  }}>
                  {list()}
                </Text> */}
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
                  {list()}
                </View>
              </View>
            </View>
          </Modal>
          {/* {console.log({modalVisible})} */}
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
                {/* <Text style={styles.text_metag}>
              meTag
              <Text style={styles.text_tagline}>{'\n'}I M ME,WHO ARE YOU</Text>
            </Text> */}
              </View>
            </View>

            <View style={styles.background}>
              <Text style={styles.signin}>Sign Up</Text>
              {/* <Image source={require('../../assets/signup/user.png')}></Image> */}

              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/user.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Full Name"
                  placeholderTextColor="white"
                  onChangeText={text => setFullName(text.trim())}
                  value={fullName}
                  underlineColorAndroid="transparent"
                />
              </View>
              {error.name && <Text style={{color: 'red'}}>{error.name}</Text>}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/email.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Email"
                  placeholderTextColor="white"
                  onChangeText={text => setEmail(text.trim())}
                  value={email}
                />
              </View>
              <Text style={{color: 'white'}}>Hint: example@domain.com</Text>
              {error.email && <Text style={{color: 'red'}}>{error.email}</Text>}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/iphone.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  keyboardType="numeric"
                  placeholder="Mobile Number"
                  onChangeText={text => setNumber(text.trim())}
                  value={number}
                  placeholderTextColor="white"
                />
              </View>
              {error.number && (
                <Text style={{color: 'red'}}>{error.number}</Text>
              )}
              {error.numberLength && (
                <Text style={{color: 'red'}}>{error.numberLength}</Text>
              )}

              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/work.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Business Name"
                  placeholderTextColor="white"
                  onChangeText={text => setBName(text.trim())}
                  value={bName}
                />
              </View>
              {error.bName && <Text style={{color: 'red'}}>{error.bName}</Text>}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottomColor: 'white',
                  borderWidth: 1,
                  // justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={text => setPassword(text.trim())}
                  value={password}
                />
              </View>
              {error.password && (
                <Text style={{color: 'red'}}>{error.password}</Text>
              )}
              {error.passwordLength && (
                <Text style={{color: 'red'}}>{error.passwordLength}</Text>
              )}
              {error.lowerCase && (
                <Text style={{color: 'red'}}>{error.lowerCase}</Text>
              )}
              {error.upperCase && (
                <Text style={{color: 'red'}}>{error.upperCase}</Text>
              )}
              {error.passwordNumber && (
                <Text style={{color: 'red'}}>{error.passwordNumber}</Text>
              )}
              {error.specialSymbol && (
                <Text style={{color: 'red'}}>{error.specialSymbol}</Text>
              )}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputEmail}
                  placeholder="Confirm Password"
                  placeholderTextColor="white"
                  onChangeText={text => setConfirmPassword(text.trim())}
                  value={confirmPassword}
                />
              </View>
              {error.confirmPassword && (
                <Text style={{color: 'red'}}>{error.confirmPassword}</Text>
              )}
              {error.passwordMatch && (
                <Text style={{color: 'red'}}>{error.passwordMatch}</Text>
              )}
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: 'auto',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => submit()}
                  // onPress={() => {
                  //   dispatch(getAuthToken('AuthToken'));
                  //   console.log('printing token', token);
                  // }}
                  // onPress={() => props.navigation.navigate('CreateProfile')}
                  style={styles.signin_btn}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                    }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={styles.key_text_parent}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.key_img}></Image>
            <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
          </TouchableOpacity> */}
            </View>
            {/* <LinkedInModal
              // ref={this.linkedRef}
              clientID="77c766srkw2c1f"
              clientSecret="Kk0WLaQLszEWtH86"
              redirectUri="http://localhost:3000/return"
              onSuccess={token => console.log(token)}
            /> */}
            <View style={styles.icon_parent}>
              <Text style={styles.text}>Sign up with:</Text>
              <View
                style={{
                  width: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/Login/instagram.png')}
                  style={styles.img_icon}></Image>
                <Image
                  source={require('../../assets/Login/linkedin.png')}
                  style={styles.img_icon}></Image>
                <TouchableOpacity onPress={() => signIn()}>
                  <Image
                    source={require('../../assets/Login/google.png')}
                    style={styles.img_icon}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footer_normal_text}>
                Alredy have an account?
              </Text>
              <Text
                onPress={() => props.navigation.navigate('Login')}
                style={styles.footer_bold_text}>
                SIGN IN
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* {manage()} */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 16,
    // paddingBottom: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    // flex: 2,
    backgroundColor: 'black',
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 0,
    padding: 25,
    height: 'auto',
    // width: 300,
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
    flexWrap: 'wrap',
    paddingTop: '10%',
    // paddingBottom: 20,
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
    // paddingBottom: 10,
  },
  text_metag: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 45,
    // backgroundColor: 'pink',
    // height: 40,
    // marginTop: -8,
    // alignContect: 'top',
    // textAlign: 'top',
    // padding: 0,
    // x: 0,
    // y: 0,
    // letterSpacing: 3,
    // lineSpacing: 42,
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
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 41,
    fontSize: 16,
    color: 'white',

    // alignSelf: 'stretch',
    // flex: 1,
  },
  signin_btn: {
    marginTop: 20,
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 50,
    width: 100,
  },
  key_text_parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  forgotpasword_text: {
    color: 'white',
  },
  key_img: {
    width: 20,
    height: 20,
    // color: "white",
  },
  icon_parent: {
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  img_icon: {
    width: 45,
    height: 46,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginLeft: 5,
    // alignSelf: 'center',
    // margin: 10,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    // backgroundColor: 'yellow',
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
  },
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
  inputTextBg: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderWidth: 1,
  },
});
