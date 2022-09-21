import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logUser } from "./helper";
import { isEmpty as isEmptyString } from "../../helpers/string";
import { useTranslation } from "react-i18next";

const ContainerDiv = styled("form")({
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
  width: 115,
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

const ErrorText = styled("span")({
  color: "#ed6242",
});

const Loading = styled(CircularProgress)({
  color: "white",
});

function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    emptyName?: string;
    emptyPassword?: string;
  }>({});
  const [submitFailed, setSubmitFailed] = useState(false);

  const submit = (data: { name: number; password: string }) => {
    setLoading(true);
    logUser({
      data: data,
      onSuccess: () => {
        setLoading(false);
        navigate("/");
      },
      onFail: () => {
        setLoading(false);
      },
    });
  };

  const validate = ({
    name,
    password,
  }: {
    name: string;
    password: string;
  }): boolean => {
    var isValid: boolean = true;
    setValidationErrors({});

    if (isEmptyString(name)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("login.loginForm.validation.emptyName"),
      }));
    }
    if (isEmptyString(password)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        emptyPassword: t("login.loginForm.validation.emptyPassword"),
      }));
    }

    return isValid;
  };

  useEffect(() => {
    if (!isEmptyString(name)) {
      setValidationErrors((errors) => ({ ...errors, emptyName: undefined }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("login.loginForm.validation.emptyName"),
      }));
    }
  }, [name, t]);

  useEffect(() => {
    if (!isEmptyString(password)) {
      setValidationErrors((errors) => ({
        ...errors,
        emptyPassword: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("login.loginForm.validation.emptyPassword"),
      }));
    }
  }, [password, t]);

  return (
    <ContainerDiv
      onSubmit={(e) => {
        e.preventDefault();
        if (!validate({ name, password })) {
          setSubmitFailed(true);
          return;
        }
        const numberedName = parseInt(name);
        submit({ name: numberedName, password: password });
      }}
    >
      <Title>{t("login.loginForm.title")}</Title>
      <InputDiv>
        <InputText>{t("login.loginForm.account")}</InputText>
        <FormInput
          value={name}
          error={!!validationErrors?.emptyName}
          placeholder={t("createAccount.createAccountForm.accountPlaceholder")}
          onChange={(event) =>
            setName(event.target.value.replace(/[^0-9]+/, ""))
          }
          inputProps={{ maxLength: 10 }}
        />
      </InputDiv>
      {submitFailed && <ErrorText>{validationErrors.emptyName}</ErrorText>}
      <InputDiv>
        <InputText>{t("login.loginForm.password")}</InputText>
        <FormInput
          type="password"
          value={password}
          error={!!validationErrors?.emptyPassword}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{ maxLength: 40 }}
        />
      </InputDiv>
      {submitFailed && <ErrorText>{validationErrors.emptyPassword}</ErrorText>}

      <ButtonDiv>
        <FormButton disabled={loading} type="submit">
          {loading ? <Loading size={24} /> : t("login.loginForm.loginButton")}
        </FormButton>
      </ButtonDiv>
    </ContainerDiv>
  );
}

export default LoginForm;
