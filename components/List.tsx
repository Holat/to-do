import { View, StyleSheet, FlatList, useColorScheme, Text } from "react-native";
import React from "react";
import { light, dark } from "../constants/Colors";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";

import ToDoCard from "./ToDoCard";
import { ListProp, DataProp } from "../types/type";
import FONT from "../constants/FONT";
import list from "../assets/list";
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

  const Empty = () => {
    return (
      <View style={styles.emptyCont}>
        <FontAwesome5
          name="clipboard-list"
          size={150}
          color={DarkMode ? dark.background3 : light.background3}
        />
        <Text style={[styles.empty, DarkMode && { color: dark.background3 }]}>
          No To-do
        </Text>
      </View>
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
      {taskItem.length > 0 ? (
        <FlatList
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          contentContainerStyle={{
            paddingHorizontal: 10,
            borderRadius: 50,
          }}
        />
      ) : (
        <Empty />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 5,
    flex: 1,
    flexGrow: 1,
  },
  scroll: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
  },
  emptyCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    fontFamily: FONT.JBold,
    color: "#6E6E6E",
    textAlign: "center",
    fontSize: 20,
  },
});
