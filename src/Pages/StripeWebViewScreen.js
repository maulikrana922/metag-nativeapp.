import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {WebView} from 'react-native-webview';
import url from '../BaseURl/baseurl.json';

// import Back from '../assets/images/back-arrow.png';
// import Logo from '../assets/images/splashlogo.png';
import Loader from '../components/Loader';
// import {
//   disconnectStripeAction,
//   getStripeStatusAction,
// } from '../redux/action/userLoginAction';

const StripeWebViewScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const {token, profile, link, flag, products} = useSelector(state => state);
  const [isModalVisible, setModalVisible] = useState(false);
  const uri = `https://connect.stripe.com/oauth/v2/authorize?response_type=code&client_id=ca_KI3F2gwYcY50PRG56IBByypySbzPXA99&scope=read_write&state=${profile.id}`;
  console.log('Profile Id :', profile.id);
  // const uri = `https://connect.stripe.com/oauth/v2/authorize?response_type=code&client_id=ca_JqM2jw0UuIhLjMmFk4uNJ9IiNv6cFmvf&scope=read_write&state=${profile.id}`;
  const dispatch = useDispatch();
  const onBack = () => {
    navigation.goBack();
    navigation.replace('Home');
  };

  const onSkip = () => {
    navigation.goBack();
    navigation.replace('Home');
  };

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  //   // if (userLoginInfo.status == 400) {
  //   //   dispatch(resetAction());
  //   // }
  // };

  // const disconnectStripeBtnHandler = () => {
  //   setModalVisible(false);
  //   dispatch(disconnectStripeAction());
  //   props.navigation.replace('WebViewScreen');
  // };

  // useEffect(() => {
  //   dispatch(getStripeStatusAction());
  // }, [dispatch]);

  // <PopupModal
  //   isModalVisible={isModalVisible}
  //   toggleModal={toggleModal}
  //   disconnectStripeBtnHandler={disconnectStripeBtnHandler}
  //   isFromStripeScreen={true}></PopupModal>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.leftWrapper}>
          <Image source={null} style={styles.back} />
          <Text style={styles.title}>meTAG</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity> */}
      </View>
      <WebView
        onLoad={() => setLoading(false)}
        source={{uri: uri}}
        onNavigationStateChange={async webViewState => {
          if (
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/done/' ||
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/done'
          ) {
            // dispatch(getStripeStatusAction());
            await dispatch(updateProduct(id));

            navigation.navigate('ViewAll');
          }
          if (
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/done' ||
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/done/'
          ) {
            console.log('=================22', webViewState.url);
            // dispatch(getStripeStatusAction());
            await dispatch(updateProduct(id));

            navigation.navigate('ViewAll');
          }
          if (
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/error' ||
            webViewState.url ==
              'https://testyourapp.online/metag-backend/payment/error/'
          ) {
            console.log('=================33', webViewState.url);
            // dispatch(getStripeStatusAction());

            navigation.navigate('ViewAll');
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1E0A3D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  skip: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StripeWebViewScreen;
