import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Auth from './auth/Auth';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "" }}>
        <Auth />
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
  test: {
    color: 'white',
  },
});