import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

const CadastroScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = async () => {
    if (!confirmPassword === password) {
      Alert.alert("Erro", "As senhas não são iguais.");
    } else {
      try {
        const response = await api.post("/signup", {
          email,
          password,
        });

        Alert.alert("Cadastro", response.data.message);

        navigation.navigate("Entrar");
      } catch (error) {
        console.error(error);

        if (error.response) {
          Alert.alert("Erro", error.response.data.message);
        } else {
          Alert.alert(
            "Erro",
            "Ocorreu um erro durante o cadastro. Tente novamente mais tarde."
          );
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CadastroScreen;
