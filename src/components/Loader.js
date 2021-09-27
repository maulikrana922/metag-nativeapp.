import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

const Loader = (props) => {
  // const { loading, ...attributes } = props;

  return (
    <Modal transparent={true} statusBarTranslucent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size={60} color="white" />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;

const styles = StyleSheet.create({
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
