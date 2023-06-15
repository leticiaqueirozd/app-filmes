import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import api from "../services/api";

const listaFilmes = async () => {
  try {
    const response = await api.get("/movies");
    const movies = response.data;

    return movies;
  } catch (error) {
    console.error(error);

    if (error.response) {
      Alert.alert("Erro", error.response.data.message);
    }
    Alert.alert("Erro", "Ocorreu um erro durante a listagem dos filmes.");
  }
};

const ListaFilmeScreen = ({ navigation }) => {
  const handleMoviePress = (movie) => {
    navigation.navigate("Detalhes", { movie });
  };

  const renderMovieItem = async ({ item }) => {
    const response = await api.get(`/movies/${item.id}`);
    const movie = response.data;

    return (
      <TouchableOpacity
        style={styles.movieItem}
        onPress={() => handleMoviePress(movie)}
      >
        <Text style={styles.movieName}>{movie.name}</Text>
        <Text style={styles.movieSynopsis}>{movie.synopsis}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listaFilmes}
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
    width: "100%",
  },
  movieItem: {
    top: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  movieName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  movieSynopsis: {
    fontSize: 14,
    color: "#555",
  },
});

export default ListaFilmeScreen;
