import React, { useCallback, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import useAppSelector from "../../hooks/useAppSelector";
import { getContacts } from "../../store/contacts";
import ContactItem from "./components/ContactItem";
import Button from "../../components/Form/Button";
import { useAppDispatch } from "../../hooks";

import * as S from "./styles";

const Home = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const { list, loading } = useAppSelector((state) => state.contacts);
  console.log("LISTA", list);

  const _renderItem = useCallback(
    ({ item }) => <ContactItem contact={item} />,
    []
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Header>
        <Button
          title="Cadastrar contato"
          onPress={() => navigation.navigate("addContact")}
        />
      </S.Header>

      <S.Title>Total usuários</S.Title>

      <S.List
        data={list}
        keyExtractor={(_, index) => String(index)}
        renderItem={_renderItem}
      />
    </S.Container>
  );
};

export default Home;
