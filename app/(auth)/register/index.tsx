import { Feather, FontAwesome, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
    return (
        <View className="flex">
            <Text className='text-3xl font-bold text-center text-[#0176CB] font-inter'>Sign Up</Text>

            <View className="flex gap-6 mt-10">
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <MaterialCommunityIcons name="form-textbox" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Nama"
                        placeholderTextColor="#6D6D6D"
                        className="flex-1 font-inter"
                    />
                </View>
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <Fontisto name="email" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry
                        className="flex-1 font-inter"
                    />
                </View>
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <FontAwesome name="user-o" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#6D6D6D"
                        className="flex-1 font-inter"
                    />
                </View>
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <Feather name="lock" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Kata Sandi"
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry
                        className="flex-1 font-inter"
                    />
                </View>
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <Feather name="lock" size={18} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Konfirmasi Kata Sandi"
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry
                        className="flex-1 font-inter"
                    />
                </View>
                <Text className="text-center text-[#6D6D6D] font-inter">Sudah punya akun? <Link href="/login" className="underline text-[#0176CB] font-semibold">Log In</Link></Text>
            </View>
            <Link href="/obat" asChild>
                <TouchableOpacity className="flex-row items-center justify-center px-4 py-2 mt-4 bg-[#015EA2] rounded-full">
                    <Text className="text-xl font-semibold text-white font-manrope">Sign Up</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}