import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase,
} from "@mui/material";
import Male from "../../assets/gifs/char_male.gif";
import Female from "../../assets/gifs/char_female.gif";
import { styled } from "@mui/system";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledTitle = styled(DialogTitle)({
  color: "white",
  fontSize: 26,
  fontFamily: "AncientModernTales-a7Po",
  paddingBottom: 5,
});

const ContentDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
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

const GenderSelectDiv = styled("div")({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  marginBottom: 30,
});

const ForwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  top: "50%",
  right: "20%",
  transform: "rotate(180deg)",
  cursor: "pointer",
});

const BackwardArrow = styled(ArrowBackIosIcon)({
  position: "absolute",
  color: "white",
  top: "50%",
  left: "20%",
  cursor: "pointer",
});

const GenderSelect = styled("img")({
  width: 80,
  height: 80,
});

const InputText = styled("span")({
  fontFamily: "AncientModernTales-a7Po",

  color: "white",
  fontSize: 24,
  padding: 12,
  width: 85,
});

const CreateButton = styled(Button)({
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

const InputDiv = styled("div")({
  display: "flex",
});

const Loading = styled(CircularProgress)({
  color: "white",
});

function CharCreationDialog({
  open,
  loading,
  onClose,
  submit,
}: ICharCreationDialog) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(Male);

  const changeGender = () => {
    setGender(gender === Male ? Female : Male);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <StyledTitle>Novo Char</StyledTitle>
      <DialogContent>
        <ContentDiv>
          <GenderSelectDiv>
            <ForwardArrow onClick={changeGender} />
            <BackwardArrow onClick={changeGender} />
            <GenderSelect src={gender} />
          </GenderSelectDiv>
          <InputDiv>
            <InputText>Nome:</InputText>
            <FormInput
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </InputDiv>
        </ContentDiv>
      </DialogContent>
      <DialogActions>
        <CreateButton
          disabled={loading}
          onClick={() => {
            submit({ name: name, sex: gender });
          }}
        >
          {loading ? <Loading size={24} /> : "Criar"}
        </CreateButton>
      </DialogActions>
    </Dialog>
  );
}

interface ICharCreationDialog {
  open: boolean;
  loading: boolean;
  submit: ({ name, sex }: { name: string; sex: string }) => void;
  onClose: () => void;
}

export default CharCreationDialog;
