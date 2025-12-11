import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Alert,
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { styles } from '../../styles/styles';

export default function PaymentMethods() {
    const router = useRouter();

    // Static payment methods data
    const [paymentMethods] = useState([
        {
            id: 1,
            type: "Visa",
            last4: "4242",
            expiry: "12/25",
            isDefault: true
        },
        {
            id: 2,
            type: "Mastercard",
            last4: "8888",
            expiry: "03/26",
            isDefault: false
        },
        {
            id: 3,
            type: "American Express",
            last4: "1234",
            expiry: "08/24",
            isDefault: false
        }
    ]);

    // Modal state
    const [showCardModal, setShowCardModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleBack = () => {
        router.back();
    };

    const handleCardPress = (card) => {
        setSelectedCard(card);
        setShowCardModal(true);
    };

    const handleAddPayment = () => {
        Alert.alert(
            "Add Payment Method",
            "This feature would open a payment form in the full app.",
            [{ text: "OK" }]
        );
    };

    const handleSetDefault = () => {
        if (!selectedCard) return;
        
        Alert.alert(
            "Set as Default",
            `${selectedCard.type} ending in ${selectedCard.last4} will be set as your default payment method.`,
            [{ text: "OK" }]
        );
        setShowCardModal(false);
    };

    const handleRemove = () => {
        if (!selectedCard) return;
        
        Alert.alert(
            "Remove Card",
            `Are you sure you want to remove ${selectedCard.type} ending in ${selectedCard.last4}?`,
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Remove", 
                    style: "destructive",
                    onPress: () => setShowCardModal(false)
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
                    <Text style={styles.sectionTitle}>Payment Methods</Text>
                </View>

                {/* Payment Methods List */}
                <ScrollView contentContainerStyle={styles.paymentMethodsList}>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity 
                            key={method.id} 
                            style={styles.paymentCard}
                            onPress={() => handleCardPress(method)}
                        >
                            {/* Card Icon */}
                            <View style={styles.paymentCardIcon}>
                                <Text style={styles.paymentCardIconText}>💳</Text>
                            </View>

                            {/* Card Info */}
                            <View style={styles.paymentCardInfo}>
                                <View style={styles.paymentCardHeader}>
                                    <Text style={styles.paymentCardType}>{method.type}</Text>
                                    {method.isDefault && (
                                        <View style={styles.defaultBadge}>
                                            <Text style={styles.defaultBadgeText}>Default</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={styles.paymentCardNumber}>•••• {method.last4}</Text>
                                <Text style={styles.paymentCardExpiry}>Expires {method.expiry}</Text>
                            </View>

                            <Text style={styles.paymentCardArrow}>›</Text>
                        </TouchableOpacity>
                    ))}

                    {/* Add Payment Method Button */}
                    <TouchableOpacity
                        style={styles.addPaymentButton}
                        onPress={handleAddPayment}>
                        <Text style={styles.addPaymentButtonIcon}>+</Text>
                        <Text style={styles.addPaymentButtonText}>Add Payment Method</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Card Options Modal */}
            <Modal
                visible={showCardModal && selectedCard !== null}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowCardModal(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setShowCardModal(false)}
                >
                    <View style={styles.itemModal} onStartShouldSetResponder={() => true}>
                        {selectedCard && (
                            <>
                                {/* Card Title */}
                                <Text style={styles.itemModalTitle}>
                                    {selectedCard.type}{'\n'}•••• {selectedCard.last4}
                                </Text>

                                {/* Card Image/Icon */}
                                <View style={styles.itemModalImage}>
                                    <Text style={styles.paymentModalCardIcon}>💳</Text>
                                </View>

                                {/* Card Details */}
                                <Text style={styles.itemModalInfo}>Expires: {selectedCard.expiry}</Text>
                                {selectedCard.isDefault && (
                                    <Text style={styles.itemModalInfo}>Status: Default Payment Method</Text>
                                )}

                                {/* Action Buttons */}
                                {!selectedCard.isDefault && (
                                    <TouchableOpacity
                                        style={styles.setDefaultButtonLarge}
                                        onPress={handleSetDefault}
                                    >
                                        <Text style={styles.setDefaultButtonTextLarge}>Set as Default</Text>
                                    </TouchableOpacity>
                                )}

                                <TouchableOpacity
                                    style={styles.removeCardButtonLarge}
                                    onPress={handleRemove}
                                >
                                    <Text style={styles.removeCardButtonTextLarge}>Remove Card</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}