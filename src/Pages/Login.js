import React, {useState} from 'react';
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
import {getToken, getAuthToken, getProfile} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [error, setError] = useState('');

  // const [tokenback, setTokenBack] = useState('');

  const dispatch = useDispatch();
  const {token, profile} = useSelector(state => state);

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

  const upload = data => {
    // try {
    axios
      .post('http://testyourapp.online/metag/api/login', {
        email: data.email,
        password: data.password,
      })
      .then(res => {
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
          props.navigation.navigate('CreateProfile');
        }
      });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };

  const submit = () => {
    // getProfileDetail();
    const data = {};

    const errorTemplate = {};
    if (email === '') {
      errorTemplate.email = "email can't be empty";
    }

    if (password === '') {
      errorTemplate.password = "password can't be empty";
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
    }
  };
  if (!isLoaded) {
    return null;
  } else {
    // const color = modalVisible ? 'rgba(255, 255, 255, 10)' : '';
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {console.log(profile)}
        {}
        {console.log('prinitng profile', profile)}
        <Modal
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
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
              {serverError}
            </Text>
          </View>
        </Modal>
        <View style={styles.container}>
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
                style={styles.inputEmail}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
            {error.email && <Text style={{color: 'white'}}>{error.email}</Text>}
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
                // keyboardType="numeric"
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={text => setPassword(text)}
                value={password}
              />
            </View>
            {error.password && (
              <Text style={{color: 'white'}}>{error.password}</Text>
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

            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}
              style={styles.key_text_parent}>
              <Image
                source={require('../../assets/Login/key.png')}
                style={styles.key_img}
                resizeMode="contain"></Image>
              <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
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
              }}>
              <Image
                source={require('../../assets/Login/instagram.png')}
                style={styles.img_icon}></Image>
              <Image
                source={require('../../assets/Login/linkedin.png')}
                style={styles.img_icon}></Image>
              <Image
                source={require('../../assets/Login/google.png')}
                style={styles.img_icon}></Image>
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
    paddingTop: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'orange',
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
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 43,
    // color: 'white',
    fontSize: 16,
    color: 'white',
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
    paddingTop: 60,
    // flex: 1,
  },
  forgotpasword_text: {
    color: 'white',
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

    // paddingBottom: 20,
    // borderBottomColor: "#c2c2a3",
    // borderBottomWidth: 1,
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
  },
  inputTextBg: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderWidth: 1,
  },
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
});
