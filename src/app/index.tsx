import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text className="text-red-500 bg-red-100">Home</Text>
      <Link href="/about/">About</Link>
    </View>
  );
};

export default Home;
