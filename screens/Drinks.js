import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from "../components/categrories"; 

const DrinksMenu = [
  { name: "Coca-Cola", price: "R25" },
  { name: "Orange Juice", price: "R30" },
  { name: "Sparkling Water", price: "R20" },
  { name: "Still Water", price: "R15" },
  { name: "Lemonade", price: "R25" },
  { name: "Iced Tea", price: "R28" },
  { name: "Mango Smoothie", price: "R40" },
  { name: "Pina Colada", price: "R55" },
  { name: "Espresso", price: "R20" },
  { name: "Cappuccino", price: "R35" },
  { name: "Latte", price: "R38" },
  { name: "Americano", price: "R30" },
  { name: "Hot Chocolate", price: "R35" },
  { name: "Red Wine", price: "R60" },
  { name: "White Wine", price: "R60" },
  { name: "Mojito", price: "R55" },
  { name: "Beer", price: "R40" },
  { name: "Whiskey", price: "R70" },
  { name: "Gin and Tonic", price: "R60" },
  { name: "Martini", price: "R75" },
];

export default function DrinksScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput
          placeholder='Search Drinks...'
          style={styles.textInput}
        />
        <View style={styles.locationContainer}>
          <Icon.MapPin height="20" width="20" stroke="gray" />
          <Text style={styles.locationText}>Pretoria, Gauteng</Text>
        </View>

        <View style={styles.sliderContainer}>
          <Icon.Sliders height="20" width="20" strokeWidth={2} stroke="white" />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories navigation={navigation} /> 

        {/* Drinks Menu Header */}
        <Text style={styles.welcomeText}>Drinks Menu</Text>
        <View style={styles.horizontalLine} />

        {/* Drinks Menu Items */}
        {DrinksMenu.map((item, index) => (
          <View key={index} style={styles.menuItemContainer}>
            <Text style={styles.menuItem}>{item.name}</Text>
            <Text style={styles.menuPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    margin: 15,
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    marginRight: 20,
  },
  locationText: {
    color: 'gray', 
  },
  sliderContainer: {
    backgroundColor: '#D3B395', 
    padding: 10,
    borderRadius: 50,
  },
  welcomeText: {
    marginTop: 30,
    fontSize: 35,
    margin: 15,
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '100%', 
    height: 1,  
    backgroundColor: 'gray',  
    marginBottom: 10,
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  menuItem: {
    fontSize: 16,
    color: '#333',
  },
  menuPrice: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
