import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { listProp } from "../types/type";
import list from "../assets/list";
import { getRandomLetter, getRandomNumber } from "../constants/FUNT";

import FONT from "../constants/FONT";

type showProp = {
  create: boolean;
  showCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateScrn = ({ create, showCreate }: showProp) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  // const [date, setDate] = useState();
  // const [time, setTime] = useState();
  const date = "20/07/23";
  const time = "21:38";
  const uniqueId = getRandomLetter() + getRandomNumber();

  const newItem: listProp = { id: uniqueId, name, subject, date, time };

  const handlePress = () => {
    if (!name || !subject || !date || !time) {
      Alert.alert("Enter A Task");
    } else {
      list.push(newItem);
      showCreate(false);
      setName("");
      setSubject("");
    }
  };

  if (create) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ paddingHorizontal: 20, marginBottom: 20 }}
      >
        <TextInput
          placeholder="Write task name"
          style={[
            styles.input,
            { color: "white", fontSize: 18, fontFamily: FONT.JSemibold },
          ]}
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Add Subject"
          style={[styles.input, { backgroundColor: "#F2F2F2" }]}
          onChangeText={(text) => setSubject(text)}
        />
        <View style={{ height: 200, backgroundColor: "white" }}></View>
        <Pressable style={styles.create} onPress={handlePress}>
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
      </KeyboardAvoidingView>
    );
  } else {
    return null;
  }
};

export default CreateScrn;

const styles = StyleSheet.create({
  input: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: FONT.JRegular,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#1384F8",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  create: {
    backgroundColor: "#1384F8",
    borderRadius: 50,
    marginTop: 15,
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
