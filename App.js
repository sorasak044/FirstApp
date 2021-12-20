import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textbold}> sorasak yawirat</Text>
      <Text>sorasak yawirat</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03FAA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textRedbold:{
    color: 'red',
  }
});
