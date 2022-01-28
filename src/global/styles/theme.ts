import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components/native";

export default {
  colors: {
    primary: "#142B5D",
    secondary: "#757575",

    title: "#424242",
    title_header: "#244677",
    tilte_buttons: "#F1F1F1",

    attention: "#FC3333",
    success: "#9DF28F",

    placeholder: "#495057",

    border: "#E0E0E0",

    background: "#FFFFFF",
    background_inputs: "#F1F3F5",
  },

  borderGeneral: {
    borderButton: () => css`
      border: 1px solid ${({ theme }) => theme.colors.title};
    `,
  },

  fonts: {
    regular: "Montserrat_500Medium",
    medium: "Montserrat_600SemiBold",
    bold: "Montserrat_700Bold",
  },

  general: {
    input: () => css`
      font-size: ${RFValue(16)}px;
      background-color: ${({ theme }) => theme.colors.background_inputs};
      font-family: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => theme.colors.placeholder};
      height: ${RFValue(40)}px;
      padding-left: 16px;
      border-radius: 8px;
    `,
  },
};
