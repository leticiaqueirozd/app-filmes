import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { gosteiFilme } from './FilmesActions';

const DetalhesFilme = ({ route }) => {
  const { filme } = route.params;

  const dispatch = useDispatch();

  const handleGostei = (filme) => {
    dispatch(gosteiFilme(filme.id));
  };

  return (
    <View>
      <Text>{filme.titulo}</Text>
      <Text>{filme.sinopse}</Text>
      <Button title="Gostei" onPress={() => handleGostei(filme)} />
      <Button title="Não gostei" onPress={() => console.log('Não gostei')} />
    </View>
  );
};

export default DetalhesFilme;
