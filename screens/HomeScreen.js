import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import Categories from "../components/categrories"; 

export default function HomeScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.horizontalLine} />

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

        <Text style={styles.AdditionalH}>Drinks</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
          <Image
            source={require('../assets/images/Drinks.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>

        <Text style={styles.AdditionalH}>Sides</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => navigation.navigate('Sides')}>
          <Image
            source={require('../assets/images/Sides.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 166,
    borderRadius: 20,
    marginLeft: 20,
  },
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
  AdditionalH: {
    marginTop: 30,
    fontSize: 30,
    margin: 10,
    fontWeight: 'Bold',
  },
  totalMeals: {
    marginTop: 50,
    fontSize: 15,
    margin: 10,
    marginLeft: 'auto', 
  },
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  horizontalLine: {
    width: '100%', 
    height: 1,  
    backgroundColor: 'gray',  
    marginBottom: 10,
    marginTop: 20,
  },
});
