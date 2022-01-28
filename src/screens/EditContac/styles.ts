import styled from "styled-components/native";

import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: ${getBottomSpace};
`;

export const Title = styled.Text``;

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
