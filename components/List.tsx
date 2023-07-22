import { View, StyleSheet, FlatList, useColorScheme, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { light, dark } from "../constants/Colors";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons";

import ToDoCard from "./ToDoCard";
import { ListProp, DataProp } from "../types/type";
import FONT from "../constants/FONT";
// import { getAllData } from "../constants/FUNT";

const List = ({ create, taskItem, setTaskItem }: ListProp) => {
  const DarkMode = useColorScheme() === "dark";
  const renderItem = ({ item, index }: DataProp) => {
    return (
      <ToDoCard
        item={item}
        index={index}
        setTaskItem={setTaskItem}
        taskItem={taskItem}
        DarkMode={DarkMode}
      />
    );
  };

  return (
    <View
      style={[
        styles.list,
        !create && DarkMode
          ? { backgroundColor: dark.background1 }
          : create && DarkMode
          ? { backgroundColor: dark.background3 }
          : create && !DarkMode
          ? { backgroundColor: light.background3 }
          : {},
      ]}
    >
      <FlatList
        data={taskItem}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{
          paddingHorizontal: 10,
          borderRadius: 50,
        }}
        ListEmptyComponent={() => (
          <Text style={[styles.empty, DarkMode && { color: dark.text3 }]}>
            Empty
          </Text>
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  scroll: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
  },
  empty: {
    fontFamily: FONT.JSemibold,
    color: "#6E6E6E",
    textAlign: "center",
    fontSize: 15,
  },
});
