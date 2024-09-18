import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import RenderHTML from "react-native-render-html";

const Screen3 = ({ route }) => {
  const { stainType } = route.params; // Receber o tipo de mancha
  const [guideContent, setGuideContent] = useState("");
  const [loading, setLoading] = useState(true);
  const { width } = Dimensions.get("window"); // Obter a largura da tela
  const [guideUrl, setGuideUrl] = useState("");

  useEffect(() => {
    const loadGuide = async () => {
      try {
        // Converte o stainType para minúsculas, remove espaços e "manchasde"
        const formattedStainType = stainType
          .toLowerCase()
          .replace(/\s/g, "")
          .replace("manchasde", "");

        // URL do servidor onde os arquivos HTML estão hospedados
        const url = `https://apps.fariasribas.com.br/stain-guides/${formattedStainType}.html`;
        setGuideUrl(url); // Armazena a URL do guia
        console.log(`Fetching URL: ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text(); // Captura o texto de erro
          console.log(`Error response: ${errorText}`); // Log do erro
          throw new Error("Guia não encontrado.");
        }

        const text = await response.text();
        setGuideContent(text);
      } catch (error) {
        Alert.alert("Erro", error.message);
        setGuideContent("<p>Guia não encontrado.</p>");
      } finally {
        setLoading(false);
      }
    };

    loadGuide();
  }, [stainType]);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Confira este guia para remover Manchas de ${stainType}🩸:\n\n${guideUrl} \n\nBaixe o app para mais informações!`,
      });
      console.log(result);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível compartilhar o guia.");
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E2E2B6",
        }}
      >
        <Text>Carregando</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <RenderHTML
          contentWidth={width} // Usar a largura da tela
          source={{ html: guideContent }}
        />
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>Compartilhar Guia</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc", // Cor da borda
    borderRadius: 20, // Cantos arredondados
    padding: 25, // Espaçamento interno
    margin: 15, // Margem externa
    backgroundColor: "#fff", // Cor de fundo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: "#E2E2B6", // Cor de fundo
  },
  shareButton: {
    backgroundColor: "#021526", // Cor vermelha
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  shareButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Screen3;
