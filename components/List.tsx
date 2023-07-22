import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons";

import ToDoCard from "./ToDoCard";
import { ListProp, DataProp } from "../types/type";
import FONT from "../constants/FONT";
// import { getAllData } from "../constants/FUNT";

const List = ({ create, taskItem, setTaskItem }: ListProp) => {
  const renderItem = ({ item, index }: DataProp) => {
    return (
      <ToDoCard
        item={item}
        index={index}
        setTaskItem={setTaskItem}
        taskItem={taskItem}
      />
    );
  };

  return (
    <View style={[styles.list, create && { backgroundColor: "#E7E7E7" }]}>
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
        ListEmptyComponent={() => <Text style={styles.empty}>Empty</Text>}
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
