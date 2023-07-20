import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";

const ToDoCard = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.cont1}>
        <View style={styles.icon}>
          <FontAwesome5 name="clipboard-list" size={24} color="white" />
        </View>
        <View>
          <Text style={styles.txt1}>Pay Bills</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.txt2}>11/20/23</Text>
            <Text style={styles.txt2}>11:30</Text>
          </View>
        </View>
      </View>
      <View style={styles.cont1}>
        <Ionicons name="ios-trash-outline" size={24} color="#ED187A" />
        <FontAwesome name="check" size={24} color="#1CB674" />
      </View>
    </View>
  );
};

export default ToDoCard;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#E4E4FF",
  },
  icon: {
    backgroundColor: "#6F50FF",
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
    fontWeight: "500",
    fontSize: 15,
  },
  txt2: {
    fontWeight: "400",
    fontSize: 12,
    color: "#6E6E6E",
    marginRight: 5,
  },
});
