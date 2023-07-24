import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getRandomLetter,
  getRandomNumber,
  getCurrentDateAndTime,
} from "../constants/FUNT";
import FONT from "../constants/FONT";
import { createScreenProp, listProp } from "../types/type";
import { light, dark } from "../constants/Colors";

const CreateScrn = ({ create, showCreate, setTaskItem }: createScreenProp) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const { date, time } = getCurrentDateAndTime();
  const key = getRandomLetter() + getRandomNumber();
  const DarkMode = useColorScheme() === "dark";

  const setData = async (newTask: listProp) => {
    try {
      const Data = await AsyncStorage.getItem("itemData");
      let DataArray = Data ? JSON.parse(Data) : [];
      const newDataArray = [...DataArray, newTask];

      setTaskItem(newDataArray);
      await AsyncStorage.setItem("itemData", JSON.stringify(newDataArray));
    } catch (error) {
      console.error("error saving data");
    }
  };

  const handlePress = () => {
    if (!name || !subject || !date || !time) {
      Alert.alert("Enter A Task");
    } else {
      const newItem = { key, name, subject, date, time };
      setData(newItem);
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
            DarkMode && { backgroundColor: dark.background2 },
          ]}
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Add Subject"
          style={[
            styles.input,
            {
              backgroundColor: DarkMode ? dark.background3 : light.background1,
              color: DarkMode ? dark.text : light.text2,
            },
          ]}
          onChangeText={(text) => setSubject(text)}
          placeholderTextColor={DarkMode ? dark.text3 : light.text3}
        />
        <View
          style={{
            height: 200,
            backgroundColor: DarkMode ? dark.background1 : light.background1,
          }}
        ></View>
        <Pressable
          style={[
            styles.create,
            DarkMode && { backgroundColor: dark.background2 },
          ]}
          onPress={handlePress}
        >
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
