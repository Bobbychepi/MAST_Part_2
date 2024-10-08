import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from "../components/categrories"; 

const MainMenu = [
  { name: "Beef Wellington", price: "R400" },
  { name: "Chicken Cordon Bleu", price: "R220" },
  { name: "Filet Mignon with Peppercorn Sauce", price: "R380" },
  { name: "Lobster Tail with Garlic Butter", price: "R450" },
  { name: "Duck Breast with Orange Glaze", price: "R300" },
  { name: "Roast Chicken with Lemon and Thyme", price: "R180" },
  { name: "Braised Short Ribs", price: "R320" },
  { name: "Vegetable Ratatouille", price: "R150" },
  { name: "Pan-Seared Sea Bass", price: "R290" },
  { name: "Pasta Primavera", price: "R170" },
  { name: "Osso Buco", price: "R350" },
  { name: "Mushroom-Stuffed Chicken Breast", price: "R240" },
  { name: "Shrimp Scampi", price: "R280" },
  { name: "Ribeye Steak with Chimichurri", price: "R360" },
  { name: "Spaghetti Carbonara", price: "R160" },
  { name: "Grilled Pork Chops with Apple Compote", price: "R220" },
  { name: "Roast Duck with Cherry Sauce", price: "R310" },
  { name: "Seafood Paella", price: "R320" },
  { name: "Eggplant Parmesan", price: "R160" },
  { name: "Moroccan Lamb Tagine", price: "R280" },
  { name: "Chicken Marsala", price: "R210" },
  { name: "Veal Piccata", price: "R320" },
  { name: "Stuffed Bell Peppers", price: "R180" },
  { name: "Salmon en Croûte", price: "R280" },
  { name: "Beef Stroganoff", price: "R230" },
  { name: "Peking Duck", price: "R400" },
  { name: "Lamb Shank with Rosemary", price: "R330" },
  { name: "Quinoa Salad with Roasted Vegetables", price: "R140" },
  { name: "Grilled Vegetable Skewers", price: "R130" },
  { name: "Wild Mushroom Risotto", price: "R180" },
  { name: "Spinach and Ricotta Stuffed Shells", price: "R170" }
];
//

export default function MainCourses({ navigation }) { 
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

        {/* Main Text */}
        <Text style={styles.welcomeText}>Main Course Menu</Text>
        <View style={styles.horizontalLine} />

        {/* Starters Menu Items */}
        {MainMenu.map((item, index) => (
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
