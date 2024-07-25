import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import Login from '../pages/Login';
import Sign from '../pages/Sign';
import Home from '../pages/Home';
import General from '../pages/General';
import Profile from '../pages/Profile';
import EquipmentList from '../pages/EquipmentList';
import EquipmentDetails from '../pages/EquipmentDetails';
import EquipmentRegistration from '../pages/EquipmentRegistration';
import RecipeList from '../pages/RecipeList';
import RecipeDetails from '../pages/RecipeDetails';
import RecipeRegistration from '../pages/RecipeRegistration';
import ProductAssistant from '../pages/ProductAssistant';
import WaterCorrection from '../pages/WaterCorrection';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20, // Ajuste a posição vertical do botão
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View style={styles.customButton}>
      {children}
    </View>
  </TouchableOpacity>
);

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0fffc9',
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#006400', // Cor verde bandeira
          borderTopColor: 'transparent',
        },
        tabBarItemStyle: {
          paddingBottom: 8,
          paddingTop: 0.1,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Receitas" 
        component={RecipeList} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Novo"
        component={RecipeRegistration}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="plus" size={24} color={focused ? '#fff' : '#000'} />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="General" 
        component={General} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EquipmentList" component={EquipmentList} options={{ headerShown: false }} />
        <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} options={{ headerShown: false }} />
        <Stack.Screen name="EquipmentRegistration" component={EquipmentRegistration} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeList" component={RecipeList} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeRegistration" component={RecipeRegistration} options={{ headerShown: false }} />
        <Stack.Screen name="ProductAssistant" component={ProductAssistant} options={{ headerShown: false }} />
        <Stack.Screen name="WaterCorrection" component={WaterCorrection} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customButton: {
    width: 50, // Tamanho menor do botão
    height: 50, // Tamanho menor do botão
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default StackNavigator;
