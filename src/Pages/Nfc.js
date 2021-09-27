import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import NfcProxy from './NfcProxy';
// import url from '../BaseURl/baseurl.json';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {getUrl} from '../redux/reducer';

const Nfc = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const { token, profile, link, flag } = useSelector(state => state);
  // const apiToken =p
  //   profile !== null && flag === 'true'
  //     ? profile.data[0].api_token
  //     : profile !== null && profile.api_token;

  //   useEffect(() => {
  //     initNfc();
  // //    axios({
  // //      method: 'GET',
  // //      url: `${url.baseurl}profile`,
  // //      headers: {
  // //        Authorization: 'Bearer ' + apiToken,
  // //      },
  // //    })
  // //      .then(response => {
  // //        if (response.data.status === 200) {
  // //          // setNext(true);
  // //          console.log('success getting profile 4', response.data.data[0]);
  // //          // removeValue();
  // //          if (response.data.data[0]) {
  // //            setSocial(response.data.data[0]);
  // //          }
  // //          // if(response.data)
  // //
  // //          console.log('priting social', social);
  // //          // removeData();
  // //        } else {
  // //          console.log('Failed', response.data);
  // //        }
  // //      })
  // //      .catch(error => console.log('profile error', error));
  //   }, []);

  // const [social, setSocial] = useState('');

  // const initNfc = async () => {
  //   await NfcManager.start();
  //  writeNdef();
  //   // readNdef();
  // };

  async function writeNdef(value) {
    await NfcManager.start();
    let result = false;

    try {
      // Step 1
      await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to write some NDEF',
      });

      const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);

      if (bytes) {
        await NfcManager.ndefHandler // Step2
          .writeNdefMessage(bytes); // Step3

        if (Platform.OS === 'ios') {
          await NfcManager.setAlertMessageIOS('Successfully write NDEF');
        }

        if (Platform.OS === 'android') {
          await Alert.alert('Android NFC', 'Succcessfully write NDFF', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      }

      result = true;
    } catch (ex) {
      console.warn(ex);
    }

    // Step 4
    NfcManager.cancelTechnologyRequest().catch(() => 0);
    return result;
  }

  // function readNdef() {
  //   const cleanUp = () => {
  //     NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
  //     NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  //   };

  //   return new Promise((resolve) => {
  //     let tagFound = null;

  //     NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
  //       tagFound = tag;
  //       resolve(tagFound);
  //       NfcManager.setAlertMessageIOS('NDEF tag found');
  //       Alert.alert(`NDEF Tag found,${tag}`)
  //       NfcManager.unregisterTagEvent().catch(() => Alert.alert(`NDEF TAG NOT FOUND`));
  //     });

  //     NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
  //       cleanUp();
  //       if (!tagFound) {
  //         resolve();
  //       }
  //     });

  //     NfcManager.registerTagEvent();
  //   });
  // }

  const Read = () => {
    async () => {
      const tag = await NfcProxy.readTag();

      if (tag) {
        // const techs = await getTechList(tag);
        const ndef =
          (await Array.isArray(tag.ndefMessage)) && tag.ndefMessage.length > 0
            ? tag.ndefMessage[0]
            : null;
        let text = await Ndef.text.decodePayload(ndef.payload);
        // console.log("text>>>>>>>>>", text)
        // console.log('readingTag >>>>>>', tag.id, text);
        const newText = await JSON.parse(text);
        await setobj2(newText);
        await setVisible(true);
        newText.tagId = tag.id;
        console.log('text...', newText);
        dispatch(getUrl(newText));
        navigation.navigate('Contact');

        // navigation.navigate('TagDetail', {tag});
        // console.log("tag....",tag)
        //  const res = await JSON.parse(tag)
        //  alert(res)
      }
    };
  };

  const fn = async () => {
    const obj = await JSON.stringify({
      url: text,
      // address: text2,
      // number: text3,
    });
    // writeNdef()
    await console.log('....', typeof obj);
    await console.log(obj);
    // await alert("ok")
    writeNdef(obj);
  };

  const [text, setText] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [visible, setVisible] = useState(false);
  const [obj2, setobj2] = useState('');

  return (
    <SafeAreaView style={{marginTop: 'auto', marginBottom: 'auto'}}>
      {/* {visible === true && (
        <Modal transparent={true} visible={visible}>
          {console.log('vvv', visible)}
          {console.log('in modal')}
          <View style={{flex: 1, justifyContent: 'center'}}>
            {console.log('asdsdsd', obj2, typeof obj2)}
            <View
              style={{
                margin: 20,
                backgroundColor: '#fff',
                height: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>
                name: {obj2.name}
              </Text>
              <Text style={{fontSize: 30, textAlign: 'center'}}>
                your address: {obj2.address}
              </Text>
              <Text style={{fontSize: 30, textAlign: 'center'}}>
                number: {obj2.number}
              </Text>
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={{
                  marginTop: '10%',
                  backgroundColor: 'pink',
                  width: '30%',
                  height: '10%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                <Text style={{textAlign: 'center', fontSize: 30}}>okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )} */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={{marginBottom: 70, marginLeft: 10, fontSize: 20}}>
            Testing NFC
          </Text>
          <Text style={{marginLeft: 20}}>URL</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              color: 'black',
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          {/* <Text style={styles.marginLeft}>Full Address</Text>
          <TextInput
            onChangeText={setText2}
            value={text2}
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              color: 'black',
            }}
          /> */}
          {/* <Text style={styles.marginLeft}>Number</Text>
          <TextInput
            onChangeText={setText3}
            value={text3}
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              color: 'black',
            }}
          /> */}
          <View style={{marginTop: '30%'}}>
            {/* <Button
            onPress={Read()}
            title="read"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
            <Pressable
              onPress={Read()}
              style={{
                backgroundColor: '#841584',
                marginRight: 70,
                paddingVertical: 10,
                marginLeft: 70,
                alignItems: 'center',
                height: 'auto',
                // textAlign: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Read</Text>
            </Pressable>
            <View style={{height: 20}}></View>

            {/* <Button
            onPress={() => fn()}
            title="write"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
            <Pressable
              onPress={fn()}
              style={{
                backgroundColor: '#841584',
                marginRight: 70,
                paddingVertical: 10,
                marginLeft: 70,
                alignItems: 'center',
                height: 'auto',
                // textAlign: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Write</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Nfc;

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 20,
    marginTop: 20,
  },
});
