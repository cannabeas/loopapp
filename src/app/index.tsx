import { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [mensagem, setMensagem] = useState("");
  const device = Platform.OS;

  return (
    <View style={styles.container}>
      <Text>Seja bem vindo!</Text>
      <Text>Aplicativo rodando em {device}</Text>
      <Text>Mensagem digitada: {mensagem}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setMensagem(value)}
      />
      <Button
        title="Contador"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#c2c2c2",
    borderStyle: "solid"
  }
});
