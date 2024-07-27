import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Importar o StatusBar do expo-status-bar
import Recipe from '../components/Recipe';

const recipes = [
  { id: '1', name: 'Receita 1', description: 'Descrição da Receita 1', status: 'in_progress' },
  { id: '2', name: 'Receita 2', description: 'Descrição da Receita 2', status: 'draft' },
  { id: '3', name: 'Receita 3', description: 'Descrição da Receita 3', status: 'completed' },
  { id: '4', name: 'Receita 4', description: 'Descrição da Receita 4', status: 'in_progress' },
  { id: '5', name: 'Receita 5', description: 'Descrição da Receita 5', status: 'draft' },
];

function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRecipe = () => {
    navigation.navigate('RecipeRegistration');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.greeting}>{`${getGreeting()}, Fic Cerveijeiro!`}</Text>
      </View>
      <Text style={styles.title}>Receitas</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar receitas..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {filteredRecipes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Nenhuma receita encontrada.</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
            <Text style={styles.addButtonText}>Cadastrar Nova Receita</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Recipe
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              status={item.status}
            />
          )}
          ListEmptyComponent={<Text>Nenhuma receita encontrada.</Text>}
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
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default Home;
