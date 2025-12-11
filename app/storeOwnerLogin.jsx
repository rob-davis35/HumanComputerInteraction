import { useRouter } from 'expo-router';
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import ValidationMessage from '../components/validationMessage';
import { useAuth } from '../context/AuthContext';
import { styles } from '../styles/styles';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const image = require('../assets/ocean-sea-waves-ripples-water-background.png');

  const [storeOwnerEmail, setStoreOwnerEmail] = useState("");
  const [storeOwnerPassword, setStoreOwnerPassword] = useState("");

  // Validation message state
  const [validationMessage, setValidationMessage] = useState(false);
  const [validationText, setValidationText] = useState("");
  const [validationType, setValidationType] = useState("error");

  const showMessage = (type, text) => {
    setValidationType(type);
    setValidationText(text);
    setValidationMessage(true);
  };

  const handleBack = () => {
    router.replace('/startPage');
  };

  // Simple email and password validation
  const handleLogin = (username, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username)) {
      showMessage("warning", "Please enter a valid email address.");
      return;
    }

    if (password.length === 0) {
      showMessage("error", "Password cannot be empty.");
      return;
    }

    // Set user type as 'fishmonger'
    console.log('About to call login with fishmonger'); 
    login(username, password, 'fishmonger');
    console.log('Login called, navigating to shop');
    router.replace('/(shop)');
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
      </View>

      <ImageBackground source={image} style={[styles.content, { flex: 1, width: "100%", height: "100%" }]} resizeMode='cover'>
        {/* Login Title */}
        <View style={styles.sectionHeader}>
          <>
            <TouchableOpacity
              onPress={() => handleBack()}
              style={styles.backButton}
            >
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>
              Store Owner Login
            </Text>
          </>
        </View>

        {/* Makes it so the keyboard doesn't cover inputs */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginStyle}
        >
          <View style={styles.inputContainer}>
            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={storeOwnerEmail}
              onChangeText={setStoreOwnerEmail}
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
              onPress={() => handleLogin(storeOwnerEmail, storeOwnerPassword)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => router.push('/signup')}>
              <Text style={styles.sUText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

      <ValidationMessage
        visible={validationMessage}
        type={validationType}
        message={validationText}
        onHide={() => setValidationMessage(false)}
      />
    </SafeAreaView>
  );
}