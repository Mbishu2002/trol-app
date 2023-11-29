import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    // Navigate to the intended settings page
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Account Settings */}
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigate('AccountSettings')}>
        <FontAwesome name="user-circle" size={24} style={styles.icon} />
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>

      {/* Language Settings */}
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigate('LanguageSettings')}>
        <FontAwesome name="language" size={24} style={styles.icon} />
        <Text style={styles.settingText}>Language Settings</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigate('PrivacyPolicy')}>
        <FontAwesome name="lock" size={24} style={styles.icon} />
        <Text style={styles.settingText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Contact Us */}
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigate('ContactUs')}>
        <FontAwesome name="envelope" size={24} style={styles.icon} />
        <Text style={styles.settingText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 16,
  },
  settingText: {
    fontSize: 16,
  },
});

export default Settings;
