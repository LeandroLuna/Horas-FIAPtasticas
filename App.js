import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ojetivo do seu app: registrar o horário de entrada e saída, ou também controlar o tempo de almoço, pausas e outras informações.</Text>
      <Text>
        **Conectar um banco de dados para armazenar as informações do app. Utilizar um banco de dados na nuvem, como o Amazon RDS, ou um banco de
        dados local, como o MySQL.**
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
