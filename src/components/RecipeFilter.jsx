import React from 'react';
import { View, Button } from 'react-native';

const RecipeFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button
        title="Em Andamento"
        onPress={() => onFilterChange('in_progress')}
        color={currentFilter === 'in_progress' ? 'blue' : 'gray'}
      />
      <Button
        title="Rascunho"
        onPress={() => onFilterChange('draft')}
        color={currentFilter === 'draft' ? 'blue' : 'gray'}
      />
      <Button
        title="Concluído"
        onPress={() => onFilterChange('completed')}
        color={currentFilter === 'completed' ? 'blue' : 'gray'}
      />
    </View>
  );
};

export default RecipeFilter;