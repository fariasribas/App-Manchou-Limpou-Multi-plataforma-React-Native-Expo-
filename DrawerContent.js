// src/components/DrawerContent.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importar a biblioteca de ícones

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")} // Navegar para a tela Home
      >
        <Icon name="home-outline" size={24} color="#E2E2B6" />
        <Text style={styles.homeText}>Inicio</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.fariasribas.com.br/#sobre")
          }
        >
          <Text style={styles.navItem}>Quem fez esse site?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://apps.fariasribas.com.br/porque.html")
          }
        >
          <Text style={styles.navItem}>Por que fez esse site?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:apps@fariasribas.com.br")}
        >
          <Text style={styles.navItem}>Tenho uma sugestão!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://apps.fariasribas.com.br/")}
        >
          <Text style={styles.navItem}>Visite também o Site!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#021526",
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2B6",
  },
  homeText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#E2E2B6",
  },
  nav: {
    flex: 1,
  },
  navItem: {
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2B6",
    color: "#E2E2B6",
  },
});

export default DrawerContent;
