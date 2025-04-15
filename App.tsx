import { StatusBar, SafeAreaView } from 'react-native';
import Auth from './auth/Auth';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f1b3cc" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f1b3cc" }}>
        <Auth />
      </SafeAreaView>
    </>
  );
}