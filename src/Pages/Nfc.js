import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';
import url from '../BaseURl/baseurl.json';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Nfc = () => {
  // const { token, profile, link, flag } = useSelector(state => state);
  // const apiToken =
  //   profile !== null && flag === 'true'
  //     ? profile.data[0].api_token
  //     : profile !== null && profile.api_token;

  useEffect(() => {
    initNfc();
//    axios({
//      method: 'GET',
//      url: `${url.baseurl}profile`,
//      headers: {
//        Authorization: 'Bearer ' + apiToken,
//      },
//    })
//      .then(response => {
//        if (response.data.status === 200) {
//          // setNext(true);
//          console.log('success getting profile 4', response.data.data[0]);
//          // removeValue();
//          if (response.data.data[0]) {
//            setSocial(response.data.data[0]);
//          }
//          // if(response.data)
//
//          console.log('priting social', social);
//          // removeData();
//        } else {
//          console.log('Failed', response.data);
//        }
//      })
//      .catch(error => console.log('profile error', error));
  }, []);

  const [social, setSocial] = useState('');


  const initNfc = async () => {
    await NfcManager.start();
   writeNdef();
    // readNdef();
  };

  async function writeNdef({ type, value }) {
    let result = false;

    try {
      // Step 1
      await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to write some NDEF',
      });

      const bytes = Ndef.encodeMessage([
        Ndef.textRecord(
          `http://testyourapp.online/metag/userDetails/206`
        ),
      ]);

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
            { text: 'OK', onPress: () => console.log('OK Pressed') },
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

  function readNdef() {
    const cleanUp = () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      NfcManager.setEventListener(NfcEvents.SessionClosed, null);
    };

    return new Promise((resolve) => {
      let tagFound = null;

      NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
        tagFound = tag;
        resolve(tagFound);
        NfcManager.setAlertMessageIOS('NDEF tag found');
        Alert.alert(`NDEF Tag found,${tag}`)
        NfcManager.unregisterTagEvent().catch(() => Alert.alert(`NDEF TAG NOT FOUND`));
      });

      NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
        cleanUp();
        if (!tagFound) {
          resolve();
        }
      });

      NfcManager.registerTagEvent();
    });
  }



  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text>Testing NFC</Text>
      </View>
    </SafeAreaView>
  );
};

export default Nfc;
