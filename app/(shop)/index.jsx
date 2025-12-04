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
import { CATEGORIES } from '../../constants/listings';
import { styles } from '../../styles/styles';

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

export default function ShopIndex() {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES); // All selected by default

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredCategories = CATEGORIES.filter(cat => selectedCategories.includes(cat));

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
        {/* Section header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>FishBoard</Text>
          {/* Filter Button */}
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilter(true)}>
            <Text style={styles.filterIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Category grid */}
        <ScrollView contentContainerStyle={styles.grid}>
          {filteredCategories.map((name) => (
            <CategoryCard
              key={name}
              label={name}
              onPress={() => router.push(`/category/listings?name=${name}`)}
            />
          ))}
        </ScrollView>
      </View>

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
  );
}