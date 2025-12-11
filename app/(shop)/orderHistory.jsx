import { useRouter } from 'expo-router';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function OrderHistory() {
    const router = useRouter();

    // Static order history data
    const orders = [
        {
            id: 1,
            date: "Dec 8, 2024",
            items: "5kg Cod, 2kg Haddock, 1kg Prawns",
            total: "£67.50",
            status: "Delivered",
            seller: "Keith's Emporium"
        },
        {
            id: 2,
            date: "Dec 3, 2024",
            items: "3kg Salmon, 4kg Mackerel",
            total: "£45.80",
            status: "Delivered",
            seller: "Fish Guys"
        },
        {
            id: 3,
            date: "Nov 28, 2024",
            items: "2kg Lobster Tail, 1kg Crab",
            total: "£89.00",
            status: "Delivered",
            seller: "Shells & Tails"
        },
        {
            id: 4,
            date: "Nov 22, 2024",
            items: "10kg Plaice, 5kg Sole",
            total: "£112.50",
            status: "Delivered",
            seller: "Plaice Palace"
        },
        {
            id: 5,
            date: "Nov 15, 2024",
            items: "3kg Tuna, 2kg Swordfish",
            total: "£78.20",
            status: "Delivered",
            seller: "Ocean Fresh"
        },
        {
            id: 6,
            date: "Nov 10, 2024",
            items: "5kg Mussels, 3kg Clams, 2kg Oysters",
            total: "£54.30",
            status: "Completed",
            seller: "Harbour Shellfish"
        }
    ];

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
                    <Text style={styles.sectionTitle}>Order History</Text>
                </View>

                {/* Orders List */}
                <ScrollView contentContainerStyle={styles.ordersList}>
                    {orders.map((order) => (
                        <View key={order.id} style={styles.basketItem}>
                            {/* Image Placeholder */}
                            <View style={styles.basketItemImage}>
                                <Text style={styles.cardX}>✕</Text>
                            </View>

                            {/* Order Info */}
                            <View style={styles.basketItemInfo}>
                                <View style={styles.orderHeader}>
                                    <Text style={styles.orderDate}>{order.date}</Text>
                                    <View style={[
                                        styles.orderStatusBadge,
                                        order.status === "Delivered" 
                                            ? styles.orderStatusDelivered 
                                            : styles.orderStatusCompleted
                                    ]}>
                                        <Text style={styles.orderStatusText}>{order.status}</Text>
                                    </View>
                                </View>
                                
                                <Text style={styles.orderItems}>{order.items}</Text>
                                <Text style={styles.orderSeller}>From: {order.seller}</Text>
                                <Text style={styles.orderTotal}>{order.total}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}