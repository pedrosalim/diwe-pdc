import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import addContact from "../screens/RegisterNewContact";
import Home from "../screens/Home";

export type RootStackParamList = {
  Home: undefined;
  addContact: undefined;
  deleteContact: undefined;
  editContact: undefined;
  listTotalContact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Listagem de usuários",
          headerBackTitleVisible: false,

          headerTitleStyle: {
            fontFamily: theme.fonts.regular,
            color: theme.colors.title_header,
          },
        }}
      />

      <Stack.Screen
        name="addContact"
        component={addContact}
        options={{
          title: "Cadastrar um novo contato",
          headerBackTitleVisible: false,

          headerTitleStyle: {
            fontFamily: theme.fonts.regular,
            color: theme.colors.title_header,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
