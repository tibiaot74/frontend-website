import { styled } from "@mui/system";
import LoginForm from "../../components/LoginForm";
import MainNavBar from "../../components/MainNavBar";

const ContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const BodyDiv = styled("div")({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 30,
});

function Login() {
  return (
    <ContainerDiv>
      <MainNavBar />
      <BodyDiv>
        <LoginForm />
      </BodyDiv>
    </ContainerDiv>
  );
}

export default Login;
