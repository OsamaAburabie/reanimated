import * as React from "react";
import {
  StatusBar,
  Image,
  Animated,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import faker from "@faker-js/faker";
import Item from "./components/Item";

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.numeric(60),
    image: `https://randomuser.me/api/portraits/men/${faker.random.numeric(
      2
    )}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});
const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const App = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderItem = ({
    item,
    index,
  }: {
    item: {
      name: string;
      jobTitle: string;
      email: string;
      image: string;
    };
    index: number;
  }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const outputRange = [1, 1, 1, 0.9];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange,
    });
    return <Item item={item} scale={scale} />;
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0.1)"
        translucent={true}
      />
      <Image
        source={{
          uri: BG_IMG,
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;
