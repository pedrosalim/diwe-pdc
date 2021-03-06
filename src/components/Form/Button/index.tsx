import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const Button = ({ title, loading, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      {loading ? <S.Loading /> : <S.Title>{title}</S.Title>}
    </S.Container>
  );
};

export default Button;
