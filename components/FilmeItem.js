import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const FilmeItem = ({ filme, onPress }) => {
    const handlePress = () => {
        onPress(filme);
    };
    
    const handleGostei = () => {
      onGostei(filme.id);
    };
    return (
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.container}>
            <Image source={{ uri: filme.imagem }} style={styles.imagem} />
            <View style={styles.textContainer}>
              <Text style={styles.titulo}>{filme.titulo}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imagem: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sinopse: {
    fontSize: 16,
  },
});

export default FilmeItem;
