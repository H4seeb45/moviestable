import MockAdapter from "axios-mock-adapter";
// import axios from "axios";
import dataAPI from "./dataAPI";

const mock = new MockAdapter(dataAPI);

export default mock;
