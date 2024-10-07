import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder='Search...' style={styles.searchInput} />
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={styles.locationText}>Pretoria, Gau</Text>
          </View>
        </View>

        {/* Filter Icon */}
        <View style={styles.filterIcon}>
          <Icon.Sliders height={20} width={20} stroke="white" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderColor: 'gray',
  },
  locationText: {
    color: 'gray',
    marginLeft: 4,
  },
  filterIcon: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
})
