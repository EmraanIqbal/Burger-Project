import axios from "axios";

let instance = axios.create({
  baseURL: "https://emi-burger-default-rtdb.firebaseio.com/",
});

export default instance;
