import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RecipeFilter = ({ selectedStatus, onSelectStatus }) => {
  // Mapeamento de IDs de status para nomes e cores
  const statusOptions = {
    '1': { name: 'Em Andamento', color: '#BD1E18' },
    '2': { name: 'Completo', color: '#1F7D38' },
  };

  return (
    <View style={styles.container}>
      {Object.keys(statusOptions).map(id => (
        <TouchableOpacity
          key={id}
          style={[styles.button, { backgroundColor: statusOptions[id].color }]}
          onPress={() => onSelectStatus(id)}
        >
          <Text style={styles.buttonText}>{statusOptions[id].name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RecipeFilter;
