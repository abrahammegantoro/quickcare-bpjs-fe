import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from "react-native";

const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: "Nama Obat Medis",
  status: i % 2 === 0 ? "green" : "red",
}));

export default function ObatListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on search
  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate data
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <ParallaxScrollView
      headerContent={
        <View className="flex flex-row items-center px-6">
          <Link href="/obat" className="flex items-center">
            <AntDesign name="left" size={24} color="white" />
          </Link>
          <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Manajemen Obat</Text>
        </View>
      }
    >
      <Text className="font-inter text-[#6D6D6D] text-center">Atur Penggunaan Obat Kamu dengan Mudah</Text>

      {/* Upload Button */}
      <Link href="/obat/list/add" asChild>
        <TouchableOpacity className="bg-[#00B607] py-3 rounded-2xl items-center mb-2">
          <Text className="text-lg font-bold text-white">Upload Obat Kamu</Text>
        </TouchableOpacity>
      </Link>

      {/* Search Bar */}
      <Text className="text-lg font-semibold text-[#0176CB] font-manrope">
        Daftar Obat Kamu
      </Text>
      <View className="flex-row items-center mb-2">
        <TextInput
          placeholder="Search"
          className="flex-1 bg-white border border-[#D9D9D9] rounded-xl px-4 py-1.5"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <SafeAreaView>
        <FlatList
          data={paginatedData}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <View className="flex-row bg-[#0176CB] p-3 rounded-t-md">
              <Text className="flex-1 font-bold text-center text-white">No</Text>
              <Text className="flex-[3] font-bold text-center text-white">Nama Obat</Text>
              <Text className="flex-[2] font-bold text-center text-white">Detail</Text>
            </View>
          }
          renderItem={({ item, index }) => (
            <View className="flex-row items-center py-2 border-b border-[#E5E5E5]" style={{ backgroundColor: index % 2 !== 0 ? "#F4F4F4" : "#FFFFFF" }}>
              <Text className="flex-1 text-center">{item.id}</Text>
              <Text className="flex-[3] text-center">{item.name}</Text>
              <Link href={`/obat/list/${item.id}`} asChild>
                <TouchableOpacity
                  className="flex-[2] items-center py-2 rounded-lg"
                  style={{ backgroundColor: item.status === "green" ? "#00B607" : "#ED4C4D" }}
                >
                  <Text className="font-bold text-white">Detail</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        />
      </SafeAreaView>

      <View className="flex-row justify-center my-2">
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 1}>
          <Text className="mx-2" style={{ color: currentPage === 1 ? "#D3D3D3" : "#0176CB" }}>
            Prev
          </Text>
        </TouchableOpacity>
        {Array.from({ length: pageCount }, (_, i) => (
          <TouchableOpacity key={i} onPress={() => setCurrentPage(i + 1)}>
            <Text
              className="px-2 mx-1 rounded-md"
              style={{
                color: currentPage === i + 1 ? "white" : "#0176CB",
                backgroundColor: currentPage === i + 1 ? "#0176CB" : "transparent",
              }}
            >
              {i + 1}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === pageCount}>
          <Text className="mx-2" style={{ color: currentPage === pageCount ? "#D3D3D3" : "#0176CB" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}
