import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateAccount from "../containers/CreateAccount/CreateAccount";
import Home from "../containers/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criar-conta" element={<CreateAccount />} />,
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
