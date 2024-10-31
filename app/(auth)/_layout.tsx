import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AntDesign } from "@expo/vector-icons";
import { Link, Slot } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AuthLayout() {
    return (
        <ParallaxScrollView
            headerContent={
                <Link href="/" asChild>
                    <TouchableOpacity className="flex flex-row items-center gap-3 px-6">
                        <AntDesign name="left" size={18} color="white" />
                        <Text className='text-2xl font-semibold text-white font-manrope'>Kembali</Text>
                    </TouchableOpacity>
                </Link>
            }
            hasBorderRadius
        >
            <View className="flex-1 py-4">
                <Slot />
            </View>
        </ParallaxScrollView>
    )
}