import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogContent,
  FormControlLabel,
  InputBase,
  RadioGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BpRadio from "../BpRadio/BpRadio";
import { creationOutfitOptions } from "./helper";
import { getIcon, sexToString } from "../Char/helper";
import { useTranslation } from "react-i18next";
import { isEmpty } from "../../helpers/string";

const FormDiv = styled("form")({
  display: "flex",
  flexDirection: "column",
});

const ContainerDiv = styled("div")({
  display: "flex",
});

const OutfitsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: 200,
});

const CharContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: 300,
  position: "relative",
});

const CheckboxForm = styled(FormControlLabel)({
  position: "absolute",
  top: 0,
  left: 10,
  color: "white",
  ".MuiFormControlLabel-label": {
    fontFamily: "AdventureRequest-j8W9",
    fontSize: 12,
  },
  ".MuiCheckbox-root": {
    color: "white",
  },
  ".Mui-checked": {
    color: "white !important",
  },
});

const Loading = styled(CircularProgress)({
  color: "white",
});

const CharDisplay = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "1px solid",
  borderColor: "white",
  justifyContent: "center",
  alignContent: "center",
  padding: 30,
  paddingBottom: 20,
  marginBottom: 15,
});

const CharDisplayContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CharInfoContainer = styled("div")({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  border: "1px solid",
  borderColor: "white",
});

const InfoText = styled("span")({
  fontFamily: "AdventureRequest-j8W9",
  fontSize: 14,
  color: "#d3d3d3",
  padding: 5,
});

const OutfitsText = styled("span")({
  fontFamily: "AdventureRequest-j8W9",
  fontSize: 16,
  color: "#d3d3d3",
  marginBottom: 10,
});

const StyledRadioGroup = styled(RadioGroup)({
  overflowY: "scroll",
  paddingLeft: 10,
  height: 200,
  width: 150,
  flexWrap: "unset",
  "&::-webkit-scrollbar": {
    width: 3,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#5c5c5c",
    borderRadius: 10,
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  ".MuiFormControlLabel-label": {
    color: "white",
    fontFamily: "AdventureRequest-j8W9",
    fontSize: 12,
  },
});
const ForwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  right: -18,
  top: 3,
  transform: "rotate(180deg)",
  cursor: "pointer",
});

const BackwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  left: -18,
  top: 3,
  cursor: "pointer",
});

const Icon = styled("img")({
  width: 60,
  height: 60,
  transform: "rotate(30deg)",
  marginBottom: 30,
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
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    color: "white",
    fontFamily: "AdventureRequest-j8W9",
    "&:focus": {
      boxShadow: `0 0 0 0.2rem`,
      borderColor: "white",
    },
  },
  marginBottom: 10,
});

const NewCharButton = styled(Button)({
  marginTop: 30,
  width: "100%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#2b2b2b",
  borderColor: "white",
  color: "white",
  fontFamily: "AdventureRequest-j8W9",
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

const ErrorText = styled("span")({
  color: "#ed6242",
});

function CharCreationDialog({
  open,
  loading,
  onClose,
  submit,
}: ICharCreationDialog) {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [sex, setSex] = useState(true);
  const [outfit, setOutfit] = useState("Citzen");
  const [animate, setAnimate] = useState(false);

  const [validationErrors, setValidationErrors] = useState<{
    emptyName?: string;
  }>({});
  const [submitFailed, setSubmitFailed] = useState(false);

  const resetState = () => {
    setName("");
    setSex(true);
    setOutfit("Citzen");
    setAnimate(false);
    setValidationErrors({});
    setSubmitFailed(false);
  };

  const changeGender = () => {
    setSex(!sex);
  };

  const validate = ({ name }: { name: string }): boolean => {
    var isValid: boolean = true;
    setValidationErrors({});

    if (isEmpty(name)) {
      isValid = false;
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("chars.charCreationDialog.validation.emptyName"),
      }));
    }

    return isValid;
  };

  useEffect(() => {
    if (!isEmpty(name)) {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: undefined,
      }));
    } else {
      setValidationErrors((errors) => ({
        ...errors,
        emptyName: t("chars.charCreationDialog.validation.emptyName"),
      }));
    }
  }, [name, t]);

  const icon = getIcon(sex, outfit.toLocaleLowerCase(), animate);

  return (
    <Dialog
      open={open}
      onClose={() => {
        resetState();
        onClose();
      }}
    >
      <DialogContent>
        <FormDiv
          onSubmit={(e) => {
            e.preventDefault();
            if (!validate({ name })) {
              setSubmitFailed(true);
              return;
            }
            resetState();
            submit({ name: name, sex: sex, outfit: outfit.toLowerCase() });
          }}
        >
          <ContainerDiv>
            <OutfitsContainer>
              <OutfitsText>
                {t("chars.charCreationDialog.outfitsTitle")}
              </OutfitsText>
              <StyledRadioGroup>
                {creationOutfitOptions.map((o) => (
                  <StyledFormControlLabel
                    key={o}
                    value={o.toLowerCase()}
                    control={<BpRadio />}
                    label={o}
                    color="white"
                    onClick={(e) => setOutfit(o)}
                    checked={outfit === o}
                  />
                ))}
              </StyledRadioGroup>
            </OutfitsContainer>
            <CharContainer>
              <CheckboxForm
                control={
                  <Checkbox
                    value={animate}
                    onChange={(e) => setAnimate(e.target.checked)}
                  />
                }
                label={t("chars.charCreationDialog.animate")}
                labelPlacement="end"
              />
              <CharDisplay>
                <CharDisplayContainer>
                  <Icon src={icon} alt="character icon" />
                </CharDisplayContainer>

                <CharInfoContainer>
                  <BackwardArrow onClick={changeGender} />
                  <InfoText>{`${sexToString(sex)} ${outfit}`}</InfoText>
                  <ForwardArrow onClick={changeGender} />
                </CharInfoContainer>
              </CharDisplay>
              <FormInput
                placeholder={t("chars.charCreationDialog.name")}
                value={name}
                onChange={(event) => setName(event.target.value)}
                inputProps={{ maxLength: 14 }}
              />
            </CharContainer>
          </ContainerDiv>
          {submitFailed && <ErrorText>{validationErrors.emptyName}</ErrorText>}
          <NewCharButton type="submit" disabled={loading || name.length < 4}>
            {loading ? (
              <Loading size={24} />
            ) : (
              t("chars.charCreationDialog.createButton")
            )}
          </NewCharButton>
        </FormDiv>
      </DialogContent>
    </Dialog>
  );
}

interface ICharCreationDialog {
  open: boolean;
  loading: boolean;
  submit: ({
    name,
    sex,
    outfit,
  }: {
    name: string;
    sex: boolean;
    outfit: string;
  }) => void;
  onClose: () => void;
}

export default CharCreationDialog;
