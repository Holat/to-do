import { StyleSheet, useColorScheme, View } from "react-native";
import { dark } from "../constants/Colors";

export default function ModalScreen() {
  const DarkMode = useColorScheme() === "dark";

  return (
    <View
      style={[
        styles.container,
        DarkMode && { backgroundColor: dark.background1 },
      ]}
    >
      <View></View>
      {/* <List create={false} taskItem={list} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "white",
  },
});
