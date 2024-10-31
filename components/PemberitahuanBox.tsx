import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

type Time = {
    time: string;
    isActive: boolean;
}

type PemberitahuanBoxProps = {
    date: string;
    description: string;
    status: string;
};

export function PemberitahuanBox(
    { date, description, status }: PemberitahuanBoxProps
) {
    return (
        <View className="w-full p-4 bg-[#F3F3F3] rounded-xl">
            <Text className="text-right font-bold text-[#63ABE0] font-manrope">{date}</Text>

            <View className="my-2 border-b border-[#BFBFBF]" />

            <View className="flex flex-row items-start">
                <Entypo name="dot-single" size={24} color={status === "read" ? "black" : "blue"} />
                <Text className="text-black font-manrope">
                    {description}
                </Text>
            </View>

            <Link href="/home" className="font-manrope text-[#006D04] text-right underline font-bold">Lihat...</Link>
        </View>
    )
}