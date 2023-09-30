import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/pages/Login';
import Register from './App/pages/Register';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Login></Login> */}
      <Register></Register>
    </SafeAreaView>
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
