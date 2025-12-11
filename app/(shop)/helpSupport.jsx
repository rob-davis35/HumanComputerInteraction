import { useRouter } from 'expo-router';
import {
    Alert,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function HelpSupport() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleCall = (number, name) => {
        Alert.alert(
            `Call ${name}`,
            `Would you like to call ${number}?`,
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Call", 
                    onPress: () => Linking.openURL(`tel:${number}`)
                }
            ]
        );
    };

    const handleEmail = (email) => {
        Alert.alert(
            "Send Email",
            `Would you like to email ${email}?`,
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Email", 
                    onPress: () => Linking.openURL(`mailto:${email}`)
                }
            ]
        );
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
                    <Text style={styles.sectionTitle}>Help & Support</Text>
                </View>

                <ScrollView contentContainerStyle={styles.helpSupportContent}>
                    {/* Contact Information Section */}
                    <View style={styles.helpSection}>
                        <Text style={styles.helpSectionTitle}>Billingsgate Market Contact</Text>
                        
                        {/* Main Office */}
                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleCall("02079871212", "Main Office")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>📞</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>Main Office</Text>
                                <Text style={styles.contactValue}>020 6767 1269</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>

                        {/* Facilities */}
                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleCall("02079871213", "Facilities")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>🏢</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>Facilities</Text>
                                <Text style={styles.contactValue}>020 7987 1213</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>

                        {/* Security */}
                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleCall("02079871214", "Security")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>🔒</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>Security</Text>
                                <Text style={styles.contactValue}>020 7913 1722</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>

                        {/* Helpdesk */}
                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleCall("02079871215", "Helpdesk")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>❓</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>Helpdesk</Text>
                                <Text style={styles.contactValue}>020 7463 1265</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Email Section */}
                    <View style={styles.helpSection}>
                        <Text style={styles.helpSectionTitle}>Email Support</Text>
                        
                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleEmail("support@billingsgate.com")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>✉️</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>General Support</Text>
                                <Text style={styles.contactValue}>support@billingsgate.co.uk</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.contactCard}
                            onPress={() => handleEmail("vendors@billingsgate.com")}>
                            <View style={styles.contactIcon}>
                                <Text style={styles.contactIconText}>🏪</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactLabel}>Vendor Support</Text>
                                <Text style={styles.contactValue}>vendors@billingsgate.co.uk</Text>
                            </View>
                            <Text style={styles.contactArrow}>›</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Operating Hours */}
                    <View style={styles.helpSection}>
                        <Text style={styles.helpSectionTitle}>Market Hours</Text>
                        <View style={styles.hoursCard}>
                            <Text style={styles.hoursText}>Tuesday - Saturday: 4:00 AM - 8:30 AM</Text>
                            <Text style={styles.hoursText}>Sunday - Monday: Closed</Text>
                        </View>
                    </View>

                    {/* FAQ Section */}
                    <View style={styles.helpSection}>
                        <Text style={styles.helpSectionTitle}>Frequently Asked Questions</Text>
                        
                        <View style={styles.faqCard}>
                            <Text style={styles.faqQuestion}>How do I place an order?</Text>
                            <Text style={styles.faqAnswer}>Browse the FishBoard, select items, add to basket, and checkout.</Text>
                        </View>

                        <View style={styles.faqCard}>
                            <Text style={styles.faqQuestion}>What payment methods do you accept?</Text>
                            <Text style={styles.faqAnswer}>We accept all major credit and debit cards.</Text>
                        </View>

                        <View style={styles.faqCard}>
                            <Text style={styles.faqQuestion}>Can I cancel my order?</Text>
                            <Text style={styles.faqAnswer}>Orders can be cancelled within 1 hour of placement. Contact the vendor directly.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}