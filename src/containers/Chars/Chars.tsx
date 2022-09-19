import { Divider, OutlinedInput, Button, Skeleton } from "@mui/material";
import { styled } from "@mui/system";
import MainNavBar from "../../components/MainNavBar";
import Char from "../../components/Char";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CharCreationDialog from "../../components/CharCreationDialog";
import { createChar, getAccountChars } from "../../services/Game";
import { defaultChars } from "./helper";
import { useTranslation } from "react-i18next";

const ContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const MainDiv = styled("div")({
  marginTop: 75,
  maxWidth: 1080,
  width: "100%",
});

const HeaderDiv = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginBottom: 30,
  overflow: "hidden",
});

const BodyDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const HeaderText = styled("span")({
  color: "white",
  fontSize: 42,
  paddingRight: 30,
});

const StyledDivider = styled(Divider)({
  marginTop: 30,
  borderWidth: 2,
  width: "100%",
  borderColor: "#7c0bbd",
});

const CharSectionDiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "70%",
  margin: -10,
});

const CharContainer = styled("div")({
  margin: 10,
});

const OptionsSection = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "column",
});

const SearchBarDiv = styled("div")({
  backgroundColor: "#171717",
  border: "1px solid",
  borderColor: "white",
  borderRadius: 3,
  padding: 15,
  marginBottom: 25,
});

const SearchBar = styled(OutlinedInput)({
  backgroundColor: "#FFF",
});

const NewCharButton = styled(Button)({
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

function Chars() {
  const { t } = useTranslation();

  const [chars, setChars] =
    useState<
      Array<{ name: string; sex: boolean; level: number; outfit: string }>
    >(defaultChars);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAccountChars()
      .then((response) => {
        setChars(response.data.players);
        setLoading(false);
      })
      .catch((err) => {
        setChars([]);
        setLoading(false);
      });
  }, []);

  const createNewChar = (data: {
    name: string;
    sex: boolean;
    outfit: string;
  }) => {
    setCharCreationLoading(true);
    createChar(data)
      .then((response) => {
        setCharCreationLoading(false);
        setChars([
          ...chars,
          {
            name: response.data.name,
            sex: response.data.sex,
            outfit: response.data.outfit,
            level: 0,
          },
        ]);
        setCharCreationDialogOpen(false);
      })
      .catch((err) => {
        setCharCreationLoading(true);
      });
  };

  const [searchText, setSearchText] = useState("");
  const [charCreationLoading, setCharCreationLoading] = useState(false);
  const [charCreationDialogOpen, setCharCreationDialogOpen] = useState(false);

  const handleTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const dialogClose = () => {
    setCharCreationDialogOpen(false);
  };

  const dialogOpen = () => {
    setCharCreationDialogOpen(true);
  };

  return (
    <ContainerDiv>
      <MainNavBar />
      <MainDiv>
        <HeaderDiv>
          <HeaderText>{t("chars.title")}</HeaderText>
          <StyledDivider />
        </HeaderDiv>
        <BodyDiv>
          <CharSectionDiv>
            {chars
              .filter((char) => char.name.includes(searchText))
              .map((char, i) => {
                return (
                  <CharContainer key={`${char.name}-${i}`}>
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <Char {...char} />
                    )}
                  </CharContainer>
                );
              })}
          </CharSectionDiv>
          <OptionsSection>
            <SearchBarDiv>
              <SearchBar
                value={searchText}
                onChange={handleTextChange}
                size="small"
                margin="none"
                endAdornment={<SearchIcon />}
              />
            </SearchBarDiv>
            <NewCharButton variant="contained" onClick={dialogOpen}>
              {t("chars.newChatButton")}
            </NewCharButton>
          </OptionsSection>
        </BodyDiv>
      </MainDiv>
      <CharCreationDialog
        open={charCreationDialogOpen}
        onClose={dialogClose}
        submit={createNewChar}
        loading={charCreationLoading}
      />
    </ContainerDiv>
  );
}

export default Chars;
