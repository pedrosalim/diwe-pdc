import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-self: center;
  width: 90%;
  margin-top: 16px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const Title = styled.Text``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.View``;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ButtonList = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Email = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};

  margin-top: 4px;
`;

export const Phone = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 19px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 31px;
`;

export const Datas = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.attention};
`;
