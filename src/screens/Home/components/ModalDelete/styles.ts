import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import RNModal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

export const Modal = styled(RNModal as any)`
  flex: 1;
`;

export const ModalHeader = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin-top: 16px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ModalContent = styled.View`
  width: 100%;

  background-color: #fff;
  justify-content: center;
  border-radius: 8px;
  padding: 16px 32px;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;

export const ModalBody = styled.View``;

export const ModalFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
