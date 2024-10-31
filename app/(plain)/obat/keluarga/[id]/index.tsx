import { InfoBox } from "@/components/InfoBox";
import { JadwalObat } from "@/components/JadwalObat";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function DetailObat() {
    return (
        <ParallaxScrollView
            headerContent={
                <View className="flex flex-row items-center px-6">
                    <Link href="/obat/keluarga" className="flex items-center">
                        <AntDesign name="left" size={24} color="white" />
                    </Link>
                    <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Manajemen Obat</Text>
                </View>
            }
        >
            <View className="flex justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D] text-center">Pantau Akun Keluarga Kamu</Text>

                <Text className="font-inter text-lg text-[#0176CB] font-semibold">Ibu - Erensi</Text>
                
                <JadwalObat
                    date="Hari ini"
                    medicine="Paracetamol"
                    condition="Sakit Kepala"
                    time={[
                        { time: "08.00", isActive: false },
                        { time: "12.00", isActive: false },
                        { time: "16.00", isActive: false },
                    ]}
                    isReminding
                />
                <JadwalObat
                    date="Besok"
                    medicine="Paracetamol"
                    condition="Sakit Kepala"
                    time={[
                        { time: "08.00", isActive: false },
                        { time: "12.00", isActive: false },
                        { time: "16.00", isActive: false },
                    ]}
                    isReminding
                />
                    
            </View>
        </ParallaxScrollView>
    )
}