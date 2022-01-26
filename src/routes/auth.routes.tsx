import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import theme from "../global/styles/theme";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackTitleVisible: false,

          headerTitleStyle: {
            fontFamily: theme.fonts.regular,
            color: theme.colors.title_header,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
