import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function SettingsMenu() {
  const router = useRouter();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
  ];

  const handleLanguagePress = () => {
    setShowSettingsModal(false);
    setShowLanguageModal(true);
  };

  const handleSiteMapPress = () => {
    setShowSettingsModal(false);
    // Here as placeholder, just gonna slap a jpeg on it 
    console.log('Site Map pressed');
  };

  const handleAccessibilityPress = () => {
    setShowSettingsModal(false);
    // Another placeholder
    console.log('Accessibility pressed');
  };

  const handleSignOut = () => {
    setShowSettingsModal(false);
    router.replace('/startPage');
  };

  const handleLanguageSelect = (language) => {
    console.log('Selected language:', language);
    setShowLanguageModal(false);
  };

  return (
    <>
      {/* Settings Cogwheel Button */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => setShowSettingsModal(true)}>
        <Text style={styles.settingsIcon}>⚙️</Text>
      </TouchableOpacity>

      {/* Settings Modal */}
      <Modal
        visible={showSettingsModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSettingsModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowSettingsModal(false)}
        >
          <View style={styles.settingsModal} onStartShouldSetResponder={() => true}>
            <Text style={styles.settingsModalTitle}>Settings</Text>

            <TouchableOpacity
              style={styles.settingsMenuItem}
              onPress={handleLanguagePress}>
              <Text style={styles.settingsMenuItemText}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingsMenuItem}
              onPress={handleSiteMapPress}>
              <Text style={styles.settingsMenuItemText}>Site Map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingsMenuItem}
              onPress={handleAccessibilityPress}>
              <Text style={styles.settingsMenuItemText}>Accessibility</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.settingsMenuItem, styles.settingsMenuItemLast]}
              onPress={handleSignOut}>
              <Text style={[styles.settingsMenuItemText, styles.signOutText]}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Language Selection Modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowLanguageModal(false)}
        >
          <View style={styles.languageModal} onStartShouldSetResponder={() => true}>
            <Text style={styles.languageModalTitle}>Select Language</Text>

            <ScrollView style={styles.languageList}>
              {languages.map((language, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.languageItem}
                  onPress={() => handleLanguageSelect(language)}
                >
                  <Text style={styles.languageItemText}>{language}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeLanguageButton}
              onPress={() => setShowLanguageModal(false)}
            >
              <Text style={styles.closeLanguageText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}