import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the default header
      }}
    >
      <Stack.Screen 
        name="login" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="signup" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="(shop)" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="category/listings" 
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}