import React from "react";

import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Form/Button";

import * as S from "./styles";

const Dashboard = () => {
  const navigation = useNavigation<any>();

  return (
    <S.Container>
      <S.Image source={require("../../assets/login-amico.png")} />

      <S.TitlesWrapped>
        <S.Title>Bem-vindo! É hora de começar uma nova experiência</S.Title>

        <S.SubTitle>
          Para ter acesso a todas as funcionalidades que podemos oferecer, faça
          login ou crie uma nova conta.
        </S.SubTitle>
      </S.TitlesWrapped>

      <S.Footer>
        <Button title="Começar" onPress={() => navigation.navigate("Login")} />
      </S.Footer>
    </S.Container>
  );
};

export default Dashboard;
