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
import Radio from '../components/signUpRadio';
import ValidationMessage from '../components/validationMessage';
import { styles } from '../styles/styles';

export default function SignUpPage({ onStart }) {
    const router = useRouter();

    const image = require('../assets/ocean-sea-waves-ripples-water-background.png');

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");

    const handleBack = () => {
        router.replace('/startPage');
    }

    // Validation message state
    const [validationMessage, setValidationMessage] = useState(false);
    const [validationText, setValidationText] = useState("");
    const [validationType, setValidationType] = useState("error");

    const showMessage = (type, text) => {
        setValidationType(type);
        setValidationText(text);
        setValidationMessage(true);
    };

    // Simple sign up validation
    const handleSignUp = (firstName, lastName, email, password, accountType) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName) {
            showMessage("warning", "First and Last name cannot be empty.");
            return;
        }

        if (!emailRegex.test(email)) {
            showMessage("warning", "Please enter a valid email address.");
            return;
        }

        if (password.length === 0) {
            showMessage("warning", "Password cannot be empty.");
            return;
        }

        if (!accountType) {
            showMessage("warning", "Please select an account type.");
            return;
        }

        router.replace('/startPage');
    }

    return (
        <SafeAreaView style={styles.root}>
            {/* Top app bar */}
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
            </View>

            <ImageBackground source={image} style={[styles.content, { flex: 1, width: "100%", height: "100%" }]} resizeMode='cover'>
                {/* Sign Up Title */}
                <View style={styles.sectionHeader}>
                    <>
                        <TouchableOpacity
                            onPress={() => handleBack()}
                            style={styles.backButton}
                        >
                            <Text style={styles.backArrow}>‹</Text>
                        </TouchableOpacity>
                        <Text style={styles.sectionTitle}>
                            Sign Up
                        </Text>
                    </>
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.loginStyle}
                >
                    <View style={styles.inputContainer}>
                        {/* First Name Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            value={firstName}
                            onChangeText={setFirstName}
                        />

                        {/* Last Name Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={setLastName}
                        />

                        {/* Email Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />

                        {/* Password Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        {/*Account Type Selection (Store Owner or Customer)*/}
                        <Text style={{ fontSize: 16, color: "#374151" }}>Select your account type: </Text>

                        <Radio options={[
                            { label: 'Customer', value: 'customer' },
                            { label: 'Fishmonger', value: 'fishmonger' },
                        ]}
                            checkedValue={accountType}
                            onChange={setAccountType}
                            style={{ marginBottom: 15 }}
                        />

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => handleSignUp(firstName, lastName, email, password, accountType)}>
                            <Text style={styles.loginButtonText}>Sign Up</Text>
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