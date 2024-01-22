import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>About</Text>
      {/* <Link href="/">Home</Link> */}
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default About;
