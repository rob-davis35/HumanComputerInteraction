import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const CATEGORIES = [
  "White Fish",
  "Oily Fish",
  "Flatfish",
  "Shellfish",
  "Cephalopods",
  "Mollusc",
];

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

// SIGN UP FUNCTIONALITY
function SignUpPage({ onStart }) {

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
      </View>

      <View style={styles.content}>
        {/* Sign Up Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sign Up</Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginStyle}
        >
          <View style={styles.inputContainer}>
            {/* First Name Input */}
            <TextInput
              style={styles.input}
              placeholder="First Name"
            />

            {/* Last Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Last Name"
            />

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />

            {/*Account Type Selection (Store Owner, Driver, or Customer)*/}

            {/* Sign Up Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => onStart()}>
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

// LOGIN FUNCTIONALITY
function LoginScreen({ onLogin, goToSignUp }) {
  const [customerUsername, setCustomerUsername] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const [storeOwnerUsername, setStoreOwnerUsername] = useState("");
  const [storeOwnerPassword, setStoreOwnerPassword] = useState("");

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
      </View>

      <View style={styles.content}>
        {/* Login Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Login</Text>
        </View>

        {/* Makes it so the keyboard doesn't cover inputs */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginStyle}
        >

          {/* Customer Login */}
          <Text style={{ fontSize: 16, color: "#374151" }}>Customer</Text>

          <View style={styles.inputContainer}>
            {/* Username Input */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={customerUsername}
              onChangeText={setCustomerUsername}
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={customerPassword}
              onChangeText={setCustomerPassword}
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => onLogin(customerUsername, customerPassword)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          {/* Store Owner Login */}
          <Text style={{ fontSize: 16, color: "#374151", marginTop: 24 }}>Store Owner</Text>

          <View style={styles.inputContainer}>
            {/* Username Input */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={storeOwnerUsername}
              onChangeText={setStoreOwnerUsername}
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={storeOwnerPassword}
              onChangeText={setStoreOwnerPassword}
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => onLogin(storeOwnerUsername, storeOwnerPassword)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => goToSignUp()}>
            <Text style={styles.sUText}>Sign Up</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // SIGN UP STATE
  const [isSigningUp, setIsSigningUp] = useState(null);

  // If not logged in, show login screen
  if (!isLoggedIn) {
    // If signing up, show sign up screen
    if (isSigningUp) {
      return <SignUpPage onStart={() => setIsSigningUp(false)} />;
    }
    // Otherwise, show login screen
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} goToSignUp={() => setIsSigningUp(true)} />;
  }

  const listingsForCategory =
    selectedCategory && LISTINGS[selectedCategory]
      ? LISTINGS[selectedCategory]
      : [];

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
        {/* Sign Out Button */}
        <TouchableOpacity style={styles.loginButton}
          onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.loginButtonText}>Sign Out</Text>
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
            <Text style={styles.sectionTitle}>FishBoard</Text>
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
                onPress={() =>
                  Alert.alert(
                    item.name,
                    `${item.price}\n${item.stall}\n${item.location}`
                  )
                }
              />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>

        <View style={styles.navItem}>
          <Text style={[styles.navIcon, styles.navIconActive]}>🐟</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>On Sale</Text>
          <View style={styles.navIndicator} />
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navLabel}>Basket</Text>
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
    </SafeAreaView>
  );;
}

function CategoryCard({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardImagePlaceholder}>
        <Text style={styles.cardX}>✕</Text>
      </View>
      <Text style={styles.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

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

function NavItem({ icon, label, active }) {
  return (
    <View style={styles.navItem}>
      <Text style={[styles.navIcon, active && styles.navIconActive]}>
        {icon}
      </Text>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </Text>
      {active && <View style={styles.navIndicator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#E5E7EB", 
  },

  // LOGIN/SIGNUP SCREEN STYLES
  loginStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  inputContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  loginButton: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  loginButtonText: {
    color: "white",
    fontWeight: "700",
  },

  signUpText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
    color: "#374151",
  },

  signUpButton: {
    alignItems: "center",
    marginTop: 8,
    textDecorationLine: "underline",
  },

  sUText: {
    color: "#2563EB",
    fontWeight: "600",
  },

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
  cardX: {
    fontSize: 24,
    color: "#D1D5DB",
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
});