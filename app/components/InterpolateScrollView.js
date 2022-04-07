import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Page from "../pages/Page";

const WORDS = ["Whats", " up", " mobile", " devs?"];

const InterpolateScrollView = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index}
            title={title}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default InterpolateScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
