import React from "react";

import contacts, {
  editContact,
  Contact,
  editSelector,
} from "../../store/contacts";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import InputText from "../../components/Form/InputText";
import useAppSelector from "../../hooks/useAppSelector";
import Button from "../../components/Form/Button";
import { useAppDispatch } from "../../hooks";
import { Formik } from "formik";
import * as Yup from "yup";

import * as S from "./styles";

interface ContactItemProps {
  contact: Contact;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
});

const EditContact = ({ contact }: ContactItemProps) => {
  const route = useRoute<RouteProp<RootStackParamList, "editContact">>();
  const contactId = route?.params?.id;

  const edit = useAppSelector(editSelector(contactId));

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const SubmitForm = async (values: typeof initialValues) => {
    try {
      const formData = {
        id: contactId,
        name: values.name,
        email: values.email,
        mobile: values.phone,
      };
      await dispatch(editContact(formData));
      navigation.goBack();
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.Title>
        Faça as alterações necessárias e ao terminar salve seu contato
      </S.Title>
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
                  placeholder={edit.name}
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
                  placeholder={edit.email}
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
                  placeholder={edit.mobile}
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
              testID="btn-edit"
              title="Editar contato"
              onPress={handleSubmit}
            />
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default EditContact;
