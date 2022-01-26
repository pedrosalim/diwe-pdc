import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitlesWrapped = styled.View`
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title_header};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;

  text-align: center;

  margin-top: 47px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};

  margin-bottom: 64px;

  text-align: center;
`;

export const Form = styled.KeyboardAvoidingView``;

export const FormGroup = styled.View`
  margin-bottom: 30px;
  align-self: center;
`;

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: flex-end;
  margin-left: ${RFValue(150)}px;
`;
