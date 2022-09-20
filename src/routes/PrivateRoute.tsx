import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSession from "../services/UserSession";

function PrivateRoute({ children }: IPrivateRoute) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!UserSession.isLogged()) {
      return navigate("/");
    }
  }, [navigate]);

  return children;
}

interface IPrivateRoute {
  children: ReactElement;
}

export default PrivateRoute;
