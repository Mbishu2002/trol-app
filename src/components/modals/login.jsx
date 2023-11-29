import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
const modalHeight = height * 0.6; 

const LoginModal = ({ isVisible, onClose, onLogin, onSignup, onGoogleLogin, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    onLogin(email, password);

    // Close the modal
    onClose();
  };

  const handleOverlayClick = (event) => {
      onClose();
  };

  return (
    <Modal transparent visible={isVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modalContainer, { height: modalHeight }]}>
        <Text style={styles.title}>Login to Trol</Text>

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

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.otherText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Link */}
          <Text style={styles.otherText}>Don't have an account?<TouchableOpacity onPress={onSignup}><Text style={styles.link}> Sign up</Text>
        </TouchableOpacity></Text>

        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton} onPress={onGoogleLogin}>
          <FontAwesome name="google" size={20} style={styles.googleIcon} />
          <Text style={styles.socialButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  otherText: {
    fontWeight: 600,
    marginBottom: 5
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 5,
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
    marginTop: 10,
  },
  modalContainer: {
    backgroundColor:'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default LoginModal;
