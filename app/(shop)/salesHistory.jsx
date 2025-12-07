import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { CATEGORIES } from '../../constants/listings';
import { styles } from '../../styles/styles';

export default function SalesHistory() {
    const router = useRouter();
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);

    // Assign categories to your original salesHistory data
    const SALES_LISTINGS = {
        "Shellfish": [
            {
                id: 1,
                itemName: "Tuna Steak",
                quantitySold: 30,
                totalPrice: "£450.00",
                dateSold: "2023-02-07"
            },
            {
                id: 2,
                itemName: "Shrimp",
                quantitySold: 475,
                totalPrice: "£600.00",
                dateSold: "2023-02-13"
            },
        ],
        "White Fish": [
            {
                id: 3,
                itemName: "Lobster Tail",
                quantitySold: 50,
                totalPrice: "£500.00",
                dateSold: "2024-06-10"
            },
            {
                id: 4,
                itemName: "Salmon Fillet",
                quantitySold: 100,
                totalPrice: "£800.00",
                dateSold: "2024-06-11"
            },
        ]
    };

    // Filter category logic (same as index)
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Flatten listings by selected categories
    const filteredSales = selectedCategories.flatMap(category =>
        SALES_LISTINGS[category] || []
    );

    // Back button
    const handleBack = () => {
        router.replace("/(shop)/storeDetails");
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
                {/* Section header */}
                <View style={styles.sectionHeader}>
                    <TouchableOpacity onPress={handleBack} style={[styles.sectionTitle, { flexDirection: "row", alignItems: "center" }]}>
                        <Text style={styles.backArrow}>‹</Text>
                        <Text style={styles.sectionTitle}>Sales History - The Shrimp Hoarders</Text>
                    </TouchableOpacity>

                    {/* Filter Date Button */}
                    <TouchableOpacity
                        style={styles.filterButton}>
                        <Text style={styles.filterIcon}>📅</Text>
                    </TouchableOpacity>

                    {/* Filter Fish Button */}
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => setShowFilter(true)}
                    >
                        <Text style={styles.filterIcon}>▼</Text>
                    </TouchableOpacity>
                </View>

                {/* SALES LIST */}
                <ScrollView contentContainerStyle={styles.list}>
                    {filteredSales.map((item) => (
                        <View key={item.id} style={styles.listItem}>
                            <View style={styles.listImagePlaceholder}>
                                <Text style={styles.cardX}>✕</Text>
                            </View>

                            <View style={styles.listTextContainer}>
                                <Text style={styles.listTitle}>{item.itemName}</Text>
                                <Text style={styles.listPrice}>Total: {item.totalPrice}</Text>
                                <Text style={styles.listMeta}>
                                    Quantity Sold: {item.quantitySold}
                                </Text>
                                <Text style={styles.listMeta}>
                                    Date Sold: {item.dateSold}
                                </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* CATEGORY FILTER MODAL */}
            <Modal
                visible={showFilter}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowFilter(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setShowFilter(false)}
                >
                    <View style={styles.filterModal}>
                        <Text style={styles.filterTitle}>Filter by Category:</Text>

                        {CATEGORIES.map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={styles.filterOption}
                                onPress={() => toggleCategory(category)}
                            >
                                <Text style={styles.filterOptionText}>{category}</Text>
                                <View style={styles.checkbox}>
                                    {selectedCategories.includes(category) && (
                                        <Text style={styles.checkmark}>✓</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.closeFilterButton}
                            onPress={() => setShowFilter(false)}
                        >
                            <Text style={styles.closeFilterText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}
