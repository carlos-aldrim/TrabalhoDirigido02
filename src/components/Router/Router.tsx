import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View } from "react-native";
import { BookSearchPage } from "../../views";

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Biblioteca" component={BookSearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};