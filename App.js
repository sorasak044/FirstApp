import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './common-styles';
import ColumnItems from './column-items';
import ColumnLayouts from './common-layouts';
export default function App() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textTitle}>LAYOUT</Text>
      <Text></Text>
      <ColumnLayouts/>
      <StatusBar style="auto" />
    </View>
  );
}
/*
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
  }
});*/
