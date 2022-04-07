import { StyleSheet, View } from "react-native";
import AppPanGestureHandler from "./app/components/PanGestureHandler";

export default function App() {
  return (
    <View style={styles.container}>
      <AppPanGestureHandler />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
