import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function SiteMap() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleBack = () => {
        router.back();
    };

    const handleZoomIn = () => {
        // Placeholder function for zoom in effect
        console.log("Zoom In");
    };

    const handleZoomOut = () => {
        // Placeholder function for zoom out effect
        console.log("Zoom Out");
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
                    <Text style={styles.sectionTitle}>Site Map</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.sitemapSearchContainer}>
                    <TextInput
                        style={styles.sitemapSearchInput}
                        placeholder="Search for stalls..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Zoom Controls */}
                <View style={styles.zoomControlsContainer}>
                    <TouchableOpacity
                        style={styles.zoomButton}
                        onPress={handleZoomIn}
                    >
                        <Text style={styles.zoomButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.zoomButton}
                        onPress={handleZoomOut}
                    >
                        <Text style={styles.zoomButtonText}>−</Text>
                    </TouchableOpacity>
                </View>

                {/* Sitemap Image Frame */}
                <View style={styles.sitemapFrame}>
                    <Image
                        source={require('../../assets/sitemap.png')}
                        style={styles.sitemapImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}