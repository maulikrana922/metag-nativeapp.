import React, { useEffect, useState } from 'react'
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
              <View style={{ alignSelf: 'center' }}>
                <Svg
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
                </Svg>
              </View>
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
              <View style={{ alignSelf: 'center' }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={6.269}
                  height={25.077}
                  viewBox="0 0 6.269 25.077"
                >
                  <G fill="#fff">
                    <Path d="M5.351.918a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0M5.351 10.322a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0M5.351 19.726a3.135 3.135 0 11-4.433 0 3.135 3.135 0 014.433 0" />
                  </G>
                </Svg>
              </View>
            </View>
            <Text style={styles.completeProfile}>My Profile</Text>
          </View>
          {/*three View*/}
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <View style={{ padding: 20 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={23.941}
                height={26.118}
                viewBox="0 0 23.941 26.118"
              >
                <Defs></Defs>
                <G fill="#fff">
                  <Path d="M23.125 4.353A3.537 3.537 0 1119.584.816a3.537 3.537 0 013.541 3.537zm0 0" />
                  <Path d="M19.589 8.706a4.353 4.353 0 114.353-4.353 4.357 4.357 0 01-4.353 4.353zm0-7.074a2.721 2.721 0 102.721 2.721 2.724 2.724 0 00-2.721-2.721zm0 0M23.125 21.765a3.537 3.537 0 11-3.537-3.537 3.537 3.537 0 013.537 3.537zm0 0" />
                  <Path d="M19.589 26.118a4.353 4.353 0 114.353-4.353 4.357 4.357 0 01-4.353 4.353zm0-7.074a2.721 2.721 0 102.721 2.721 2.724 2.724 0 00-2.721-2.721zm0 0M7.89 13.054a3.537 3.537 0 11-3.537-3.537 3.537 3.537 0 013.537 3.537zm0 0" />
                  <Path d="M4.353 17.412a4.353 4.353 0 114.353-4.353 4.357 4.357 0 01-4.353 4.353zm0-7.074a2.721 2.721 0 102.721 2.721 2.724 2.724 0 00-2.721-2.721zm0 0" />
                  <Path d="M6.923 12.537a1.088 1.088 0 01-.54-2.034l10.102-5.757a1.088 1.088 0 111.077 1.891l-10.1 5.757a1.081 1.081 0 01-.539.143zm0 0M17.019 21.515a1.081 1.081 0 01-.538-.143l-10.1-5.757a1.09 1.09 0 011.082-1.891l10.1 5.757a1.088 1.088 0 01-.54 2.034zm0 0" />
                </G>
              </Svg>
            </View>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                padding: 20,
                width: 100,
                height: 100,
                borderRadius: 100,
                alignItems: 'center',
                position: 'absolute',
                top: 20,
                left: 135,
                // marginLeft: 'auto',
                // marginRight: 'auto',
                // top: 100,
                // z-index:-1
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={74.203}
                height={74.203}
                viewBox="0 0 74.203 74.203"
              >
                <Defs></Defs>
                <Path
                  fill="#bfbfbf"
                  d="M61.041 55.791L49.2 52.829 48.189 48.8a21.317 21.317 0 005.983-11.869 4.646 4.646 0 003.351-3.889l.773-6.184a4.629 4.629 0 00-2.959-4.9l.284-5.822 1.156-1.159c1.741-1.852 3.184-5.027.167-9.634C54.626 1.8 50.687 0 45.233 0a20.378 20.378 0 00-11.718 3.1c-13.171.275-14.964 6.394-14.964 12.361 0 1.388.337 4.514.56 6.4a4.643 4.643 0 00-3.2 5l.773 6.184a4.652 4.652 0 003.716 3.976 21.451 21.451 0 005.686 11.508l-1.076 4.307L13.165 55.8A17.34 17.34 0 000 72.657 1.547 1.547 0 001.546 74.2h71.111a1.552 1.552 0 001.543-1.549 17.352 17.352 0 00-13.159-16.86z"
                />
              </Svg>
            </View>
            <View style={{ padding: 20 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24.006}
                viewBox="0 0 24 24.006"
              >
                <Path
                  fill="#fff"
                  d="M8.448 21.001l-5.445-5.443L16.172 2.389l5.44 5.445zm-5.954-4.484l4.995 4.995L0 24.001zM23.292 6.166l-.944.944-5.453-5.452.944-.944a2.435 2.435 0 013.445 0l2.008 2.007a2.449 2.449 0 010 3.445zm0 0"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 60 }}>
          <Text
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: 'Poppins-Regular',
              color: '#000000',
            }}
          >
            John Copeland
          </Text>
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
          }}
        >
          <View style={styles.info}>
            {/* <Svg
              xmlns="http://www.w3.org/2000/svg"
              // width={18.204}
              // height={17.24}

              width={20}
              height={20}
              // viewBox="0 0 18.204 17.24"
              viewBox="0 0 20 20"
              style={{ backgroundColor: 'orange' }}
            >
              <Path d="M17.675 2.3h-4.839v-.576A1.667 1.667 0 0011.236 0H6.969a1.667 1.667 0 00-1.6 1.724V2.3H.534A.557.557 0 000 2.873v12.643a1.667 1.667 0 001.6 1.724h15a1.667 1.667 0 001.6-1.724V2.883c-.02-.377-.236-.582-.53-.584zM6.436 1.724a.556.556 0 01.533-.575h4.267a.556.556 0 01.533.575V2.3H6.436zm10.5 1.724L15.275 8.8a.537.537 0 01-.506.393h-3V8.62a.555.555 0 00-.533-.575H6.969a.555.555 0 00-.533.575v.575h-3A.537.537 0 012.93 8.8L1.274 3.448zM10.7 9.194v1.149H7.5V9.194zm6.436 6.321a.556.556 0 01-.533.575H1.6a.556.556 0 01-.533-.575v-9.1l.851 2.751a1.613 1.613 0 001.518 1.179h3v.575a.555.555 0 00.533.575h4.267a.555.555 0 00.533-.575v-.575h3a1.613 1.613 0 001.518-1.179l.851-2.751zm0 0" />
            </Svg> */}
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 20 20"
              // {...props}
            >
              <Path
                fill="#020202"
                d="M17.675 2.3h-4.839v-.576A1.667 1.667 0 0011.236 0H6.969a1.667 1.667 0 00-1.6 1.724V2.3H.534A.557.557 0 000 2.873v12.643a1.667 1.667 0 001.6 1.724h15a1.667 1.667 0 001.6-1.724V2.883c-.02-.377-.236-.582-.53-.584zM6.436 1.724a.556.556 0 01.533-.575h4.267a.556.556 0 01.533.575V2.3H6.436zm10.5 1.724L15.275 8.8a.537.537 0 01-.506.393h-3V8.62a.555.555 0 00-.533-.575H6.969a.555.555 0 00-.533.575v.575h-3A.537.537 0 012.93 8.8L1.274 3.448zM10.7 9.194v1.149H7.5V9.194zm6.436 6.321a.556.556 0 01-.533.575H1.6a.556.556 0 01-.533-.575v-9.1l.851 2.751a1.613 1.613 0 001.518 1.179h3v.575a.555.555 0 00.533.575h4.267a.555.555 0 00.533-.575v-.575h3a1.613 1.613 0 001.518-1.179l.851-2.751zm0 0"
              />
            </Svg>
            <Text style={styles.infoPadding}>Aqua System LLC</Text>
          </View>
          <View style={styles.info}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              // width={18.204}
              // height={17.24}
              // width={20.204}
              // height={20.24}
              // viewBox="0 0 19.5 15.758"
              width={30}
              height={30}
              viewBox="0 0 20 20"
            >
              <Defs></Defs>
              <Path
                fill="#020202"
                d="M17.672 0H1.828A1.905 1.905 0 000 1.97v11.818a1.9 1.9 0 001.828 1.97h15.844a1.9 1.9 0 001.828-1.97V1.97A1.905 1.905 0 0017.672 0zm0 1.313a.568.568 0 01.234.051L9.75 8.98 1.595 1.364a.569.569 0 01.234-.051zm0 13.132H1.828a.635.635 0 01-.609-.657V2.751l8.132 7.594a.578.578 0 00.8 0l8.132-7.594v11.037a.635.635 0 01-.611.657z"
              />
            </Svg>
            <Text style={styles.infoPadding}>Johncopaland@domain.com</Text>
          </View>
          <View style={styles.info}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              // width={18.204}
              // height={17.24}
              // width={20.204}
              // height={20.24}
              // viewBox="0 0 12.667 20.267"
              width={30}
              height={30}
              viewBox="0 0 20 20"
            >
              <Path
                fill="#020202"
                d="M10.767 0H1.9A1.9 1.9 0 000 1.9v16.467a1.9 1.9 0 001.9 1.9h8.867a1.9 1.9 0 001.9-1.9V1.9a1.9 1.9 0 00-1.9-1.9zM1.9 1.267h8.867a.634.634 0 01.633.633v13.3H1.267V1.9a.634.634 0 01.633-.633zM10.767 19H1.9a.634.634 0 01-.633-.633v-1.9H11.4v1.9a.634.634 0 01-.633.633z"
              />
              <Path
                fill="#020202"
                d="M6.781 17.285a.633.633 0 11-.9 0 .633.633 0 01.9 0"
              />
            </Svg>
            <Text style={styles.infoPadding}>+004 4567979820</Text>
          </View>
          <View style={styles.info}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              // width={18.204}
              // height={17.24}
              // width={20.204}
              // height={20.24}
              // viewBox="0 0 16.782 23.905"
              width={30}
              height={30}
              viewBox="0 0 25 25"
            >
              <Defs></Defs>
              <Path
                stroke="#020202"
                fill="none"
                // fill="#020202"
                d="M8.391.75A7.65 7.65 0 00.75 8.391c0 5.3 7.649 14.342 7.649 14.342s7.633-9.306 7.633-14.342A7.65 7.65 0 008.391.75zm2.309 9.879a3.262 3.262 0 01-4.614-4.611 3.238 3.238 0 012.305-.955 3.261 3.261 0 012.309 5.566zm0 0"
              />
            </Svg>
            <Text style={styles.infoPadding}>
              9 Bow Ridge,Lakeland,FL 33801
            </Text>
          </View>
        </View>

        {/* here */}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
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
    // backgroundColor: 'yellow',
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
    // backgroundColor: 'orange',
  },
  header_text: {
    // flex: 1,
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
    width: 150,

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
    color: '#000000',
    fontSize: 16,
  },
})
