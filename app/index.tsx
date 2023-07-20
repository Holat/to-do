import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

import Header from "../components/Header";
import CreateScrn from "../components/CreateScrn";
import List from "../components/List";
import FONT from "../constants/FONT";

const Home = () => {
  const [create, showCreate] = useState(false);

  const handlePress = () => {
    showCreate(true);
  };

  return (
    <View style={styles.cont}>
      <Link href={"modal"} asChild>
        <Pressable style={styles.history}>
          <FontAwesome5 name="history" size={24} color="lightgray" />
        </Pressable>
      </Link>
      <Header />
      <View style={[styles.todoCont, create && { backgroundColor: "white" }]}>
        <View style={create && styles.newCont}>
          <Pressable
            onPress={handlePress}
            style={[create ? styles.header1 : styles.header]}
          >
            <Text style={[create ? styles.header1Txt : styles.headerTxt]}>
              {create ? "Create To-do" : "Tap To Create"}
            </Text>
          </Pressable>
          <CreateScrn create={create} showCreate={showCreate} />
          <List create={create} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#1384F8",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  todoCont: {
    backgroundColor: "#E7E7E7",
    flex: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  history: {
    position: "absolute",
    top: StatusBar.currentHeight,
    marginTop: 10,
    right: 30,
  },
  header: {
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headerTxt: {
    textAlign: "center",
    fontWeight: "500",
    color: "#6E6E6E",
    fontFamily: FONT.JSemibold,
  },
  header1: {
    marginVertical: 20,
    paddingLeft: 20,
  },
  header1Txt: {
    fontFamily: FONT.JBold,
    fontSize: 30,
    color: "black",
    textAlign: "left",
  },

  newCont: {
    paddingVertical: 20,
  },
});

export default Home;
