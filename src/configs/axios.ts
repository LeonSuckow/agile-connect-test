import axios from "axios";

const dictionaryAPI = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/", // ideal seria estar no .env
});

export default dictionaryAPI;
