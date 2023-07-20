import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import ToDoCard from "../components/ToDoCard";
import Header from "../components/Header";

const Home = () => {
  const [create, showCreate] = useState(false);

  const handlePress = () => {
    showCreate(true);
  };

  function CreateScrn({ create }: any) {
    if (create) {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Write task name"
            style={styles.input}
            placeholderTextColor="#FFFFFF"
          />
          <TextInput
            placeholder="Add Subject"
            style={[styles.input, { backgroundColor: "#F2F2F2" }]}
          />
          <View style={{ height: 200, backgroundColor: "white" }}></View>
          <Pressable style={styles.create} onPress={() => showCreate(false)}>
            <Text style={styles.cTxt}>Create</Text>
          </Pressable>
        </KeyboardAvoidingView>
      );
    } else {
      return null;
    }
  }

  return (
    <View style={styles.cont}>
      <Header />
      <View style={[styles.todoCont, create && { backgroundColor: "white" }]}>
        <View style={create && styles.newCont}>
          <Pressable
            onPress={handlePress}
            style={[create ? styles.header1 : styles.header]}
          >
            <Text style={[create ? styles.header1Txt : styles.headerTxt]}>
              Tap To Create
            </Text>
          </Pressable>
          <CreateScrn create={create} />
        </View>
        <View style={[styles.list, create && { backgroundColor: "#E7E7E7" }]}>
          <ToDoCard />
          <ToDoCard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#6F50FF",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  todoCont: {
    backgroundColor: "#E7E7E7",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  },
  header1: {
    marginVertical: 20,
  },
  header1Txt: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    textAlign: "left",
  },
  list: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  newCont: {
    padding: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#6F50FF",
    borderRadius: 10,
    marginBottom: 15,
  },
  create: {
    backgroundColor: "#6F50FF",
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  cTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
