import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Counter } from './src/components/Counter';
import { Input } from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter/>
      {/*<Input/>*/}
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
