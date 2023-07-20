import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import FONT from "../constants/FONT";

type showProp = {
  create: boolean;
  showCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateScrn = ({ create, showCreate }: showProp) => {
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
        />
        <TextInput
          placeholder="Add Subject"
          style={[styles.input, { backgroundColor: "#F2F2F2" }]}
        />
        <View style={{ height: 200, backgroundColor: "white" }}></View>
        <Pressable style={styles.create} onPress={() => showCreate(false)}>
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
