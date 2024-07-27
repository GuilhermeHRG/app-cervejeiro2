import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Notification from '../components/Notification';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ visible: false, message: '', type: '' });
  const navigation = useNavigation();

  const showNotification = (message, type) => {
    setNotification({ visible: true, message, type });
    setTimeout(() => setNotification({ visible: false, message: '', type: '' }), 3000);
  };

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username) ) {
      showNotification('Por favor, insira um e-mail válido.', 'error');
      return;
    }
    if (password==="") {
      showNotification('Sua senha não pode ser vazia.', 'error');
      return;
    }

    const loginData = {
      email: username,
      password: password,
    };

    console.log('Login data:', loginData);
    showNotification('Login bem-sucedido!', 'success');

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );    
  };

  const handleRegister = () => {
    navigation.navigate('Sign');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <Notification
        message={notification.message}
        visible={notification.visible}
        onClose={() => setNotification({ ...notification, visible: false })}
        type={notification.type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
