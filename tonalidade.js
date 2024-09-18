import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const colorShades = {
  Vermelho: {
    "Vermelho Escuro": "#D32F2F",
    "Vermelho Claro": "#FF6F61",
  },
  Azul: {
    "Azul Escuro": "#0288D1",
    "Azul Claro": "#00A8E1",
  },
  Verde: {
    "Verde Escuro": "#388E3C",
    "Verde Claro": "#4CAF50",
  },
  Amarelo: {
    "Amarelo Escuro": "#FBC02D",
    "Amarelo Claro": "#F9D71C",
  },
  Roxo: {
    "Roxo Escuro": "#6A1B9A",
    "Roxo Claro": "#9C27B0",
  },
  Bege: {
    "Bege Escuro": "#C8AD7F",
    "Bege Claro": "#F5C6C6",
    "Branco Escuro": "#F5F5F5",
    "Branco Claro": "#FFFFFF",
  },
  Preto: {
    "Preto Escuro": "#212121",
    "Preto Claro": "#333333",
  },
  Marrom: {
    "Marrom Escuro": "#5D4037",
    "Marrom Claro": "#8C6A5A",
  },
};

const Screen1 = ({ route, navigation }) => {
  const { colorName } = route.params; // Receber o nome da cor da Tela 1
  const shades = colorShades[colorName]; // Obter os tons da cor selecionada

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o tom:</Text>
      <View style={styles.grid}>
        {Object.entries(shades).map(([shadeName, shadeColor], index) => (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: shadeColor }]} // Usar a cor do item
            onPress={() => navigation.navigate("Screen2", { shadeName })}
            key={index}
          >
            {/* <Text style={styles.buttonText}>{shadeName}</Text> */}
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
    fontWeight: "bold", // Define o texto como negrito
    color: "#021526",
  },
  button: {
    width: "45%", // Largura fixa para todos os botões
    height: 90, // Altura fixa para todos os botões
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: "center", // Centraliza o conteúdo no eixo X
    justifyContent: "center", // Centraliza o conteúdo no eixo Y
  },
  buttonText: {
    color: "#021526",
    fontSize: 16,
    textAlign: "center", // Centraliza o texto dentro do botão
  },
});

export default Screen1;
