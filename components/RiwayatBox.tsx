import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type RiwayatBoxProps = {
    date: string;
    hospital: string;
    room: string;
    time: string;
    doctor: string;
    status: string;
};

export function RiwayatBox(
    { date, hospital, room, time, doctor, status }: RiwayatBoxProps
) {
    return (
        <View className="w-full p-4 bg-[#DDEEFA] rounded-lg">
            <Text className="text-lg font-bold text-[#0176CB] font-manrope">{date}</Text>

            <Text className="mt-1 text-[#63ABE0] font-manrope">
                {hospital}
            </Text>

            <View className="my-2 border-b border-[#93C6EA]" />

            <View className="space-y-2">
                <Text className="text-gray-600 font-manrope">Ruangan : {room}</Text>
                <Text className="text-gray-600 font-manrope">Pukul : {time}</Text>
                <Text className="text-gray-600 font-manrope">Dokter : {doctor}</Text>
                <Text className="text-gray-600 font-manrope">Status : {status}</Text>
            </View>

            <Link href="/rujukan" asChild>
                <TouchableOpacity className="flex-row items-center justify-center px-4 py-2 mt-4 bg-[#00B607] rounded-full">
                    <Text className="font-semibold text-white font-manrope">Lihat Dokumen</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}