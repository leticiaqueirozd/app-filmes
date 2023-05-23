import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { gosteiFilme, adicionarComentario } from './FilmesActions';

const DetalhesFilme = ({ route }) => {
  const { filme } = route.params;
  const [comentario, setComentario] = useState('');

  const dispatch = useDispatch();

  const handleGostei = () => {
    dispatch(gosteiFilme(filme.id));
    dispatch(adicionarComentario(filme.id, comentario));

    navigation.navigate('Perfil');
  };

  return (
    <View>
      <Text>{filme.titulo}</Text>
      <Text>{filme.sinopse}</Text>
      <TextInput value={comentario} onChangeText={setComentario} />
      <Button title="Gostei" onPress={handleGostei} />
      <Button title="Não gostei" onPress={() => console.log('Não gostei')} />
    </View>
  );
};

export default DetalhesFilme;
