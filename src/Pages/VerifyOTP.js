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
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getVerifyKey, getId} from '../redux/reducer';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
import cancel from '../../assets/CreateProfile/cancel.png';

import url from '../BaseURl/baseurl.json';
const initialTimerValue = 30;
function VerifyOTP(props) {
  const [otp, setOtp] = useState('');
  const [isLoaded, setLoaded] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(initialTimerValue);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [disableResend, setDisableResend] = useState(true);
  const [emailOTP, setEmailOTP] = useState(props.route.params.email);
  const dispatch = useDispatch();
  useEffect(() => {
    timer <= 1 ? setDisableSubmit(true) : setDisableSubmit(false);
    timer <= 1 ? setDisableResend(false) : setDisableResend(true);
    const interval = setInterval(() => {
      timer > 0 && setTimer(timer - 1);
      console.log(timer);
    }, 1000);

    return () => clearInterval(interval);
  });

  const ResendOTP = () => {
    axios.post(`${url.baseurl}forgot-password`, {
      email: emailOTP,
    });

    console.log('RESEND OTP', emailOTP);

    // .then(res => {
    //   // console.log(res.data);
    //   if (res.data.errors) {
    //     // setDisable(false);
    //     // console.log('errr', res.data.errors.error);
    //     // setServerError(res.data.errors.error);
    //     // let e = [];
    //     // if (res.data.errors.email) {
    //     //   e.push(res.data.errors.email);
    //     // }
    //     // console.log(modalVisible);
    //     // setModalVisible(true);
    //     // console.log(modalVisible);
    //     // console.log(e);
    //     //setServerError(e);
    //   } else {
    //     // setTokenBack(res.data.data.token);
    //     setDisable(true);
    //     props.navigation.navigate('VerifyOTP', {
    //       email: data.email,
    //     });
    //   }
    // }

    // );
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };
  const {verifyKey, id} = useSelector(state => state);

  const setVerifyKey = (key, id) => {
    dispatch(getVerifyKey(key));
    dispatch(getId(id));
    // console.log('after submit',verifyKey, id);
  };

  const upload = data => {
    // try {
    axios
      .post(`${url.baseurl}verify-otp`, {
        otp: data.otp,
      })
      .then(res => {
        if (res.data.errors) {
          console.log('errr', res.data.errors);
          let e = [];
          if (res.data.errors.error) {
            e.push(res.data.errors.error);
          }

          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          setServerError(e);
        } else {
          console.log('data', res.data);
          setVerifyKey(res.data.data.verify_key, res.data.data.id);
          props.navigation.navigate('ResetPassword');
        }
      });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };

  const submit = () => {
    const data = {};

    const errorTemplate = {};
    if (otp === '') {
      errorTemplate.otp = "OTP can't be empty.";
    }

    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.otp = otp), upload(data);
    }
  };
  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {/* {console.log('verigyOTPLog', verifyKey, id)} */}
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
                backgroundColor: '#eeeeee',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
                width: '80%',
                height: '10%',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  // backgroundColor: 'red',
                  width: '17%',
                  height: '17%',
                  marginLeft: 'auto',
                  // marginRight: '5%',
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
                  color: 'red',
                  fontSize: 17,
                }}>
                {serverError}
              </Text>
            </View>
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
            <Text style={styles.forgot}>Verify OTP</Text>
            <Text style={styles.password}>Will be expired in</Text>
            <Text style={styles.password}>{timer}</Text>

            {/* <TextInput
            style={styles.inputEmail}
            onChangeText={text => setEmail(text)}
            value={email}
          /> */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomColor: 'white',
                borderWidth: 1,
                paddingTop: 40,
                marginBottom: 8,

                // justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/signup/lock.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.inputEmail}
                placeholder="Enter OTP"
                placeholderTextColor="white"
                onChangeText={text => setOtp(text)}
                value={otp}
              />
            </View>
            {error.otp && <Text style={{color: 'red'}}>{error.otp}</Text>}
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                // width: 'auto',
                flexDirection: 'row',
                marginBottom: 30,
                marginTop: 30,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                disabled={disableResend}
                onPress={() => {
                  setTimer(initialTimerValue);
                  ResendOTP();
                }}>
                <Text
                  style={
                    disableResend === false
                      ? {
                          color: 'white',
                          alignContent: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 16,
                        }
                      : {
                          color: 'grey',
                          alignContent: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 16,
                        }
                  }>
                  Resend OTP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={disableSubmit}
                style={
                  disableSubmit === false
                    ? styles.signin_btn
                    : {...styles.signin_btn, backgroundColor: 'grey'}
                }
                // onPress={() => props.navigation.navigate('ResetPassword')}
                onPress={() => submit()}>
                <Text style={{color: 'black', fontSize: 16}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={styles.footer}>
              <Text
                onPress={() => props.navigation.navigate('Login')}
                style={styles.footer_bold_text}>
                Back to Login
              </Text>
            </View>
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
    // backgroundColor: 'white',
    padding: 16,
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
    padding: 30,
    height: 'auto',
    marginTop: 40,
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    display: 'flex',
    flexDirection: 'column',
    // paddingTop: '10%',
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '10%',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    padding: 30,
  },
  forgot: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 30,
    // paddingBottom: 20,
  },
  text_metag: {
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
    fontSize: 18,
    color: 'white',
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
    color: 'white',
  },
  icon_parent: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  img_icon: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    // paddingTop: 60,
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
    marginTop: 'auto',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
    marginTop: 'auto',
    paddingTop: 170,
    fontSize: 18,
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
    // paddingBottom: 20,
  },
  btn: {
    color: '#000000',
  },
  signin_btn: {
    // paddingTop: 20,
    marginTop: 20,
    // alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    width: 100,
  },
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
  // footer_bg: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // footer_text: {
  //   fontFamily: "Poppins_400Regular",
  //   color: "black",
  // },
});

export default VerifyOTP;
