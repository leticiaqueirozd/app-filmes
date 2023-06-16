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

import logo from '../../assets/logo.png'

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
      <TextInput
        placeholder="Confirme a senha"
        placeholderTextColor="#999999"
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
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'black', 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30
  },
  titlecard: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 20,
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
  signupButton: {
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
  image: {
    width: '40%',
    height: '20%',
    marginBottom: 40,
    borderRadius: 40,
  }
});

export default CadastroScreen;
