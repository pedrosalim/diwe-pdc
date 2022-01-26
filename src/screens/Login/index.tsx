import React from "react";

import InputTextPassword from "../../components/Form/InputTextPassword";
import InputText from "../../components/Form/InputText";
import { Formik } from "formik";
import * as Yup from "yup";

import * as S from "./styles";
import Button from "../../components/Form/Button";

interface FormProps {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const SubmitForm = ({ username, password }: FormProps) => {
    console.log("LOGIN", username, password);
  };
  return (
    <S.Container>
      <S.TitlesWrapped>
        <S.Title>Bem Vindo(a)!</S.Title>

        <S.SubTitle>Faça login para acessar nossa plataforma</S.SubTitle>
      </S.TitlesWrapped>

      <Formik
        enableReinitialize
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={SubmitForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <S.Form>
            <S.FormGroup>
              <InputText
                testID="input-email"
                label="Email"
                placeholder="Digite seu email"
                onChangeText={handleChange("username")}
                autoCapitalize="none"
                autoCorrect={false}
                value={values.username}
                error={errors.username}
                returnKeyType="next"
              />
            </S.FormGroup>
            <S.FormGroup>
              <InputTextPassword
                testID="input-password"
                label="Senha"
                placeholder="Digite sua senha"
                onChangeText={handleChange("password")}
                value={values.password}
                error={errors.password}
                returnKeyType="send"
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.ForgotPasswordText
                onPress={() => console.log("RESETAR SENHAR")}
              >
                Problemas com login?
              </S.ForgotPasswordText>
            </S.FormGroup>

            <Button testID="btn-login" title="Entrar" onPress={handleSubmit} />
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default Login;
