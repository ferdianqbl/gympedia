import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts as bodyPartsList } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyParts = () => {
  const router = useRouter();
  return (
    <View className="mx-4">
      <Text className="font-semibold" style={{ fontSize: hp(3) }}>
        Exercises
      </Text>

      <FlatList
        data={bodyPartsList}
        renderItem={({ item, index }) => (
          <BodyPart item={item} index={index} router={router} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default BodyParts;

type Props = {
  item: any;
  index: number;
  router: any;
};

const BodyPart: FC<Props> = ({ item, index, router }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />

        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
