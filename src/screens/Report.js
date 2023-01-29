import { StyleSheet, Text, View } from 'react-native';

// Tela de relatórios, para exibir o tempo total trabalhado por dia, semana ou mês.
export default function Report() {
  return (
    <View style={styles.container}>
      <Text>ReportView is working</Text>
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
