import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)``;

export const Icon = styled(Feather)`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;
