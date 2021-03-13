import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from "@use-expo/font";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";

function ResetPassword() {
  // let [fontsLoaded] = useFonts({
  //   Poppins_800ExtraBold_Italic,
  //   Poppins_400Regular,
  // });
  let [isLoaded] = useFonts({
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const [newPassword, setNewPassword] = useState("New Password");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
  if (!isLoaded) {
    return <AppLoading />;
  } else {
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
          <Text style={styles.forgot}>Reset</Text>
          <Text style={styles.password}>Password</Text>

          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <View style={styles.signin_btn}>
            <Button title="Sign in" color="white" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_bold_text}>Back to Login</Text>
        </View>
      </View>
    );
  }
}

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
    fontFamily: "Poppins-Regular",
    padding: 30,
  },
  forgot: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 30,
    // paddingBottom: 20,
  },
  text_metag: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 40,
    letterSpacing: 3,
  },
  text_tagline: {
    fontFamily: "Poppins-Regular",
    letterSpacing: 2,
    fontSize: 15,
    color: "black",
  },
  inputEmail: {
    borderBottomColor: "white",
    borderWidth: 1,
    height: 40,
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
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // paddingTop: 60,
  },
  footer_normal_text: {
    fontFamily: "Poppins-Regular",
    marginTop: "auto",
  },
  footer_bold_text: {
    fontFamily: "Poppins-ExtraBold",
    marginTop: "auto",
    paddingTop: 170,
  },
  password: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 30,
    paddingBottom: 20,
  },
  // footer_bg: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // footer_text: {
  //   fontFamily: "Poppins_400Regular",
  //   color: "black",
  // },
});

export default ResetPassword;
