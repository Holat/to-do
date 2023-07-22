import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import List from "../components/List";
import list from "../assets/list";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View></View>
      {/* <List create={false} taskItem={list} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: 50,
  },
});
