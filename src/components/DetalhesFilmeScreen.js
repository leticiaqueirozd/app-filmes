import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DetalhesFilmeScreen = ({ route }) => {
  const { movie } = route.params;
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLikePress = () => {
    setLike(true);
  };

  const handleDislikePress = () => {
    setLike(false);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    if (comment !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.movieName}>{movie.name}</Text>
      <Text style={styles.movieSynopsis}>{movie.synopsis}</Text>

      <View style={styles.likeContainer}>
        <TouchableOpacity
          style={[styles.actionButton, like && styles.likeButton]}
          onPress={handleLikePress}
        >
          <Text style={styles.actionButtonText}>Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, !like && styles.dislikeButton]}
          onPress={handleDislikePress}
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
        <TouchableOpacity style={styles.submitButton} onPress={handleCommentSubmit}>
          <Text style={styles.submitButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    top: 50,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  movieName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieSynopsis: {
    fontSize: 16,
    marginBottom: 20,
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {
    backgroundColor: '#28a745',
    marginRight: 10,
  },
  dislikeButton: {
    backgroundColor: '#dc3545',
    marginLeft: 10,
  },
  actionButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  commentsSection: {
    width: '100%',
    top:50,
  },
  commentsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  commentInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DetalhesFilmeScreen;