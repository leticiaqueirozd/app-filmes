import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarComentario } from './FilmesActions';

const Perfil = () => {
  const filmes = useSelector((state) => state.filmes);
  const [comentario, setComentario] = useState('');
  const dispatch = useDispatch();

  const filmesFavoritos = filmes.filter((filme) => filme.gostei);

  const handleAdicionarComentario = (filmeId) => {
    dispatch(adicionarComentario(filmeId, comentario));
  };

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>
      <FlatList
        data={filmesFavoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.comentario}</Text>
          </View>
        )}
      />
      <Text>Adicionar Comentário:</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Digite seu comentário"
      />
      <Button
        title="Adicionar"
        onPress={() => handleAdicionarComentario(item.id)}
      />
    </View>
  );
};

export default Perfil;
