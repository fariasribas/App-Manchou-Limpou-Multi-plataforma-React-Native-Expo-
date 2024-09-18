// rotas.js
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./telainicial"; // Importar a tela principal
import Screen1 from "./tonalidade"; // Importar a tela 1
import Screen2 from "./manchas"; // Importar a tela 2
import Screen3 from "./guia"; // Importar a tela 3
import DrawerContent from "./DrawerContent"; // Importar o conteúdo da sidebar
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importar a biblioteca de ícones

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Componente de Navegação em Pilha
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Mostrar o cabeçalho padrão
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

function CustomHeaderButton() {
  const navigation = useNavigation(); // Obtém o objeto de navegação

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")} // Navega para a tela inicial
      style={{ marginRight: 10 }} // Adicione um estilo para o botão, se desejar
    >
      <Icon name="reload" marginLeft={6} size={24} color="black" />
    </TouchableOpacity>
  );
}

// Componente de Navegação
const Rotas = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E2E2B6", // Altere para a cor desejada
          },
          title: "",
          headerRight: () => (
            <CustomHeaderButton /> // Usa o componente de botão personalizado
          ),
        }}
        drawerContent={(props) => <DrawerContent {...props} />} // Usar o conteúdo da sidebar
      >
        <Drawer.Screen name="default(tudo)" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
