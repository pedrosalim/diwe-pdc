import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  margin-top: 36;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};

  margin-top: 51px;
  margin-left: 17px;
  margin-bottom: 16px;
`;

export const List = styled.FlatList``;
