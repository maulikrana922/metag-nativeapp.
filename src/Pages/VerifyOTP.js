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
} from 'react-native';

import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';

function VerifyOTP(props) {
  const [email, setEmail] = useState('Email/Number');
  const [password, setPassword] = useState('');
  const [isLoaded, setLoaded] = useState(true);
  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
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
            <Text style={styles.password}>01:08</Text>

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
                onChangeText={text => setPassword(text)}
                value={password}
              />
            </View>
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
              <Text
                style={{
                  color: 'white',
                  alignContent: 'center',
                  // alignSelf: 'center',
                  // marginTop: 'auto',
                  // marginBottom: 'auto',
                  fontFamily: 'Poppins-Regular',
                }}>
                Resend OTP
              </Text>
              <TouchableOpacity
                style={styles.signin_btn}
                onPress={() => props.navigation.navigate('ResetPassword')}>
                <Text style={{color: 'black', fontSize: 14}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={styles.footer}>
              <Text style={styles.footer_bold_text}>Back to Login</Text>
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
  // inputEmail: {
  //   borderBottomColor: 'white',
  //   borderWidth: 1,
  //   height: 40,
  //   color: 'white',
  //   paddingTop: 20,
  // },
  inputEmail: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 43,
    // color: 'white',
    fontSize: 14,
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
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 15,
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 50,
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
