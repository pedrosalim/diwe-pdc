import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  border-radius: 8px;
  align-self: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  padding: 18px 18px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(20)}px;
`;
