import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { listProp, todoCardProp } from "../types/type";
import FONT from "../constants/FONT";
import { light, dark } from "../constants/Colors";

const ToDoCard = ({
  item,
  index,
  setTaskItem,
  taskItem,
  DarkMode,
}: todoCardProp) => {
  const handleDelete = async () => {
    try {
      const existingData = await AsyncStorage.getItem("itemData");
      let DataArray = existingData ? JSON.parse(existingData) : [];

      const updatedData = DataArray.filter(
        (item1: listProp) => item1.key !== item.key
      );
      setTaskItem(updatedData);
      await AsyncStorage.setItem("itemData", JSON.stringify(updatedData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.cont, DarkMode && { backgroundColor: "#001f3f40" }]}>
      <View style={styles.cont1}>
        <View
          style={[
            styles.icon,
            DarkMode && { backgroundColor: dark.background2 },
          ]}
        >
          <FontAwesome5 name="clipboard-list" size={24} color="white" />
        </View>
        <View>
          <Text style={[styles.txt1, DarkMode && { color: dark.text }]}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.txt2}>{item.date}</Text>
            <Text style={styles.txt2}>{item.time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cont1}>
        <Pressable onPress={handleDelete}>
          <Ionicons name="ios-trash-outline" size={24} color="#ED187A" />
        </Pressable>
        <FontAwesome name="check" size={24} color="#1CB674" />
      </View>
    </View>
  );
};

export default ToDoCard;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#1384F820",
  },
  icon: {
    backgroundColor: "#1384F8",
    width: 50,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  txt1: {
    fontSize: 15,
    fontFamily: FONT.JBold,
  },
  txt2: {
    fontSize: 12,
    color: "#6E6E6E",
    marginRight: 5,
    fontFamily: FONT.JRegular,
  },
});
