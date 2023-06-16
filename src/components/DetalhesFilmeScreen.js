import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import api from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalhesFilmeScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getMovieDetails = async () => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      const { movie, movieComments, isFavorited } = response.data;

      setMovie(movie);
      setLike(isFavorited);
      setComments(movieComments);
    } catch (error) {
      console.error(error);

      if (error.response) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  };

  const toggleLike = async () => {
    try {
      if (like) {
        await api.delete(`/movies/${movieId}/favorite`);

        setLike(false);
      } else {
        await api.post(`movies/${movieId}/favorite`);

        setLike(true);
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  };

  const fetchComments = async () => {
    try {
      const response = await api.get(`/movies/${movieId}/comments`);
      setComments(response.data);
      await AsyncStorage.setItem("comments", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const retrieveComments = async () => {
      try {
        const storedComments = await AsyncStorage.getItem("comments");
        if (storedComments) {
          setComments(JSON.parse(storedComments));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
    retrieveComments();
  }, [movieId]);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = async () => {
    if (comment !== "") {
      try {
        await api.post(`/movies/${movieId}/comments`, { content: comment });
        setComment("");

        const response = await api.get(`/movies/${movieId}/comments`);
        setComments(response.data);
        await AsyncStorage.setItem("comments", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.movieName}>{movie.title}</Text>
      <Text style={styles.movieSynopsis}>{movie.synopsis}</Text>

      <View style={styles.likeContainer}>
        <TouchableOpacity
          style={[styles.actionButton, like && styles.likeButton]}
          onPress={toggleLike}
        >
          <Text style={styles.actionButtonText}>Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, !like && styles.dislikeButton]}
          onPress={toggleLike}
        >
          <Text style={styles.actionButtonText}>Não Gostei</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.commentsSection}>
        <Text style={styles.commentsHeading}>Comentários</Text>
        {comments.map((item, index) => (
          <Text key={index} style={styles.commentText}>
            {item}
          </Text>
        ))}
        <TextInput
          placeholder="Adicione um comentário"
          value={comment}
          onChangeText={handleCommentChange}
          style={styles.commentInput}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleCommentSubmit}
        >
          <Text style={styles.submitButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flexGrow: 1,
    top: 0,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  movieName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    color: "white",
  },
  movieSynopsis: {
    fontSize: 16,
    marginBottom: 20,
    color: "white",
  },
  likeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  likeButton: {
    backgroundColor: "#FFC300",
    marginRight: 10,
    borderRadius: 5,
  },
  dislikeButton: {
    backgroundColor: "#8b0000",
    marginLeft: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  commentsSection: {
    width: "100%",
    top: 20,
  },
  commentsHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white",
  },
  commentText: {
    fontSize: 16,
    marginBottom: 20,
    color: "white",
  },
  commentInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "white",
  },
  submitButton: {
    width: "50%",
    height: 40,
    backgroundColor: "#006400",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DetalhesFilmeScreen;
