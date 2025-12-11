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
import { CATEGORIES } from '../../constants/listings';
import { styles } from '../../styles/styles';

export default function Basket() {
    const router = useRouter();

    // Temporary Active Listings
    const [activeListingItems, setActiveListingItems] = useState([
        {
            id: 1,
            name: "Cod",
            quantity: 100,
            type: "White Fish",
            price: "£5.00",
        },
        {
            id: 2,
            name: "Haddock",
            quantity: 500,
            type: "White Fish",
            price: "£7.00",
        },
        {
            id: 3,
            name: "Salmon",
            quantity: 20,
            type: "Oily Fish",
            price: "£12.00",
        },
        {
            id: 4,
            name: "Halibut",
            quantity: 125,
            type: "Flat Fish",
            price: "£9.00",
        },
        {
            id: 5,
            name: "Sole",
            quantity: 275,
            type: "Flat Fish",
            price: "£2.50",
        },
        {
            id: 6,
            name: "Mackerel",
            quantity: 342,
            type: "Oily Fish",
            price: "£0.50",
        },
        {
            id: 7,
            name: "Shrimp",
            quantity: 600,
            type: "Shellfish",
            price: "£2.00",
        },
        {
            id: 8,
            name: "Squid",
            quantity: 67,
            type: "Cephalopods",
            price: "£15.00",
        },
        {
            id: 9,
            name: "Octopus",
            quantity: 100,
            type: "Cephalopods",
            price: "£18.00",
        },
        {
            id: 10,
            name: "Cuttlefish",
            quantity: 142,
            type: "Cephalopods",
            price: "£10.00",
        },
        {
            id: 11,
            name: "Pollock",
            quantity: 312,
            type: "White Fish",
            price: "£6.00",
        },
        {
            id: 12,
            name: "Sardines",
            quantity: 125,
            type: "Oily Fish",
            price: "£0.75",
        },
        {
            id: 13,
            name: "Clams",
            quantity: 239,
            type: "Mollusc",
            price: "£4.00",
        },
        {
            id: 14,
            name: "Crab",
            quantity: 498,
            type: "Shellfish",
            price: "£13.00",
        },
        {
            id: 15,
            name: "Lobster",
            quantity: 19,
            type: "Shellfish",
            price: "£20.00",
        },
        {
            id: 16,
            name: "Flounder",
            quantity: 429,
            type: "Flat Fish",
            price: "£9.00",
        },
        {
            id: 17,
            name: "Cuttlefish",
            quantity: 79,
            type: "Cephalopod",
            price: "£23.00",
        },
        {
            id: 18,
            name: "Oyster",
            quantity: 479,
            type: "Mollusc",
            price: "£6.00",
        },
    ]);

    // Modal state
    const [showAmendModal, setShowAmendModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [amendQuantity, setAmendQuantity] = useState(1);

    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);

    // Validation message state
    const [validationMessage, setValidationMessage] = useState(false);
    const [validationText, setValidationText] = useState("");
    const [validationType, setValidationType] = useState("error");

    const showMessage = (type, text) => {
        setValidationType(type);
        setValidationText(text);
        setValidationMessage(true);
    };

    const handleAmendPress = (item) => {
        setSelectedItem(item);
        setAmendQuantity(item.quantity);
        setShowAmendModal(true);
    };

    const incrementQuantity = () => {
        setAmendQuantity(amendQuantity + 1);
    };

    const decrementQuantity = () => {
        if (amendQuantity > 1) {
            setAmendQuantity(amendQuantity - 1);
        }
    };

    const handleUpdate = () => {
        if (!selectedItem) return;

        // Update the quantity in basket
        setActiveListingItems(activeListingItems.map(item =>
            item.id === selectedItem.id
                ? { ...item, quantity: amendQuantity }
                : item
        ));

        setShowAmendModal(false);

        showMessage("success", "Listing Updated");
        return;
    };

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredList = activeListingItems.filter(item => selectedCategories.includes(item.type));

    const handleDelete = (itemId) => {
        setActiveListingItems(activeListingItems.filter(item => item.id !== itemId));

        showMessage("error", "Listing Deleted");
        return;
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
                            Active Listings - The Shrimp Hoarders
                        </Text>
                    </>

                    {/* Filter Button */}
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => setShowFilter(true)}>
                        <Text style={styles.filterIcon}>▼</Text>
                    </TouchableOpacity>
                </View>

                {/* Basket Items List */}
                <ScrollView contentContainerStyle={styles.basketList}>
                    {activeListingItems.length === 0 ? (
                        <View style={styles.emptyBasket}>
                            <Text style={styles.emptyBasketText}>You have no active listings</Text>
                        </View>
                    ) : (
                        filteredList.map((item) => (
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
                                    <Text style={styles.basketItemPrice}>{item.price}</Text>
                                    <Text style={styles.basketItemMeta}>{item.type}</Text>
                                </View>

                                {/* Actions */}
                                <View style={styles.basketItemActions}>
                                    <TouchableOpacity
                                        style={styles.amendButton}
                                        onPress={() => handleAmendPress(item)}>
                                        <Text style={styles.amendButtonText}>✏️</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={() => handleDelete(item.id)}>
                                        <Text style={styles.deleteButtonText}>🗑️</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>

            {/* Amend Order Modal */}
            <Modal
                visible={showAmendModal && selectedItem !== null}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowAmendModal(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setShowAmendModal(false)}
                >
                    <View style={styles.itemModal} onStartShouldSetResponder={() => true}>
                        {selectedItem && (
                            <>
                                {/* Title */}
                                <Text style={styles.itemModalTitle}>
                                    Amend Order{'\n'}{selectedItem.name} - {selectedItem.quantity}x
                                </Text>

                                {/* Item Image Placeholder */}
                                <View style={styles.itemModalImage}>
                                    <Text style={styles.cardX}>✕</Text>
                                </View>

                                {/* Quantity Picker */}
                                <View style={styles.quantityContainer}>
                                    <Text style={styles.quantityLabel}>Quantity</Text>
                                    <View style={styles.quantityPicker}>
                                        <TouchableOpacity
                                            style={styles.quantityButton}
                                            onPress={decrementQuantity}
                                        >
                                            <Text style={styles.quantityButtonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.quantityValue}>{amendQuantity}</Text>
                                        <TouchableOpacity
                                            style={styles.quantityButton}
                                            onPress={incrementQuantity}
                                        >
                                            <Text style={styles.quantityButtonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Price Info */}
                                <Text style={styles.itemModalInfo}>Price - {selectedItem.price}</Text>
                                <Text style={styles.itemModalInfo}>Type -  {selectedItem.type}</Text>

                                {/* Update Button */}
                                <TouchableOpacity
                                    style={styles.updateButton}
                                    onPress={handleUpdate}
                                >
                                    <Text style={styles.updateButtonText}>Update</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Filter Modal */}
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
                        <Text style={styles.filterTitle}>Type of Fish:</Text>
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

            <ValidationMessage
                visible={validationMessage}
                type={validationType}
                message={validationText}
                onHide={() => setValidationMessage(false)}
            />

        </SafeAreaView>
    );
}