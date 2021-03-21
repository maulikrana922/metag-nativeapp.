import React, { useEffect, useState } from 'react'
import * as Svg from 'react-native-svg'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { useFonts } from '@use-expo/font'
import * as ImagePicker from 'expo-image-picker'
import AppLoading from 'expo-app-loading'
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg'
import wifi from '../../assets/mobile-phone-with-wifi.png'
import qrCode from '../../assets/qr-code.png'
import exampleImg from '../../assets/splash.png'
import userIcon from '../../assets/user.svg'
import suitecaseIcon from '../../assets/work.svg'
import avtar from '../../assets/avatar-home.svg'
import contact from '../../assets/contact.svg'
import list from '../../assets/list.svg'
import home from '../../assets/home-run.svg'
import more from '../../assets/myProfile/more.svg'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google-plus.png'
import instagram from '../../assets/instagram.png'

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function MyProfile() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  })

  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1 }}>
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
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{ width: 50, height: 'auto' }}
                />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
              </View>
              {/* <Text style={styles.next}>  </Text> */}
              {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
              {/* here */}
            </View>
            <View style={styles.avatarBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.203"
                height="40.203"
                viewBox="0 0 60.203 60.203"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  margin: 10,
                }}
              >
                <defs>
                  <style></style>
                </defs>
                <g transform="translate(-10.532 -10.267)">
                  <path
                    fill="#bfbfbf"
                    d="M61.041,55.791,49.2,52.829,48.189,48.8a21.317,21.317,0,0,0,5.983-11.869,4.646,4.646,0,0,0,3.351-3.889l.773-6.184a4.629,4.629,0,0,0-2.959-4.9l.284-5.822,1.156-1.159c1.741-1.852,3.184-5.027.167-9.634C54.626,1.8,50.687,0,45.233,0A20.378,20.378,0,0,0,33.515,3.1c-13.171.275-14.964,6.394-14.964,12.361,0,1.388.337,4.514.56,6.4a4.643,4.643,0,0,0-3.2,5l.773,6.184A4.652,4.652,0,0,0,20.4,37.021a21.451,21.451,0,0,0,5.686,11.508l-1.076,4.307L13.165,55.8A17.34,17.34,0,0,0,0,72.657,1.547,1.547,0,0,0,1.546,74.2H72.657A1.552,1.552,0,0,0,74.2,72.651,17.352,17.352,0,0,0,61.041,55.791Z"
                    transform="translate(10.532 10.267)"
                  />
                </g>
              </svg>
            </View>
            <Text style={styles.nameText}>John Copeland</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              margin: 20,
            }}
          >
            <View>
              <Image source={google} style={styles.logo}></Image>
            </View>
            <View>
              <Image source={linkedin} style={styles.logo}></Image>
            </View>
            <View>
              <Image source={twitter} style={styles.logo}></Image>
            </View>
            <View>
              <Image source={instagram} style={styles.logo}></Image>
            </View>
            <View>
              <Image source={facebook} style={styles.logo}></Image>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              height: 150,
              backgroundColor: 'white',
              padding: 20,
              marginBottom: 40,
              borderRadius: 5,
            }}
          >
            <View style={styles.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.204"
                height="17.24"
                viewBox="0 0 18.204 17.24"
              >
                <path
                  d="M17.675,2.3H12.836V1.724A1.667,1.667,0,0,0,11.236,0H6.969a1.667,1.667,0,0,0-1.6,1.724V2.3H.534A.557.557,0,0,0,0,2.873V15.516A1.667,1.667,0,0,0,1.6,17.24h15a1.667,1.667,0,0,0,1.6-1.724V2.883c-.02-.377-.236-.582-.53-.584ZM6.436,1.724a.556.556,0,0,1,.533-.575h4.267a.556.556,0,0,1,.533.575V2.3H6.436Zm10.5,1.724L15.275,8.8a.537.537,0,0,1-.506.393h-3V8.62a.555.555,0,0,0-.533-.575H6.969a.555.555,0,0,0-.533.575v.575h-3A.537.537,0,0,1,2.93,8.8L1.274,3.448ZM10.7,9.194v1.149H7.5V9.194Zm6.436,6.321a.556.556,0,0,1-.533.575H1.6a.556.556,0,0,1-.533-.575v-9.1l.851,2.751a1.613,1.613,0,0,0,1.518,1.179h3v.575a.555.555,0,0,0,.533.575h4.267a.555.555,0,0,0,.533-.575v-.575h3a1.613,1.613,0,0,0,1.518-1.179l.851-2.751Zm0,0"
                  transform="translate(0)"
                />
              </svg>
              <Text style={styles.infoPadding}>Aqua System LLC</Text>
            </View>
            <View style={styles.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.204"
                height="17.24"
                viewBox="0 0 19.5 15.758"
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  fill="#020202"
                  d="M17.672,59.882H1.828A1.905,1.905,0,0,0,0,61.852V73.67a1.9,1.9,0,0,0,1.828,1.97H17.672A1.9,1.9,0,0,0,19.5,73.67V61.852A1.905,1.905,0,0,0,17.672,59.882Zm0,1.313a.568.568,0,0,1,.234.051L9.75,68.862,1.595,61.246a.569.569,0,0,1,.234-.051Zm0,13.132H1.828a.635.635,0,0,1-.609-.657V62.633l8.132,7.594a.578.578,0,0,0,.8,0l8.132-7.594V73.67A.635.635,0,0,1,17.672,74.327Z"
                  transform="translate(0 -59.882)"
                />
              </svg>
              <Text style={styles.infoPadding}>Johncopaland@domain.com</Text>
            </View>
            <View style={styles.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.204"
                height="17.24"
                viewBox="0 0 12.667 20.267"
              >
                <g transform="translate(-99)">
                  <path d="M109.767,0H100.9A1.9,1.9,0,0,0,99,1.9V18.367a1.9,1.9,0,0,0,1.9,1.9h8.867a1.9,1.9,0,0,0,1.9-1.9V1.9A1.9,1.9,0,0,0,109.767,0ZM100.9,1.267h8.867a.634.634,0,0,1,.633.633V15.2H100.267V1.9A.634.634,0,0,1,100.9,1.267ZM109.767,19H100.9a.634.634,0,0,1-.633-.633v-1.9H110.4v1.9A.634.634,0,0,1,109.767,19Z" />
                  <path
                    d="M248.58,445.685a.633.633,0,1,1-.9,0,.633.633,0,0,1,.9,0"
                    transform="translate(-142.799 -428.4)"
                  />
                </g>
              </svg>
              <Text style={styles.infoPadding}>+004 4567979820</Text>
            </View>
            <View style={styles.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.204"
                height="17.24"
                viewBox="0 0 16.782 23.905"
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  stroke="#000"
                  strokeWidth="1.5px"
                  fill="none"
                  d="M1.391,0A7.65,7.65,0,0,0-6.25,7.641c0,5.3,7.649,14.342,7.649,14.342S9.032,12.677,9.032,7.641A7.65,7.65,0,0,0,1.391,0ZM3.7,9.879A3.26,3.26,0,0,1-.914,5.268a3.238,3.238,0,0,1,2.305-.955A3.261,3.261,0,0,1,3.7,9.879Zm0,0"
                  transform="translate(7 0.75)"
                />
              </svg>
              <Text style={styles.infoPadding}>
                9 Bow Ridge,Lakeland,FL 33801
              </Text>
            </View>
          </View>
        </View>

        {/* list  */}

        {/* here */}
      </View>
    )
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
    justifyContent: 'space-around',
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
    flex: 1,
    flexDirection: 'column',
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30,
    letterSpacing: 3,
    color: 'white',
  },
  text_tagline: {
    fontFamily: '',
    letterSpacing: 2,
    fontSize: 10,
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
    borderWidth: 2,
    borderBottomColor: '#808080',
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
    textDecorationLine: 'Underline',
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
    textDecorationLine: 'Underline',
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
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
  },
  nameText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
})
