import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { todoCardProp } from "../types/type";
import FONT from "../constants/FONT";
import { dark, light } from "../constants/Colors";
import { historyDelete, setHistory } from "../constants/FUNT";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import useCardAnimation from "./Animation/useCardAnimation";
import Icon from "./Icon";

const ToDoCard = ({
  item,
  setTaskItem,
  DarkMode,
  simultaneousHandlers,
}: todoCardProp) => {
  // deletes the task which does not add the task to the history storage
  const handleDelete = async () => {
    const updatedData = await historyDelete(item);
    setTaskItem(updatedData);
  };
  const { rStyles, operations } = useCardAnimation(handleDelete);

  // adds the completed tasks to the history storage
  const handleSetHistory = async () => {
    const historyItems = await setHistory(item);
    setTaskItem(historyItems);
  };

  return (
    <Animated.View
      exiting={FadeOutLeft}
      entering={FadeInLeft}
      style={[styles.main, rStyles.rCardStyle]}
    >
      <Animated.View style={[styles.abDelete, rStyles.rIconStyle]}>
        <Ionicons name="ios-trash-outline" size={24} color="#ffffff" />
      </Animated.View>
      {/**
       * failOffsetY={[-5, 5]}
       * activeOffsetX={[-5, 5]}
       * simultaneousHandlers={simultaneousHandlers}
       * Props used to prevent the gesture of the card from interfering with flatlist scroll
       */}
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={operations.panGestureEvent}
      >
        <Animated.View
          style={[
            styles.cont,
            DarkMode && { backgroundColor: dark.background2 },
            rStyles.rStyle,
          ]}
        >
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
          <View style={styles.cont1}>
            <Pressable onPress={handleSetHistory}>
              <FontAwesome name="check" size={24} color="#1CB674" />
            </Pressable>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default ToDoCard;

const styles = StyleSheet.create({
  main: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 5,
    position: "relative",
  },
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: light.background2,
    borderRadius: 20,
    flex: 1,
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
    color: "#CCCCCC",
    marginRight: 5,
    fontFamily: FONT.JRegular,
  },
  abDelete: {
    backgroundColor: "#ED187A",
    position: "absolute",
    right: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    height: "100%",
  },
});
