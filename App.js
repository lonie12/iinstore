// Required
import 'expo-dev-client';
import 'react-native-gesture-handler';


// Nodes modules
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// App modules
//ex: import Login from './App/Screens/LoginScreen.js


export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
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
