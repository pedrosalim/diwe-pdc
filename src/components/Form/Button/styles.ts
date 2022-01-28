import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 90%;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;
  align-self: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.tilte_buttons};
  font-size: ${RFValue(16)}px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "white",
})``;
