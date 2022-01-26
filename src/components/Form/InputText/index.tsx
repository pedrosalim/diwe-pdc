import React, { forwardRef, memo } from "react";

import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import * as S from "./styles";

interface InputTextProps extends TextInputProps {
  label?: string;
  error?: string | false | undefined;
  iconRight?: JSX.Element;
}

const InputText = (
  { label, error, iconRight, ...props }: InputTextProps,
  ref: any
) => {
  const theme = useTheme();

  return (
    <S.Container error={error}>
      <S.Wrapper>
        {label && <S.Label>{label}</S.Label>}
        <S.Input
          ref={ref}
          placeholderTextColor={theme.colors.secondary}
          underlineColorAndroid={undefined}
          {...props}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default memo(forwardRef(InputText));
