const API_URL = "https://contacts-api.prd.parceirodaconstrucao.com.br/";

import axios from "axios";

export const api = axios.create({
  baseURL: API_URL,
});
