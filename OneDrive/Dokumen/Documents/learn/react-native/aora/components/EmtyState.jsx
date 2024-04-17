import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "../components/CustomButton"
import { router } from "expo-router";

const EmtyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">

      <Image source={images.empty} className="w-[270px] h-[200px]" resizeMode="contain" />

      <Text className="text-xl text-center font-psemibold text-white mt-2">{title}</Text>

      <Text className="font-psemibold text-sm text-gray-100">{subtitle}</Text>

    <CustomButton 
        title={"Create video"}
        handlePress={() => router.push("/create")}
        containerStyles={"w-full my-4"}
    />

    </View>
  );
};

export default EmtyState;
