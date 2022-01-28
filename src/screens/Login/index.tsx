import React from "react";

import InputTextPassword from "../../components/Form/InputTextPassword";
import InputText from "../../components/Form/InputText";
import Button from "../../components/Form/Button";
import { useAppDispatch } from "../../hooks";
import { login } from "../../store/auth";
import { Formik } from "formik";
import * as Yup from "yup";

import * as S from "./styles";
import useAppSelector from "../../hooks/useAppSelector";

interface FormProps {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const dispatch = useAppDispatch();

  const SubmitForm = ({ email, password }: FormProps) => {
    dispatch(login({ email, password }));
  };

  const { loading } = useAppSelector((state) => state.auth);

  return (
    <S.Container>
      <S.TitlesWrapped>
        <S.Title>Bem Vindo(a)!</S.Title>

        <S.SubTitle>Faça login para acessar nossa plataforma</S.SubTitle>
      </S.TitlesWrapped>

      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={SubmitForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <S.Form>
            <S.Wrapped>
              <S.FormGroup>
                <InputText
                  testID="input-email"
                  label="Email"
                  placeholder="Digite seu email"
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.email}
                  error={errors.email}
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
            </S.Wrapped>

            <Button
              testID="btn-login"
              title="Entrar"
              onPress={handleSubmit}
              loading={loading}
            />
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default Login;
