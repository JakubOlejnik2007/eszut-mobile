import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {

  const [value, setValue] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('userToken') || '';
      setToken(token);
    }
    getToken();
  }, []);

  const handleSaveToken = async () => {
    await AsyncStorage.setItem('userToken', value);
    const token = await AsyncStorage.getItem('userToken') || '';
    setToken(token);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {token ? <Text>{token}</Text> : <Text>Brak tokena</Text>}
      <>
        <Text>Open up App.tsx to start working on your app!</Text>
        <TextInput value={value} onChangeText={(text) => setValue(text)} placeholder='text'></TextInput>
        <Button title='Zatwierdź' onPress={handleSaveToken} />
      </>
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
