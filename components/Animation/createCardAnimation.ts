import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const createCardAnimation = (create: boolean) => {
  const height = useSharedValue(10.5);
  const rStyle = useAnimatedStyle(() => {
    height.value = withTiming(create ? 79 : 10.5);
    return {
      height: `${height.value}%`,
    };
  });

  return rStyle;
};

export default createCardAnimation;
