import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
