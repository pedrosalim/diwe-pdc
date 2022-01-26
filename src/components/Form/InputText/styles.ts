import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, TextInput } from "react-native";

interface InputProps {
  error?: string | false | undefined;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.colors.attention : theme.colors.success};
`;

export const Wrapper = styled.View`
  width: 90%;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => theme.general.input()}
  border-bottom-width: 0px;
`;
