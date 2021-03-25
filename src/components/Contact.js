import React, { useEffect, useState } from 'react'
// import * as Svg from 'react-native-svg'
import Svg, { Defs, Path, G } from 'react-native-svg'

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

  const [image, setImage] = useState(null)
  const [newImage, setNewImage] = useState(AvtarImage)

  // useEffect(() => {
  //   ;(async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!')
  //       }
  //     }
  //   })()
  // }, [])

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   })

  //   console.log(result)

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri)
  //   }
  // }

  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              <View style={{ alignSelf: 'center' }}>
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30.802}
                  height={30.802}
                  viewBox="0 0 30.802 30.802"
                >
                  <Defs></Defs>
                  <Path
                    fill="#fff"
                    d="M1.8 1.8h5.419V0H0v7.219h1.8zm0 0M23.582 0v1.8h5.414v5.419h1.8V0zm0 0M28.996 28.996h-5.414v1.8h7.219v-7.214h-1.8zm0 0M1.8 23.582H0v7.219h7.219v-1.8H1.8zm0 0"
                  />
                  <Path
                    fill="#fff"
                    d="M3.67 3.61v9.024h9.024V7.22h1.8V5.41h-1.8v-1.8zm7.219 7.219H5.47V5.41h5.414zm0 0M27.132 27.072v-9.029h-3.61v-1.8h-1.8v1.8h-5.419v1.8h1.8v1.8h-1.8v1.8h1.8v3.61zm-7.219-7.219h5.414v5.414h-5.414zm0 0M9.084 16.238h3.61v-1.8H3.67v1.8h3.61v1.8H5.47v1.8h1.8v3.61h-1.8v1.8h1.8v1.8h9.024v-1.8h-1.8v-1.8h-1.8v1.8h-3.61v-1.8h1.8v-1.8h-1.8zm0 0"
                  />
                  <Path
                    fill="#fff"
                    d="M7.279 7.219h1.8v1.8h-1.8zm0 0M21.717 7.219h1.8v1.8h-1.8zm0 0"
                  />
                  <Path
                    fill="#fff"
                    d="M23.522 12.634h3.61V3.61h-9.024v9.024h3.61v1.8h1.8zm-3.61-1.8V5.41h5.414v5.414zm0 0M27.132 16.238v-1.8h-3.61v1.8zm0 0M21.717 21.657h1.8v1.8h-1.8zm0 0M14.498 19.853h1.8v1.8h-1.8zm0 0M10.889 21.658h1.8v-3.61h-1.8zm0 0M12.694 16.243h1.8v1.8h-1.8zm0 0M5.47 19.853h-1.8v3.61h1.8zm0 0M3.67 25.267h1.8v1.8h-1.8zm0 0M14.498 3.61h1.8v1.8h-1.8zm0 0M14.498 10.829h1.8v-3.61h-1.8zm0 0M16.298 14.433v-1.8h-1.8v3.61h7.219v-1.8zm0 0"
                  />
                </Svg> */}
              </View>
              <View style={styles.headerBackground}>
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{ width: 50, height: 'auto' }}
                />
                <View style={styles.header_text}>
                  {/* <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text> */}
                </View>
              </View>
              <View style={{ alignSelf: 'center' }}>
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={6.269}
                  height={25.077}
                  viewBox="0 0 6.269 25.077"
                >
                  <G fill="#fff">
                    <Path d="M5.351.918a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0M5.351 10.322a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0M5.351 19.726a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0" />
                  </G>
                </Svg> */}
              </View>
            </View>
            {/* <Text style={styles.completeProfile}>Contacts</Text> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 'auto',
              justifyContent: 'space-around',
              marginLeft: 40,
              marginRight: 40,
            }}
          >
            <TouchableOpacity style={styles.choiceMenu}>
              {/* <Text style={{ color: 'black', textAlign: 'center' }}>All</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceMenu}>
              {/* <Text style={{ color: 'black', textAlign: 'center' }}>
                Recived
              </Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceMenu}>
              <Text style={{ color: 'black', textAlign: 'center' }}>Sent</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* list  */}
        <View style={{ margin: 20 }}>
          <View style={{ display: 'flex' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={styles.avatarBg}>
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24.006}
                  viewBox="0 0 24 24.006"
                >
                  <Defs></Defs>
                  <Path
                    fill="#fff"
                    d="M8.448 21.001l-5.445-5.443L16.172 2.389l5.44 5.445zm-5.954-4.484l4.995 4.995L0 24.001zM23.292 6.166l-.944.944-5.453-5.452.944-.944a2.435 2.435 0 013.445 0l2.008 2.007a2.449 2.449 0 010 3.445zm0 0"
                  />
                </Svg> */}
                )
              </View>
              <View
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  paddingLeft: 10,
                }}
              >
                {/* <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
                  James wink
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular' }}>
                  Aqua system LLC
                </Text> */}
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={styles.avatarBg}>
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24.006}
                  viewBox="0 0 24 24.006"
                >
                  <Defs></Defs>
                  <Path
                    fill="#fff"
                    d="M8.448 21.001l-5.445-5.443L16.172 2.389l5.44 5.445zm-5.954-4.484l4.995 4.995L0 24.001zM23.292 6.166l-.944.944-5.453-5.452.944-.944a2.435 2.435 0 013.445 0l2.008 2.007a2.449 2.449 0 010 3.445zm0 0"
                  />
                </Svg> */}
                )
              </View>
              <View
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  paddingLeft: 10,
                }}
              >
                {/* <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
                  James wink
                </Text> */}
                {/* <Text style={{ fontFamily: 'Poppins-Regular' }}>
                  Aqua system LLC
                </Text> */}
              </View>
              <View
                style={{
                  backgroundColor: '#676767',
                  padding: 8,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  borderRadius: 100,
                  marginLeft: 40,
                  // height: 'auto',
                  // width: 'auto',
                }}
              >
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24.006}
                  viewBox="0 0 24 24.006"
                >
                  <Defs></Defs>
                  <Path
                    fill="#fff"
                    d="M8.448 21.001l-5.445-5.443L16.172 2.389l5.44 5.445zm-5.954-4.484l4.995 4.995L0 24.001zM23.292 6.166l-.944.944-5.453-5.452.944-.944a2.435 2.435 0 013.445 0l2.008 2.007a2.449 2.449 0 010 3.445zm0 0"
                  />
                </Svg> */}
                )
              </View>
              <View
                style={{
                  backgroundColor: '#E61D1D',
                  padding: 8,
                  // paddingLeft: 11,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  borderRadius: 100,
                  marginLeft: 10,
                }}
              >
                {/* <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24.006}
                  viewBox="0 0 24 24.006"
                >
                  <Defs></Defs>
                  <Path
                    fill="#fff"
                    d="M8.448 21.001l-5.445-5.443L16.172 2.389l5.44 5.445zm-5.954-4.484l4.995 4.995L0 24.001zM23.292 6.166l-.944.944-5.453-5.452.944-.944a2.435 2.435 0 013.445 0l2.008 2.007a2.449 2.449 0 010 3.445zm0 0"
                  />
                </Svg> */}
                )
              </View>
            </View>
          </View>
        </View>
        {/* here */}
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
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: 100,
  },
})
