import styled from "styled-components/native";

import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
  width: ${RFValue(303)}px;
  height: ${RFValue(303)}px;
  margin-top: 148px;
  margin-bottom: 69px;

  align-self: center;
`;

export const TitlesWrapped = styled.View`
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  margin-top: 24px;
  margin-bottom: 60px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Footer = styled.View``;
