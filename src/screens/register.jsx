import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'

const Stack = createStackNavigator();

function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // signup logic here, for example, validation and API calls.
    // After successful signup, navigate to the login screen.
    // navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Sign Up to Trol</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text>or</Text>
      <Button
        title="Sign Up with Google"
        onPress={() => {
          // Add your Google authentication logic here.
        }}
      />
      <Text>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
