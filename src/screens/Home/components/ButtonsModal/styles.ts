import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { string } from "yup/lib/locale";

export interface BackgroundProps {
  type: "transparent" | "color";
}

export const Container = styled(TouchableOpacity)<BackgroundProps>`
  padding: 10px;

  background-color: ${({ theme, type }) =>
    type === "color" ? theme.colors.attention : theme.colors.background};
  ${({ theme, type }) =>
    type === "color" ? null : theme.borderGeneral.borderButton()};
  border-radius: 8px;
  align-self: center;
  align-items: center;
`;

export const Title = styled.Text<BackgroundProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "color" ? theme.colors.tilte_buttons : theme.colors.title};

  font-size: ${RFValue(16)}px;
`;
