import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// categories of fish to buy from
const CATEGORIES = [
  "White Fish",
  "Oily Fish",
  "Flatfish",
  "Shellfish",
  "Cephalopods",
  "Mollusc",
];

// listings inside of the clickable categories
const LISTINGS = {
  "White Fish": [
    {
      name: "Cod - East Coast",
      price: "£8.50 / kg",
      stall: "Keiths Emporium",
      location: "R1.32",
    },
    {
      name: "Haddock - Fresh",
      price: "£9.50 / kg",
      stall: "Scottish Stall",
      location: "R2.12",
    },
    {
      name: "Cornish Hake",
      price: "£12.20 / kg",
      stall: "The Fish Guys",
      location: "R6.24",
    },
    {
      name: "Plaice",
      price: "£10.40 / kg",
      stall: "Plaice Palace",
      location: "R6.10",
    },
  ],
  "Oily Fish": [
    {
      name: "Salmon - Atlantic",
      price: "£11.30 / kg",
      stall: "North Sea Traders",
      location: "A3.10",
    },
    {
      name: "Mackerel",
      price: "£6.20 / kg",
      stall: "Harbour Fresh",
      location: "B1.04",
    },
  ],
  Flatfish: [
    {
      name: "Lemon Sole",
      price: "£13.00 / kg",
      stall: "Coastal Choice",
      location: "F4.02",
    },
  ],
  Shellfish: [
    {
      name: "King Prawns",
      price: "£16.40 / kg",
      stall: "Shells & Tails",
      location: "S2.20",
    },
  ],
  Cephalopods: [
    {
      name: "Squid - Cleaned",
      price: "£9.80 / kg",
      stall: "Deep Blue Co.",
      location: "C3.11",
    },
  ],
  Mollusc: [
    {
      name: "Mussels",
      price: "£4.50 / kg",
      stall: "Harbour Shellfish",
      location: "M1.01",
    },
  ],
};

