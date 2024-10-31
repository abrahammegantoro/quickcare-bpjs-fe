import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";

export default function PerpanjangRujukanForm() {
    const handleFileUpload = (type: string) => {
        alert(`Upload ${type} clicked`);
    };

    return (
        <ParallaxScrollView
            headerContent={
                <View className="flex flex-row items-center px-6">
                    <Link href="/rujukan" className="flex items-center">
                        <AntDesign name="left" size={24} color="white" />
                    </Link>
                    <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Perpanjang Surat Rujukan</Text>
                </View>
            }
        >
            {/* Title */}
            <Text className="text-lg font-bold text-[#0176CB] font-manrope">
                Perpanjang rujukan kamu apabila dibutuhkan
            </Text>

            {/* Rekam Medis Section */}
            <View className="p-4 bg-[#DDEEFA] rounded-lg shadow">
                <Text className="text-lg font-bold text-[#00B607] font-manrope">Rekam Medis</Text>
                <View className="my-2 border-b border-[#93C6EA]" />
                <View className="flex-row items-center justify-between">
                    <Text className="w-3/4 text-black font-manrope">Unggah file rekam medis mu sebelumnya</Text>
                    <TouchableOpacity
                        onPress={() => handleFileUpload("Rekam Medis")}
                        className="bg-[#0176CB] py-2 px-4 rounded-full self-end"
                    >
                        <Text className="font-semibold text-white">Unggah</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Rujukan Sebelumnya Section */}
            <View className="p-4 bg-[#DDEEFA] rounded-lg shadow">
                <Text className="text-lg font-bold text-[#00B607] font-manrope">Rujukan Sebelumnya</Text>
                <View className="my-2 border-b border-[#93C6EA]" />
                <View className="flex-row items-center justify-between">
                    <Text className="w-3/4 text-black font-manrope">Unggah file hasil rujukan mu sebelumnya</Text>
                    <TouchableOpacity
                        onPress={() => handleFileUpload("Rekam Medis")}
                        className="bg-[#0176CB] py-2 px-4 rounded-full self-end"
                    >
                        <Text className="font-semibold text-white">Unggah</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-[#E8F4FD] p-4 rounded-lg mb-4 shadow">
                <Text className="text-lg font-semibold text-[#00B607]">Penjelasan</Text>
                <View className="my-2 border-b border-[#93C6EA]" />
                <Text className="mb-2 text-black font-manrope">Jelaskan keluhanmu</Text>
                <TextInput
                    placeholder="Tulis di sini"
                    placeholderTextColor="#BFBFBF"
                    multiline
                    numberOfLines={4}
                    className="bg-[#F4F4F4] rounded-lg p-3 text-black border border-[#BFBFBF]"
                    style={{ textAlignVertical: 'top' }}
                />
            </View>

            {/* Submit Button */}
            <TouchableOpacity className="bg-[#0176CB] py-3 rounded-full items-center">
                <Text className="text-lg font-bold text-white font-manrope">Ajukan</Text>
            </TouchableOpacity>
        </ParallaxScrollView>
    );
}
