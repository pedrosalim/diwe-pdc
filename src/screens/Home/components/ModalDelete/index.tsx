import React, { memo } from "react";
import { useAppDispatch } from "../../../../hooks";
import { deleteContacts } from "../../../../store/contacts";

import ButtonsModal from "../ButtonsModal";

import * as S from "./styles";

interface ModalUserCacheProps {
  visible: boolean;
  onDelete: (id: number) => void;
  onClose: () => void;
  contactId: number | null;
}

const ModalUserCache = ({
  visible,
  onClose,
  onDelete,
  contactId,
}: ModalUserCacheProps) => {
  return (
    <S.Modal isVisible={visible}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Title>Tem certeza que deseja excluir este contato?</S.Title>
          <S.SubTitle>
            Após excluir, não será possível recuperar o contato
          </S.SubTitle>
        </S.ModalHeader>

        <S.ModalFooter>
          <ButtonsModal
            type="color"
            title="Excluir contato"
            activeOpacity={0.8}
            onPress={() => onDelete(contactId!)}
          />
          <ButtonsModal
            type="transparent"
            title="Não excluir"
            activeOpacity={0.8}
            onPress={() => {
              onClose();
            }}
          />
        </S.ModalFooter>
      </S.ModalContent>
    </S.Modal>
  );
};

export default memo(ModalUserCache);
