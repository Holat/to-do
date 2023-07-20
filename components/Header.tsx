import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  const date = new Date();
  const hour = date.getHours();
  const month = Intl.DateTimeFormat("en", { month: "short" }).format(date);

  let timeOfDay;
  if (hour >= 5 && hour < 12) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return (
    <>
      <View style={styles.gCont}>
        <Text style={styles.gText}>Good {timeOfDay}</Text>
        <Text style={styles.gText1}>Holat</Text>
        <View style={styles.gText23}>
          <Text style={styles.gText2}>TASK TO DO</Text>
          <Text style={styles.gText3}>
            {`${date.getDate()} ${month} ${date.getFullYear()}`}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  gCont: {
    marginTop: 30,
    padding: 30,
  },
  gText: {
    color: "white",
    fontSize: 28,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  gText1: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  gText2: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  gText3: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  gText23: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});
