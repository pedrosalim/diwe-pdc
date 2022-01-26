import styled from "styled-components/native";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: ${getBottomSpace};
`;

export const Title = styled.Text`
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;

  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Form = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
`;

export const Wrapped = styled.View`
  justify-content: space-between;
`;

export const FormGroup = styled.View`
  margin-bottom: 32px;
  align-self: center;
`;
