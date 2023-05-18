import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Perfil = () => {
  const filmes = useSelector((state) => state.filmes);

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>

      <FlatList
        data={filmes}
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
