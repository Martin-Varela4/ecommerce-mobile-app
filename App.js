import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Esto evita que choque con la barra superior del celular
  },
});
