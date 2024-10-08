import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import StartersScreen from "./screens/StartersScreen";
import MainCourses from "./screens/MainCourses";
import DessertScreen from "./screens/DessertScreen";
import SpecialsScreen from "./screens/SpecialsScreen";
import Drinks from "./screens/Drinks";
import SidesScreen from "./screens/SidesScreen";
import ChefMenu from "./screens/ChefMenu";



const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer> {/*(IIE, 2024)*/}
      <Stack.Navigator screenOptions={{ headerShown: false }}> {/*(ChatGPT, 2024)*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Starters" component={StartersScreen} />
        <Stack.Screen name="MainCourses" component={MainCourses} />
        <Stack.Screen name="Desserts" component={DessertScreen} /> 
        <Stack.Screen name="Specials" component={SpecialsScreen} /> 
        <Stack.Screen name="Drinks" component={Drinks} /> 
        <Stack.Screen name="Sides" component={SidesScreen} /> 
        <Stack.Screen name="ChefMenu" component={ChefMenu} /> 
        {/*(IIE, 2024)*/}




      </Stack.Navigator>
    </NavigationContainer>
  );
}
