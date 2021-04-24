import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

const Nfc = () => {
    useEffect(() => {
        initNfc();
    }, [])

    const initNfc = async () => {
        await NfcManager.start();
        writeNdef();
    }

    async function writeNdef({ type, value }) {
        let result = false;

        try {
            // Step 1
            await NfcManager.requestTechnology(NfcTech.Ndef, {
                alertMessage: 'Ready to write some NDEF',
            });

            const bytes = Ndef.encodeMessage([Ndef.textRecord('https://www.samsung.com/uk/support/mobile-devices/what-is-nfc-and-how-do-i-use-it/')]);

            if (bytes) {
                await NfcManager.ndefHandler // Step2
                    .writeNdefMessage(bytes); // Step3

                if (Platform.OS === 'ios') {
                    await NfcManager.setAlertMessageIOS('Successfully write NDEF');
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

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <View>
                <Text>Testing NFC</Text>
            </View>
        </SafeAreaView>
    );
}

export default Nfc;