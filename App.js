import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigation from './src/navigation/HomeNavigation';
import Settings from './src/screens/Settings';
import Report from './src/screens/Report';
import TrackRecord from './src/screens/TrackRecord';

// Ojetivo do seu app: registrar o horário de entrada e saída, ou também controlar o tempo de almoço, pausas e outras informações.
// **Conectar um banco de dados para armazenar as informações do app. Utilizar um banco de dados na nuvem, como o Amazon RDS, ou um banco de dados local, como o MySQL.**
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={HomeNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name='Report'
          component={Report}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, size }) => <Ionicons name='newspaper' color={color} size={size} />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name='TrackRecord'
          component={TrackRecord}
          options={{
            tabBarLabel: 'TrackRecord',
            tabBarIcon: ({ color, size }) => <Ionicons name='analytics' color={color} size={size} />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name='Settings'
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => <Ionicons name='settings' color={color} size={size} />,
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
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
