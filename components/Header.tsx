import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import FONT from "../constants/FONT";

const Header = ({ user }: { user: string }) => {
  const date = new Date();
  const hour = date.getHours();
  const month = Intl.DateTimeFormat("en", { month: "short" }).format(date);

  let timeOfDay, icon: string, clr;
  if (hour >= 5 && hour < 12) {
    timeOfDay = "morning";
    icon = "ios-partly-sunny";
    clr = "#FF8C00";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "afternoon";
    icon = "ios-sunny";
    clr = "#FF8C00";
  } else {
    timeOfDay = "evening";
    icon = "ios-moon";
    clr = "#D3D3D3";
  }

  return (
    <View style={styles.Cont}>
      <View>
        <Text style={styles.gText}>Good {timeOfDay}</Text>
        <Text style={styles.gText1}>{user}</Text>
        <View style={styles.gText23}>
          <Text style={styles.gText2}>TASK TO DO</Text>
          <Text style={styles.gText3}>
            {`${date.getDate()} ${month} ${date.getFullYear()}`}
          </Text>
        </View>
      </View>
      <Ionicons name={icon as any} size={110} color={clr} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    padding: 30,
  },
  gText: {
    color: "white",
    fontSize: 28,
    fontWeight: "300",
    fontFamily: FONT.JRegular,
  },
  gText1: {
    color: "white",
    fontSize: 28,
    fontFamily: FONT.JBold,
  },
  gText2: {
    color: "white",
    fontSize: 14,
    fontFamily: FONT.JRegular,
  },
  gText3: {
    color: "white",
    fontSize: 14,
    fontFamily: FONT.JSemibold,
  },
  gText23: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    fontFamily: FONT.Jost,
  },
});
