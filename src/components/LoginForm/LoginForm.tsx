import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { login } from "../../services/Auth";

const ContainerDiv = styled("div")({
  backgroundColor: "#292e38",
  width: "80%",
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 12,
});

const Title = styled("span")({
  color: "white",
  fontSize: 40,
  padding: 12,
});

const InputDiv = styled("div")({
  display: "flex",
  width: "50%",
  margin: 20,
});

const InputText = styled("span")({
  color: "white",
  fontSize: 24,
  padding: 12,
  width: 85,
});

const FormInput = styled(InputBase)({
  width: "100%",
  "label + &": {
    marginTop: 8,
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 20,
    width: "100%",
    padding: "10px 12px",
    color: "white",
    fontFamily: "AncientModernTales-a7Po",
    "&:focus": {
      boxShadow: `0 0 0 0.2rem`,
      borderColor: "white",
    },
  },
});

const FormButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#2b2b2b",
  borderColor: "white",
  color: "white",
  fontFamily: "AncientModernTales-a7Po",
  "&:hover": {
    backgroundColor: "#171717",
    borderColor: "#f2f2f2",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#828282",
    borderColor: "white",
  },
  "&:focus": {
    boxShadow: "white",
  },
});

const ButtonDiv = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

const Loading = styled(CircularProgress)({
  color: "white",
});

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const submit = (data: { name: string; password: string }) => {
    setLoading(true);
    login(data)
      .then((response) => {
        setLoading(false);
        console.log("SUCESSO");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <ContainerDiv>
      <Title>Login</Title>
      <InputDiv>
        <InputText>Usuário:</InputText>
        <FormInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <InputText>Senha:</InputText>
        <FormInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </InputDiv>

      <ButtonDiv>
        <FormButton
          disabled={loading}
          onClick={() => submit({ name, password })}
        >
          {loading ? <Loading size={24} /> : "Login"}
        </FormButton>
      </ButtonDiv>
    </ContainerDiv>
  );
}

export default LoginForm;
