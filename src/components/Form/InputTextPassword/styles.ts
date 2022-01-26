import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface InputTextProps extends TextInputProps {
  error?: string | false | undefined;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Wrapper = styled.View`
  width: 90%;
`;

export const Error = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.attention};
  margin-top: 5px;
`;

export const Input = styled.TextInput<InputTextProps>`
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.colors.attention : theme.colors.success};
  ${({ theme }) => theme.general.input()}
`;
