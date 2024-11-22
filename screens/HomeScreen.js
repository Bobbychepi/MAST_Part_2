import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from "../components/categories"; 

//over here im importing data from averageprice.js
import { calculateAveragePrice, averageMainMenuPrice, averageSidesPrice, averageSpecialsPrice, averageStartersPrice, averageDessertsPrice, averageDrinksPrice } from '../utils/averagePrice';


export default function HomeScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.horizontalLine} />

      <StatusBar barStyle="dark-content" />
        <View style={styles.searchContainer}>
          <Icon.Search height="25" width="25" stroke="gray" />
          
          <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <TextInput
            placeholder='Search Meals...'
            style={styles.textInput}
            editable={false}  // OpenAi
          />
        </TouchableOpacity>
          
          
            <View style={styles.locationContainer}>
              <Icon.MapPin height="20" width="20" stroke="gray" />
              <Text style={styles.locationText}>Pretoria, Gauteng</Text>
            </View>

      <TouchableOpacity
        style={styles.sliderContainer}
        onPress={() => {
        console.log('Cart button pressed');
        navigation.navigate('cartScreen');
      }}
>
        <Image source={require('../assets/images/shopping-cart.png')} style={{ width: 20, height: 20 }} />
</TouchableOpacity>

    </View>

      {/* Main */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories navigation={navigation} />

        <View style={styles.headerContainer}>
          <Text style={styles.AdditionalH}>Chef's Menu</Text>
          <Text style={styles.totalMeals}>Total Meals: 74</Text>
        </View>
        <View style={styles.horizontalLine} />
        
        <TouchableOpacity onPress={() => navigation.navigate('ChefMenu')}>
          <Image
            source={require('../assets/images/Chef.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>


        <Text style={styles.welcomeText}>Available Meals:</Text>

        <Text style={styles.AdditionalH}>Daily Specials</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => navigation.navigate('Specials')}>
          <Image
            source={require('../assets/images/Specials.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        {/* Display average price */}
        <Text style={styles.averagePriceText}>
          Average Price:{averageSpecialsPrice}
        </Text>

        <Text style={styles.AdditionalH}>Drinks</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
          <Image
            source={require('../assets/images/Drinks.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        {/* Display average price */}
        <Text style={styles.averagePriceText}>
          Average Price: R{averageDrinksPrice}
        </Text>

        <Text style={styles.AdditionalH}>Sides</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => navigation.navigate('Sides')}>
          <Image
            source={require('../assets/images/Sides.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.averagePriceText}>
          Average Price: R{averageSidesPrice}
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  averagePriceText: {
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333', 
    marginTop: 15,
    marginLeft: 20,
    fontFamily: 'Roboto',
  },
  image: {
    width: '90%', 
    height: 180, 
    borderRadius: 15, 
    marginLeft: 20,
    marginBottom: 15,
    elevation: 4, 
  },
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    paddingTop: 20, 
    fontFamily: 'Roboto', 
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12, 
    paddingHorizontal: 15,
    borderRadius: 15,
    borderColor: '#ddd', 
    borderWidth: 1.5,
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },
  textInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: 16,
    color: '#333', 
    fontFamily: 'Roboto', 
    marginRight: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    borderLeftWidth: 1.5,
    borderLeftColor: '#ddd', 
    marginRight: 20,
  },
  locationText: {
    color: '#888', 
    fontSize: 14,
    fontFamily: 'Roboto', 
    marginLeft: 7,
  },
  sliderContainer: {
    backgroundColor: '#82B2D6', 
    padding: 12, 
    borderRadius: 50,
    elevation: 4,
    marginLeft: 8,
  },
  welcomeText: {
    marginTop: 30,
    fontSize: 40, 
    marginHorizontal: 20, 
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Roboto', 
  },
  AdditionalH: {
    marginTop: 35,
    fontSize: 32, 
    margin: 15,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Roboto', 
  },
  totalMeals: {
    marginTop: 50,
    fontSize: 16, 
    margin: 15,
    marginLeft: 'auto',
    color: '#666', 
    fontFamily: 'Roboto', 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  horizontalLine: {
    width: '100%',
    height: 1.5, 
    backgroundColor: '#ddd', 
    marginBottom: 20,
  },
});
