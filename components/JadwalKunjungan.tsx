import { Text, View } from "react-native";

type JadwalKunjunganProps = {
    date: string;
    hospital: string;
    room: string;
    time: string;
    doctor: string;
};

export function JadwalKunjungan(
    { date, hospital, room, time, doctor }: JadwalKunjunganProps
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
            </View>
        </View>
    )
}