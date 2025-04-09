import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { CameraView, Camera } from "expo-camera";

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

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = async ({ type, data }: { type: any, data: any }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    await handleSaveToken(data);
  };

  const handleSaveToken = async (new_token: string = '') => {
    await AsyncStorage.setItem('userToken', new_token || value);
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
        <Button title='Zatwierdź' onPress={() => handleSaveToken()} />
      </>

      {hasPermission && !token ? (
        <View style={{ flex: 1, width: '100%' }}>
          <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "pdf417"],
            }}
            style={{ flex: 1 }}
          />
          {scanned && (
            <Button title={"Skanuj ponownie"} onPress={() => setScanned(false)} />
          )}
        </View>
      ) : (
        <Text>Brak dostępu do kamery</Text>
      )}
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
