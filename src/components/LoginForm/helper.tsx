import { login } from "../../services/Auth";
import UserSession from "../../services/UserSession";

export const logUser = ({
  data,
  onSuccess,
  onFail,
}: {
  data: { name: number; password: string };
  onSuccess: () => void;
  onFail: () => void;
}) => {
  login(data)
    .then((response) => {
      UserSession.setUsername(data.name);
      UserSession.setToken(response.data.token);
      onSuccess();
    })
    .catch((error) => {
      onFail();
    });
};
