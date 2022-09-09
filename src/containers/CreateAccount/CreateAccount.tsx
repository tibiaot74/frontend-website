import { styled } from "@mui/system";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccoutForm";
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

function CreateAccount() {
  return (
    <ContainerDiv>
      <MainNavBar />
      <BodyDiv>
        <CreateAccountForm />
      </BodyDiv>
    </ContainerDiv>
  );
}

export default CreateAccount;
