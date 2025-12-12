import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import SettingsMenu from '../../../components/settingsWheel';
import ValidationMessage from '../../../components/validationMessage';
import { LISTINGS } from '../../../constants/listings';
import { styles } from '../../../styles/styles';

function ListingCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      {item.image ? (
        <Image 
          source={item.image}
          style={styles.listImagePlaceholder}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.listImagePlaceholder}>
          <Text style={styles.cardX}>✕</Text>
        </View>
      )}
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

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [validationMessage, setValidationMessage] = useState(false);
  const [validationText, setValidationText] = useState("");
  const [validationType, setValidationType] = useState("error");

  const showMessage = (type, text) => {
    setValidationType(type);
    setValidationText(text);
    setValidationMessage(true);
  };

  const listingsForCategory = name && LISTINGS[name] ? LISTINGS[name] : [];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setQuantity(1);
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

    showMessage("success", "Item Added to Basket");
    return;
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
        <SettingsMenu />
      </View>

      <View style={styles.content}>
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
                <Text style={styles.itemModalTitle}>
                  {selectedItem.name} - {selectedItem.price}
                </Text>

                {selectedItem.image ? (
                  <Image 
                    source={selectedItem.image}
                    style={styles.itemModalImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.itemModalImage}>
                    <Text style={styles.cardX}>✕</Text>
                  </View>
                )}

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

                <Text style={styles.itemModalInfo}>Seller: {selectedItem.stall}</Text>
                <Text style={styles.itemModalInfo}>Location: {selectedItem.location}</Text>

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

      <ValidationMessage
        visible={validationMessage}
        type={validationType}
        message={validationText}
        onHide={() => setValidationMessage(false)}
      />

    </SafeAreaView>
  );
}