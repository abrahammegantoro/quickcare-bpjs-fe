import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import {
//   useFonts,
//   Manrope_400Regular,
// } from '@expo-google-fonts/manrope';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import "../global.css";
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    manrope: require('../assets/fonts/Manrope-Regular.ttf'),
    Poppins_400Regular,
    Poppins_700Bold,
    inter: require('../assets/fonts/Inter-Regular.ttf'),
    abrilfatface: require('../assets/fonts/AbrilFatface-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
