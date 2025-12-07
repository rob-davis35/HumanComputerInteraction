import { useRouter } from 'expo-router';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function storeDetails() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.root}>
            {/* Top app bar */}
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
                <SettingsMenu />
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Section header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Shop Front - The Shrimp Hoarders</Text>
                </View>

                {/* Account Menu Items */}
                <View style={styles.shopFrontMenuContainer}>

                    <TouchableOpacity
                        style={styles.shopFrontMenuItem}
                        onPress={() => router.push('/(shop)/salesHistory')}>
                        <Text style={styles.shopFrontMenuText}>Check Sales History</Text>
                        <Text style={styles.shopFrontMenuArrow}>🕐</Text>
                        <Text style={styles.shopFrontMenuArrow}>›</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.shopFrontMenuItem}
                        onPress={() => router.push('/(shop)/activeListings')}>
                        <Text style={styles.shopFrontMenuText}>View Active Listings</Text>
                        <Text style={styles.shopFrontMenuArrow}>📋</Text>
                        <Text style={styles.shopFrontMenuArrow}>›</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.shopFrontMenuItem}>
                        <Text style={styles.shopFrontMenuText}>Check Off Orders</Text>
                        <Text style={styles.shopFrontMenuArrow}>📦</Text>
                        <Text style={styles.shopFrontMenuArrow}>›</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.shopFrontMenuItem}>
                        <Text style={styles.shopFrontMenuText}>New Listing</Text>
                        <Text style={styles.shopFrontMenuArrow}>➕</Text>
                        <Text style={styles.shopFrontMenuArrow}>›</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );

}
