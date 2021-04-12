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
// import { useFonts } from '@use-expo/font'
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
// import AppLoading from 'expo-app-loading'
import bg from '../../assets/Logo/bg.png';
import Logo from '../../assets/Logo/logo.svg';

function ForgotPassword(props) {
  const [email, setEmail] = useState('');
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
            {/* <Image
            source={require('../../assets/logo.jpg')}
            style={{width: 50, height: 'auto'}}
          /> */}
            <Logo width={100} height={100} />
            <View style={styles.header}>
              <Text style={styles.text_metag}>meTAG</Text>
              <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
            </View>
          </View>
          <View style={styles.background}>
            <Text style={styles.forgot}>Forgot</Text>
            <Text style={styles.password}>Password</Text>

            {/* <TextInput
            style={styles.inputEmail}
            onChangeText={text => setEmail(text)}
            value={email}
          /> */}
            <View style={styles.inputTextBg}>
              <Image
                source={require('../../assets/signup/email.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.inputEmail}
                placeholder="Email/Mobile number"
                placeholderTextColor="white"
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
            {/* <View style={styles.signin_btn}>
            <Button title="Sign in" color="white" />
          </View> */}
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: 'auto',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={styles.signin_btn}
                onPress={() => props.navigation.navigate('VerifyOTP')}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                  }}>
                  Send now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={styles.footer}>
              <Text style={styles.footer_bold_text}>Back to Login</Text>
            </View>
          </TouchableOpacity>
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
    // paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
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
  },
  forgot: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
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
  signin_btn: {
    // paddingTop: 20,
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
    fontSize: 28,
    paddingBottom: 20,
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
  inputEmail: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 41,
    fontSize: 16,
    color: 'white',

    // alignSelf: 'stretch',
    // flex: 1,
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

export default ForgotPassword;