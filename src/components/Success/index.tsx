import React from "react";

import * as S from "./styles";

interface SuccessProps {
  title: string;
}

const Success = ({ title }: SuccessProps) => {
  return (
    <S.Container>
      <S.Icon name="check" />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Success;
