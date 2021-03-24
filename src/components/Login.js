import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import AppLoading from 'expo-app-loading'
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font'
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Svg, Path, Defs, RadialGradient, Stop, Circle } from 'react-native-svg'

export default function Login() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  })
  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Password')

  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerBackground}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={{ width: 50, height: 'auto' }}
          />
          <View style={styles.header}>
            <Text style={styles.text_metag}>meTAG</Text>
            <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
          </View>
        </View>
        <View style={styles.background}>
          <Text style={styles.signin}>Sign in</Text>

          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: 'auto',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={styles.signin_btn}>
              <Text style={{ color: 'black' }}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.key_text_parent}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.key_img}
            ></Image>
            <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.icon_parent}>
          <Text style={styles.text}>Sign in with:</Text>
          <View style={styles.bg_img_icon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width={64}
              height={64}
            >
              <RadialGradient
                id="prefix__a"
                cx={32}
                cy={32.5}
                r={31.259}
                gradientTransform="matrix(1 0 0 -1 0 64)"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset={0} stopColor="#efdcb1" />
                <Stop offset={0} stopColor="#f2e0bb" />
                <Stop offset={0.011} stopColor="#f2e0bc" />
                <Stop offset={0.362} stopColor="#f9edd2" />
                <Stop offset={0.699} stopColor="#fef4df" />
                <Stop offset={1} stopColor="#fff7e4" />
              </RadialGradient>
              <Path
                fill="url(#prefix__a)"
                d="M58 54c-1.1 0-2-.9-2-2s.9-2 2-2h2.5c1.9 0 3.5-1.6 3.5-3.5S62.4 43 60.5 43H50c-1.4 0-2.5-1.1-2.5-2.5S48.6 38 50 38h8c1.7 0 3-1.3 3-3s-1.3-3-3-3H42v-6h18c2.3 0 4.2-2 4-4.4-.2-2.1-2.1-3.6-4.2-3.6H58c-1.1 0-2-.9-2-2s.9-2 2-2h.4c1.3 0 2.5-.9 2.6-2.2.2-1.5-1-2.8-2.5-2.8h-14c-.8 0-1.5-.7-1.5-1.5S43.7 6 44.5 6h3.9c1.3 0 2.5-.9 2.6-2.2.1-1.5-1-2.8-2.5-2.8H15.6c-1.3 0-2.5.9-2.6 2.2-.1 1.5 1 2.8 2.5 2.8H19c1.1 0 2 .9 2 2s-.9 2-2 2H6.2c-2.1 0-4 1.5-4.2 3.6C1.8 16 3.7 18 6 18h2.5c1.9 0 3.5 1.6 3.5 3.5S10.4 25 8.5 25H5.2c-2.1 0-4 1.5-4.2 3.6C.8 31 2.7 33 5 33h17v11H6c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.1 0 2 .9 2 2s-.9 2-2 2H4.2c-2.1 0-4 1.5-4.2 3.6C-.2 60 1.7 62 4 62h53.8c2.1 0 4-1.5 4.2-3.6.2-2.4-1.7-4.4-4-4.4z"
              />
              <RadialGradient
                id="prefix__b"
                cx={18.51}
                cy={66.293}
                r={69.648}
                gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset={0.073} stopColor="#eacc7b" />
                <Stop offset={0.184} stopColor="#ecaa59" />
                <Stop offset={0.307} stopColor="#ef802e" />
                <Stop offset={0.358} stopColor="#ef6d3a" />
                <Stop offset={0.46} stopColor="#f04b50" />
                <Stop offset={0.516} stopColor="#f03e58" />
                <Stop offset={0.689} stopColor="#db359e" />
                <Stop offset={0.724} stopColor="#ce37a4" />
                <Stop offset={0.789} stopColor="#ac3cb4" />
                <Stop offset={0.877} stopColor="#7544cf" />
                <Stop offset={0.98} stopColor="#2b4ff2" />
              </RadialGradient>
              <Path
                fill="url(#prefix__b)"
                d="M45 57H19c-5.5 0-10-4.5-10-10V21c0-5.5 4.5-10 10-10h26c5.5 0 10 4.5 10 10v26c0 5.5-4.5 10-10 10z"
              />
              <Path
                fill="#fff"
                d="M32 20c4.6 0 5.1 0 6.9.1 1.7.1 2.6.4 3.2.6.8.3 1.4.7 2 1.3.6.6 1 1.2 1.3 2 .2.6.5 1.5.6 3.2V34c0 4.6 0 5.1-.1 6.9-.1 1.7-.4 2.6-.6 3.2-.3.8-.7 1.4-1.3 2-.6.6-1.2 1-2 1.3-.6.2-1.5.5-3.2.6H32c-4.6 0-5.1 0-6.9-.1-1.7-.1-2.6-.4-3.2-.6-.8-.3-1.4-.7-2-1.3-.6-.6-1-1.2-1.3-2-.2-.6-.5-1.5-.6-3.2V34c0-4.6 0-5.1.1-6.9.1-1.7.4-2.6.6-3.2.3-.8.7-1.4 1.3-2 .6-.6 1.2-1 2-1.3.6-.2 1.5-.5 3.2-.6H32m0-3c-4.6 0-5.2 0-7 .1-1.8.1-3 .4-4.1.8-1.1.4-2.1 1-3 2s-1.5 1.9-2 3c-.4 1.1-.7 2.3-.8 4.1-.1 1.8-.1 2.4-.1 7s0 5.2.1 7c.1 1.8.4 3 .8 4.1.4 1.1 1 2.1 2 3 .9.9 1.9 1.5 3 2 1.1.4 2.3.7 4.1.8 1.8.1 2.4.1 7 .1s5.2 0 7-.1c1.8-.1 3-.4 4.1-.8 1.1-.4 2.1-1 3-2 .9-.9 1.5-1.9 2-3 .4-1.1.7-2.3.8-4.1.1-1.8.1-2.4.1-7s0-5.2-.1-7c-.1-1.8-.4-3-.8-4.1-.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-.4-2.3-.7-4.1-.8-1.8-.1-2.4-.1-7-.1z"
              />
              <Path
                fill="#fff"
                d="M32 25c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
              />
              <Circle cx={41} cy={25} r={2} fill="#fff" />
            </Svg>
            {/* <Image
              source={require('../../assets/icons8-instagram.svg')}
              style={styles.img_icon}
            ></Image> */}
            <Image
              source={require('../../assets/icons8-facebook.svg')}
              style={styles.img_icon}
            ></Image>
            <Image
              source={require('../../assets/icons8-google.svg')}
              style={styles.img_icon}
            ></Image>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    // flex: 2,
    backgroundColor: 'black',
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 0,
    padding: 30,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    paddingLeft: 20,
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    padding: 30,
  },
  signin: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 30,
    paddingBottom: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 40,
    letterSpacing: 3,
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 15,
    color: 'black',
  },
  inputEmail: {
    borderBottomColor: 'white',
    borderWidth: 1,
    height: 43,
    color: 'white',
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
})
