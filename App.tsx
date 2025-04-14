import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { CameraView, Camera } from "expo-camera";

export default function App() {

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