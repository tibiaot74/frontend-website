import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { createAccount } from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { logUser } from "../LoginForm/helper";
import { useTranslation } from "react-i18next";
import { nameIsLongEnough, validEmail, validPassword } from "./validations";
import { isEmpty } from "../../helpers/string";

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

function CreateAccountForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    invalidEmail?: string;
    invalidPassword?: string;
    emptyName?: string;
    nameTooShort?: string;
  }>({});
  const [submitFailed, setSubmitFailed] = useState(false);

  const submit = (data: { email: string; name: number; password: string }) => {
    setLoading(true);
    createAccount(data)
      .then((response) => {
        setLoading(false);
        logUser({
          data: { name: data.name, password: data.password },
          onSuccess: () => {
            navigate("/", { replace: true });
          },
          onFail: () => {},
        });
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const validate = ({
    email,
    name,
    password,
  }: {
    email: string;
    name: string;
    password: string;
  }): boolean => {
    var isValid: boolean = true;
    setValidationErrors({});

    if (!validEmail(email)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        invalidEmail: t(
          "createAccount.createAccountForm.validation.invalidEmail"
        ),
      }));
    }
    if (isEmpty(name)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("createAccount.createAccountForm.validation.emptyName"),
      }));
    }
    if (!nameIsLongEnough(name)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        nameTooShort: t(
          "createAccount.createAccountForm.validation.nameTooShort"
        ),
      }));
    }

    if (!validPassword(password)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        invalidPassword: t(
          "createAccount.createAccountForm.validation.invalidPassword"
        ),
      }));
    }

    return isValid;
  };

  useEffect(() => {
    if (validEmail(email)) {
      setValidationErrors((errors) => ({
        ...errors,
        invalidEmail: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        invalidEmail: t(
          "createAccount.createAccountForm.validation.invalidEmail"
        ),
      }));
    }
  }, [email, t]);

  useEffect(() => {
    if (!isEmpty(name)) {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("createAccount.createAccountForm.validation.emptyName"),
      }));
    }

    if (nameIsLongEnough(name)) {
      setValidationErrors((errors) => ({
        ...errors,
        nameTooShort: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        nameTooShort: t(
          "createAccount.createAccountForm.validation.nameTooShort"
        ),
      }));
    }
  }, [name, t]);

  useEffect(() => {
    if (validPassword(password)) {
      setValidationErrors((errors) => ({
        ...errors,
        invalidPassword: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        invalidPassword: t(
          "createAccount.createAccountForm.validation.invalidPassword"
        ),
      }));
    }
  }, [password, t]);

  return (
    <ContainerDiv
      onSubmit={(e) => {
        e.preventDefault();
        if (!validate({ email, name, password })) {
          setSubmitFailed(true);
          return;
        }
        const numberedName = parseInt(name);
        submit({ email: email, name: numberedName, password: password });
      }}
    >
      <Title>{t("createAccount.createAccountForm.title")}</Title>
      <InputDiv>
        <InputText>{t("createAccount.createAccountForm.email")}</InputText>
        <FormInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </InputDiv>
      {submitFailed && <ErrorText>{validationErrors.invalidEmail}</ErrorText>}
      <InputDiv>
        <InputText>{t("createAccount.createAccountForm.account")}</InputText>
        <FormInput
          value={name}
          placeholder={t("createAccount.createAccountForm.accountPlaceholder")}
          onChange={(event) =>
            setName(event.target.value.replace(/[^0-9]+/, ""))
          }
          inputProps={{ maxLength: 10 }}
        />
      </InputDiv>
      {submitFailed && <ErrorText>{validationErrors.emptyName}</ErrorText>}
      {submitFailed && <ErrorText>{validationErrors.nameTooShort}</ErrorText>}

      <InputDiv>
        <InputText>{t("createAccount.createAccountForm.password")}</InputText>
        <FormInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{ maxLength: 40 }}
        />
      </InputDiv>
      {submitFailed && (
        <ErrorText>{validationErrors.invalidPassword}</ErrorText>
      )}

      <ButtonDiv>
        <FormButton disabled={loading} type="submit">
          {loading ? (
            <Loading size={24} />
          ) : (
            t("createAccount.createAccountForm.createButton")
          )}
        </FormButton>
      </ButtonDiv>
    </ContainerDiv>
  );
}

export default CreateAccountForm;
