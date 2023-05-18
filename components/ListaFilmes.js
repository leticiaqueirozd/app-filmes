import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FilmeItem from './FilmeItem';

const ListaFilmes = () => {
  const navigation = useNavigation();

  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Filme 1', sinopse: 'Sinopse do Filme 1', gostei: false },
    { id: 2, titulo: 'Filme 2', sinopse: 'Sinopse do Filme 2', gostei: false },
    { id: 3, titulo: 'Filme 3', sinopse: 'Sinopse do Filme 3', gostei: false },
  ]);

  const handlePress = (filme) => {
    navigation.navigate('DetalhesFilme', { filme });
  };

  const handleGostei = (filmeId) => {
    const updatedFilmes = filmes.map((filme) => {
      if (filme.id === filmeId) {
        return { ...filme, gostei: true };
      }
      return filme;
    });
    setFilmes(updatedFilmes);
    navigation.navigate('Perfil');
  };

  const filmesGostei = filmes.filter((filme) => filme.gostei);

  return (
    <View>
        <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
        <FlatList
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <FilmeItem filme={item} onPress={handlePress} onGostei={handleGostei} />
            )}
        />
    </View>
  );
};

export default ListaFilmes;
