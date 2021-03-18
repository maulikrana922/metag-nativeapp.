import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { useFonts } from "@use-expo/font";
import * as ImagePicker from "expo-image-picker";
import AppLoading from "expo-app-loading";
import AvtarImage from "../../assets/avtar.svg";
//
import exampleImg from "../../assets/splash.png";

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function CreateProfile() {
  let [isLoaded] = useFonts({
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // setImage(result.uri);
      setNewImage(result.uri);
    }
  };

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
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
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
        </View>
        <View style={styles.avtar_parent}>
          <Text style={styles.upload_text}>Upload Profile Photo</Text>
          <View style={styles.avtar_bg}>
            <Image
              // source={require("../../assets/avtar.svg")}
              source={newImage}
              style={styles.avtarImage}
            ></Image>
            <View style={styles.camera_bg}>
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
                {image && setNewImage(exampleImg)}
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
}
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
    fontFamily: "Poppins-ExtraBold",
    fontSize: 30,
    letterSpacing: 3,
    color: "white",
  },
  text_tagline: {
    fontFamily: "",
    letterSpacing: 2,
    fontSize: 10,
    color: "white",
  },
  next: {
    fontFamily: "Poppins-ExtraBold",
    color: "white",
    alignSelf: "center",
  },
  completeProfile: {
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins-ExtraBold",
    fontWeight: "700",
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
    marginRight: "auto",
    marginTop: 50,
    // alignContent: "center",
    // marginTop: "right",
    // marginBottom: "right",
  },
  avtar_bg: {
    display: "flex",
    backgroundColor: "black",
    height: 240,
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
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  upload_text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Poppins-ExtraBold",
    fontWeight: "700",
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
    marginRight: 5,
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

