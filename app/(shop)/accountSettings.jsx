import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { useAuth } from '../../context/AuthContext';
import { styles } from '../../styles/styles';

export default function AccountSettings() {
    const router = useRouter();
    const { userType } = useAuth();

    const [firstName, setFirstName] = useState("Keith");
    const [lastName, setLastName] = useState("Fish");
    const [email, setEmail] = useState("keith.fish@email.com");
    const [phone, setPhone] = useState("077 77777777");
    
    // Fishmonger-specific fields
    const [stallName, setStallName] = useState("Keith's Emporium");
    const [stallLocation, setStallLocation] = useState("R1.32");

    const handleUpdate = () => {
        Alert.alert(
            "Success",
            "Account updated successfully!",
            [{ text: "OK" }]
        );
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.root}>
            {/* Top app bar */}
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
                <SettingsMenu />
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Section header with back button */}
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
                    {/* Profile Icon */}
                    <View style={styles.profileIconContainer}>
                        <View style={styles.profileIcon}>
                            <Text style={styles.profileIconText}>👤</Text>
                        </View>
                    </View>

                    {/* Personal Information */}
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

                    {/* Business Information - Only for Fishmongers */}
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

                    {/* Update Button */}
                    <TouchableOpacity
                        style={styles.updateAccountButton}
                        onPress={handleUpdate}>
                        <Text style={styles.updateAccountButtonText}>Update Account</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}