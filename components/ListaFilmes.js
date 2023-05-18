import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FilmeItem from './FilmeItem';

const ListaFilmes = () => {
  const navigation = useNavigation();

  const filmes = [
    { id: 1, titulo: 'Filme 1', sinopse: 'Sinopse do Filme 1' },
    { id: 2, titulo: 'Filme 2', sinopse: 'Sinopse do Filme 2' },
    { id: 3, titulo: 'Filme 3', sinopse: 'Sinopse do Filme 3' },
  ];

  const handlePress = (filme) => {
    navigation.navigate('DetalhesFilme', { filme });
  };

  return (
    <View>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmeItem filme={item} onPress={handlePress} />}
      />
    </View>
  );
};

export default ListaFilmes;
