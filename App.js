import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [usuario, setUsuario] = useState([]);
  const [dados, setDados] = useState([]);

  const dadosGit = async () => {
    axios
      .get(`https://api.github.com/users/${usuario}`)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        Alert.alert("Erro ao pegar dados");
      });
  };

  return (
    <View style={styles.container}>
      <Text>Pesquise por um usuário do GITHUB</Text>
      <TextInput
        label="Nome Usuario"
        style={{
          height: 55,
          width: "50%",
          backgroundColor: "#3540e6",
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          color: "white",
          padding: 10,
        }}
        placeholder="Digite o nome do usuário GIT"
        placeholderTextColor="white"
        onChangeText={(usuario) => setUsuario(usuario)}
      />
      <TouchableOpacity
        onPress={() => dadosGit()}
        style={{
          height: 55,
          width: "50%",
          backgroundColor: "#3540e6",
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text style={{ color: "#F6F4F3", fontWeight: "bold", fontSize: 18 }}>
          Procurar
        </Text>
      </TouchableOpacity>
      <Image
        source={{ uri: dados.avatar_url }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{dados.bio}</Text>
      <Text>Seguidores: {dados.followers}</Text>
      <Text>Repositorios: {dados.public_repos}</Text>
      <Text>Git: {dados.url}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
