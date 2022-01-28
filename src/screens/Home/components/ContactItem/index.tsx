import React from "react";

import { Contact } from "../../../../store/contacts";

import * as S from "./styles";

interface ContactItemProps {
  contact: Contact;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ContactItem = ({ contact, onDelete, onEdit }: ContactItemProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Name>{contact?.name}</S.Name>
        </S.HeaderContent>
        <S.ButtonList onPress={() => onEdit(contact.id)}>
          <S.TextButton>Editar</S.TextButton>
        </S.ButtonList>
      </S.Header>

      <S.Email>{contact?.email}</S.Email>
      <S.Footer>
        <S.Datas>
          <S.Icon name="smartphone" />
          <S.Phone>{contact?.mobile}</S.Phone>
        </S.Datas>
        <S.ButtonList onPress={() => onDelete(contact.id)}>
          <S.IconDelete name="trash-2" />
        </S.ButtonList>
        {/* <S.ButtonList onPress={() => modal(contact.id)}>
          <S.IconDelete name="trash-2" />
        </S.ButtonList> */}
      </S.Footer>
    </S.Container>
  );
};

export default ContactItem;
