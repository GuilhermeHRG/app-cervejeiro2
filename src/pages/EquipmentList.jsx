import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Equipment from '../components/Equipment';

const equipmentData = [
  { id: '1', name: 'Equipamento de Maturação', description: 'Equipamento de fermentação e maturação.' },
  { id: '2', name: 'Fermentador de Cerveja', description: 'Fermentador para cervejas artesanais.' },
  { id: '3', name: 'Tanque de Carbonatação', description: 'Tanque para carbonatação de cerveja.' },
  { id: '4', name: 'Bomba de Circulação', description: 'Bomba para circulação de líquidos.' },
  { id: '5', name: 'Resfriador de Cerveja', description: 'Resfriador para cerveja após a fervura.' },
];

function EquipmentList({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEquipment = equipmentData
    .filter(equipment => equipment.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleViewDetails = (equipmentId) => {
    navigation.navigate('EquipmentDetails', { equipmentId });
  };

  const handleAddEquipment = () => {
    console.log('Navigate to Add Equipment screen');
    navigation.navigate('AddEquipment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipamentos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar equipamento..."
        value={searchQuery}
        onChangeText={handleSearchChange}
      />

      {filteredEquipment.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Nenhum equipamento encontrado.</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddEquipment}>
            <Text style={styles.addButtonText}>Cadastrar Novo Equipamento</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredEquipment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleViewDetails(item.id)}>
              <Equipment
                name={item.name}
                description={item.description}
              />
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>Nenhum equipamento encontrado.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EquipmentList;
