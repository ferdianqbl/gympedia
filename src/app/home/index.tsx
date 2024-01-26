import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import ImageSlider from "@/components/image-slider";
import BodyParts from "@/components/body-part";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      className="flex flex-1 space-y-5"
      //edges={["top"]}
    >
      <StatusBar style="dark" />
      {/* <ScrollView className=""> */}
      <View className="flex-1 gap-5">
        <View className="flex-row items-center justify-between px-5">
          <View>
            <Text className="font-bold" style={{ fontSize: hp(4.5) }}>
              READY TO
            </Text>
            <Text
              className="font-bold text-rose-700"
              style={{ fontSize: hp(4.5) }}
            >
              WORKOUT
            </Text>
          </View>

          <View className="items-center gap-2">
            <Image
              source={require("@/assets/images/avatar.png")}
              style={{ height: hp(6), width: hp(6) }}
              className="rounded-full aspect-square"
            />
            <View className="flex items-center justify-center p-2 border rounded-full bg-neutral-200 border-neutral-300">
              <FontAwesome name="bell-o" size={hp(2.5)} color="gray" />
            </View>
          </View>
        </View>

        <View>
          <ImageSlider />
        </View>
        <View className="flex-1">
          <BodyParts />
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
