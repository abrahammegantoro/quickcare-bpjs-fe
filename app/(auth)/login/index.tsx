import { Feather, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    return (
        <View className="flex">
            <Text className='text-3xl font-bold text-center text-[#0176CB] font-inter'>Log In</Text>

            <View className="flex gap-6 mt-10">
                <View className="flex-row items-center bg-[#F4F4F4] p-3 rounded-2xl">
                    <FontAwesome name="user-o" size={20} color="#6D6D6D" className="mr-3" />
                    <TextInput
                        placeholder="Email/Username"
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
                <Text className="text-center text-[#6D6D6D] font-inter">Belum punya akun? <Link href="/register" className="underline text-[#0176CB] font-semibold">Sign Up</Link></Text>
            </View>
            <Link href="/obat" asChild>
                <TouchableOpacity className="flex-row items-center justify-center px-4 py-2 mt-4 bg-[#015EA2] rounded-full">
                    <Text className="text-xl font-semibold text-white font-manrope">Log In</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}