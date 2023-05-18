import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilmeItem = ({ filme, onPress }) => {
  const handlePress = () => {
    onPress(filme);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilmeItem;
