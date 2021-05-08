import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
// import AvtarImage from "../../assets/avtar.svg";
import bg from '../../assets/Logo/bg.png';
import Logo from '../../assets/Logo/logo.svg';
import AvtarImage from '../../assets/CreateProfile/work.png';
import exampleImg from '../../assets/splash.png';
import gps from '../../assets/gps.png';
import group from '../../assets/Group.png';

import {TouchableOpacity} from 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function Location(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);

  // makeEvent(e, name) {
  //   return {
  //     id: id++,
  //     name,
  //     data: e.nativeEvent ? e.nativeEvent : e,
  //   };
  // }

  // recordEvent(name) {
  //   return e => {
  //     if (e.persist) {
  //       e.persist(); // Avoids warnings relating to https://fb.me/react-event-pooling
  //     }
  //     this.setState(prevState => ({
  //       events: [makeEvent(e, name), ...prevState.events.slice(0, 10)],
  //     }));
  //   };
  // }

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />

          <View style={styles.header_parent}>
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
                <Logo width={54} height={54} />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
                {/* <Text style={styles.next}>Next</Text> */}
              </View>
              <Text
                onPress={() => props.navigation.navigate('MediaAccount')}
                style={styles.next}>
                Next
              </Text>
            </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
          <View style={styles.avtar_parent}>
            <Text style={styles.upload_text}>Add Your Address/Location</Text>
            {/* <View>
              <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  console.log(data, details);
                }}
                query={{
                  key: 'AIzaSyB0WvJzRd0Cz5AtunbfqMQEt8J64NXltks',
                  language: 'en',
                }}
              />
            </View> */}
            <View
            //  style={styles.avtar_bg}
            >
              <View
                style={{
                  // marginBottom: '-30%',
                  backgroundColor: 'white',
                  borderWidth: 3,
                  borderRadius: 1,
                  borderColor: '#ddd',
                  borderBottomWidth: 0,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 20,
                  elevation: 1,
                  // marginLeft: '3%',
                  // marginRight: '3%',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="Enter Location"
                  placeholderTextColor="#a9a9a9"
                  style={{marginLeft: '5%', color: '#000000'}}></TextInput>
                <Image
                  source={gps}
                  width={30}
                  height={30}
                  style={{
                    zIndex: 5,
                    marginLeft: 'auto',
                    alignSelf: 'center',
                    marginRight: '5%',
                    // margin,
                    // marginRight: '5%',
                    // marginBottom: '-5%',
                  }}></Image>
              </View>
              {/* <Image source={gps}></Image> */}
              <View style={styles.containerG}>
                <Image
                  source={group}
                  style={{
                    zIndex: 5,
                    alignSelf: 'flex-end',
                    marginTop: 'auto',
                    marginRight: '3%',
                    marginBottom: '3%',
                  }}></Image>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}></MapView>
              </View>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: '#000000',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    // padding: 10,
    // backgroundColor: 'black ',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    // alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    // marginLeft: 20,
    // color: "white",
  },
  headerBackground: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    paddingBottom: 20,
    alignSelf: 'center',
    paddingTop: '10%',
    // paddingRight: 40,
    // backgroundColor: 'black',
  },
  header_text: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // width: 30,
    // width: 30,
    // backgroundColor: 'pink',
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 34,
    color: 'white',
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 10,
    marginTop: -3,
    // backgroundColor: 'red',
    padding: 0,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 14,
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
    // paddingBottom: 10,
    // backgroundColor: "black",
    // width: "auto",
  },
  header_parent: {
    backgroundColor: '#000000',
    padding: 20,
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
    // marginTop: 50,
    margin: 80,
    // alignContent: "center",
    // marginTop: "right",
    // marginBottom: "right",
  },
  avtar_bg: {
    display: 'flex',
    backgroundColor: '#000000',
    // height: 240,
    // width: 200,
    // width: 'auto',
    // paddingLeft: 'auto',
    // paddingRight: 'auto',
    justifyContent: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    borderRadius: 20,
    // paddingBottom: 5,
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // marginTop: 30,
    // width: 'auto',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 50,
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  // upload_text: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   fontFamily: 'Poppins-ExtraBold',
  //   fontWeight: '700',
  // },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    color: 'black',
    // marginBottom: 14,
    // marginTop: 20,
    fontSize: 14,
    marginBottom: 15,
  },
  camera_img: {
    width: 40,
    height: 40,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    // padding: 20,
    // marginTop: 40,
    // marginRight: 10,
    // borderRadius: 20,
  },
  camera_bg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // paddingTop: 50,
    paddingBottom: 10,

    marginRight: 5,
    // marginBottom: 10,
    // width: "auto",
    // borderRadius: 20,
    // backgroundColor: "white",
  },
  white_bg: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    // merginBottom: 10,
    // padding: 10,
    justifyContent: 'flex-end',
  },
  header_padding: {
    // backgroundColor: 'black',
    // padding: 10,
  },
  containerG: {
    // ...StyleSheet.absoluteFillObject,
    height: '70%',
    width: '100%',
    // backgroundColor:'pink',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // marginLeft: '10%',
    // marginRight: '10%',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // borderRadius: 20,
    // borderBottomRightRadius: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // borderRadius: 40,
  },
});
