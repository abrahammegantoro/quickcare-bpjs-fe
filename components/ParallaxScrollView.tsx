import type { PropsWithChildren, ReactElement } from 'react';
import { ImageBackground, StyleSheet, Text, useColorScheme, View, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import background from '@/assets/images/background.png';
import background_detail from '@/assets/images/background-detail.png';

import { ThemedView } from '@/components/ThemedView';

type Props = PropsWithChildren<{
  headerContent: ReactElement;
  hasBorderRadius?: boolean;
  isHomePage?: boolean;
}>;

export default function ParallaxScrollView({
  children,
  headerContent,
  hasBorderRadius = false,
  isHomePage = false,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const HEADER_HEIGHT = isHomePage ? 250 : 200;

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            headerAnimatedStyle,
            { height: HEADER_HEIGHT }, // Apply HEADER_HEIGHT as inline style
            styles.header,
          ]}
        >
          <ImageBackground source={isHomePage ? background : background_detail} style={styles.imageBackground}>
            {headerContent}
          </ImageBackground>
        </Animated.View>
        <ThemedView
          style={[
            styles.content,
            hasBorderRadius && styles.borderRadius, // Conditionally add border radius
          ]}
        >
          {children}
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 16,
    overflow: 'hidden',
    marginTop: -20,
    backgroundColor: 'white',
  },
  borderRadius: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});