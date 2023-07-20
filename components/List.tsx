import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import list from "../assets/list";
import ToDoCard from "./ToDoCard";
import { todoCardProp } from "../types/type";

type ListProp = {
  create: boolean;
};

const renderItem = ({ item }: todoCardProp) => {
  return <ToDoCard item={item} />;
};

const List = ({ create }: ListProp) => {
  return (
    <View style={[styles.list, create && { backgroundColor: "#E7E7E7" }]}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
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
