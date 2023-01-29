import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Report from '../screens/Report';
import TrackRecord from '../screens/TrackRecord';
import Settings from '../screens/Settings';

export default function HomeNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Homepage' component={Home}></Stack.Screen>
      <Stack.Screen name='Report' component={Report}></Stack.Screen>
      <Stack.Screen name='TrackRecord' component={TrackRecord}></Stack.Screen>
      <Stack.Screen name='Settings' component={Settings}></Stack.Screen>
    </Stack.Navigator>
  );
}
