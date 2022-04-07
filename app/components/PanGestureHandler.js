import { View, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import SPACING from "../config/SPACING";
import { PanGestureHandler } from "react-native-gesture-handler";
const CIRCLE_RADIUS = SPACING * 15;
const SIZE = SPACING * 7.5;
const AppPanGestureHandler = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGesureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    borderRadius: SPACING * 2,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: SPACING * 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: SPACING / 2,
    borderColor: "rgba(0, 0, 255, 0.5)",
  },
});
export default AppPanGestureHandler;
