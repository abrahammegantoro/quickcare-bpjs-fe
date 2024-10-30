import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Profile() {
    return (
        <ParallaxScrollView
            headerContent={
                <Text className='text-3xl font-bold text-center text-white font-inter'>Profile</Text>
            }
        >
            <View className="flex items-center justify-center gap-4">
                <View className="relative">
                    <Image
                        source={{ uri: 'https://picsum.photos/400' }}
                        className="rounded-full w-44 h-44"
                    />
                    <TouchableOpacity className="absolute bottom-0 right-0 p-1.5 bg-blue-500 rounded-lg">
                        <MaterialIcons name="edit" size={16} color="white" />
                    </TouchableOpacity>
                </View>
                <Text className="text-2xl font-bold font-inter">Bobby Richman</Text>
            </View>

            <View className="flex w-full gap-3">
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-lg">
                    <FontAwesome name="user-o" size={20} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Nama"
                        placeholderTextColor="#6D6D6D"
                        className="flex-1 font-inter"
                    />
                </View>

                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-lg">
                    <Feather name="lock" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Kata Sandi"
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry
                        className="flex-1 font-inter"
                    />
                </View>

                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-lg">
                    <Feather name="lock" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Konfirmasi Kata Sandi"
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry
                        className="flex-1 font-inter"
                    />
                </View>
            </View>

            {/* Buttons */}
            <View className="flex w-full gap-3 mt-8">
                <TouchableOpacity className="items-center w-full py-3 bg-[#0176CB] rounded-full">
                    <Text className="text-lg font-semibold text-white">Edit Profil</Text>
                </TouchableOpacity>

                <TouchableOpacity className="items-center w-full py-3 bg-[#ED4C4D] rounded-full">
                    <Text className="text-lg font-semibold text-white">Keluar</Text>
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    );
}