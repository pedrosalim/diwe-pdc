import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ReactNativeModal from "react-native-modal";

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

export const Modal = styled(ReactNativeModal as any)`
  flex: 1;
  background-color: rgba(155, 155, 155, 0.4);
  border-radius: 8px;
`;

export const ModalContent = styled.View`
  padding: 16px 28px;
  border: 1px solid ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
`;

export const ModalHeader = styled.View`
  padding: 16px 0;
`;

export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(8)}px;
  text-align: center;
`;

export const SubTitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(32)}px;
  text-align: center;
`;

export const FooterModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
