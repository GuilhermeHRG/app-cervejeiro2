import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Recipe = ({ id, name, description, status }) => {
  const navigation = useNavigation();

  // Mapeamento de cores específicas para receitas 1 e 4
  const statusColor = {
    '1': '#BD1E18', // Vermelho para Receita 1
    '4': '#BD1E18', // Vermelho para Receita 4
    default: '#1F7D38' // Verde para outras receitas
  };

  const handlePress = () => {
    console.log('ID da Receita:', `ID: ${id}`);
    navigation.navigate('RecipeDetails', { recipeId: id });
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: statusColor[id] || statusColor.default }]}
      onPress={handlePress}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <MaterialIcons name="edit" size={24} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  content: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  editButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
});

export default Recipe;
