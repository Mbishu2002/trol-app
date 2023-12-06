import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Home({ navigation }) {
  const followers = []; // Replace with your list of followers
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const navigateToProfile = () => {
    closeMenu();
    // Replace 'Profile' with the actual screen name for the profile page
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* Header */}
      <View style={styles.header}>
        {/* Search Bar with Icon */}
        <View style={styles.searchBarContainer}>
          <MaterialIcons name="search" size={24} color="#1D1B20" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
          />
        </View>

        {/* Profile Image */}
        <TouchableOpacity onPress={toggleMenu}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/icon.png')} // Replace with your image path
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content} onTouchStart={closeMenu}>
        {followers.length > 0 ? (
          // Display followers
          <View>
            <Text>Your Followers:</Text>
            {followers.map((follower, index) => (
              <Text key={index}>{follower}</Text>
            ))}
          </View>
        ) : (
          // Display link to add followers
          <View>
            <Text>Nothing here</Text>
            <TouchableOpacity
              style={styles.addFollowersLink}
              onPress={() => navigation.navigate('AddFollowers')}
            >
              <Text>Add Followers</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Profile Menu Dropdown */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={closeMenu}
        >
          <TouchableOpacity
            style={styles.menuContainer}
            activeOpacity={1}
            onPress={closeMenu}
          >
            <View style={styles.menuContent}>
              {/* Small Profile Image and User Name */}
              <TouchableOpacity onPress={navigateToProfile}>
                <View>
                  <Image
                    style={styles.smallProfileImage}
                    source={require('../../assets/icon.png')} // Replace with your image path
                  />
                  <Text style={styles.userName}>Your Name</Text>
                </View>
              </TouchableOpacity>

              {/* Link to Settings Screen */}
              <Pressable onPress={() => {
                closeMenu();
                navigation.navigate('Settings');
              }}>
                <Text style={styles.settingsLink}>Settings</Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FEF7FF',
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginRight: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addFollowersLink: {
    padding: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuContent: {
    width: 200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 60, 
    right: 10,
  },
  smallProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingsLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Home;
