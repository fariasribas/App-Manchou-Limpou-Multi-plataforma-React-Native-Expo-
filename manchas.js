import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const stainMap = {
  "Vermelho Escuro": ["Vinho Tinto", "Sangue", "Batom", "Tinta"],
  "Vermelho Claro": ["Frutas Vermelhas", "Batom", "Molho de Tomate", "Tinta"],
  "Azul Escuro": ["Caneta", "Frutas Azuis", "Tinta"],
  "Azul Claro": ["Cera de Velas", "Tinta"],
  "Verde Escuro": ["Alimentos Verdes", "Tinta"],
  "Verde Claro": ["Cera de Velas", "Tinta"],
  "Amarelo Escuro": ["Suor", "Óleo", "Manteiga ou Gordura", "Frutas"],
  "Amarelo Claro": ["Alimentos Ácidos", "Café com Leite"],
  "Roxo Escuro": ["Vinho Tinto", "Frutas Roxas", "Tinta"],
  "Roxo Claro": ["Vinho Tinto", "Cera de Velas", "Tinta"],
  "Bege Escuro": ["Chá", "Suor Desbotadas"],
  "Bege Claro": ["Café com Leite", "Molho Branco"],
  "Branco Escuro": ["Sabão ou Detergente", "Alimentos Gordurosos Secos"],
  "Branco Claro": [
    "Cera de Velas",
    "Alimentos Gordurosos (como molhos brancos)",
  ],
  "Preto Escuro": ["Óleo", "Graxa"],
  "Preto Claro": ["Graxa de Pneus", "Cinza de Cigarro", "Tinta"],
  "Marrom Escuro": ["Café", "Chocolate", "Graxa", "Terra ou Lodo"],
  "Marrom Claro": [
    "Sangue Seco",
    "Molho de Tomate Oxidado",
    "Açúcar Caramelizado",
    "Mel",
  ],
};

const Screen2 = ({ route, navigation }) => {
  const { shadeName } = route.params; // Receber o nome do tom da Tela 1
  const stains = stainMap[shadeName]; // Obter as manchas da cor selecionada

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A sua mancha pode ser de:</Text>
      <View style={styles.list}>
        {stains.map((stain, index) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Screen3", { stainType: stain })} // Navegar para StainGuideScreen
            key={index}
          >
            <Text style={styles.itemText}>{stain}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold", // Define o texto como negrito
    color: "#021526",
  },
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "#021526",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Screen2;