export default function App() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'customer' or 'fishmonger'
  
  // Login form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [basket, setBasket] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const listingsForCategory =
    selectedCategory && LISTINGS[selectedCategory]
      ? LISTINGS[selectedCategory]
      : [];

  const basketCount = basket.reduce(
    (sum, entry) => sum + entry.quantity,
    0
  );

  // Login handler
  function handleLogin() {
    const user = username.toLowerCase();
    
    if (user === "customer" || user === "fishmonger") {
      setUserType(user);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Please use 'customer' or 'fishmonger' as username");
    }
  }

  // Logout handler
  function handleLogout() {
    setIsLoggedIn(false);
    setUserType(null);
    setSelectedCategory(null);
    setBasket([]);
  }

  function openAmendModal(item) {
    setEditingItem(item);
    const existing = basket.find((entry) => entry.item.name === item.name);
    setQuantity(existing ? existing.quantity : 1);
    setModalVisible(true);
  }

  function closeAmendModal() {
    setModalVisible(false);
    setEditingItem(null);
  }

  function updateBasket() {
    if (!editingItem) return;

    setBasket((prev) => {
      const idx = prev.findIndex(
        (entry) => entry.item.name === editingItem.name
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity };
        return copy;
      }
      return [...prev, { item: editingItem, quantity }];
    });

    closeAmendModal();
  }

  function incrementQuantity() {
    setQuantity((q) => q + 1);
  }

  function decrementQuantity() {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  }

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.loginContainer}>
          <View style={styles.loginCard}>
            <Text style={styles.loginTitle}>Billingsgate Exchange</Text>
            <Text style={styles.loginSubtitle}>🐟</Text>
            
            <Text style={styles.loginLabel}>Username</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="customer or fishmonger"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            
            <Text style={styles.loginLabel}>Password</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="Any password (demo)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.loginHint}>
              <Text style={styles.loginHintText}>Demo Accounts:</Text>
              <Text style={styles.loginHintText}>• Username: customer</Text>
              <Text style={styles.loginHintText}>• Username: fishmonger</Text>
              <Text style={styles.loginHintText}>Password: anything</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Main app (after login)
  return (
    <SafeAreaView style={styles.root}>
      {/* Top bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Section header */}
        <View style={styles.sectionHeader}>
          {selectedCategory ? (
            <>
              <TouchableOpacity
                onPress={() => setSelectedCategory(null)}
                style={styles.backButton}
              >
                <Text style={styles.backArrow}>‹</Text>
              </TouchableOpacity>
              <Text style={styles.sectionTitle}>
                Listings for {selectedCategory}
              </Text>
            </>
          ) : (
            <Text style={styles.sectionTitle}>
              {userType === "fishmonger" ? "Shopfront" : "On Sale"}
            </Text>
          )}
        </View>

        {/* Categories vs Listings */}
        {selectedCategory == null ? (
          // Category grid
          <ScrollView contentContainerStyle={styles.grid}>
            {CATEGORIES.map((name) => (
              <CategoryCard
                key={name}
                label={name}
                onPress={() => setSelectedCategory(name)}
              />
            ))}
          </ScrollView>
        ) : (
          // Listings list
          <ScrollView contentContainerStyle={styles.list}>
            {listingsForCategory.map((item, index) => (
              <ListingCard
                key={index}
                item={item}
                onPress={() => openAmendModal(item)}
              />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={[styles.navIcon, styles.navIconActive]}>🐟</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>
            {userType === "fishmonger" ? "Shopfront" : "On Sale"}
          </Text>
          <View style={styles.navIndicator} />
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navLabel}>
            {userType === "fishmonger" ? "Orders" : "Basket"}
            {basketCount > 0 ? ` (${basketCount})` : ""}
          </Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Alerts</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <Text style={styles.navLabel}>More</Text>
        </View>
      </View>

      {/* Amend Order modal */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={closeAmendModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            {editingItem && (
              <>
                <Text style={styles.modalTitle}>
                  {userType === "fishmonger" ? "Edit Listing" : "Amend Order"}
                </Text>
                <Text style={styles.modalSubtitle}>{editingItem.name}</Text>

                <View style={styles.modalImagePlaceholder} />

                <View style={styles.modalRow}>
                  <Text style={styles.modalLabel}>Quantity</Text>
                  <View style={styles.quantityControl}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={decrementQuantity}
                    >
                      <Text style={styles.quantityButtonText}>−</Text>
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

                <Text style={styles.modalText}>
                  Price - {editingItem.price}
                </Text>
                <Text style={styles.modalText}>
                  Seller: {editingItem.stall}
                </Text>
                <Text style={styles.modalText}>
                  Location: {editingItem.location}
                </Text>

                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={updateBasket}
                >
                  <Text style={styles.updateButtonText}>
                    {userType === "fishmonger" ? "Save Changes" : "Update"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalClose}
                  onPress={closeAmendModal}
                >
                  <Text style={styles.modalCloseText}>✕</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function CategoryCard({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardImagePlaceholder} />
      <Text style={styles.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function ListingCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.listImagePlaceholder} />
      <View style={styles.listTextContainer}>
        <Text style={styles.listTitle}>{item.name}</Text>
        <Text style={styles.listPrice}>{item.price}</Text>
        <Text style={styles.listMeta}>{item.stall}</Text>
        <Text style={styles.listMeta}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#E5E7EB",
  },

  // Login screen styles
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1e3c72",
  },
  loginCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
    color: "#0a2540",
  },
  loginSubtitle: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 24,
  },
  loginLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  loginInput: {
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#F9FAFB",
  },
  loginButton: {
    backgroundColor: "#1e88e5",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#1e88e5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  loginHint: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#1e88e5",
  },
  loginHintText: {
    fontSize: 12,
    color: "#1e3a8a",
    marginBottom: 2,
  },

  // top bar
  appBar: {
    height: 64,
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D1D5DB",
  },
  appBarTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
  logoutButton: {
    fontSize: 14,
    color: "#1e88e5",
    fontWeight: "600",
  },

  // main content
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
  },
  backButton: {
    marginRight: 8,
  },
  backArrow: {
    fontSize: 22,
  },

  // categories grid
  grid: {
    paddingBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  cardImagePlaceholder: {
    height: 90,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  cardLabel: {
    textAlign: "center",
    fontSize: 14,
  },

  // listing styles
  list: {
    paddingBottom: 16,
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  listImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  listPrice: {
    fontSize: 13,
    marginBottom: 2,
  },
  listMeta: {
    fontSize: 12,
    color: "#4B5563",
  },

  bottomNav: {
    height: 64,
    backgroundColor: "#93C5FD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 4,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    fontSize: 20,
    opacity: 0.7,
  },
  navLabel: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 2,
  },
  navIconActive: {
    opacity: 1,
    fontWeight: "700",
  },
  navLabelActive: {
    opacity: 1,
    fontWeight: "600",
  },
  navIndicator: {
    marginTop: 4,
    width: 16,
    height: 2,
    borderRadius: 999,
    backgroundColor: "#1D4ED8",
  },

  // modal styles
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  modalImagePlaceholder: {
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginBottom: 12,
  },
  modalRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  modalLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  modalText: {
    fontSize: 13,
    marginBottom: 2,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    overflow: "hidden",
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#F3F4F6",
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
  quantityValue: {
    paddingHorizontal: 12,
    fontSize: 14,
  },
  updateButton: {
    backgroundColor: "#16A34A",
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 12,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  modalClose: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 4,
  },
  modalCloseText: {
    fontSize: 16,
  },
});