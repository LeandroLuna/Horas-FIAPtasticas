import { StyleSheet, Text, View } from 'react-native';

// Tela de configurações, para personalizar o app de acordo com as suas necessidades.
export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>SettingsView is working</Text>
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
