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

import logo from '../../assets/logo.png'

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

      const token = response.data.token;
      storeToken(token);

      navigation.navigate("Filmes");
    } catch (error) {
      console.error(error);

      if (error.response) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert(
          "Erro",
          "Ocorreu um erro durante o login. Tente novamente mais tarde."
        );
      }
    }
  };

  const handleSignup = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#999999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999999"
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
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'black', 
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#333333', 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 5 }, 
    shadowRadius: 2, 
    color: '#000000',
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: '#8b0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: "bold",
  },
  signupButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  image: {
    width: '40%',
    height: '20%',
    marginBottom: 40,
    borderRadius: 40,
  }
});

export default LoginScreen;
