import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
// import facebook from "../../assets/icons8-facebook.svg"
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png';
// import instagram  from "../../assets/icons8-instagram.svg"
import instagram from '../../assets/instagram.png';

import {TouchableOpacity} from 'react-native-gesture-handler';

// import exampleImg from "../../assets/splash.png";

export default function CreateProfile(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri);
  //   }
  // };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  height: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                <Image
                  source={require('../../assets/CreateProfile/back.png')}
                  style={styles.arrowback}></Image>
              </TouchableOpacity>
              <View style={styles.headerBackground}>
                {/* <Image
                  source={require('../../assets/CreateProfile/back.png')}
                  style={styles.arrowback}
                ></Image> */}
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{width: 50, height: 'auto'}}
                />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
                {/* <Text style={styles.next}>Next</Text> */}
              </View>
              <Text
                onPress={() => props.navigation.navigate('Home')}
                style={styles.next}>
                Next
              </Text>
            </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
        </View>
        <View style={styles.avtar_parent}>
          <Text style={styles.upload_text}>
            Link your Social media accounts{' '}
          </Text>
          <View style={styles.avtar_bg}>
            {/* <Image
              // source={require("../../assets/avtar.svg")}
              source={newImage}
              style={styles.avtarImage}
            ></Image> */}
            {/* <View style={styles.camera_bg}>
              <View
                style={styles.white_bg}
                onStartShouldSetResponder={pickImage}
              >
                {/* {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )} */}
            {/* // setNewImage(exampleImg)} */}
            {/* {image && setNewImage(exampleImg)} */}
            {/* <Image
                  source={require("../../assets/camera-icon.svg")}
                  style={styles.camera_img}
                ></Image> */}
            {/* </View>
            </View> */}

            <View style={styles.socialLogin}>
              <Image source={google} style={styles.logo}></Image>
              <Text style={styles.socialLoginText}>Jerry</Text>
            </View>
            <View style={styles.socialLogin}>
              <Image source={linkedin} style={styles.logo}></Image>
              <Text style={styles.socialLoginText}>Jerry</Text>
              <CheckBox
                style={styles.checkboxPadding}
                //   value={isSelected}
                //   onValueChange={setSelection}
                //   style={styles.checkbox}
              />
            </View>
            <View style={styles.socialLogin}>
              <Image source={twitter} style={styles.logo}></Image>
              {/* <Text style={styles.socialLoginText}>Jerry</Text> */}
            </View>
            <View style={styles.socialLogin}>
              <Image source={instagram} style={styles.logo}></Image>
              <Text style={styles.socialLoginText}>Jerry</Text>
            </View>
            <View style={styles.socialLogin}>
              <Image source={facebook} style={styles.logo}></Image>
              <Text style={styles.socialLoginText}>Jerry</Text>
            </View>
          </View>
        </View>
      </View>
    );
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
    justifyContent: 'space-around',
    // paddingRight: 40,
  },
  header_text: {
    display: 'flex',
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
    // backgroundColor: "black",
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
    height: 'auto',
    width: 'auto',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    // justifyContent:"space-between   "
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    color: 'black',
    marginBottom: 14,
    fontSize: 16,
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
  logo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginLeft: 10,
  },
  socialLogin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  socialLoginText: {
    color: 'white',
    paddingLeft: 20,
    width: 70,
  },
  checkboxPadding: {
    paddingLeft: 50,
    paddingRight: 10,
  },
});
