import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from "../components/categories"; 

const DessertMenu = [
    { name: "Chocolate Lava Cake", price: "R100" },
    { name: "Cheesecake with Berry Sauce", price: "R120" },
    { name: "Tiramisu", price: "R90" },
    { name: "Panna Cotta with Caramel Sauce", price: "R85" },
    { name: "Crème Brûlée", price: "R110" },
    { name: "Apple Tart Tatin", price: "R95" },
    { name: "Vanilla Bean Ice Cream", price: "R60" },
    { name: "Lemon Meringue Pie", price: "R80" },
    { name: "Baklava", price: "75" },
    { name: "Chocolate Mousse", price: "R90" },
    { name: "Raspberry Sorbet", price: "R70" },
    { name: "Carrot Cake", price: "R85" },
    { name: "Fruit Tart", price: "R95" },
    { name: "Pavlova with Fresh Fruits", price: "R120" },
    { name: "Red Velvet Cupcake", price: "R60" },
    { name: "Peach Melba", price: "R90" },
    { name: "Mango Sticky Rice", price: "R80" },
    { name: "Coconut Pudding", price: "R70" },
    { name: "Brownie Sundae", price: "R100" },
    { name: "Profiteroles with Chocolate Sauce", price: "R110" }
  ];
  

export default function DessertScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput
          placeholder='Search Meals...'
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

      {/* Main */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories navigation={navigation} /> 

        {/* Starters Text */}
        <Text style={styles.welcomeText}>Desserts Menu</Text>
        <View style={styles.horizontalLine} />

        {/* Starters Menu Items */}
        {DessertMenu.map((item, index) => (
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
