import { useLocalSearchParams, useRouter } from 'expo-router';
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
import { LISTINGS } from '../../../constants/listings';
import { styles } from '../../../styles/styles';

function ListingCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.listImagePlaceholder}>
        <Text style={styles.cardX}>✕</Text>
      </View>
      <View style={styles.listTextContainer}>
        <Text style={styles.listTitle}>{item.name}</Text>
        <Text style={styles.listPrice}>{item.price}</Text>
        <Text style={styles.listMeta}>{item.stall}</Text>
        <Text style={styles.listMeta}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function CategoryListings() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Get listings for this category
  const listingsForCategory = name && LISTINGS[name] ? LISTINGS[name] : [];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setQuantity(1); // Reset quantity
    setShowModal(true);
  };

  const incrementQuantity = () => {
    if (!selectedItem) return;
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (!selectedItem) return;
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToBasket = () => {
    if (!selectedItem) return; 
    
  
    Alert.alert(
      "Added to Basket",
      `${quantity}x ${selectedItem.name} added to basket`
    );
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
        {/* Sign Out Button */}
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.replace('/login')}>
          <Text style={styles.loginButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Section header with back button */}
        <View style={styles.sectionHeader}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>
            Listings for {name}
          </Text>
        </View>

        {/* Listings list */}
        <ScrollView contentContainerStyle={styles.list}>
          {listingsForCategory.map((item, index) => (
            <ListingCard
              key={index}
              item={item}
              onPress={() => handleItemPress(item)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Item Detail Modal */}
      <Modal
        visible={showModal && selectedItem !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowModal(false)}
        >
          <View style={styles.itemModal} onStartShouldSetResponder={() => true}>
            {selectedItem && (
              <>
                {/* Item Title */}
                <Text style={styles.itemModalTitle}>
                  {selectedItem.name} - {selectedItem.price}
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
                    <Text style={styles.quantityValue}>{quantity}</Text>
                    <TouchableOpacity 
                      style={styles.quantityButton}
                      onPress={incrementQuantity}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Seller Info */}
                <Text style={styles.itemModalInfo}>Seller: {selectedItem.stall}</Text>
                <Text style={styles.itemModalInfo}>Location: {selectedItem.location}</Text>

                {/* Add to Basket Button */}
                <TouchableOpacity 
                  style={styles.addToBasketButton}
                  onPress={handleAddToBasket}
                >
                  <Text style={styles.addToBasketText}>Add to Basket 🛒</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}