import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold_Italic,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function Login() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold_Italic,
    Poppins_400Regular,
  });
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  // const [text,set]

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Image
          source={require("../../assets/logo.jpg")}
          style={{ width: 50, height: "auto" }}
        />
        <View style={styles.header}>
          <Text style={styles.text_metag}>meTAG</Text>
          <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
        </View>
      </View>
      <View style={styles.background}>
        <Text style={styles.signin}>Sign in</Text>

        <TextInput
          style={styles.inputEmail}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inputEmail}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.signin_btn}>
          <Button title="Sign in" color="white" />
        </View>

        <View style={styles.key_text_parent}>
          <Image
            source={require("../../assets/key.png")}
            style={styles.key_img}
          ></Image>
          <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.icon_parent}>
        <Text style={styles.text}>Sign in with:</Text>
        <View style={styles.bg_img_icon}>
          <Image
            source={require("../../assets/icons8-instagram.svg")}
            style={styles.img_icon}
          ></Image>
          <Image
            source={require("../../assets/icons8-facebook.svg")}
            style={styles.img_icon}
          ></Image>
          <Image
            source={require("../../assets/icons8-google.svg")}
            style={styles.img_icon}
          ></Image>
        </View>
      </View>
    </View>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    // flex: 2,
    backgroundColor: "black",
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 0,
    padding: 30,
    height: "auto",
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    paddingLeft: 20,
  },
  headerBackground: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 20,
  },
  text: {
    fontFamily: "Poppins_800ExtraBold_Italic",
    padding: 30,
  },
  signin: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 30,
    paddingBottom: 20,
  },
  text_metag: {
    fontFamily: "Poppins_800ExtraBold_Italic",
    fontSize: 40,
    letterSpacing: 3,
  },
  text_tagline: {
    fontFamily: "Poppins_400Regular",
    letterSpacing: 2,
    fontSize: 15,
    color: "black",
  },
  inputEmail: {
    borderBottomColor: "white",
    borderWidth: 1,
    height: 43,
    color: "white",
  },
  signin_btn: {
    paddingTop: 20,
    alignItems: "flex-end",
  },
  key_text_parent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    paddingTop: 30,
  },
  forgotpasword_text: {
    color: "white",
  },
  key_img: {
    width: 20,
    height: 20,
    color: "white",
  },
  icon_parent: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  img_icon: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
