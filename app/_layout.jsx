import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="startPage" />
        <Stack.Screen name="customerLogin" />
        <Stack.Screen name="storeOwnerLogin" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(shop)" />
        <Stack.Screen name="category/listings" />
      </Stack>
    </AuthProvider>
  );
}