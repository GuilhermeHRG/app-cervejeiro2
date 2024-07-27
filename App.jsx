import React from 'react';
import StackNavigator from './src/routes/StackNavigator';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
    <StackNavigator />
    <Toast />
    </>
  );
}
