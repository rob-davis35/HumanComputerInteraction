import { Stack, usePathname, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/styles';

export default function ShopLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="basket" />
        <Stack.Screen name="alerts" />
        <Stack.Screen name="storeDetails" />
        <Stack.Screen name="more" />
      </Stack>

      {/* Bottom nav - appears on all shop pages */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(shop)')}>
          <Text style={[
            styles.navIcon,
            pathname === '/' && styles.navIconActive
          ]}>🐟</Text>
          <Text style={[
            styles.navLabel,
            pathname === '/' && styles.navLabelActive
          ]}>On Sale</Text>
          {pathname === '/' && <View style={styles.navIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(shop)/basket')}>
          <Text style={[
            styles.navIcon,
            pathname === '/basket' && styles.navIconActive
          ]}>🛒</Text>
          <Text style={[
            styles.navLabel,
            pathname === '/basket' && styles.navLabelActive
          ]}>Basket</Text>
          {pathname === '/basket' && <View style={styles.navIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(shop)/alerts')}>
          <Text style={[
            styles.navIcon,
            pathname === '/alerts' && styles.navIconActive
          ]}>🔔</Text>
          <Text style={[
            styles.navLabel,
            pathname === '/alerts' && styles.navLabelActive
          ]}>Alerts</Text>
          {pathname === '/alerts' && <View style={styles.navIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(shop)/storeDetails')}>
          <Text style={[
            styles.navIcon,
            pathname === '/storeDetails' && styles.navIconActive
          ]}>🏪</Text>
          <Text style={[
            styles.navLabel,
            pathname === '/storeDetails' && styles.navLabelActive
          ]}>Store Front</Text>
          {pathname === '/storeDetails' && <View style={styles.navIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(shop)/more')}>
          <Text style={[
            styles.navIcon,
            pathname === '/more' && styles.navIconActive
          ]}>👤</Text>
          <Text style={[
            styles.navLabel,
            pathname === '/more' && styles.navLabelActive
          ]}>Account</Text>
          {pathname === '/more' && <View style={styles.navIndicator} />}
        </TouchableOpacity>
      </View>
    </>
  );
}