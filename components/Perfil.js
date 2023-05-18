import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, Provider } from 'react-redux';
import store from './store'; 

const Perfil = () => {
  const filmes = useSelector((state) => state.filmes);

  const filmesGostei = filmes.filter((filme) => filme.gostei);

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>
      
      <FlatList
        data={filmesGostei}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.sinopse}</Text>
          </View>
        )}
      />
    </View>
  );
};

const PerfilProvider = () => {
  return (
    <Provider store={store}>
      <Perfil />
    </Provider>
  );
};

export default PerfilProvider;
