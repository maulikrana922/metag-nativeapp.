import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold_Italic,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";

export default function CreateProfile() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold_Italic,
    Poppins_400Regular,
  });
  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   } else {
  return (
    <View>
      <View style={styles.header_parent}>
        <View>
          <View style={styles.header}>
            {/* <View style={styles.arrowback}></View> */}
            <Image
              source={require("../../assets/arrow-back.svg")}
              style={styles.arrowback}
            ></Image>
            <View style={styles.headerBackground}>
              <Image
                source={require("../../assets/logo.jpg")}
                style={{ width: 50, height: "auto" }}
              />
              <View style={styles.header_text}>
                <Text style={styles.text_metag}>meTAG</Text>
                <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
              </View>
            </View>
            <Text style={styles.next}>Next</Text>
          </View>
          <Text style={styles.complateProfile}>Complete Profile</Text>
        </View>
      </View>
      <View style={styles.avtar_parent}>
        <Text style={styles.upload_text}>Upload Profile Photo</Text>
        <View style={styles.avtar_bg}>
          <Image
            source={require("../../assets/avtar.svg")}
            style={styles.avtarImage}
          ></Image>
          <View style={styles.camera_bg}>
            <View style={styles.white_bg}>
              <Image
                source={require("../../assets/camera-icon.svg")}
                style={styles.camera_img}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
// }
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 100,
    display: "flex",
    flexDirection: "row",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: "space-around",
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    alignSelf: "center",
    marginLeft: 20,
    // color: "white",
  },
  headerBackground: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 20,
    alignSelf: "center",
    // paddingRight: 40,
  },
  header_text: {
    flex: 1,
    flexDirection: "column",
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: "Poppins_800ExtraBold_Italic",
    fontSize: 30,
    letterSpacing: 3,
    color: "white",
  },
  text_tagline: {
    fontFamily: "Poppins_400Regular",
    letterSpacing: 2,
    fontSize: 10,
    color: "white",
  },
  next: {
    fontFamily: "Poppins_800ExtraBold_Italic",
    color: "white",
    alignSelf: "center",
  },
  complateProfile: {
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_800ExtraBold_Italic",
    paddingBottom: 10,
    // backgroundColor: "black",
    // width: "auto",
  },
  header_parent: {
    backgroundColor: "#000000",
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avtarImage: {
    height: 100,
    width: 100,
    flexDirection: "column",
    backgroundColor: "black",
    marginLeft: "auto",
    marginRight:
      "auto                                                              ",
    // alignContent: "center",
    // justifyContent: "center",
  },
  avtar_bg: {
    display: "flex",
    backgroundColor: "black",
    height: 200,
    width: 200,
    justifyContent: "center",
    borderRadius: 20,
  },
  avtar_parent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  upload_text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Poppins_800ExtraBold_Italic",
  },
  camera_img: {
    width: 20,
    height: 20,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: "white",
    marginBottom: "auto",
    marginTop: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    // padding: 20,
    // marginTop: 40,
    // marginRight: 10,
    // borderRadius: 20,
  },
  camera_bg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 50,
    marginRight: 10,
    marginBottom: 10,
    // width: "auto",
    // borderRadius: 20,
    // backgroundColor: "white",
  },
  white_bg: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    // padding: 10,
    justifyContent: "flex-end",
  },
});
