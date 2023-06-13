import React, { useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { adicionarComentario } from "./FilmesActions";

const Perfil = () => {
  const filmesObj = useSelector((state) => state.filmes);
  const filmes = Object.values(filmesObj);
  const [comentario, setComentario] = useState("");
  const dispatch = useDispatch();

  const filmesFavoritos = filmes.filter((filme) => filme.gostei);

  const handleAdicionarComentario = (filmeId) => {
    dispatch(adicionarComentario(filmeId, comentario));
  };

  return (
    <View>
      <Text>Filmes que eu gostei:</Text>
      <FlatList
        data={filmesFavoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.comentario}</Text>
          </View>
        )}
        extraData={comentario}
      />
      <Text>Adicionar Comentário:</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Digite seu comentário"
      />
      <FlatList
        data={filmesFavoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Button
              title="Adicionar Comentário"
              onPress={() => handleAdicionarComentario(item.id)}
            />
          </View>
        )}
        extraData={comentario}
      />
    </View>
  );
};

export default Perfil;
