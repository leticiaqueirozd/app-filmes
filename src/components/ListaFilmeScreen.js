import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import api from "../services/api";

const ListaFilmeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await listMovies();

      setMovies(movies);
    };

    fetchMovies();
  }, []);

  const listMovies = async () => {
    try {
      const response = await api.get("/movies");
      const movies = response.data;

      return movies;
    } catch (error) {
      console.error(error);

      if (error.response) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro durante a listagem dos filmes.");
      }

      return [];
    }
  };

  const handleMoviePress = (movie) => {
    navigation.navigate("Detalhes", { movie });
  };

  const renderMovieItem = async ({ item }) => {
    console.log(item)(
      <TouchableOpacity
        style={styles.movieItem}
        onPress={() => handleMoviePress(item)}
      >
        <Text style={styles.movieName}>{item.title}</Text>
        <Text style={styles.movieSynopsis}>{item.synopsis}</Text>
      </TouchableOpacity>
    );
  };

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
