import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './register'
const Stack = createStackNavigator();
function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // login logic here, for example, validation and API calls.
    };
  
    return (
      <View>
        <Text>Log In to Trol</Text>
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
        <Button title="Log In" onPress={handleLogin} />
        <Text>
          Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }