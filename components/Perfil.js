import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Perfil = () => {
  const filmes = useSelector((state) => state.filmes);
  
  const filmesFavoritos = useSelector((state) => state.filmes.filmes.filter((filme) => filme.gostei));

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>

      <FlatList
        data={filmesFavoritos}
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

export default Perfil;
