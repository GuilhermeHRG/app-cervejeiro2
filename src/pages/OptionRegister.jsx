import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OptionRegister = () => {
  const navigation = useNavigation(); // Using useNavigation hook for navigation

  // Function to handle navigation
  const handleNavigate = (screen) => {
    navigation.navigate(screen); // Navigates to the specified screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cadastrar Receita</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate('RecipeRegistration')}
        >
          <Text style={styles.buttonText}>Cadastrar Receita</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cadastrar Equipamentos</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate('EquipmentRegistration')}
        >
          <Text style={styles.buttonText}>Cadastrar Equipamentos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#5c2318',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#f0ba2e',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f0ba2e',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#5c2318',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OptionRegister;
