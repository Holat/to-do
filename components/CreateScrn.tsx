import {
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  useColorScheme,
  View,
} from "react-native";
import React, { useState, useCallback } from "react";
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
import Icon from "./Icon";
import Icons from "../constants/Icons";

const CreateScrn = ({ create, showCreate, setTaskItem }: createScreenProp) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [icon, setIcon] = useState("note");
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
      const newItem = { key, name, subject, date, time, icon };
      setData(newItem);
      showCreate(false);
      setName("");
      setSubject("");
      setIcon("note");
    }
  };

  const handleIconPress = useCallback((icon: string) => {
    setIcon(icon);
  }, []);

  if (create) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          flex: 1,
        }}
      >
        <TextInput
          placeholder="Write task title"
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
          multiline={true}
          numberOfLines={5}
          style={[
            styles.input,
            {
              backgroundColor: DarkMode ? dark.background3 : light.background1,
              color: DarkMode ? dark.text : light.text2,
              textAlignVertical: "top",
              flex: 1,
            },
          ]}
          onChangeText={(text) => setSubject(text)}
          placeholderTextColor={DarkMode ? dark.text3 : light.text3}
        />
        <View style={styles.iconCont}>
          {Icons.map(({ name }) => {
            const opacity = name === icon ? 1 : 0.5;
            return (
              <Icon
                key={name}
                icon={name}
                handleIconPress={handleIconPress}
                opacity={opacity}
              />
            );
          })}
        </View>
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
    backgroundColor: light.background2,
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
    backgroundColor: light.background2,
    borderRadius: 50,
    marginTop: 15,
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  iconCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
