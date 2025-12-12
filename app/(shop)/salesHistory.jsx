import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { CATEGORIES } from '../../constants/listings';
import { styles } from '../../styles/styles';

export default function SalesHistory() {
    const router = useRouter();

    const [showFilter, setShowFilter] = useState(false);
    const [showDateFilter, setShowDateFilter] = useState(false);

    const VALID_CATEGORIES = CATEGORIES.filter(c => ["Shellfish", "White Fish", "Oily Fish", "Flatfish", "Cephalopods", "Mollusc"].includes(c));

    const [selectedCategories, setSelectedCategories] = useState(VALID_CATEGORIES);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const SALES_LISTINGS = {
        "White Fish": [
            {
                id: 1,
                itemName: "Cod Fillet",
                quantitySold: 120,
                totalPrice: "£720.00",
                dateSold: "2024-04-02"
            },
            {
                id: 2,
                itemName: "Haddock Portion",
                quantitySold: 90,
                totalPrice: "£540.00",
                dateSold: "2024-04-05"
            }
        ],

        "Oily Fish": [
            {
                id: 3,
                itemName: "Mackerel",
                quantitySold: 150,
                totalPrice: "£675.00",
                dateSold: "2024-03-18"
            },
            {
                id: 4,
                itemName: "Sardines",
                quantitySold: 200,
                totalPrice: "£500.00",
                dateSold: "2024-03-21"
            }
        ],

        "Flatfish": [
            {
                id: 5,
                itemName: "Plaice",
                quantitySold: 70,
                totalPrice: "£420.00",
                dateSold: "2024-02-11"
            }
        ],

        "Shellfish": [
            {
                id: 6,
                itemName: "King Prawns",
                quantitySold: 300,
                totalPrice: "£900.00",
                dateSold: "2024-05-12"
            }
        ],

        "Cephalopods": [
            {
                id: 7,
                itemName: "Squid Rings",
                quantitySold: 160,
                totalPrice: "£640.00",
                dateSold: "2024-01-27"
            }
        ],

        "Mollusc": [
            {
                id: 8,
                itemName: "Mussels",
                quantitySold: 250,
                totalPrice: "£750.00",
                dateSold: "2024-06-03"
            },
            {
                id: 9,
                itemName: "Clams",
                quantitySold: 180,
                totalPrice: "£540.00",
                dateSold: "2024-06-04"
            }
        ]
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredSales = selectedCategories
        .flatMap(category => SALES_LISTINGS[category] || [])
        .filter(item => {
            const soldDate = new Date(item.dateSold);
            const afterStart = startDate ? soldDate >= new Date(startDate) : true;
            const beforeEnd = endDate ? soldDate <= new Date(endDate) : true;
            return afterStart && beforeEnd;
        });

    const handleBack = () => {
        router.replace("/(shop)/storeDetails");
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
                <SettingsMenu />
            </View>

            <View style={styles.content}>
                {/* HEADER */}
                <View style={styles.sectionHeader}>

                    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                        <Text style={styles.backArrow}>‹</Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>
                        Sales History - The Shrimp Hoarders
                    </Text>

                    <TouchableOpacity style={styles.filterButton} onPress={() => setShowDateFilter(true)}>
                        <Text style={styles.filterIcon}>📅</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilter(true)}>
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
                                <Text style={styles.listMeta}>Qty Sold: {item.quantitySold}</Text>
                                <Text style={styles.listMeta}>Date: {item.dateSold}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <Modal
                visible={showFilter}
                transparent
                animationType="fade"
                onRequestClose={() => setShowFilter(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalOverlay}
                    onPress={() => setShowFilter(false)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.filterModal}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <Text style={styles.filterTitle}>Filter by Category</Text>

                        {VALID_CATEGORIES.map(category => (
                            <TouchableOpacity
                                key={category}
                                style={styles.filterOption}
                                onPress={() => toggleCategory(category)}
                            >
                                <Text style={styles.filterOptionText}>{category}</Text>
                                <View style={styles.checkbox}>
                                    {selectedCategories.includes(category) && <Text style={styles.checkmark}>✓</Text>}
                                </View>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.closeFilterButton}
                            onPress={() => setShowFilter(false)}
                        >
                            <Text style={styles.closeFilterText}>Done</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>


            <Modal
                visible={showDateFilter}
                transparent
                animationType="fade"
                onRequestClose={() => setShowDateFilter(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalOverlay}
                    onPress={() => setShowDateFilter(false)}  // <-- close when tapping outside
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.filterModal}
                        onPress={(e) => e.stopPropagation()}   // <-- prevent closing on inside tap
                    >
                        <Text style={styles.filterTitle}>Filter by Date</Text>

                        {/* Start Date */}
                        <Text style={styles.dateLabel}>Start Date</Text>

                        {Platform.OS === "web" ? (
                            <View style={styles.dateInputWrapper}>
                                <input
                                    type="date"
                                    style={styles.dateInputWeb}
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </View>
                        ) : (
                            <TextInput
                                placeholder="YYYY-MM-DD"
                                value={startDate}
                                onChangeText={setStartDate}
                                style={styles.input}
                            />
                        )}

                        {/* End Date */}
                        <Text style={styles.dateLabel}>End Date</Text>

                        {Platform.OS === "web" ? (
                            <View style={styles.dateInputWrapper}>
                                <input
                                    type="date"
                                    style={styles.dateInputWeb}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </View>
                        ) : (
                            <TextInput
                                placeholder="YYYY-MM-DD"
                                value={endDate}
                                onChangeText={setEndDate}
                                style={styles.input}
                            />
                        )}

                        <View style={styles.dateButtonRow}>
                            <TouchableOpacity
                                style={[styles.closeFilterButton, { backgroundColor: "#6B7280", flex: 1 }]}
                                onPress={() => {
                                    setStartDate("");
                                    setEndDate("");
                                }}
                            >
                                <Text style={styles.closeFilterText}>Reset</Text>
                            </TouchableOpacity>

                            <View style={{ width: 12 }} />

                            <TouchableOpacity
                                style={[styles.closeFilterButton, { flex: 1 }]}
                                onPress={() => setShowDateFilter(false)}
                            >
                                <Text style={styles.closeFilterText}>Apply</Text>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}
