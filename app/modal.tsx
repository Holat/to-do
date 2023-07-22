import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import List from "../components/List";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <List create={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
