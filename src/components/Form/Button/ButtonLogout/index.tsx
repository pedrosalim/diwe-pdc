import React from "react";

import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
}

const ButtonLogout = ({ onPress }: ButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Icon name="log-out" />
    </S.Container>
  );
};

export default ButtonLogout;
