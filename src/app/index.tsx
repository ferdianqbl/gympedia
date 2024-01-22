import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  return (
    <View className="flex justify-end flex-1">
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/welcome.png")}
        className="absolute w-full h-full"
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={[0.5, 0]}
        end={[0.5, 0.8]}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center justify-center"
        >
          <Text className="font-bold text-white" style={{ fontSize: hp(5) }}>
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text className="font-bold text-white" style={{ fontSize: hp(5) }}>
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            className="flex items-center justify-center mx-auto border-2 rounded-full bg-rose-500 border-neutral-200"
            style={{ width: wp(80), height: hp(6) }}
          >
            <Link
              href={"/home/"}
              className="w-full font-bold text-center text-white"
              style={{ fontSize: hp(3) }}
            >
              Get Started
            </Link>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Home;
