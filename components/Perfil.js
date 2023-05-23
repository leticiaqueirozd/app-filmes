import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarComentario } from './FilmesActions';

const Perfil = () => {
  const filmes = useSelector((state) => state.filmes);
  const [comentario, setComentario] = useState('');
  const dispatch = useDispatch();

  const filmesFavoritos = filmes.filter((filme) => filme.gostei);

  const handleAdicionarComentario = (item) => {
    dispatch(adicionarComentario(item.id, comentario));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.titulo}</Text>
      <Text>{item.comentario}</Text>
      <Button
        title="Adicionar"
        onPress={() => handleAdicionarComentario(item)} // Passando item como argumento
      />
    </View>
  );

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>
      <FlatList
        data={filmesFavoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={comentario}
      />
      <Text>Adicionar Comentário:</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Digite seu comentário"
      />
    </View>
  );
};

export default Perfil;
