import UserSession from "../../services/UserSession";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Lougout() {
  const navigate = useNavigate();

  if (UserSession.getToken()) {
    UserSession.setToken("");
  }

  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
}

export default Lougout;
