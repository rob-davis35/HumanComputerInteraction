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
import ValidationMessage from '../../components/validationMessage';
import { styles } from '../../styles/styles';

export default function Basket() {
    const router = useRouter();

    // Temporary Order Items
    const [orderItems, setOrderItems] = useState([
        {
            id: 1,
            name: "Cod",
            quantity: 100,
            time: "8:00am - 12/01/2026",
            price: "£500",
            customer: "Michael Stephens",
            phoneNumber: "07096393521"
        },
        {
            id: 2,
            name: "Salmon",
            quantity: 273,
            time: "1:00pm - 26/01/2026",
            price: "£5.00",
            customer: "Jacob Owens",
            phoneNumber: "07924679152"
        },
        {
            id: 3,
            name: "Haddock",
            quantity: 180,
            time: "9:30am - 05/02/2026",
            price: "£320",
            customer: "Sarah Thompson",
            phoneNumber: "07855432910"
        },
    ]);

    // Validation message state
    const [validationMessage, setValidationMessage] = useState(false);
    const [validationText, setValidationText] = useState("");
    const [validationType, setValidationType] = useState("error");

    const showMessage = (type, text) => {
        setValidationType(type);
        setValidationText(text);
        setValidationMessage(true);
    };

    const [selectedItem, setSelectedItem] = useState(null);

    const [showContactModal, setShowContactModal] = useState(false);

    const handleContactButtonPress = (item) => {
        setSelectedItem(item);
        setShowContactModal(true);
    }

    const handleCompletedOrder = (itemId) => {
        setOrderItems(orderItems.filter(item => item.id !== itemId))
        showMessage("success", "Order completed!");
        return;
    }

    const handleDelete = (itemId) => {
        setOrderItems(orderItems.filter(item => item.id !== itemId));
        showMessage("error", "Order cancelled");
    };

    const handleBack = () => {
        router.replace('/(shop)/storeDetails');
    }


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

                    <>
                        <TouchableOpacity
                            onPress={() => handleBack()}
                            style={styles.backButton}
                        >
                            <Text style={styles.backArrow}>‹</Text>
                        </TouchableOpacity>
                        <Text style={styles.sectionTitle}>
                            Current Orders - The Shrimp Hoarders
                        </Text>
                    </>

                </View>

                {/* Basket Items List */}
                <ScrollView contentContainerStyle={styles.basketList}>
                    {orderItems.length === 0 ? (
                        <View style={styles.emptyBasket}>
                            <Text style={styles.emptyBasketText}>You have no current orders</Text>
                        </View>
                    ) : (
                        orderItems.map((item) => (
                            <View key={item.id} style={styles.basketItem}>
                                {/* Image */}
                                <View style={styles.basketItemImage}>
                                    <Text style={styles.cardX}>✕</Text>
                                </View>

                                {/* Info */}
                                <View style={styles.basketItemInfo}>
                                    <Text style={styles.basketItemName}>
                                        {item.quantity}x {item.name}
                                    </Text>
                                    <Text style={styles.basketItemPrice}>Ready for: </Text>
                                    <Text style={styles.basketItemPrice}>{item.time}</Text>
                                    <Text style={styles.basketItemMeta}>{item.customer}</Text>
                                    <TouchableOpacity
                                        style={styles.contactCustomerButton}
                                        onPress={() => handleContactButtonPress(item)}
                                    >
                                        <Text style={styles.contactCustomerText}>Contact Customer</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Actions */}
                                <View style={styles.basketItemActions}>
                                    <Text style={styles.basketItemMeta}>Complete Order</Text>
                                    <TouchableOpacity
                                        style={styles.completeOrderButton}
                                        onPress={() => handleCompletedOrder(item.id)}>
                                        <Text style={styles.amendButtonText}>✔</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.basketItemMeta}>Cancel Order</Text>
                                    <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={() => handleDelete(item.id)}>
                                        <Text style={styles.deleteButtonText}>✖</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>

            <Modal
                visible={showContactModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowContactModal(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setShowContactModal(false)}
                >
                    <View style={styles.filterModal}>
                        <Text style={styles.filterTitle}>Contact Customer:</Text>
                        {selectedItem && (
                            <>
                                <Text style={styles.basketItemPrice}>{selectedItem.customer}</Text>
                                <Text style={styles.basketItemPrice}>tel: {selectedItem.phoneNumber}</Text>
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            </Modal>

            <ValidationMessage
                visible={validationMessage}
                type={validationType}
                message={validationText}
                onHide={() => setValidationMessage(false)}
            />

        </SafeAreaView>
    );
}       