import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import contacts, {
  getContacts,
  deleteContacts,
  Contact,
} from "../../store/contacts";
import ButtonLogout from "../../components/Form/Button/ButtonLogout";
import { useNavigation } from "@react-navigation/native";
import useAppSelector from "../../hooks/useAppSelector";
import ContactItem from "./components/ContactItem";
import ModalDelete from "./components/ModalDelete";
import Button from "../../components/Form/Button";
import { useAppDispatch } from "../../hooks";
import { logout } from "../../store/auth";

import * as S from "./styles";

interface ModalUserCacheProps {
  contact: Contact;
}

const Home = ({ contact }: ModalUserCacheProps) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState<null | number>(null);

  const { list } = useAppSelector((state) => state.contacts);

  const handleOpenModal = (id: number) => {
    setId(id);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContacts(id));
    setModalVisible(false);
  };

  const handleEdit = (id: number) => {
    navigation.navigate("editContact", { id });
  };

  const _renderItem = useCallback(
    ({ item }) => (
      <ContactItem
        contact={item}
        onDelete={handleOpenModal}
        onEdit={handleEdit}
      />
    ),
    []
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonLogout onPress={handleLogout} />,
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.Header>
        <Button
          title="Cadastrar contato"
          onPress={() => navigation.navigate("addContact")}
        />
      </S.Header>

      <S.Title>Total: {list.length} usuários</S.Title>

      <S.List
        data={list}
        keyExtractor={(_, index) => String(index)}
        renderItem={_renderItem}
      />

      <ModalDelete
        contactId={id}
        visible={modalVisible}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
    </S.Container>
  );
};

export default Home;
