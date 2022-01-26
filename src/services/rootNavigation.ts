import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../routes/app.routes";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: never, params: never) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
