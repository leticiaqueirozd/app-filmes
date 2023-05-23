import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import CadastroScreen from './components/CadastroScreen';
import ListaFilmes from './components/ListaFilmes';
import DetalhesFilme from './components/DetalhesFilme';
import Perfil from './components/Perfil';
import { Provider } from 'react-redux';
import store from './components/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="ListaFilmes" component={ListaFilmes} />
          <Stack.Screen name="DetalhesFilme" component={DetalhesFilme} options={{ title: 'Detalhes do Filme' }}/>
          <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Meu Perfil' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
