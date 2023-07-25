import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../components/Header";
import CreateScrn from "../components/CreateScrn";
import List from "../components/List";
import FONT from "../constants/FONT";
import { listProp } from "../types/type";
import { light, dark } from "../constants/Colors";
import Head from "../components/Head";

const Home = () => {
  const router = useRouter();
  const [create, showCreate] = useState(false);
  const [username, setUser] = useState<string>("");
  const [taskItem, setTaskItem] = useState<listProp[]>([]);
  const DarkMode = useColorScheme() === "dark";

  useEffect(() => {
    checkUsername();
  }, []);

  const checkUsername = async () => {
    const username = await AsyncStorage.getItem("username");
    if (!username) {
      router.push("loginScreen");
    } else {
      setUser(username);
    }
  };

  return (
    <View
      style={[styles.cont, DarkMode && { backgroundColor: dark.background2 }]}
    >
      <Pressable style={styles.history} onPress={() => router.push("modal")}>
        <FontAwesome5 name="history" size={24} color="lightgray" />
      </Pressable>
      <Header user={username} />
      <View
        style={[
          styles.todoCont,
          create && DarkMode
            ? { backgroundColor: dark.background1 }
            : create && !DarkMode
            ? { backgroundColor: light.background1 }
            : !create && DarkMode
            ? { backgroundColor: dark.background3 }
            : {},
        ]}
      >
        <Pressable
          onPress={() => showCreate(true)}
          style={[create ? styles.header1 : styles.header]}
        >
          {create ? (
            <Head showCreate={showCreate} />
          ) : (
            <Text style={styles.headerTxt}>Tap To Create</Text>
          )}
        </Pressable>
        <CreateScrn
          create={create}
          showCreate={showCreate}
          setTaskItem={setTaskItem}
        />
        <List create={create} taskItem={taskItem} setTaskItem={setTaskItem} />
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
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
    marginTop: 30,
    marginBottom: 20,
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
