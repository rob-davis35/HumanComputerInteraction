import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function Accessibility() {
    const router = useRouter();

    const [highContrast, setHighContrast] = useState(false);
    const [largeText, setLargeText] = useState(false);
    const [screenReader, setScreenReader] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [colorBlindMode, setColorBlindMode] = useState(false);
    const [boldText, setBoldText] = useState(false);
    const [hapticFeedback, setHapticFeedback] = useState(true);
    const [audioDescriptions, setAudioDescriptions] = useState(false);

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
                    <Text style={styles.sectionTitle}>Accessibility</Text>
                </View>

                <ScrollView contentContainerStyle={styles.accessibilityContent}>
                    
                    {/* Visual Section */}
                    <View style={styles.accessibilitySection}>
                        <Text style={styles.accessibilitySectionTitle}>Visual</Text>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>High Contrast Mode</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Increase contrast for better visibility
                                </Text>
                            </View>
                            <Switch
                                value={highContrast}
                                onValueChange={setHighContrast}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={highContrast ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>Large Text</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Increase text size throughout the app
                                </Text>
                            </View>
                            <Switch
                                value={largeText}
                                onValueChange={setLargeText}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={largeText ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>Bold Text</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Make all text bold for easier reading
                                </Text>
                            </View>
                            <Switch
                                value={boldText}
                                onValueChange={setBoldText}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={boldText ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>Color Blind Mode</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Adjust colors for those who are colorblind
                                </Text>
                            </View>
                            <Switch
                                value={colorBlindMode}
                                onValueChange={setColorBlindMode}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={colorBlindMode ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>
                    </View>

                    {/* Screen Reader Section */}
                    <View style={styles.accessibilitySection}>
                        <Text style={styles.accessibilitySectionTitle}>Screen Reader</Text>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>Screen Reader Support</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Voice guidance for navigating the app
                                </Text>
                            </View>
                            <Switch
                                value={screenReader}
                                onValueChange={setScreenReader}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={screenReader ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>

                        <View style={styles.accessibilityOption}>
                            <View style={styles.accessibilityOptionText}>
                                <Text style={styles.accessibilityOptionLabel}>Audio Descriptions</Text>
                                <Text style={styles.accessibilityOptionDescription}>
                                    Can describe images and/or visual elements
                                </Text>
                            </View>
                            <Switch
                                value={audioDescriptions}
                                onValueChange={setAudioDescriptions}
                                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                                thumbColor={audioDescriptions ? '#2563EB' : '#F3F4F6'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}