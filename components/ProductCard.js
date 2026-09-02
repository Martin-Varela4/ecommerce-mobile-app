import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';

export default function ProductCard() {
  const handlePress = () => {
    Alert.alert(
      "Confirmación",
      "¿Deseas comprar Auriculares Pro?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Comprar", onPress: () => console.log("Compra confirmada") }
      ]
    );
  };

  return (
    <View style={styles.card}>
      {/* Imagen remota del producto */}
      <Image 
        source={{ uri: 'https://unsplash.com' }} 
        style={styles.image} 
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Auriculares Pro</Text>
        <Text style={styles.description}>
          Sonido envolvente y batería de larga duración.
        </Text>
        <Text style={styles.price}>$ 45.999</Text>

        {/* Botón táctil con respuesta visual */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    width: '90%',
    maxWidth: 350,
    // Sombra adaptada para Android e iOS (Requisito de la consigna)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#e1e4e8',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    lineHeight: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
