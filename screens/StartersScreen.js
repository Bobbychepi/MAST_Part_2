import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from '@/components/categories';

const startersMenu = [
  { name: "Seared Scallops with Lemon Butter Sauce", price: 150 },
  { name: "Caprese Salad", price: 85 },
  { name: "Tomato Bruschetta", price: 65 },
  { name: "Garlic Shrimp", price: 120 },
  { name: "Stuffed Mushrooms", price: 90 },
  { name: "Beef Carpaccio", price: 140 },
  { name: "Baked Brie with Cranberry Chutney", price: 110 },
  { name: "Smoked Salmon Crostini", price: 135 },
  { name: "Fried Calamari", price: 130 },
  { name: "Mini Crab Cakes", price: 145 },
  { name: "Bacon-Wrapped Dates", price: 100 },
  { name: "Spinach and Artichoke Dip", price: 95 },
  { name: "Avocado Toast with Poached Egg", price: 75 },
  { name: "French Onion Soup", price: 85 },
  { name: "Deviled Eggs", price: 55 },
  { name: "Buffalo Chicken Wings", price: 105 },
  { name: "Prosciutto-Wrapped Asparagus", price: 125 },
  { name: "Hummus and Pita Platter", price: 80 },
  { name: "Charcuterie Board", price: 180 },
  { name: "Antipasto Skewers", price: 100 },
  { name: "Grilled Octopus", price: 155 },
  { name: "Tempura Vegetables", price: 70 },
  { name: "Mini Quiche Lorraine", price: 95 },
];

export default function Starters({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput
          placeholder='Search Starters...'
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
        <Text style={styles.welcomeText}>Starters Menu</Text>
        <View style={styles.horizontalLine} />

        {/* Starters Menu Items */}
        {startersMenu.map((item, index) => (
          <View key={index} style={styles.menuItemContainer}>
            <Text style={styles.menuItem}>{item.name}</Text>
            <Text style={styles.menuPrice}>R{item.price}</Text>
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
