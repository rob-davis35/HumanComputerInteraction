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

export default function Basket() {
  const router = useRouter();

  // Temporary basket data 
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Crab Leg",
      quantity: 100,
      price: "£200.51",
      stall: "Crab World",
      location: "C1.05"
    },
    {
      id: 2,
      name: "Shrimp Leg",
      quantity: 500,
      price: "£200.51",
      stall: "The Shrimp Hoarders",
      location: "S2.10"
    },
    {
      id: 3,
      name: "Plaice",
      quantity: 20,
      price: "£200.51",
      stall: "Fish Guys",
      location: "R6.10"
    }
  ]);

  // Modal state
  const [showAmendModal, setShowAmendModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [amendQuantity, setAmendQuantity] = useState(1);

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
    setBasketItems(basketItems.map(item =>
      item.id === selectedItem.id
        ? { ...item, quantity: amendQuantity }
        : item
    ));

    setShowAmendModal(false);
  };

  const handleDelete = (itemId) => {
    setBasketItems(basketItems.filter(item => item.id !== itemId));
  };

  const handleFinishAndPay = () => {
    Alert.alert(
      "Finish and Pay",
      "Proceeding to payment...",
      [{ text: "OK" }]
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
        {/* Section header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Basket</Text>
        </View>

        {/* Basket Items List */}
        <ScrollView contentContainerStyle={styles.basketList}>
          {basketItems.length === 0 ? (
            <View style={styles.emptyBasket}>
              <Text style={styles.emptyBasketText}>Your basket is empty</Text>
            </View>
          ) : (
            basketItems.map((item) => (
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
                  <Text style={styles.basketItemMeta}>{item.stall}</Text>
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

        {/* Finish and Pay Button */}
        {basketItems.length > 0 && (
          <TouchableOpacity
            style={styles.finishPayButton}
            onPress={handleFinishAndPay}>
            <Text style={styles.finishPayText}>Finish and Pay</Text>
          </TouchableOpacity>
        )}
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
                <Text style={styles.itemModalInfo}>Seller: {selectedItem.stall}</Text>
                <Text style={styles.itemModalInfo}>Location: {selectedItem.location}</Text>

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
    </SafeAreaView>
  );
}