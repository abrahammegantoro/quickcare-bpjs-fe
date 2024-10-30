import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { InfoBox } from '@/components/InfoBox';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerContent={
        <View className='flex gap-8 px-8'>
          <Text className="text-3xl font-semibold text-white font-poppins">Quick<Text className="underline">Care</Text>.</Text>
          <View>
            <Text className="text-3xl font-semibold text-white">Selamat Datang,</Text>
            <Text className="text-3xl font-semibold text-white">Bobby</Text>
          </View>
        </View>
      }
      isHomePage
    >
      <View className="flex items-center justify-center gap-4">
        <Text className="font-inter text-[#6D6D6D]">Transformasikan JKN mu dengan <Text className="font-abrilfatface text-[#0176CB] text-xl">QuickCare</Text></Text>

        <View className="w-full p-4 bg-[#DDEEFA] rounded-lg">
          <Text className="text-lg font-bold text-[#0176CB] font-manrope">Rujukan</Text>

          <Text className="mt-1 text-[#63ABE0] font-manrope">
            Atur Rujukan Kamu Menggunakan QuickCare.
          </Text>

          <View className="my-2 border-b border-[#93C6EA]" />

          <View className="space-y-1">
            <Text className="text-sm text-gray-600 font-manrope">Dengan Rujukan ini kamu dapat</Text>
            <Text className="text-sm text-gray-600 font-manrope">• Mengajukan Rujukan Baru</Text>
            <Text className="text-sm text-gray-600 font-manrope">• Memperpanjang Surat Rujukan</Text>
          </View>

          <Link href="/rujukan" asChild>
            <TouchableOpacity className="flex-row items-center justify-center px-4 py-2 mt-4 bg-[#015EA2] rounded-full">
              <Text className="font-semibold text-white font-manrope">Coba Sekarang</Text>
              <FontAwesome name="arrow-right" size={16} color="white" className="ml-2" />
            </TouchableOpacity>
          </Link>
        </View>

        <View className="w-full p-4 bg-[#DDEEFA] rounded-lg">
          <Text className="text-lg font-bold text-[#0176CB] font-manrope">Manajemen Obat</Text>

          <Text className="mt-1 text-[#63ABE0] font-manrope">
            Atur Penggunaan Obat Kamu dengan Mudah.
          </Text>

          <View className="my-2 border-b border-[#93C6EA]" />

          <View className="space-y-1">
            <Text className="text-sm text-gray-600 font-manrope">Dengan Manajemen Obat ini kamu dapat</Text>
            <Text className="text-sm text-gray-600 font-manrope">• Mengatur Penggunaan Obatmu</Text>
            <Text className="text-sm text-gray-600 font-manrope">• Memantau Penggunaan Obat Keluargamu</Text>
          </View>

          <Link href="/obat" asChild>
            <TouchableOpacity className="flex-row items-center justify-center px-4 py-2 mt-4 bg-[#015EA2] rounded-full">
              <Text className="font-semibold text-white font-manrope">Coba Sekarang</Text>
              <FontAwesome name="arrow-right" size={16} color="white" className="ml-2" />
            </TouchableOpacity>
          </Link>
        </View>

        <InfoBox
          backgroundColor="grey"
          isBorderColor
          buttonColor="#00B607"
          text="Semua informasi dan pengingat kamu dapat dilihat melalui pemberitahuan"
          isTextSmall
          buttonText="Lihat"
          linkHref="/pemberitahuan"
        />
      </View>
    </ParallaxScrollView>
  );
}