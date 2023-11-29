import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import LoginModal from './modals/login.jsx'; // Assuming the LoginModal file is in the same directory

const Signup = () => {
  // const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSignup = () => {
    // Implement signup logic here

    // Assuming signup was successful, navigate to another page
    // navigation.navigate('Home'); // Replace 'Home' with the name of the page you want to navigate to
  };

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
  };

  const handleLoginLinkPress = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (loginEmail, loginPassword) => {
    // Implement login logic here
    // For demo purposes, just print the login details to the console
    console.log('Login with:', loginEmail, loginPassword);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up to Trol</Text>

      {/* Name */}
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Confirm Password */}
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      {/* Terms and Conditions Checkbox */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => openLink('https://trol.com/terms')}>
        <Text style={styles.otherText}>
          By signing up, you accept Trol's
          <Text style={styles.link}> terms and conditions</Text>
        </Text>
      </TouchableOpacity>

      {/* Privacy Policy Checkbox */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => openLink('https://trol.com/privacy')}>
        <Text style={styles.otherText}>
          By signing up, you accept Trol's
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Google Signup Button */}
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignup}>
        <FontAwesome name="google" size={20} style={styles.googleIcon} />
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.otherText}>
        Already have an account?
        <Text style={styles.link} onPress={handleLoginLinkPress}> Sign In</Text>
      </Text>

      {/* Login Modal */}
      <LoginModal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        onSignup={() => {
          setShowLoginModal(false);
          // Additional logic if needed when transitioning to the signup page
        }}
        onGoogleLogin={() => {
          setShowLoginModal(false);
          // Additional logic if needed when performing Google login
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#ECE6F0',
    borderRadius: 25,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  otherText: {
    fontWeight: 600,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    borderColor: 'black',
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  googleIcon: {
    marginRight: 10,
    marginLeft: 50,
  },
  link: {
    fontWeight: '600',
    color: '#FB8A2E',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Signup;
