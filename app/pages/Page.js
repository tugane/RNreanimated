import { StyleSheet, Dimensions, View } from "react-native";
import React, { useEffect } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
const { height, width } = Dimensions.get("screen");
const SIZE = width * 0.7;
const Page = ({ title, index, translateX }) => {
  useEffect(() => {
    console.log(translateX.value);
  }, []);

  const Rstyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 1 }],
    };
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(0,0,256,.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, Rstyle]} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: `rgba(0,0,256,0.4)`,
  },
});
