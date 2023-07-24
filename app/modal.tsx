import {
  StyleSheet,
  useColorScheme,
  View,
  Pressable,
  Text,
  FlatList,
} from "react-native";
import { dark, light } from "../constants/Colors";
import React, { useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { listProp } from "../types/type";
import { fetchTaskItems } from "../constants/FUNT";
import FONT from "../constants/FONT";
import HistoryCard from "../components/historyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalScreenProps } from "../types/type";

const ModalScreen: React.FC<ModalScreenProps> = () => {
  const [history, setHistory] = useState<listProp[]>([]);
  const DarkMode = useColorScheme() === "dark";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchTaskItems("history");
        setHistory(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteAll = async () => {
    setHistory([]);
    await AsyncStorage.removeItem("history");
  };
  return (
    <View
      style={[
        styles.container,
        DarkMode && { backgroundColor: dark.background1 },
      ]}
    >
      {history.length > 0 ? (
        <>
          <Pressable
            style={[
              styles.bin,
              DarkMode && { backgroundColor: dark.background2 },
            ]}
            onPress={deleteAll}
          >
            <Ionicons name="ios-trash-outline" size={30} color="white" />
          </Pressable>
          <FlatList
            data={history}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <HistoryCard DarkMode={DarkMode} item={item} />
            )}
          />
        </>
      ) : (
        <View style={styles.emptyCont}>
          <Text style={styles.emptyTxt}>No Completed Task</Text>
          <Text style={[styles.emptyTxt, { fontFamily: FONT.JRegular }]}>
            Tasks that are marked will show here
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  bin: {
    zIndex: 100,
    backgroundColor: light.background2,
    borderRadius: 50,
    width: 60,
    aspectRatio: 1,
    position: "absolute",
    bottom: 30,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  emptyCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTxt: {
    color: light.text3,
    fontFamily: FONT.JSemibold,
  },
});
