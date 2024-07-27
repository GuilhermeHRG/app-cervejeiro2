import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('Carlos');
  const [email, setEmail] = useState('carlos@example.com');
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    console.log('Salvando perfil...');
    console.log('Nome:', name);
    console.log('Email:', email);
    // Aqui você pode adicionar a lógica para salvar as informações do perfil
  };

  const handleLogout = async () => {
    try {
      // Remove tokens ou dados de autenticação armazenados
      await AsyncStorage.removeItem('userToken'); // Exemplo para remover um token armazenado
      
      // Redireciona para a tela de login
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível fazer logout.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileImageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.defaultImage}>
            <Text style={styles.defaultText}>Sua Foto</Text>
          </View>
        )}
        <TouchableOpacity style={styles.editButton} onPress={pickImage}>
          <Text style={styles.editButtonText}>Selecionar Foto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Nome:</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.detailLabel}>Email:</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  defaultImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  defaultText: {
    color: '#aaa',
    fontSize: 14,
  },
  editButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    paddingVertical: 5,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 1000, // Adiciona zIndex para garantir que o botão fique sobre outros elementos
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
