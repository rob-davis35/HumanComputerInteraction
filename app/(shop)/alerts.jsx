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
import { styles } from '../../styles/styles';

export default function AlertsPage() {
    const router = useRouter();

    const [showDateFilter, setShowDateFilter] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Alert Data
    const ALERT_LIST = [
        {
            id: 1,
            title: "System Maintenance",
            description: "Scheduled maintenance will occur on February 10th.",
            date: "2024-02-08"
        },
        {
            id: 2,
            title: "New Feature Release",
            description: "You can now track your seafood orders in real time!",
            date: "2024-02-12"
        },
        {
            id: 3,
            title: "Special Discount",
            description: "Enjoy 15% off select fresh catches this weekend.",
            date: "2024-06-10"
        },
        {
            id: 4,
            title: "Security Notice",
            description: "We recommend updating your password for enhanced security.",
            date: "2024-06-11"
        },
        {
            id: 5,
            title: "Order Shipped",
            description: "Your latest seafood order has been shipped and is on its way!",
            date: "2024-07-02"
        },
        {
            id: 6,
            title: "Delivery Reminder",
            description: "Your order is scheduled for delivery tomorrow. Please ensure someone is available to receive it.",
            date: "2024-07-05"
        },
        {
            id: 7,
            title: "Price Drop Alert",
            description: "Yellowfin tuna prices have dropped today. Perfect time to buy!",
            date: "2024-07-08"
        },
        {
            id: 8,
            title: "Restock Notification",
            description: "Fresh Blue Crab is back in stock!",
            date: "2024-07-10"
        },
        {
            id: 9,
            title: "New Shop Added",
            description: "A highly rated seafood vendor has joined the marketplace.",
            date: "2024-07-11"
        }
    ];

    // Date Filtering
    const filteredAlerts = ALERT_LIST.filter(alert => {
        const alertDate = new Date(alert.date);
        const afterStart = startDate ? alertDate >= new Date(startDate) : true;
        const beforeEnd = endDate ? alertDate <= new Date(endDate) : true;
        return afterStart && beforeEnd;
    });

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
                <SettingsMenu />
            </View>

            <View style={styles.content}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Alerts</Text>

                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => setShowDateFilter(true)}
                    >
                        <Text style={styles.filterIcon}>📅</Text>
                    </TouchableOpacity>
                </View>

                {/* ALERT LIST */}
                <ScrollView contentContainerStyle={styles.list}>
                    {filteredAlerts.map((alert) => (
                        <View key={alert.id} style={styles.listItem}>
                            <View style={styles.listImagePlaceholder}>
                                <Text style={styles.cardX}>🔔</Text>
                            </View>

                            <View style={styles.listTextContainer}>
                                <Text style={styles.listTitle}>{alert.title}</Text>
                                <Text style={styles.listPrice}>{alert.description}</Text>
                                <Text style={styles.listMeta}>Date: {alert.date}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Date Filter Modal*/}
            <Modal
                visible={showDateFilter}
                transparent
                animationType="fade"
                onRequestClose={() => setShowDateFilter(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalOverlay}
                    onPress={() => setShowDateFilter(false)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.filterModal}
                        onPress={(e) => e.stopPropagation()}
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
