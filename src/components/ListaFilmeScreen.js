import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const movies = [
  {
    id: 1,
    name: 'Filme 1',
    synopsis: 'Sinopse do Filme 1',
  },
  {
    id: 2,
    name: 'Filme 2',
    synopsis: 'Sinopse do Filme 2',
  },
  {
    id: 3,
    name: 'Filme 3',
    synopsis: 'Sinopse do Filme 3',
  },
];

const ListaFilmeScreen = ({ navigation }) => {
  const handleMoviePress = (movie) => {
    navigation.navigate('Detalhes', { movie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => handleMoviePress(item)}
    >
      <Text style={styles.movieName}>{item.name}</Text>
      <Text style={styles.movieSynopsis}>{item.synopsis}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    
  },
  movieList: {
    flexGrow: 1,
    width: '100%',
  },
  movieItem: {
    top: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieSynopsis: {
    fontSize: 14,
    color: '#555',
  },
});

export default ListaFilmeScreen;
