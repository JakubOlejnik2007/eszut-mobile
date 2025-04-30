import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Auth from './auth/Auth';
import { styles } from './styles/styles';
import BlurView from '@react-native-community/blur/lib/typescript/components/BlurView.ios';
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


