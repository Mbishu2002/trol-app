import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import RNPickerSelect from 'react-native-picker-select';

const EditProfile = () => {
  // const navigation = useNavigation();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [link, setLink] = useState('');

  const handleSave = () => {
    // Implement saving

    // Assuming save was successful, navigate to another page
    // navigation.navigate('Profile');
  };

  const categoryOptions = [
    { label: 'Category 1', value: 'category1' },
    { label: 'Category 2', value: 'category2' },
    // Add more categories as needed
  ];

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Account</Text>
      </View>

      <View style={styles.container}>
        {/* Name */}
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* About */}
        <TextInput
          placeholder="About"
          style={styles.input}
          value={about}
          onChangeText={(text) => setAbout(text)}
        />

        {/* Location */}
        <TextInput
          placeholder="Location"
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Category Dropdown */}
        <RNPickerSelect
          placeholder={{ label: 'Select Category', value: null }}
          onValueChange={(value) => setCategory(value)}
          items={categoryOptions}
          style={pickerSelectStyles}
        />

        {/* Subcategory Dropdown */}
        <RNPickerSelect
          placeholder={{ label: 'Select Subcategory', value: null }}
          onValueChange={(value) => setSubCategory(value)}
          items={categoryOptions} // You may want different options for subcategories
          style={pickerSelectStyles}
        />

        {/* Link */}
        <TextInput
          placeholder="Whatsapp Link"
          style={styles.input}
          value={link}
          onChangeText={(text) => setLink(text)}
        />

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonsContainer: {
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    padding: 2,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputAndroid: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default EditProfile;
