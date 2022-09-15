import { hostname } from "./config";
import axios, { AxiosRequestConfig } from "axios";
import UserSession from "./UserSession";

interface ICreateAccount {
  name: number;
  email: string;
  password: string;
}

interface ICreateAccountResponse {
  email: string;
  id: number;
  name: string;
}

export async function createAccount(data: ICreateAccount) {
  const response = await axios.post<ICreateAccountResponse>(
    `${hostname}/api/account`,
    data
  );

  return await response;
}

interface ILogin {
  name: number;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export async function login(data: ILogin) {
  const response = await axios.post<ILoginResponse>(
    `${hostname}/api/login`,
    data
  );

  return await response;
}

export function authHeader(): AxiosRequestConfig {
  const user = UserSession.getToken() || "";
  if (user) {
    return { headers: { Authorization: user } };
  } else {
    return {};
  }
}
