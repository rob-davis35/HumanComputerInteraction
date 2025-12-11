import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import SettingsMenu from '../../components/settingsWheel';
import { useAuth } from '../../context/AuthContext';
import { styles } from '../../styles/styles';

export default function More() {
  const router = useRouter();
  const { logout } = useAuth();
  
  const handleSignOut = () => {
    logout();
    router.replace('/startPage');
  };

  const handleAccountSettings = () => {
    // Placeholder for future implementation
  };

  const handleOrderHistory = () => {
    // Placeholder for future implementation
  };

  const handlePaymentMethods = () => {
    // Placeholder for future implementation
  };

  const handleHelp = () => {
    // Placeholder for future implementation
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
          <Text style={styles.sectionTitle}>Account</Text>
        </View>

        {/* Account Menu Items */}
        <View style={styles.accountMenuContainer}>
          
          <TouchableOpacity 
            style={styles.accountMenuItem}
            onPress={handleAccountSettings}>
            <Text style={styles.accountMenuIcon}>👤</Text>
            <Text style={styles.accountMenuText}>Account Settings</Text>
            <Text style={styles.accountMenuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.accountMenuItem}
            onPress={handleOrderHistory}>
            <Text style={styles.accountMenuIcon}>📦</Text>
            <Text style={styles.accountMenuText}>Order History</Text>
            <Text style={styles.accountMenuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.accountMenuItem}
            onPress={handlePaymentMethods}>
            <Text style={styles.accountMenuIcon}>💳</Text>
            <Text style={styles.accountMenuText}>Payment Methods</Text>
            <Text style={styles.accountMenuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.accountMenuItem}
            onPress={handleHelp}>
            <Text style={styles.accountMenuIcon}>❓</Text>
            <Text style={styles.accountMenuText}>Help & Support</Text>
            <Text style={styles.accountMenuArrow}>›</Text>
          </TouchableOpacity>

        </View>

        {/* Sign Out Button at Bottom */}
        <View style={styles.signOutContainer}>
          <TouchableOpacity 
            style={styles.signOutButtonLarge}
            onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}