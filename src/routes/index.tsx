import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </>
  );
}
