import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  // const navigation = useNavigation();

  const socialMediaLinks = [
    { platform: 'twitter', url: 'twitter.com/MbishuFabrice' },
    { platform: 'instagram', url: 'instagram.com/mbishufabrice' },
  ];
  const categoryImage = '../assets/tag.png'; // Update the path or URI accordingly

  return (
    <View>
          {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        {/* Profile Image */}
        <Image
          source={require('../assets/image.png')}
          style={styles.profileImage}
        />

        {/* Profile Info Container */}
        <View style={styles.profileInfoContainer}>
          {/* Name */}
          <Text style={styles.name}>Fashion at Your Fingertips</Text>

          {/* Username */}
          <Text style={styles.username}>@mbishu</Text>

          {/* Location */}
          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" size={16} color="gray" style={styles.locationIcon} />
            <Text style={styles.locationText}>Molyko, Buea</Text>
          </View>

          {/* Social Media Links */}
          <View style={styles.socialMediaContainer}>
            {socialMediaLinks.map(({ platform, url }) => (
              <TouchableOpacity
                key={platform}
                onPress={() => {
                  // Handle navigation to the social media link
                  window.open(`https://${url}`, '_blank');
                }}
                style={styles.socialMediaLink}
              >
                <FontAwesome name={platform} size={20} color="black" style={styles.socialMediaIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.tagContainer}>
        {/* Category Image */}
        <FontAwesome name='tags' size={20} color="black" />
        <Text style ={styles.subTitle}>Fashion, Footwear</Text>
      </View>
      <View>
      <Text style={styles.title}>About</Text>
      <Text>The most convenient way to shop for fashion!
 With our WhatsApp boutique, you can browse 
our wide variety of sandals, shoes, clothing, and
 accessories for men, women etc.</Text>
      </View>
      <View style={styles.follower}>
      <Text style={styles.title}>23 Fololowers</Text>
      <View style={styles.star}>
      <Text style={styles.title}>4</Text>
      <FontAwesome name='star' size={23} color="orange" />
      </View>

      </View>
            {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsappButton}>
          <Text style={styles.buttonText}>WhatsApp Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 10,
  },
  title: {
    marginTop:5,
    fontWeight: 600
  },
  subTitle: {
    color: 'grey'
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
    backgroundColor: '#FEF7FF',
    marginBottom: 20,
  },
  backIcon: {
    marginLeft: 20,
    marginRight: 10,
    strokeWidth: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 112,
    height: 123,
    marginRight: 10,
  },
  profileInfoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    color: 'gray',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    color: 'gray',
  },
  socialMediaContainer: {
    flexDirection: 'row',
  },
  socialMediaLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  socialMediaIcon: {
    marginRight: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom:5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  },
  followButton: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10
  },
  whatsappButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    marginLeft:10
  },
  buttonText: {
    fontWeight: 500,
    textAlign: 'center',
    padding: 2,
  },
  follower: {
    flexDirection: 'row',

  },
  star: {
    flexDirection: 'row',
    marginLeft:20
  }
});

export default Profile;
