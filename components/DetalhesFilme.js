import React from 'react';
import { View, Text, Button } from 'react-native';

const DetalhesFilme = ({ route }) => {
  const { filme } = route.params;

  return (
    <View>
      <Text>{filme.titulo}</Text>
      <Text>{filme.sinopse}</Text>
      <Button title="Gostei" onPress={() => console.log('Gostei')} />
      <Button title="Não gostei" onPress={() => console.log('Não gostei')} />
    </View>
  );
};

export default DetalhesFilme;
