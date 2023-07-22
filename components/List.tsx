import { View, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import list from "../assets/list";
import ToDoCard from "./ToDoCard";
import { ListProp, DataProp } from "../types/type";
// import { getAllData } from "../constants/FUNT";

const List = ({ create }: ListProp) => {
  // const [data, setData] = useState<DataItems[]>([]);

  const renderItem = ({ item }: DataProp) => {
    return <ToDoCard item={item} />;
  };

  return (
    <View style={[styles.list, create && { backgroundColor: "#E7E7E7" }]}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        // style={[styles.scroll, create && { backgroundColor: "#E7E7E7" }]}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{
          paddingHorizontal: 10,
          borderRadius: 50,
        }}
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
});
