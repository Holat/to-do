import { Dimensions } from "react-native";
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -(SCREEN_WIDTH * 0.3);
const CARD_HEIGHT = 80;

const useCardAnimation = (handleDelete: () => Promise<void>) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(CARD_HEIGHT);
  const opacity = useSharedValue(1);

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive(event) {
        translateX.value = Math.max(
          Math.min(event.translationX, 0),
          -SCREEN_WIDTH * 0.4
        );
      },
      onEnd(event, context) {
        const shouldDismiss = translateX.value < TRANSLATE_X_THRESHOLD;
        if (shouldDismiss) {
          opacity.value = withTiming(0);
          translateX.value = withTiming(-SCREEN_WIDTH);
          itemHeight.value = withTiming(0, undefined, (isFinished) => {
            if (isFinished) {
              runOnJS(handleDelete)();
            }
          });
        } else {
          translateX.value = withTiming(0);
        }
      },
    });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const rIconStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0.6
    );
    return { opacity };
  });

  const rCardStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacity.value,
    };
  });

  return {
    rStyles: {
      rCardStyle,
      rIconStyle,
      rStyle,
    },
    operations: {
      panGestureEvent,
    },
  };
};

export default useCardAnimation;
