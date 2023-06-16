import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import filmeReducer from "./src/reducers/filmeReducer";
import usuarioReducer from "./src/reducers/usuarioReducer";
import LoginScreen from "./src/components/LoginScreen";
import CadastroScreen from "./src/components/CadastroScreen";
import ListaFilmeScreen from "./src/components/ListaFilmeScreen";
import DetalhesFilmeScreen from "./src/components/DetalhesFilmeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
