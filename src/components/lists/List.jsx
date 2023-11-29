import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const List = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(data)}>
      <View style={styles.container}>
        {/* Profile Image */}
        <Image source={{ uri: data.profileImage }} style={styles.profileImage} />

        {/* Profile Info Container */}
        <View style={styles.profileInfoContainer}>
          {/* Name */}
          <Text style={styles.name}>{data.name}</Text>

          {/* About */}
          <Text style={styles.about}>{data.about}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profileImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  profileInfoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  about: {
    color: 'gray',
  },
});

export default List;
