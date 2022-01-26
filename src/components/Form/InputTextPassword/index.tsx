import React, { useState, forwardRef, memo } from "react";

import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import * as S from "./styles";

export interface InputTextPasswordProps extends TextInputProps {
  label?: string;
  error?: string | false | undefined;
}

const InputTextPassword = (
  { label, error, ...props }: InputTextPasswordProps,
  ref: any
) => {
  const [showPassword, setShowPassword] = useState(true);
  const theme = useTheme();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          {label && <S.Label>{label}</S.Label>}
          <S.Input
            ref={ref}
            placeholderTextColor={theme.colors.secondary}
            secureTextEntry={showPassword}
            error={error}
            {...props}
          />
        </S.Wrapper>
      </S.Container>
      {error && <S.Error>{error}</S.Error>}
    </>
  );
};

export default memo(forwardRef(InputTextPassword));
