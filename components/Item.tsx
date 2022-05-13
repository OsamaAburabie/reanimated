import { View, Text, Image } from "react-native";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from "react-native-reanimated";
type Props = {
  scrollY: Animated.SharedValue<number>;
  item: {
    name: string;
    jobTitle: string;
    email: string;
  };
  index: number;
};
const Item = ({ scrollY, item, index }: Props) => {
  const BG_IMG =
    "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = interpolate(scrollY.value, inputRange, [1, 1, 1, 0.8]);

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          flexDirection: "row",
          padding: SPACING,
          marginBottom: SPACING,
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: 12,
          elevation: 100,
          flex: 1,
        },
        animatedStyles,
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderRadius: AVATAR_SIZE,
          marginRight: SPACING / 2,
        }}
      />

      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            opacity: 0.7,
            flexWrap: "wrap",
          }}
        >
          {item.jobTitle}
        </Text>
        <Text
          style={{
            fontSize: 14,
            opacity: 0.8,
            color: "#0099cc",
          }}
        >
          {item.email}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Item;
