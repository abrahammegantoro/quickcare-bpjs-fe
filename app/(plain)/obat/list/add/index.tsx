import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function AddMedicinePage() {
  const [namaObat, setNamaObat] = useState("");
  const [jumlahTablet, setJumlahTablet] = useState("");
  const [aturanPemakaian, setAturanPemakaian] = useState("Sebelum Makan");
  const [jumlahPemakaian, setJumlahPemakaian] = useState(1);
  const [jamPemakaian, setJamPemakaian] = useState("");

  return (
    <ParallaxScrollView
      headerContent={
        <View className="flex flex-row items-center px-6">
          <Link href="/obat/list" className="flex items-center">
            <AntDesign name="left" size={24} color="white" />
          </Link>
          <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Tambah Obat</Text>
        </View>
      }
    >
      <Text className="text-lg font-semibold text-[#0176CB] font-manrope">
        Tambahkan Daftar Obat Kamu
      </Text>

      <Text className="font-bold text-[#00B607] font-manrope">Nama Obat</Text>
      <TextInput
        placeholder="Masukkan Nama Obat Kamu"
        placeholderTextColor="#6D6D6D"
        className="bg-[#F4F4F4] p-3 rounded-xl border border-[#D9D9D9]"
        value={namaObat}
        onChangeText={setNamaObat}
      />

      <Text className="font-bold text-[#00B607] font-manrope">Jumlah Tablet</Text>
      <TextInput
        placeholder="Masukkan Jumlah Tablet"
        placeholderTextColor="#6D6D6D"
        keyboardType="numeric"
        className="bg-[#F4F4F4] p-3 rounded-xl border border-[#D9D9D9]"
        value={jumlahTablet}
        onChangeText={setJumlahTablet}
      />

      <Text className="font-bold text-[#00B607] font-manrope">Aturan Pemakaian</Text>
      <View className="flex-row space-x-3">
        <TouchableOpacity
          onPress={() => setAturanPemakaian("Sebelum Makan")}
          className={`flex-1 p-3 rounded-xl items-center ${aturanPemakaian === "Sebelum Makan" ? "bg-[#00B607]" : "bg-[#F4F4F4]"
            }`}
        >
          <Text className={aturanPemakaian === "Sebelum Makan" ? "text-white" : "text-[#6D6D6D]"}>
            Sebelum Makan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAturanPemakaian("Setelah Makan")}
          className={`flex-1 p-3 rounded-xl items-center ${aturanPemakaian === "Setelah Makan" ? "bg-[#00B607]" : "bg-[#F4F4F4]"
            }`}
        >
          <Text className={aturanPemakaian === "Setelah Makan" ? "text-white" : "text-[#6D6D6D]"}>
            Setelah Makan
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-[#00B607] font-manrope">Jumlah Pemakaian dalam Sehari</Text>
      <View className="flex-row space-x-3">
        {[1, 2, 3, 4].map((num) => (
          <TouchableOpacity
            key={num}
            onPress={() => setJumlahPemakaian(num)}
            className={`flex-1 p-3 rounded-xl items-center ${jumlahPemakaian === num ? "bg-[#00B607]" : "bg-[#F4F4F4]"
              }`}
          >
            <Text className={jumlahPemakaian === num ? "text-white" : "text-[#6D6D6D]"}>
              {num} kali
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="font-bold text-[#00B607] font-manrope">Jam Pemakaian</Text>
      <TextInput
        placeholder="Masukkan Jam Pemakaian"
        placeholderTextColor="#6D6D6D"
        className="bg-[#F4F4F4] p-3 rounded-xl border border-[#D9D9D9]"
        value={jamPemakaian}
        onChangeText={setJamPemakaian}
      />
      <Text className="text-sm text-gray-400">Contoh: 08:00, 18:00</Text>

      <TouchableOpacity className="bg-[#0176CB] py-3 rounded-full items-center">
        <Text className="text-lg font-bold text-white">Simpan</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}
