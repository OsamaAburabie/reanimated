import { View, Text, Image, Animated } from "react-native";
import React from "react";
type Props = {
  item: {
    name: string;
    jobTitle: string;
    email: string;
    image: string;
  };

  scale: Animated.AnimatedInterpolation;
};

const SPACING = 20;
const AVATAR_SIZE = 70;
const Item = ({ item, scale }: Props) => {
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
          transform: [{ scale }],
        },
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
            color: "#000",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            opacity: 0.7,
            color: "#000",
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
