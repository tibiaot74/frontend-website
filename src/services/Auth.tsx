import { hostname } from "./config";
import axios from "axios";

export async function createAccount(data: ICreateAccount) {
  const response = await axios.post(`${hostname}/api/account`, data);

  return await response;
}

interface ICreateAccount {
  name: string;
  email: string;
  password: string;
}

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  if (user && user.accessToken) {
    return { authentication: user.accessToken };
  } else {
    return {};
  }
}
