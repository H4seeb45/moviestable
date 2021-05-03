import axios from "axios";
let dataAPI = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default dataAPI;
