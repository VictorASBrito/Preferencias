import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch, Slider } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [theme, setTheme] = useState('claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  // Função para resetar as preferências
  const resetPreferences = () => {
    setTheme('claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      {}
      <Text style={styles.label}>Tema:</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Claro" value="claro" />
        <Picker.Item label="Escuro" value="escuro" />
        <Picker.Item label="Automático" value="automatico" />
      </Picker>

      {}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />

      {}
      <Text style={styles.label}>
        Modo Noturno: {isNightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={isNightMode}
        onValueChange={(value) => setIsNightMode(value)}
      />

      {}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
});
