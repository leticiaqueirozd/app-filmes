import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import ListaFilmes from './components/ListaFilmes';
import DetalhesFilme from './components/DetalhesFilme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ListaFilmes" component={ListaFilmes} />
        <Stack.Screen name="DetalhesFilme" component={DetalhesFilme} options={{ title: 'Detalhes do Filme' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
