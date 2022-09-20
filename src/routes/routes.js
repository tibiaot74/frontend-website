import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateAccount from "../containers/CreateAccount/CreateAccount";
import Chars from "../containers/Chars";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Lougout from "../containers/Logout";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Lougout />} />
        <Route path="/criar-conta" element={<CreateAccount />} />
        <Route
          path="/char"
          element={
            <PrivateRoute>
              <Chars />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
