import UserSession from "../../services/UserSession";

const authenticatedList = [
  { name: "Logout", url: "/logout" },
  { name: "Chars", url: "/char" },
];

const unauhenticatedList = [
  { name: "Login", url: "/login" },
  { name: "Criar Conta", url: "/criar-conta" },
];

export const mainNavigationOptions = UserSession.isLogged()
  ? authenticatedList
  : unauhenticatedList;
