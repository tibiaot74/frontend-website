import axios from "axios";
import { authHeader } from "./Auth";
import { hostname } from "./config";

interface ICreateChar {
  name: string;
  sex: boolean;
  outfit: string;
}

interface ICreateCharResponse {
  id: number;
  name: string;
  sex: boolean;
  outfit: string;
}

export async function createChar(data: ICreateChar) {
  const response = await axios.post<ICreateCharResponse>(
    `${hostname}/api/account/player`,
    data,
    authHeader()
  );

  return await response;
}

export interface IGetCharsResponse {
  players: Array<{ name: string; sex: boolean; level: number; outfit: string }>;
}

export async function getAccountChars() {
  const response = await axios.get<IGetCharsResponse>(
    `${hostname}/api/account/player`,
    authHeader()
  );

  return await response;
}
