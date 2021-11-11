import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.red} onPress={() => {console.log('press')}}>Open up App.js to start working on your app!</Text>
      <Button title="go"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  red: {
    color: 'red',
  }
});
