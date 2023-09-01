import { StyleSheet, View, Text } from "react-native";
import { dark } from "../constants/Colors";
import React from "react";

import { historyCardProp } from "../types/type";
import FONT from "../constants/FONT";
import Icon from "./Icon";

const HistoryCard = ({ DarkMode, item }: historyCardProp) => {
  return (
    <View style={[styles.cont, DarkMode && { backgroundColor: "#001f3f40" }]}>
      <View style={styles.cont1}>
        <Icon icon={item.icon} opacity={1} />
        <View>
          <Text style={[styles.txt1, DarkMode && { color: dark.text }]}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.txt2}>{item.date}</Text>
            <Text style={styles.txt2}>{item.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#1384F820",
  },
  icon: {
    backgroundColor: "#1384F8",
    width: 50,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  txt1: {
    fontSize: 15,
    fontFamily: FONT.JBold,
  },
  txt2: {
    fontSize: 12,
    color: "#6E6E6E",
    marginRight: 5,
    fontFamily: FONT.JRegular,
  },
});
export default HistoryCard;
