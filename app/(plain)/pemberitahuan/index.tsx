import ParallaxScrollView from "@/components/ParallaxScrollView";
import { PemberitahuanBox } from "@/components/PemberitahuanBox";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Pemberitahuan() {
    return (
        <ParallaxScrollView
            headerContent={
                <View className="flex flex-row items-center px-6">
                    <Link href="/" className="flex items-center">
                        <AntDesign name="left" size={24} color="white" />
                    </Link>
                    <Text className='flex-1 text-3xl font-bold text-center text-white font-inter'>Pemberitahuan</Text>
                </View>
            }
        >
            <View className="flex items-center justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D]">Lihat semua pemberitahuanmu di sini</Text>

                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
                <PemberitahuanBox
                    status="read"
                    description="Yuk sudah jadwalnya minum Obat Paracetamol mu"
                    date="1 Januari 2021"
                />
            </View>
        </ParallaxScrollView>
    )
}