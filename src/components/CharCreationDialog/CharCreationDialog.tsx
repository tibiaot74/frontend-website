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
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BpRadio from "../BpRadio/BpRadio";
import { creationOutfitOptions } from "./helper";
import { getIcon, sexToString } from "../Char/helper";

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
    fontFamily: "AncientModernTales-a7Po",
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
  fontSize: 16,
  color: "#d3d3d3",
});

const OutfitsText = styled("span")({
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
});

const StyledFormControlLabel = styled(FormControlLabel)({
  ".MuiFormControlLabel-label": {
    color: "white",
    fontFamily: "AncientModernTales-a7Po",
  },
});
const ForwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  right: -18,
  top: -3,
  transform: "rotate(180deg)",
  cursor: "pointer",
});

const BackwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  left: -18,
  top: -3,
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

function CharCreationDialog({
  open,
  loading,
  onClose,
  submit,
}: ICharCreationDialog) {
  const [name, setName] = useState("");
  const [sex, setSex] = useState(true);
  const [outfit, setOutfit] = useState("Citzen");
  const [animate, setAnimate] = useState(false);

  const changeGender = () => {
    setSex(!sex);
  };

  const icon = getIcon(sex, outfit.toLocaleLowerCase(), animate);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <FormDiv
          onSubmit={() => {
            submit({ name, sex, outfit });
          }}
        >
          <ContainerDiv>
            <OutfitsContainer>
              <OutfitsText>Outfits</OutfitsText>
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
                label="Animar"
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
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </CharContainer>
          </ContainerDiv>
          <NewCharButton type="submit" disabled={loading}>
            {loading ? <Loading size={24} /> : "Criar"}
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
