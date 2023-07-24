import {
  StyleSheet,
  useColorScheme,
  View,
  Pressable,
  Text,
  FlatList,
} from "react-native";
import { dark } from "../constants/Colors";
import React, { useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { listProp } from "../types/type";
import { fetchTaskItems } from "../constants/FUNT";
import FONT from "../constants/FONT";
import HistoryCard from "../components/historyCard";

export default function ModalScreen() {
  const [history, setHistory] = useState<listProp[]>([]);

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

  const DarkMode = useColorScheme() === "dark";

  return (
    <View
      style={[
        styles.container,
        DarkMode && { backgroundColor: dark.background1 },
      ]}
    >
      <FlatList
        data={history}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <HistoryCard DarkMode={DarkMode} item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "white",
  },
});
