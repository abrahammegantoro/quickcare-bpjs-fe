import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#ffffff',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#0076CB',
          height: 60,
        },
        tabBarItemStyle: {
          paddingVertical: 7,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={'home'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="obat/index"
        options={{
          title: 'Obat',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'medkit'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="rujukan/index"
        options={{
          title: 'Rujukan',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#59D35E',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -30,
              }}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={30}
                color="white"
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 10,
          },
        }}
      />

      <Tabs.Screen
        name="riwayat/index"
        options={{
          title: 'Riwayat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={'view-dashboard'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'user'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
