import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_tibia.png";
import UserSession from "../../services/UserSession";

const ContainerDiv = styled("div")({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  height: 52,
  padding: 26,
});

const InnerDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 1080,
  width: "100%",
});

const LogoDiv = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NavDiv = styled("div")({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "space-between",
});

const Title = styled("span")({
  color: "white",
  fontSize: 24,
});

const Divider = styled(Title)({
  marginLeft: 30,
  marginRight: 30,
});

function MainNavBar() {
  const { t } = useTranslation();

  const authenticatedList = [
    { name: t("mainNavBar.authenticatedList.logout"), url: "/logout" },
    { name: t("mainNavBar.authenticatedList.chars"), url: "/char" },
  ];

  const unauhenticatedList = [
    { name: t("mainNavBar.unauthenticatedList.login"), url: "/login" },
    {
      name: t("mainNavBar.unauthenticatedList.createAccount"),
      url: "/criar-conta",
    },
  ];

  const mainNavigationOptions = UserSession.isLogged()
    ? authenticatedList
    : unauhenticatedList;

  return (
    <ContainerDiv>
      <InnerDiv>
        <LogoDiv>
          <img
            src={Logo}
            alt="logo"
            style={{ width: 36, height: 36, paddingRight: 14 }}
          />
          <Link to="/">
            <Title>{t("mainNavBar.title")}</Title>
          </Link>
        </LogoDiv>

        <NavDiv>
          {mainNavigationOptions.map((option, i) => (
            <>
              {i !== 0 && <Divider>·</Divider>}

              <Link key={`link-${i}`} to={option.url}>
                <Title>{option.name}</Title>
              </Link>
            </>
          ))}
        </NavDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default MainNavBar;
