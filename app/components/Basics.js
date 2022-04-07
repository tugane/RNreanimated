import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import SPACING from "../config/SPACING";

export default function Basics() {
  const progress = useSharedValue(1);
  const scare = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scare.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
      borderRadius: progress.value * SPACING * 3,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scare.value = withRepeat(withSpring(2), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: SPACING * 10,
            height: SPACING * 10,
            backgroundColor: "blue",
          },
          reanimatedStyle,
        ]}
      />
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
