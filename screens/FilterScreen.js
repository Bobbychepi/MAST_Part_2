import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";

export default function FilterScreen({ navigation }) {
  
  const categories = [
    { id: 1, name: 'Starters'},
    { id: 2, name: 'Main Courses' },
    { id: 3, name: 'Desserts' },
    { id: 4, name: 'Drinks' },
    { id: 5, name: 'Sides' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Search Filter</Text>
      <View style={styles.horizontalLine} />

      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Icon.Search height="25" width="25" stroke="gray" />

        <TouchableOpacity>
          <TextInput
            placeholder='Search Meals...'
            style={styles.textInput}
            editable={true}
            value={searchQuery}
            onChangeText={setSearchQuery} 
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
            navigation.navigate('CartScreen');
          }}
        >
          <Image source={require('../assets/images/shopping-cart.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Courses & Categories</Text>
        <ScrollView>
          {filteredCategories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryItem}
              onPress={() => navigation.navigate(category.name)}  
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    paddingTop: 20,
  },
  welcomeText: {
    marginTop: 30,
    fontSize: 40,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  horizontalLine: {
    width: '100%',
    height: 1.5, 
    backgroundColor: '#ddd', 
    marginBottom: 20,
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
    marginLeft: 7,
  },
  sliderContainer: {
    backgroundColor: '#82B2D6',
    padding: 12,
    borderRadius: 50,
    elevation: 4,
    marginLeft: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryText: {
    fontSize: 18,
    color: '#333',
  },
});
