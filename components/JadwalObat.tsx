import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

type Time = {
    time: string;
    isActive: boolean;
}

type JadwalObatProps = {
    date: string;
    medicine: string;
    condition: string;
    time: Time[];
    isReminding?: boolean;
    onRemind?: () => void;
};

export function JadwalObat({
    date,
    medicine,
    condition,
    time,
    isReminding = false, 
    onRemind,
}: JadwalObatProps) {
    const [switchStates, setSwitchStates] = useState(
        time.map((t) => t.isActive)
    );

    // Handler to toggle a specific switch by index
    const toggleSwitch = (index: number) => {
        setSwitchStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <View className="w-full p-4 bg-[#DDEEFA] rounded-lg">
            <Text className="text-lg font-bold text-[#0176CB] font-manrope">{date}</Text>

            <Text className="mt-1 text-[#63ABE0] font-manrope">
                {medicine} - {condition}
            </Text>

            <View className="my-2 border-b border-[#93C6EA]" />

            <View className="">
                {time.map((timeEntry, index) => (
                    <View
                        className="flex flex-row items-center justify-between w-full"
                        key={index}
                    >
                        <Text className="text-lg text-gray-600 font-manrope">
                            Pukul {timeEntry.time}
                        </Text>
                        <Switch
                            trackColor={{ false: "#D9D9D9", true: "#59D35E" }}
                            thumbColor={switchStates[index] ? "#fff" : "#fff"}
                            onValueChange={() => toggleSwitch(index)}
                            value={switchStates[index]}
                        />
                    </View>
                ))}
            </View>

            {isReminding && (
                <TouchableOpacity
                    onPress={onRemind} // Trigger onRemind callback if provided
                    className="items-center px-4 py-2 mt-4 bg-[#0176CB] rounded-full"
                >
                    <Text className="font-bold text-white">Beri Peringatan</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}