import React from "react";

import InputText from "../../components/Form/InputText";
import Button from "../../components/Form/Button";
import { addContact } from "../../store/contacts";
import { useAppDispatch } from "../../hooks";
import { Formik } from "formik";
import * as Yup from "yup";

import * as S from "./styles";

interface FormProps {
  name: string;
  email: string;
  phone: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
});

const RegisterNewContact = () => {
  const dispatch = useAppDispatch();

  const SubmitForm = async (values: typeof initialValues) => {
    try {
      const formData = {
        name: values.name,
        email: values.email,
        mobile: values.phone,
      };
      await dispatch(addContact(formData));
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.Title>Preencha as informações para cadastrar um novo contato</S.Title>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={SubmitForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <S.Form>
            <S.Wrapped>
              <S.FormGroup>
                <InputText
                  testID="input-name"
                  label="Nome completo"
                  placeholder="Digite o nome do contato"
                  onChangeText={handleChange("name")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.name}
                  error={errors.name}
                  returnKeyType="next"
                />
              </S.FormGroup>
              <S.FormGroup>
                <InputText
                  testID="input-email"
                  label="Email"
                  placeholder="Digite o email"
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.email}
                  error={errors.email}
                  returnKeyType="next"
                />
              </S.FormGroup>
              <S.FormGroup>
                <InputText
                  testID="input-phone"
                  label="Celular"
                  placeholder="Digite o celular"
                  onChangeText={handleChange("phone")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.phone}
                  error={errors.phone}
                  returnKeyType="next"
                />
              </S.FormGroup>
            </S.Wrapped>

            <Button
              testID="btn-login"
              title="Cadastrar contato"
              onPress={handleSubmit}
            />
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default RegisterNewContact;
