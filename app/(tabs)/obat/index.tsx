import { InfoBox } from '@/components/InfoBox';
import { JadwalKunjungan } from '@/components/JadwalKunjungan';
import { JadwalObat } from '@/components/JadwalObat';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Obat() {
    return (
        <ParallaxScrollView
            headerContent={
                <Text className='text-3xl font-bold text-center text-white font-inter'>Manajemen Obat</Text>
            }
        >
            <View className="flex items-center justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D]">Atur Penggunaan Obat Kamu dengan Mudah</Text>

                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Atur semua penggunaan obatmu melalui QuickCare"
                    buttonText="Obat"
                    linkHref="/obat"
                />

                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Pantau penggunaan obat keluargamu"
                    buttonText="Keluarga"
                    linkHref="/keluarga"
                />
                
                <Text className="font-inter text-[#0176CB]">Jadwal Konsumsi Obat Kamu</Text>

                <JadwalObat
                    date="Hari ini"
                    medicine="Paracetamol"
                    condition="Sakit Kepala"
                    time={[
                        { time: "08.00", isActive: false },
                        { time: "12.00", isActive: false },
                        { time: "16.00", isActive: false },
                    ]}
                />
                <JadwalObat
                    date="Hari ini"
                    medicine="Paracetamol"
                    condition="Sakit Kepala"
                    time={[
                        { time: "08.00", isActive: false },
                        { time: "12.00", isActive: false },
                        { time: "16.00", isActive: false },
                    ]}
                />
                <JadwalObat
                    date="Hari ini"
                    medicine="Paracetamol"
                    condition="Sakit Kepala"
                    time={[
                        { time: "08.00", isActive: false },
                        { time: "12.00", isActive: false },
                        { time: "16.00", isActive: false },
                    ]}
                />

                
            </View>
        </ParallaxScrollView>
    );
}