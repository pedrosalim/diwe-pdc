import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "transparent" | "color";
}

const ButtonsModal = ({ title, type, ...rest }: Props) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonsModal;
