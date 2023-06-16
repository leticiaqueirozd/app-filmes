import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground
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
      <ImageBackground
        //source={{ uri: item.image }}
        //style={styles.movieImage}
      >
      
      
      </ImageBackground><Text style={styles.movieName}>{item.name}</Text>
      <Text style={styles.movieSynopsis}>{item.synopsis} Esse aqui é um pequeno exemplo de texto de synopse para analisar o tamanho e medidas adequadas para caber dentro do container Esse aqui é um pequeno exemplo de texto de synopse para analisar o tamanho e medidas adequadas para caber dentro do container</Text>
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
    backgroundColor: '#1c1c1c',
  },
  movieList: {
    flexGrow: 1,
  },
  movieItem: {
    top: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#1c1c1c',
    borderRadius: 5,
    backgroundColor: '#333333', 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 5 }, 
    shadowRadius: 2, 
    color: '#000000',
    height: '100%'
  },
  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  movieSynopsis: {
    fontSize: 14,
    color: 'white',
    marginTop: 12,
  },
  //movieImage: {
    //opacity: 0.7,
    //height: 150
  //}
});

export default ListaFilmeScreen;
