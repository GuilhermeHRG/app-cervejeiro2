import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const recipesDetails = {
  '1': { 
    id: '1', 
    name: 'Receita 1', 
    description: 'Descrição detalhada da Receita 1', 
    ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'], 
    steps: ['Passo 1', 'Passo 2', 'Passo 3'], 
    status: 'in_progress',
    grains: [
      { name: 'Grain 1', quantity: '1kg' },
      { name: 'Grain 2', quantity: '500g' }
    ],
    hops: [
      { name: 'Hop 1', form: 'Pellet', quantity: '50g', time: '60min' },
      { name: 'Hop 2', form: 'Pellet', quantity: '30g', time: '15min' }
    ],
    yeast: [
      { name: 'Yeast 1', quantity: '1 pack', attenuation: '75%' }
    ],
    mashingProfile: 'Perfil da Brassagem 1',
    fermentationProfile: 'Perfil da Fermentação 1'
  },
  '2': { 
    id: '2', 
    name: 'Receita 2', 
    description: 'Descrição detalhada da Receita 2', 
    ingredients: ['Ingrediente A', 'Ingrediente B', 'Ingrediente C'], 
    steps: ['Passo A', 'Passo B', 'Passo C'], 
    status: 'draft',
    grains: [
      { name: 'Grain A', quantity: '1kg' },
      { name: 'Grain B', quantity: '500g' }
    ],
    hops: [
      { name: 'Hop A', form: 'Pellet', quantity: '50g', time: '60min' },
      { name: 'Hop B', form: 'Pellet', quantity: '30g', time: '15min' }
    ],
    yeast: [
      { name: 'Yeast A', quantity: '1 pack', attenuation: '75%' }
    ],
    mashingProfile: 'Perfil da Brassagem 2',
    fermentationProfile: 'Perfil da Fermentação 2'
  },
  '3': { 
    id: '3', 
    name: 'Receita 3', 
    description: 'Descrição detalhada da Receita 3', 
    ingredients: ['Ingrediente X', 'Ingrediente Y', 'Ingrediente Z'], 
    steps: ['Passo X', 'Passo Y', 'Passo Z'], 
    status: 'completed',
    grains: [
      { name: 'Grain X', quantity: '1kg' },
      { name: 'Grain Y', quantity: '500g' }
    ],
    hops: [
      { name: 'Hop X', form: 'Pellet', quantity: '50g', time: '60min' },
      { name: 'Hop Y', form: 'Pellet', quantity: '30g', time: '15min' }
    ],
    yeast: [
      { name: 'Yeast X', quantity: '1 pack', attenuation: '75%' }
    ],
    mashingProfile: 'Perfil da Brassagem 3',
    fermentationProfile: 'Perfil da Fermentação 3'
  },
  '4': { 
    id: '4', 
    name: 'Receita 4', 
    description: 'Descrição detalhada da Receita 4', 
    ingredients: ['Ingrediente M', 'Ingrediente N', 'Ingrediente O'], 
    steps: ['Passo M', 'Passo N', 'Passo O'], 
    status: 'in_progress',
    grains: [
      { name: 'Grain M', quantity: '1kg' },
      { name: 'Grain N', quantity: '500g' }
    ],
    hops: [
      { name: 'Hop M', form: 'Pellet', quantity: '50g', time: '60min' },
      { name: 'Hop N', form: 'Pellet', quantity: '30g', time: '15min' }
    ],
    yeast: [
      { name: 'Yeast M', quantity: '1 pack', attenuation: '75%' }
    ],
    mashingProfile: 'Perfil da Brassagem 4',
    fermentationProfile: 'Perfil da Fermentação 4'
  },
  '5': { 
    id: '5', 
    name: 'Receita 5', 
    description: 'Descrição detalhada da Receita 5', 
    ingredients: ['Ingrediente AA', 'Ingrediente BB', 'Ingrediente CC'], 
    steps: ['Passo AA', 'Passo BB', 'Passo CC'], 
    status: 'draft',
    grains: [
      { name: 'Grain AA', quantity: '1kg' },
      { name: 'Grain BB', quantity: '500g' }
    ],
    hops: [
      { name: 'Hop AA', form: 'Pellet', quantity: '50g', time: '60min' },
      { name: 'Hop BB', form: 'Pellet', quantity: '30g', time: '15min' }
    ],
    yeast: [
      { name: 'Yeast AA', quantity: '1 pack', attenuation: '75%' }
    ],
    mashingProfile: 'Perfil da Brassagem 5',
    fermentationProfile: 'Perfil da Fermentação 5'
  }
};

function RecipeDetails({ route }) {
  const { recipeId } = route.params;
  console.log('ID recebido:', recipeId);
  const recipe = recipesDetails[recipeId];
  console.log('Receita encontrada:', recipe);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Receita não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.sectionTitle}>Grãos e Fermentáveis:</Text>
      {recipe.grains ? recipe.grains.map((grain, index) => (
        <Text key={index}>{`${grain.name} - ${grain.quantity}`}</Text>
      )) : <Text>Não há grãos e fermentáveis disponíveis.</Text>}
      <Text style={styles.sectionTitle}>Lúpulo:</Text>
      {recipe.hops ? recipe.hops.map((hop, index) => (
        <Text key={index}>{`${hop.name} (${hop.form}) - ${hop.quantity} - ${hop.time}`}</Text>
      )) : <Text>Não há lúpulo disponível.</Text>}
      <Text style={styles.sectionTitle}>Levedura:</Text>
      {recipe.yeast ? recipe.yeast.map((yeast, index) => (
        <Text key={index}>{`${yeast.name} - ${yeast.quantity} - ${yeast.attenuation}`}</Text>
      )) : <Text>Não há levedura disponível.</Text>}
      <Text style={styles.sectionTitle}>Perfil da Brassagem:</Text>
      <Text>{recipe.mashingProfile ? recipe.mashingProfile : 'Perfil da brassagem não disponível.'}</Text>
      <Text style={styles.sectionTitle}>Perfil da Fermentação:</Text>
      <Text>{recipe.fermentationProfile ? recipe.fermentationProfile : 'Perfil da fermentação não disponível.'}</Text>
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default RecipeDetails;
