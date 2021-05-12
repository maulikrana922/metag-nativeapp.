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
  Share as ShareMethod,
  ActivityIndicator,
} from 'react-native';
// import AvtarImage from "../../assets/avtar.svg";
//
import axios from 'axios';
import AvtarImage from '../../assets/work-suitcase.svg';
import Avatar from '../../assets/myProfile/avatar.png';
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
// import Loader from '../components/Loader';
import {
  getToken,
  getAuthToken,
  getProfile,
  getSocialFlag,
  getRemoveProfile,
} from '../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'react-native-image-picker';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function MyProfile(props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [newImage, setNewImage] = useState(Avatar);
  const [isLoaded, setLoaded] = useState(true);
  const {token, profile, link, flag} = useSelector(state => state);
  const [input, setInput] = useState(false);
  const [userEmail, setUseremail] = useState(
    profile !== null && flag == 'true' ? profile.data[0].email : profile.email,
  );
  const [userName, setUserName] = useState(
    profile !== null && flag == 'true' ? profile.data[0].name : profile.name,
  );
  const [userMobileNumber, setUserMobileNumber] = useState(
    '' + profile !== null && flag == 'true'
      ? profile.data[0].mobile
      : profile.mobile + '',
  );
  const [businessName, setBusinessName] = useState(profile.business_name);
  const [location, setLocation] = useState(
    profile !== null && flag == 'true'
      ? profile.data[0].location
      : profile.location,
  );
  const [imageResponse, setImageResponse] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [social, setSocial] = useState('');

  console.log('printing userName', userName);
  console.log('businessName', businessName);
  console.log('linking22', link);

  const apiToken =
    profile !== null && flag === 'true'
      ? profile.data[0].api_token
      : profile.api_token;

  // signOut();
  // const [user]
  // const []
  // const [error, setError] = useState('');

  console.log(apiToken);

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
  // console.log('Profile........picture', profile.profile_pic);

  // console.log('printing profile', profile);

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //     await props.navigation.navigate('Login');
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log('Done.');
  // };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      await AsyncStorage.setItem('@flag_key', 'false');
      // await AsyncStorage.removeItem('@flag_Key')
      props.navigation.navigate('Login');
      await dispatch(getSocialFlag('false'));
      // dispatch(getSocialFlag('false'));
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // dispatch(getProfile(null));
      dispatch(getRemoveProfile(true));
      props.navigation.navigate('Login');
      // dispatch(getProfile(null));

      // props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };
  // removeValue();

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://testyourapp.online/metag/api/profile',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);
          console.log('success getting profile 4', response.data.data[0]);
          // removeValue();
          setSocial(response.data.data[0]);
          console.log('priting social', social);
          // removeData();
        } else {
          console.log('Failed', response.data);
        }
      })
      .catch(error => console.log('profile error', error));
  }, []);

  // console.log(profile.api_token);

  const logout = () => {
    axios({
      method: 'POST',
      url: 'http://testyourapp.online/metag/api/logout',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);true
          console.log('success', response.data);
          removeValue();
          // removeData();
        } else {
          console.log('Failed', response.data);
        }
      })
      .catch(error => console.log('logout data', error));
  };
  // logout();
  // console.log('logout', profile);
  // updateProfile(imgResponse);
  const updateProfile = imgResponse => {
    setShowLoader(true);
    // console.log('printing obj', imgResponse);
    let formData = new FormData();
    formData.append('id', flag ? profile.data[0].id : profile.id);
    formData.append('name', userName);
    formData.append('business_name', businessName);
    formData.append('email', userEmail);
    formData.append('mobile', Number(userMobileNumber));
    formData.append('location', location);
    image &&
      formData.append('profile_pic', {
        uri: imageResponse.uri,
        // uri: image,
        type: imageResponse.type,
        name: imageResponse.fileName,
        // data: imgResponse.data,
      });
    console.log('imgResponse', JSON.stringify(imageResponse));
    console.log('imgResponse');
    // console.log(formData);

    // var object = {};
    // formData._parts.forEach(value => (object[value[0]] = value[1]));
    // console.log(object);

    console.log('printing form data', formData);

    axios({
      method: 'POST',
      url: 'https://testyourapp.online/metag/api/profileUpdate',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        setShowLoader(false);
        if (response.data.status === 200) {
          // setNext(true);
          console.log('upload data', response.data);
          // dispatch(
          //   getProfile({
          //     ...profile,
          //     name: userName,
          //     email: userEmail,
          //     mobile: userMobileNumber,
          //     location: location,
          //     business_name: businessName,
          //     profile_pic: imageResponse,
          //   }),
          // );
          // useDispatch();
          // flag === true ? dispatch(getProfile({...profile,data[0].name:userName})):dispatch(
          //     getProfile({
          //       ...profile,
          //       name: userName,
          //       email: userEmail,
          //       mobile: userMobileNumber,
          //       location: location,
          //       business_name: businessName,
          //       profile_pic: imageResponse,
          //     }),
          //   );
        } else {
          console.log('upload error', response.data);
        }
        console.log('update profile', response);
      })
      .catch(error => console.log('catch data', error), setShowLoader(false));
  };

  let handleChoosePhoto = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, imgResponse => {
      setShowLoader(true);
      console.log('response', imgResponse);
      setShowLoader(false);
      if (imgResponse.uri) {
        console.log('image uri', imgResponse.uri);
        setImage(imgResponse.uri);

        setImageResponse(imgResponse);
        updateProfile(imgResponse);
        // console.log('token', token);
        // handleUploadPhoto(imgResponse);
      }
    });
  };

  // let getPic = () => {
  //   // const pic = !profile.profile_pic ? Avatar : profile.profile_pic;
  //   if (!profile.profile_pic) {
  //     return require('../../assets/myProfile/avatar.png');
  //   } else {
  //     return {uri: profile.profile_pic};
  //   }
  //   return {uri: image};
  // };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 1}}>
          {showLoader && (
            <Modal transparent={true} statusBarTranslucent={true}>
              <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  <ActivityIndicator size={60} color="white" />
                </View>
              </View>
            </Modal>
          )}
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
                  style={{
                    alignSelf: 'center',
                    padding: 10,
                    // backgroundColor: 'red',
                  }}>
                  <More />
                </TouchableOpacity>
              </View>
              {show && (
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: 10,
                    marginLeft: 'auto',
                    marginRight: -6,
                    marginTop: -20,
                  }}>
                  <View
                    style={{
                      transform: [{rotate: '-45deg'}],
                      backgroundColor: '#FFFFFF',
                      width: 15,
                      height: 15,
                      position: 'relative',
                      bottom: 5,
                      marginLeft: 'auto',
                      marginRight: 10,
                    }}></View>
                  <View
                    style={{
                      paddingRight: 10,
                      paddingLeft: 10,
                      paddingBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        borderBottomColor: '#E5E5E5',
                        borderBottomWidth: 1,
                        paddingBottom: '2%',
                        fontFamily: 'Poppins-Reguler',
                      }}
                      onPress={() =>
                        props.navigation.navigate('ChangePassword')
                      }>
                      Settings
                    </Text>
                    <Text
                      onPress={() => logout()}
                      style={{
                        fontSize: 16,
                        paddingTop: '2%',
                        fontFamily: 'Poppins-Reguler',
                      }}>
                      Logout
                    </Text>
                  </View>
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
                <TouchableOpacity
                  onPress={() =>
                    ShareMethod.share({
                      message: `https://metag.com/${profile.id}/details`,
                    })
                  }>
                  <Share />
                </TouchableOpacity>
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
          {/* <Image
            // source={{uri: !image ? profile.profile_pic : image}}
            // source={{uri: !image ? getPic() : image}}
            // source={!image ? getPic : {uri: image}}
            style={styles.profileImage}></Image> */}
          {/* <View style={styles.camera_bg}> */}
          {/* {!image ? (
            !profile.profile_pic ? (
              <Image source={Avatar} style={styles.profileImage}></Image>
            ) : (
              <Image
                source={{uri: profile.profile_pic}}
                style={styles.profileImage}></Image>
            )
          ) : (
            <Image source={{uri: image}} style={styles.profileImage}></Image>
          )} */}
          {console.log(image)}
          {social.profilePic === null ? (
            <Image
              source={require('../../assets/myProfile/avatar.png')}
              style={styles.profileImage}></Image>
          ) : image ? (
            <Image source={{uri: image}} style={styles.profileImage}></Image>
          ) : (
            <Image
              source={{uri: social.profilePic}}
              style={styles.profileImage}></Image>
          )}
          {/* {image && (
            <Image source={{uri: image}} style={styles.profileImage}></Image>
          )} */}
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
          {/* <ScrollView> */}
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
                {social.name}
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
                    // fontColor="black"
                    color: '#000000',
                  }}
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
              width: '100%',
              marginTop: '3%',
              // margin: 20,
              justifyContent: 'space-evenly',
            }}>
            {social.linkedin_link && (
              <Image source={linkedin} style={styles.logo}></Image>
            )}
            {social.twitter_link && (
              <Image source={twitter} style={styles.logo}></Image>
            )}
            {social.insta_link && (
              <Image source={instagram} style={styles.logo}></Image>
            )}
            {social.facebook_link && (
              <Image source={facebook} style={styles.logo}></Image>
            )}
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              // margin: 20,
              width: '80%',
              marginBottom: 10,
              // backgroundColor: 'red',
              justifyContent: 'space-evenly',
              // marginLeft: '10%',
              // marginRight: '10%',
            }}>
            {/* <View> */}

            {/* </View> */}
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
                <Text style={styles.infoPadding}>
                  {social.business_name !== 'undefined' && social.business_name}
                </Text>
              </View>
              <View style={styles.info}>
                <Email width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>{social.email}</Text>
              </View>
              <View style={styles.info}>
                <Iphone width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>
                  {social.mobile !== 0 && social.mobile}
                </Text>
              </View>
              <View style={styles.info}>
                <Gps width={30} height={30} fill="black" />
                <Text style={styles.infoPadding}>
                  {social.location !== 'null' && social.location}
                </Text>
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
                // marginRight: 40,
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
                    style={{marginLeft: '10%', color: '#000000'}}
                    value={businessName}
                    onChangeText={text => {
                      setBusinessName(text.trim());
                      setSocial({...social, business_name: text.trim()});
                    }}></TextInput>
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
                    style={{marginLeft: '10%', color: '#000000'}}
                    value={userEmail}
                    onChangeText={text => {
                      setUseremail(text.trim());
                      setSocial({...social, email: text.trim()});
                    }}></TextInput>
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
                    style={{marginLeft: '10%', color: '#000000'}}
                    value={userMobileNumber}
                    onChangeText={text => {
                      setUserMobileNumber(text.trim());
                      setSocial({...social, mobile: text.trim()});
                    }}></TextInput>
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
                    style={{marginLeft: '10%', color: '#000000'}}
                    value={location}
                    onChangeText={text => {
                      setLocation(text.trim());
                      setSocial({...social, location: text.trim()});
                    }}></TextInput>
                </View>
              </ScrollView>
            </View>
          )}
          {input && (
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                backgroundColor: 'red',
                marginRight: 20,
                marginTop: 20,
                backgroundColor: 'black',
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 50,
                width: 100,
              }}
              onPress={() => {
                // updateProfile(imageResponse);
                updateProfile();
                setInput(!input);
              }}>
              <Text style={{padding: 10, color: 'white', textAlign: 'center'}}>
                Save
              </Text>
            </TouchableOpacity>
          )}
          {/* here */}
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  profileImage: {
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
  },
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
    // marginLeft: 10,
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
  modalBackground: {
    flex: 1,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 'auto',
    height: '100%',
    // margin: 'auto',
    // paddingLeft: 'auto',
    // paddingRight: 'auto',
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    // justifyContent: 'space-around',
    // backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    // alignSelf: 'center',
    // borderRadius: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
