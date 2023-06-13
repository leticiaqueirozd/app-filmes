import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import filmeReducer from '../projeto-final/src/reducers/filmeReducer';
import usuarioReducer from '../projeto-final/src/reducers/usuarioReducer';
import LoginScreen from '../projeto-final/src/components/LoginScreen';
import CadastroScreen from '../projeto-final/src/components/CadastroScreen';
import ListaFilmeScreen from '../projeto-final/src/components/ListaFilmeScreen';
import DetalhesFilmeScreen from '../projeto-final/src/components/DetalhesFilmeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const rootReducer = combineReducers({
  movie: filmeReducer,
  user: usuarioReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Entrar" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Filmes" component={ListaFilmeScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesFilmeScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
