import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { styles } from '../styles/styles';

export default function LoginScreen() {
  const router = useRouter();
  
  const [customerUsername, setCustomerUsername] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const [storeOwnerUsername, setStoreOwnerUsername] = useState("");
  const [storeOwnerPassword, setStoreOwnerPassword] = useState("");

  const handleLogin = (username, password) => {
    // Add authentication logic here later
    // For now, just navigate to the shop
    router.replace('/(shop)');
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
      </View>

      <View style={styles.content}>
        {/* Login Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Login</Text>
        </View>

        {/* Makes it so the keyboard doesn't cover inputs */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginStyle}
        >

          {/* Customer Login */}
          <Text style={{ fontSize: 16, color: "#374151" }}>Customer</Text>

          <View style={styles.inputContainer}>
            {/* Username Input */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={customerUsername}
              onChangeText={setCustomerUsername}
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={customerPassword}
              onChangeText={setCustomerPassword}
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleLogin(customerUsername, customerPassword)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          {/* Store Owner Login */}
          <Text style={{ fontSize: 16, color: "#374151", marginTop: 24 }}>Store Owner</Text>

          <View style={styles.inputContainer}>
            {/* Username Input */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={storeOwnerUsername}
              onChangeText={setStoreOwnerUsername}
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={storeOwnerPassword}
              onChangeText={setStoreOwnerPassword}
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleLogin(storeOwnerUsername, storeOwnerPassword)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push('/signup')}>
            <Text style={styles.sUText}>Sign Up</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}