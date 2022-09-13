import axios from "axios";
import { authHeader } from "./Auth";
import { hostname } from "./config";

interface ICreateChar {
  name: string;
  sex: string;
}

interface ICreateCharResponse {
  id: number;
  name: string;
  sex: string;
}

export async function createChar(data: ICreateChar) {
  console.log(authHeader());
  const response = await axios.post<ICreateCharResponse>(
    `${hostname}/api/account/player`,
    data,
    authHeader()
  );

  return await response;
}
