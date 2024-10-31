import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";

export default function RujukanForm() {
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
                    <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Pengajuan Surat Rujukan</Text>
                </View>
            }
        >
            {/* Title */}
            <Text className="text-lg font-bold text-[#0176CB] font-manrope">
                Ajukan rujukan kamu ke puskesmas
            </Text>

            {/* Rekam Medis Section */}
            <View className="p-4 bg-[#DDEEFA] rounded-lg shadow">
                <Text className="text-lg font-bold text-[#00B607] font-manrope">Rekam Medis</Text>
                <View className="my-2 border-b border-[#93C6EA]" />
                <View className="flex-row items-center justify-between">
                    <Text className="w-3/4 text-black">Unggah file rekam medis mu sebelumnya</Text>
                    <TouchableOpacity
                        onPress={() => handleFileUpload("Rekam Medis")}
                        className="bg-[#0176CB] py-2 px-4 rounded-full self-end"
                    >
                        <Text className="font-semibold text-white">Unggah</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Video Penjelasan Section */}
            <View className="p-4 mb-4 bg-[#DDEEFA] rounded-lg shadow">
                <Text className="text-lg font-bold text-[#00B607] font-manrope">Video Penjelasan</Text>
                <View className="my-2 border-b border-[#93C6EA]" />
                <Text className="mb-4 text-black">Unggah video terkait penjelasan keluhanmu</Text>
                <TouchableOpacity
                    onPress={() => handleFileUpload("Video Penjelasan")}
                    className="flex items-center justify-center p-6 mb-4 border border-gray-400 border-dashed rounded-lg"
                >
                    <Feather name="upload" size={24} color="#0176CB" />
                    <Text className="text-[#0176CB] font-semibold mt-2">Unggah</Text>
                </TouchableOpacity>

                <Text className="font-semibold text-[#009206] mb-2">Keterangan:</Text>
                <Text className="mb-1 text-sm text-[#777676]">• Durasi video maksimal 3 menit</Text>
                <Text className="mb-1 text-sm text-[#777676]">• Video harus menjelaskan apa yang kamu rasakan</Text>
                <Text className="mb-1 text-sm text-[#777676]">
                    • Video harus menunjukkan bagian mana yang kamu keluhkan beserta dengan buktinya (
                    <Text className="text-[#3291D5] font-semibold">*mis. keluhan kamu yaitu alergi kulit, maka tunjukkan dengan jelas bagian di kulitmu yang alergi tersebut</Text>
                    )
                </Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity className="bg-[#0176CB] py-3 rounded-full items-center">
                <Text className="text-lg font-bold text-white font-manrope">Ajukan</Text>
            </TouchableOpacity>
        </ParallaxScrollView>
    );
}
