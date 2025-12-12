import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import ValidationMessage from '../../components/validationMessage';
import { useAuth } from '../../context/AuthContext';
import { styles } from '../../styles/styles';

export default function AccountSettings() {
    const router = useRouter();
    const { userType } = useAuth();

    const [firstName, setFirstName] = useState("Keith");
    const [lastName, setLastName] = useState("Fish");
    const [email, setEmail] = useState("keith.fish@email.com");
    const [phone, setPhone] = useState("077 77777777");
    
    const [stallName, setStallName] = useState("Keith's Emporium");
    const [stallLocation, setStallLocation] = useState("R1.32");

    const [validationMessage, setValidationMessage] = useState(false);
    const [validationText, setValidationText] = useState("");
    const [validationType, setValidationType] = useState("error");

    const showMessage = (type, text) => {
        setValidationType(type);
        setValidationText(text);
        setValidationMessage(true);
    };

    const handleUpdate = () => {
        showMessage("success", "Account Details Updated!");
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
                <SettingsMenu />
            </View>

            <View style={styles.content}>
                <View style={styles.sectionHeader}>
                    <TouchableOpacity
                        onPress={handleBack}
                        style={styles.backButton}
                    >
                        <Text style={styles.backArrow}>‹</Text>
                    </TouchableOpacity>
                    <Text style={styles.sectionTitle}>Account Settings</Text>
                </View>

                <ScrollView contentContainerStyle={styles.settingsForm}>
                    <View style={styles.profileIconContainer}>
                        <View style={styles.profileIcon}>
                            <Text style={styles.profileIconText}>👤</Text>
                        </View>
                    </View>

                    <View style={styles.formSection}>
                        <Text style={styles.formSectionTitle}>Personal Information</Text>

                        <Text style={styles.inputLabel}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                        />

                        <Text style={styles.inputLabel}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                        />

                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    {userType === 'fishmonger' && (
                        <View style={styles.formSection}>
                            <Text style={styles.formSectionTitle}>Business Information</Text>

                            <Text style={styles.inputLabel}>Stall Name</Text>
                            <TextInput
                                style={styles.input}
                                value={stallName}
                                onChangeText={setStallName}
                            />

                            <Text style={styles.inputLabel}>Stall Location</Text>
                            <TextInput
                                style={styles.input}
                                value={stallLocation}
                                onChangeText={setStallLocation}
                            />
                        </View>
                    )}

                    <TouchableOpacity
                        style={styles.updateAccountButton}
                        onPress={handleUpdate}>
                        <Text style={styles.updateAccountButtonText}>Update Account</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <ValidationMessage
                visible={validationMessage}
                type={validationType}
                message={validationText}
                onHide={() => setValidationMessage(false)}
            />
        </SafeAreaView>
    );
}