import { StyleSheet, View } from "react-native";
import InterpolateScrollView from "./app/components/InterpolateScrollView";

export default function App() {
  return (
    <View style={styles.container}>
      <InterpolateScrollView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
