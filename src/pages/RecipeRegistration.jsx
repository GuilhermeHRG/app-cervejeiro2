import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Select from '../components/Select'; // Assumindo que o Select está no mesmo diretório

function RecipeRegistration() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const equipmentOptions = [
    { value: 'equipamentoA', label: 'Equipamento A' },
    { value: 'equipamentoB', label: 'Equipamento B' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Receita</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="recipeName"
      />
      {errors.recipeName && <Text style={styles.error}>Este campo é obrigatório.</Text>}

      <Text style={styles.label}>Equipamento</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Select
            label="Escolha o equipamento"
            options={equipmentOptions}
            selectedValue={value}
            onValueChange={onChange}
          />
        )}
        name="equipment"
      />
      {errors.equipment && <Text style={styles.error}>Este campo é obrigatório.</Text>}

      <Text style={styles.label}>Estilo</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="style"
      />
      {errors.style && <Text style={styles.error}>Este campo é obrigatório.</Text>}

      <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RecipeRegistration;
