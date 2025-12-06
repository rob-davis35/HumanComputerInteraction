import { useRouter } from 'expo-router';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from '../styles/styles';

export default function StartPageScreen() {
  const router = useRouter();

  const image = require('../assets/ocean-sea-waves-ripples-water-background.png');

  const handleCustomerSelection = () => {
    router.replace('/customerLogin');
  }

  const handleStoreOwnerSelection = () => {
    router.replace('/storeOwnerLogin');
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* Top app bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
      </View>

      <ImageBackground source={image} style={[styles.content, { flex: 1, width: "100%", height: "100%" }]} resizeMode='cover'>
        {/* Login Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Login</Text>
        </View>

        <View style={styles.loginStyle}>

          {/* Customer Login Icon */}
          <TouchableOpacity
            style={styles.startPageMenuItem}
            onPress={handleCustomerSelection}>
            <Text style={styles.startPageMenuIcon}>👤</Text>
            <Text style={styles.startPageMenuText}>Customer Login</Text>
            <Text style={styles.startPageMenuArrow}>›</Text>
          </TouchableOpacity>

          {/* Store Owner Login Icon */}
          <TouchableOpacity
            style={styles.startPageMenuItem}
            onPress={handleStoreOwnerSelection}>
            <Text style={styles.startPageMenuIcon}>🏪</Text>
            <Text style={styles.startPageMenuText}>Store Owner Login</Text>
            <Text style={styles.startPageMenuArrow}>›</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => router.push('/signup')}>
              <Text style={styles.sUText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}