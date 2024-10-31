import { InfoBox } from '@/components/InfoBox';
import { JadwalKunjungan } from '@/components/JadwalKunjungan';
import { JadwalObat } from '@/components/JadwalObat';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, View } from 'react-native';

export default function Rujukan() {
    return (
        <ParallaxScrollView
            headerContent={
                <Text className='text-3xl font-bold text-center text-white font-inter'>Rujukan</Text>
            }
        >
            <View className="flex items-center justify-center gap-4">
                <Text className="font-inter text-[#6D6D6D]">Atur Rujukan Kamu Menggunakan QuickCare.</Text>

                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Ajukan rujukan kamu ke puskesmas"
                    buttonText="Ajukan"
                    linkHref="/rujukan/pengajuan"
                />

                <InfoBox
                    backgroundColor="green"
                    buttonColor="#00B607"
                    text="Perpanjang rujukan kamu apabila dibutuhkan"
                    buttonText="Perpanjang"
                    linkHref="/rujukan/perpanjangan"
                />
                
                <Text className="font-inter text-[#0176CB]">Jadwal Kunjungan Rumahsakit dan Puskesmas</Text>

                <JadwalKunjungan
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                />
                <JadwalKunjungan
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                />
                <JadwalKunjungan
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                />
                <JadwalKunjungan
                    date="Hari ini"
                    hospital="Rumah Sakit ABC Sudrajat"
                    room="Melati 5, 560"
                    time="15.00"
                    doctor="dr. Erensi Ratu"
                />
            </View>
        </ParallaxScrollView>
    );
}