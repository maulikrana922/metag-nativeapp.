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
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  })

  const [image, setImage] = useState(null)
  const [newImage, setNewImage] = useState(AvtarImage)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      // setImage(result.uri);
      setNewImage(result.uri)
    }
  }

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
              <View
                style={{
                  alignSelf: 'center',
                  position: 'relative',
                  left: 30,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.269"
                  height="25.077"
                  viewBox="0 0 6.269 25.077"
                >
                  <defs></defs>
                  <g transform="translate(-193.334 0)">
                    <path
                      fill="white"
                      d="M198.685.918a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                    />
                    <path
                      fill="white"
                      d="M198.685,194.252a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                      transform="translate(0 -183.93)"
                    />
                    <path
                      fill="white"
                      d="M198.685,387.584a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                      transform="translate(0 -367.858)"
                    />
                  </g>
                </svg>
              </View>
            </View>
            <Text style={styles.completeProfile}>My Orders</Text>
          </View>
        </View>
        {/* list  */}
        <View>
          <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.orderTitleFont}>Order No 84766132132 </Text>
              <Text style={styles.orderTitleFont}>$50.00</Text>
            </View>
            <Text style={{ fontFamily: 'Poppins-Reguler' }}>
              09:13 PM 10 Jun 2019
            </Text>
          </View>
          <View style={styles.productListView}>
            <View style={styles.productView}></View>
            <View
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 10,
              }}
            >
              <Text style={{ color: 'black', fontFamily: 'Poppins-Bold' }}>
                Successful
              </Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Regular' }}>
                Lorem Ipsum is simply dummy {`\n`}text of the printing and type
                {'\n'}setting industry.
              </Text>
            </View>
            <View
              style={{
                width: 'auto',
                marginLeft: 'auto',
                alignSelf: 'flex-end',
              }}
            >
              <TouchableOpacity style={styles.buyBtnBg}>
                <Text style={{ color: 'white' }}>Repeat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.orderTitleFont}>Order No 84766132132 </Text>
              <Text style={styles.orderTitleFont}>$50.00</Text>
            </View>
            <Text style={{ fontFamily: 'Poppins-Reguler' }}>
              09:13 PM 10 Jun 2019
            </Text>
          </View>
          <View style={styles.productListView}>
            <View style={styles.productView}></View>
            <View
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 10,
              }}
            >
              <Text style={{ color: 'black', fontFamily: 'Poppins-Bold' }}>
                Successful
              </Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Regular' }}>
                Lorem Ipsum is simply dummy {`\n`}text of the printing and type
                {'\n'}setting industry.
              </Text>
            </View>
            <View
              style={{
                width: 'auto',
                marginLeft: 'auto',
                alignSelf: 'flex-end',
              }}
            >
              <TouchableOpacity style={styles.buyBtnBg}>
                <Text style={{ color: 'white' }}>Repeat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#EEEEEE',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <View>
              <Image source={home} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={contact} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={list} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={avtar} style={styles.menuIcon}></Image>
            </View>
          </View>
        </View>
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
    justifyContent: 'center',
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
    // marginTop: 'auto',
    // alignItems: 'flex-end',
  },
  productView: {
    width: 40,
    height: 75,
    backgroundColor: '#b8b8b8',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 5,
  },
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
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
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: 100,
  },
  orderTitleFont: {
    fontFamily: 'Poppins-Bold',
  },
})
