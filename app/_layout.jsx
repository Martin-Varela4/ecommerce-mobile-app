import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme/colors';
 
export default function RootLayout() {
  return (
    console.log('RootLayout renderizado'),
    <>
      <StatusBar style="light" backgroundColor={colors.amber} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="producto/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
 