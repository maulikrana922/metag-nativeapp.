import React, {useEffect, useState} from 'react';
import Svg, {Defs, Path, G} from 'react-native-svg';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';
// import AvtarImage from "../../assets/avtar.svg";
//
import axios from 'axios';
import AvtarImage from '../../assets/work-suitcase.svg';
import Avatar from '../../assets/myProfile/avatar.svg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png';
import instagram from '../../assets/instagram.png';
import Menu from '../../src/components/Menu';
import Scan from '../../assets/myProfile/scan.svg';
import Pen from '../../assets/myProfile/pen.svg';
import Share from '../../assets/myProfile/share.svg';
import More from '../../assets/myProfile/more.svg';
import Work from '../../assets/myProfile/work.svg';
import Email from '../../assets/myProfile/email.svg';
import Gps from '../../assets/myProfile/gps.svg';
import Iphone from '../../assets/myProfile/iphone.svg';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import {useSelector, useDispatch} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';

export default function MyProfile(props) {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const {token, profile} = useSelector(state => state);
  const [input, setInput] = useState(false);
  const [userEmail, setUseremail] = useState(profile.email);
  const [userName, setUserName] = useState(profile.name);
  const [userMobileNumber, setUserMobileNumber] = useState(
    '' + profile.mobile + '',
  );
  const [businessName, setBusinessName] = useState(profile.business_name);
  const [location, setLocation] = useState(profile.location);

  // const [user]
  // const []
  // const [error, setError] = useState('');

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

  const updateProfile = () => {
    // console.log('printing obj', imgResponse);
    let formData = new FormData();
    formData.append('id', profile.id);
    formData.append('name', userName);
    formData.append('business_name', businessName);
    formData.append('email', userMobileNumber);
    formData.append('mobile', userMobileNumber);
    formData.append('location', location);
    formData.append('profile_pic', {
      uri: image,
      // type: imgResponse.type,
      // name: imgResponse.fileName,
      // data: imgResponse.data,
    });

    axios({
      method: 'POST',
      url: 'https://testyourapp.online/metag/api/profileUpdate',
      data: formData,
      headers: {
        Authorization: 'Bearer ' + profile.api_token,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);
          console.log('upload data', response.data);
        } else {
          console.log('upload error', response.data);
        }
      })
      .catch(error => console.log('catch data', error));
  };

  let handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, imgResponse => {
      console.log('response', imgResponse);
      if (imgResponse.uri) {
        console.log('image uri', imgResponse.uri);
        setImage(imgResponse.uri);
        // updateProfile(imgResponse);
        // console.log('token', token);
        // handleUploadPhoto(imgResponse);
      }
    });
  };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 1}}>
          <View style={styles.header_parent}>
            <View>
              <View style={styles.header}>
                {/* <View style={styles.arrowback}></View> */}
                {/* <Image
                source={require('../../assets/arrow-back.svg')} 
                style={styles.arrowback}
              ></Image> */}
                <View style={{alignSelf: 'center'}}>
                  <Scan />
                </View>
                <View style={styles.headerBackground}>
                  {/* <Image
                  source={require('../../assets/logo.jpg')}
                  style={{width: 50, height: 'auto'}}
                /> */}
                  <Logo width={54} height={54} />
                  <View style={styles.header_text}>
                    <Text style={styles.text_metag}>meTAG</Text>
                    <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                  </View>
                </View>
                {/* <Text style={styles.next}>  </Text> */}
                {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
                <TouchableOpacity
                  // onPress={() => props.navigation.navigate('Contact')}
                  onPress={() => setShow(!show)}
                  style={{alignSelf: 'center'}}>
                  <More />
                </TouchableOpacity>
              </View>
              {show && (
                <View
                  style={{
                    backgroundColor: 'white',
                    width: '30%',
                    marginLeft: 'auto',
                    height: 'auto',
                    padding: '2%',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: -20,
                  }}>
                  <Text
                    style={{fontSize: 16}}
                    onPress={() => props.navigation.navigate('ChangePassword')}>
                    Setting
                  </Text>
                  <Text style={{fontSize: 16}}>Logout</Text>
                </View>
              )}
              <Text style={styles.completeProfile}>My Profile</Text>
            </View>
            {/*three View*/}
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{}}>
                <Share />
              </View>
              <TouchableOpacity
                // onPress={() => props.navigation.navigate('ChangePassword')}
                onPress={() => setInput(!input)}
                style={{}}>
                <Pen />
              </TouchableOpacity>
              {console.log('input printing', input)}
            </View>
          </View>
          {/* <View
            style={{
              backgroundColor: '#f2f2f2',
              padding: 20,
              // backgroundColor: 'red',
              width: 100,
              height: 100,
              borderRadius: 100,
              // position: 'absolute',
              // top: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: -35,
              // left: '50%',
              // right: '100%',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // top: 100,
              // z-index:-1
            }}>
            <Avatar
              width={40}
              height={40}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            />
          </View> */}
          <Image
            source={{uri: !image ? profile.profile_pic : image}}
            style={{
              backgroundColor: '#f2f2f2',
              padding: 20,
              // backgroundColor: 'red',
              width: 100,
              height: 100,
              borderRadius: 100,
              // position: 'absolute',
              // top: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: -35,
              // left: '50%',
              // right: '100%',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // top: 100,
              // z-index:-1
            }}></Image>
          {/* <View style={styles.camera_bg}> */}

          {input && (
            <TouchableOpacity
              onPress={handleChoosePhoto}
              style={styles.white_bg}
              // onStartShouldSetResponder={pickImage}
            >
              {/* {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )} */}
              {/* // setNewImage(exampleImg)} */}
              {/* {image && setNewImage(exampleImg)} */}
              <Image
                source={require('../../assets/myProfile/photo.png')}
                style={styles.camera_img}></Image>
            </TouchableOpacity>
          )}
          {/* </View> */}
          <View style={{paddingTop: 10}}>
            {!input ? (
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '5%',
                  fontFamily: 'Poppins-Regular',
                  color: '#000000',
                }}>
                {profile.name}
              </Text>
            ) : (
              // <TextInput style={{backgroundColor: 'pink'}}></TextInput>
              <View
                style={
                  {
                    // borderBottomWidth: 1,
                    // borderBottomColor: '#D3D3D3',
                    // marginLeft: 'auto',
                    // marginRight: 'auto',
                    // marginTop: '5%',
                    // fontFamily: 'Poppins-Regular',
                    // color: '#000000',
                  }
                }>
                <TextInput
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '5%',
                    fontFamily: 'Poppins-Regular',
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    width: '30%',
                    textAlign: 'center',
                    // color: '#000000',
                  }}
                  color="black "
                  value={userName}
                  onChangeText={text => setUserName(text.trim())}></TextInput>
              </View>
            )}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              margin: 20,
            }}>
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
          {!input && (
            <View
              style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'space-evenly',
                height: '30%',
                borderRadius: 1,
                shadowColor: 'black',
                elevation: 4,
                padding: 20,
                width: '90%',
              }}>
              <View style={styles.info}>
                <Work width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.business_name}</Text>
              </View>
              <View style={styles.info}>
                <Email width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.email}</Text>
              </View>
              <View style={styles.info}>
                <Iphone width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.mobile}</Text>
              </View>
              <View style={styles.info}>
                <Gps width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.location}</Text>
              </View>
            </View>
          )}
          {input && (
            <View
              style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'space-evenly',
                height: '30%',
                borderRadius: 1,
                shadowColor: 'black',
                elevation: 4,
                padding: 20,
                width: '90%',
              }}>
              <ScrollView>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                  }}>
                  <Work width={30} height={30} fill="black" />
                  <TextInput
                    style={{marginLeft: '10%'}}
                    value={businessName}
                    onChangeText={text =>
                      setBusinessName(text.trim())
                    }></TextInput>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                  }}>
                  <Email width={30} height={30} fill="black" />
                  <TextInput
                    style={{marginLeft: '10%'}}
                    value={userEmail}
                    onChangeText={text =>
                      setUseremail(text.trim())
                    }></TextInput>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                  }}>
                  <Iphone width={30} height={30} fill="black" />

                  <TextInput
                    style={{marginLeft: '10%'}}
                    color="black "
                    value={userMobileNumber}
                    onChangeText={text =>
                      setUserMobileNumber(text.trim())
                    }></TextInput>
                  {console.log(userMobileNumber)}
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                  }}>
                  <Gps width={30} height={30} fill="black" />
                  <TextInput
                    style={{marginLeft: '10%'}}
                    value={location}
                    onChangeText={text => setLocation(text.trim())}></TextInput>
                </View>
              </ScrollView>
            </View>
          )}
          {/* {input ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D3D3D3',
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5%',
                }}>
                <Work width={30} height={30} fill="black" />
                <TextInput style={{}}></TextInput>
              </View>
            ) : (
              <View style={styles.info}>
                <Work width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.business_name}</Text>
              </View>
            )} */}
          {/* {input ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D3D3D3',
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5%',
                }}>
                <Email width={30} height={30} fill="black" />
                <TextInput style={{}}></TextInput>
              </View>
            ) : (
              <View style={styles.info}>
                <Email width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.email}</Text>
              </View>
            )} */}
          {/* {input ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D3D3D3',
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5%',
                }}>
                <Iphone width={30} height={30} fill="black" />
                <TextInput style={{}}></TextInput>
              </View>
            ) : (
              <View style={styles.info}>
                <Iphone width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.mobile}</Text>
              </View>
            )} */}
          {/* <View style={styles.info}>
              <Iphone width={30} height={30} fill="black" />
              <Text style={styles.infoPadding}>{profile.mobile}</Text>
            </View> */}
          {/* {input ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D3D3D3',
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5%',
                }}>
                <Gps width={30} height={30} fill="black" />
                <TextInput style={{}}></TextInput>
              </View>
            ) : (
              <View style={styles.info}>
                <Gps width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{profile.location}</Text>
              </View>
            )} */}
          {/* <View style={styles.info}>
              <Gps width={30} height={30} fill="black" />
              <Text style={styles.infoPadding}>{profile.location}</Text>
            </View> */}
          {/* {!nuput && </ScrollView> } */}
          {input && (
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                backgroundColor: 'red',
                marginRight: 20,
                marginTop: 20,
                backgroundColor: 'black',
              }}
              onPress={() => {
                updateProfile();
                setInput(!input);
              }}>
              <Text style={{padding: 10, color: 'white'}}>Save</Text>
            </TouchableOpacity>
          )}
          {/* here */}
          <Menu />
        </View>
      </ImageBackground>
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
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
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
    borderWidth: 1,
    borderBottomColor: '#808080',
    // alignContent:"center",
    textAlign: 'center',
    width: '60%',

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
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: '10%',
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
    width: 12,
    height: 12,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    width: 25,
    height: 25,
    borderRadius: 20,
    // marginRight: 10,
    // padding: 10,
    marginTop: '-10%',
    marginLeft: 'auto',
    marginRight: '38%',
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
});
