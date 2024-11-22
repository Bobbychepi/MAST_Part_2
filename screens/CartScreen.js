import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// CartScreen Component
const CartScreen = ({ navigation }) => {
  const totalAmount = 0.00; 

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>

      {/* Total Section */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.amountText}>R{totalAmount.toFixed(2)}</Text>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home'); 
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Complete Order</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', 
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
  },
  amountText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
});

export default CartScreen;
