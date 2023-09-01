import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import Icons from "../constants/Icons";

const getIcon = (icon: string) => {
  switch (icon) {
    case "edit":
      return <AntDesign name="edit" size={24} color="white" />;
    case "message":
      return <FontAwesome name="envelope" size={24} color="white" />;
    case "folder":
      return <FontAwesome name="folder" size={24} color="white" />;
    case "meet":
      return <FontAwesome name="group" size={24} color="white" />;
    case "grocery":
      return <FontAwesome5 name="apple-alt" size={24} color="white" />;
    default:
      return <FontAwesome5 name="clipboard-list" size={24} color="white" />;
  }
};

const Icon = ({
  icon,
  handleIconPress,
  opacity,
}: {
  icon: string;
  handleIconPress?: (icon: string) => void;
  opacity: number;
}) => {
  const getIconColor = () => {
    const item = Icons.find((item) => item.name === icon);
    if (item) return item.color;

    return "#1384F8";
  };

  return (
    <TouchableOpacity
      onPress={() => handleIconPress?.(icon)}
      style={[
        styles.icon,
        { backgroundColor: getIconColor(), opacity: opacity },
      ]}
    >
      {getIcon(icon)}
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  iconCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
