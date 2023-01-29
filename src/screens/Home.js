import { StyleSheet, Text, View } from 'react-native';

// Tela de inicio (home): Botão de "Entrada" e "Saída", para registrar o horário de entrada e saída do trabalho.
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>HomeView is working</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
