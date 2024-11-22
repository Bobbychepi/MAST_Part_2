import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types'; 

const CategoriesData = [
  { id: 1, name: 'Starters', screen: 'Starters' },
  { id: 2, name: 'Main Courses', screen: 'MainCourses' },
  { id: 3, name: 'Desserts', screen: 'Desserts' },

];

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {CategoriesData.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <TouchableOpacity 
              style={styles.categoryButton}
              onPress={() => navigation.navigate(category.screen)} 
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object.isRequired, 
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  scrollViewContainer: {
    marginLeft: 5,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 15,
  },
  categoryButton: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: '#AFD1F1',
    shadowColor: '#000', 
    shadowOpacity: 0.25,
    shadowRadius: 15,

  },
  categoryText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default Categories;
