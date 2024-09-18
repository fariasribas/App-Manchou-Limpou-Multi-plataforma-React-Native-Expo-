// PRECISA SER IMPLEMENTADO

import AsyncStorage from "@react-native-async-storage/async-storage";

const stainTypes = [
  "manchasdevinho",
  "manchasdegraxa",
  "manchasdechocolate",
  // Adicione outros tipos de manchas aqui
];

export const loadAllGuides = async () => {
  try {
    for (const type of stainTypes) {
      const formattedStainType = type
        .toLowerCase()
        .replace(/\s/g, "")
        .replace("manchasde", "");
      const url = `https://api.allorigins.win/raw?url=https://apps.fariasribas.com.br/stain-guides/${formattedStainType}.html`;
      console.log(`Fetching URL: ${url}`);

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text(); // Captura o texto de erro
        console.log(`Error response for ${type}: ${errorText}`); // Log do erro
        continue; // Pular para o próximo tipo se houver erro
      }

      const text = await response.text();
      console.log(`HTML Content for ${type}:`, text); // Log do conteúdo HTML

      // Salvar o guia no armazenamento local
      await AsyncStorage.setItem(formattedStainType, text);
    }
  } catch (error) {
    console.error("Erro ao carregar guias:", error);
  }
};

export const getGuide = async (stainType) => {
  const formattedStainType = stainType
    .toLowerCase()
    .replace(/\s/g, "")
    .replace("manchasde", "");
  const localGuide = await AsyncStorage.getItem(formattedStainType);
  return localGuide;
};
