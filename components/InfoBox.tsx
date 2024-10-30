import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Href, Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

type InfoBoxProps = {
  backgroundColor: string;
  isBorderColor?: boolean;
  buttonColor: string;
  text: string;
  isTextSmall?: boolean;
  buttonText: string;
  linkHref: string;
  buttonIcon?: React.ReactElement;
};

export function InfoBox ({
  backgroundColor,
  isBorderColor,
  buttonColor,
  text,
  isTextSmall,
  buttonText,
  linkHref,
  buttonIcon,
}: InfoBoxProps) {
  const bgColor = backgroundColor === "green" ? "bg-[#DFFFE0]" : "bg-[#F2F2F2]";

  
  return (
    <View
      className={`flex flex-row items-center justify-center w-full px-4 py-3 rounded-lg ${bgColor} ${isBorderColor ? 'border border-[#BFBFBF]' : ''}`}
    >
      <Text className={`font-manrope ${isTextSmall ? "text-sm" : ''}`} style={{ width: isBorderColor ? '75%' : '66%' }}>
        {text}
      </Text>
      <Link href={linkHref as unknown as Href<string | object>} asChild>
        <TouchableOpacity
          className="flex-row items-center justify-center rounded-full"
          style={{
            backgroundColor: buttonColor,
            paddingVertical: 8,
            paddingHorizontal: 16,
            width: isBorderColor ? '25%' : '33%',
          }}
        >
          <Text className="text-sm font-semibold text-white font-manrope">{buttonText}</Text>
          {buttonIcon && <View style={{ marginLeft: 8 }}>{buttonIcon}</View>}
        </TouchableOpacity>
      </Link>
    </View>
  );
};