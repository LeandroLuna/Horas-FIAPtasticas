import { StyleSheet, Text, View } from 'react-native';

// Tela de histórico, para exibir o seu histórico de horários registrados.
export default function TrackRecord() {
  return (
    <View style={styles.container}>
      <Text>TrackRecordView is working</Text>
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
