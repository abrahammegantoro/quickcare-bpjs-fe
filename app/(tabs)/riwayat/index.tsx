import ParallaxScrollView from '@/components/ParallaxScrollView';
import { RiwayatBox } from '@/components/RiwayatBox';
import { Text, View } from 'react-native';

export default function Riwayat() {
    return (
        <ParallaxScrollView
            headerContent={
                <Text className='text-3xl font-bold text-center text-white font-inter'>Riwayat</Text>
            }
        >
            <View className="flex justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D] text-center">Lihat semua riwayat rujukan anda</Text>

                <Text className="font-inter text-[#0176CB]">Riwayat Kunjungan</Text>

                <RiwayatBox
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                    status="Selesai"
                />
                <RiwayatBox
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                    status="Selesai"
                />
                <RiwayatBox
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                    status="Selesai"
                />
                <RiwayatBox
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                    status="Selesai"
                />
                <RiwayatBox
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                    status="Selesai"
                />
            </View>
        </ParallaxScrollView>
    );
}