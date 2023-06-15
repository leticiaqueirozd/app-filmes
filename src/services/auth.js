import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);

    console.log("Token armazenado com sucesso!");
  } catch (error) {
    console.error("Erro ao armazenar o token:", error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    return token;
  } catch (error) {
    console.error("Erro ao obter o token:", error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");

    console.log("Token removido com sucesso!");
  } catch (error) {
    console.error("Erro ao remover o token:", error);
  }
};
