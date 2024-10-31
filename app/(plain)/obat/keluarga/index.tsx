import { InfoBox } from "@/components/InfoBox";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Keluarga() {
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
            <View className="flex items-center justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D]">Pantau Akun Keluarga Kamu</Text>

                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Ibu - Erensi"
                    buttonText="Detail"
                    linkHref="/obat/keluarga/ibu"
                />
                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Anak 1 - Erensa"
                    buttonText="Detail"
                    linkHref="/home"
                />
                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Anak 2 - Erenso"
                    buttonText="Detail"
                    linkHref="/home"
                />
                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Anak 3 - Erense"
                    buttonText="Detail"
                    linkHref="/home"
                />
                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Anak 4 - Erenso"
                    buttonText="Detail"
                    linkHref="/home"
                />
            </View>
        </ParallaxScrollView>
    )
}