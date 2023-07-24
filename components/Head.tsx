import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { light, dark } from "../constants/Colors";
import { showCreateProp } from "../types/type";
import FONT from "../constants/FONT";

const Head = ({ showCreate }: showCreateProp) => {
  const DarkMode = useColorScheme() === "dark";
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Pressable onPress={() => showCreate(false)}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={30}
          color={DarkMode ? dark.text2 : light.text2}
        />
      </Pressable>
      <Text style={[styles.header1Txt, DarkMode && { color: dark.text }]}>
        Create To-do
      </Text>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  header1Txt: {
    fontFamily: FONT.JBold,
    fontSize: 30,
    color: "black",
    textAlign: "left",
  },
});
