import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../services/rootNavigation";
import useAppSelector from "../hooks/useAppSelector";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { auth } = useAppSelector((state) => ({
    auth: state.auth,
  }));

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {auth.token ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </>
  );
}
