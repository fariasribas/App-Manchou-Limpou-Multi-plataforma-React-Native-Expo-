// HomeScreen.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const colors = [
  { name: "Vermelho", color: "#FF6F61" },
  { name: "Azul", color: "#00A8E1" },
  { name: "Verde", color: "#4CAF50" },
  { name: "Amarelo", color: "#F9D71C" },
  { name: "Roxo", color: "#9C27B0" },
  { name: "Bege", color: "#dbb0a6" },
  { name: "Preto", color: "#333333" },
  { name: "Marrom", color: "#8C6A5A" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>De que cor é a sua mancha?</Text>
      <View style={styles.grid}>
        {colors.map((item) => (
          <TouchableOpacity
            key={item.name} // Adicionando a chave única
            style={[styles.button, { backgroundColor: item.color }]} // Usar a cor do item
            onPress={() =>
              navigation.navigate("Screen1", { colorName: item.name })
            } // Passar o nome da cor para a Tela 2
          >
            {/* <Text style={styles.buttonText}>{item.name}</Text> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E2B6",
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite que os botões se movam para a próxima linha
    justifyContent: "center", // Centraliza os botões na linha
    width: "80%", // Define a largura da grade
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#021526",
    fontWeight: "bold", // Define o texto como negrito
  },
  button: {
    width: "45%",
    height: 90, // Largura do botão para caber 4 colunas
    padding: 15,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center", // Centraliza o texto dentro do botão
    color: "#FFFFFF", // Cor do texto para melhor contraste
  },
});

export default HomeScreen;
