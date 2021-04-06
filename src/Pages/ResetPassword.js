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

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
            <Text style={styles.forgot}>Reset</Text>
            <Text style={styles.password}>Password</Text>

            {/* <TextInput
            style={styles.inputEmail}
            onChangeText={text => setNewPassword(text)}
            value={newPassword}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
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
                placeholder="New Password"
                placeholderTextColor="white"
                onChangeText={text => setPassword(text)}
                value={newPassword}
              />
            </View>
            <View style={styles.inputTextBg}>
              <Image
                source={require('../../assets/signup/lock.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.inputEmail}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
              />
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: 'auto',
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <TouchableOpacity style={styles.signin_btn}>
                <Text style={{color: 'black'}}>Submit</Text>
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
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
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
  // footer_bg: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // footer_text: {
  //   fontFamily: "Poppins_400Regular",
  //   color: "black",
  // },
  inputEmail: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 41,
    fontSize: 16,
    color: 'white',

    // alignSelf: 'stretch',
    // flex: 1,
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

export default ResetPassword;
