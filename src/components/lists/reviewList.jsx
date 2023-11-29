import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ReviewList = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(data)}>
      <View style={[styles.container, data.id !== '1' && styles.borderBottom]}>
        {/* Profile Image */}
        <Image source={data.profileImage} style={styles.profileImage} />

        {/* Review Info Container */}
        <View style={styles.reviewInfoContainer}>
          {/* Author and Stars */}
          <View style={styles.authorStarsContainer}>
            <Text style={styles.author}>{data.author}</Text>
            <Text style={styles.stars}>{`${data.stars} stars`}</Text>
          </View>

          {/* Review Details */}
          <Text style={styles.reviewDetails}>{data.reviewDetails}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewInfoContainer: {
    flex: 1,
  },
  authorStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  stars: {
    color: 'orange',
  },
  reviewDetails: {
    color: 'gray',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
});

export default ReviewList;
