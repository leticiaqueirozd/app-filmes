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
import { storeToken } from "../services/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        storeToken(token);

        navigation.navigate("Filmes");
      } else {
        Alert.alert("Erro", response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro durante o login. Tente novamente mais tarde."
      );
    }
  };

  const handleSignup = () => {
    navigation.navigate("Cadastro");
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>
          Ainda não tem um login? Cadastrar-se
        </Text>
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
  button: {
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
  signupButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 20,
  },
});

export default LoginScreen;
