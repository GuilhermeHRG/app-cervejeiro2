import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Recipe = ({ id, name, description, status }) => {
  const navigation = useNavigation();

  const statusColor = {
    in_progress: 'yellow',
    draft: 'red',
    completed: 'green'
  };

  const handlePress = () => {
    console.log('exempllo: ID da Receita', `ID: ${id}`);
    navigation.navigate('RecipeDetails', { recipeId: id });
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: statusColor[status] }]}
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
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#333',
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