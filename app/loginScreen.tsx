import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import { light } from "../constants/Colors";
import FONT from "../constants/FONT";

const LoginScreen = () => {
  const route = useRouter();
  const [username, setUser] = useState<string>("");

  const saveUser = async () => {
    if (username.trim().length === 0) {
      Alert.alert("Enter a username");
      return;
    }

    await AsyncStorage.setItem("username", username);
    route.push("index");
  };

  return (
    <View style={styles.cont}>
      <View style={styles.logCont}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.img}
          resizeMode="cover"
        />
        <View style={styles.inCont}>
          <TextInput
            placeholder="Enter a username"
            style={styles.txtInput}
            onChangeText={(text) => setUser(text)}
          />
          <Pressable onPress={saveUser}>
            <Ionicons name="chevron-forward-circle" size={50} color="#004080" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#004080",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 160,
    height: 160,
  },
  logCont: {
    backgroundColor: light.background1,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inCont: {
    width: "100%",
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  txtInput: {
    backgroundColor: light.background3,
    padding: 10,
    borderRadius: 5,
    fontFamily: FONT.JSemibold,
    width: "80%",
    textAlign: "center",
    fontSize: 16,
  },
});
