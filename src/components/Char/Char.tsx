import { styled } from "@mui/system";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const borderColor = "#bf64f5";

const InnerCharContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  justifyContent: "center",
  overflow: "hidden",
  alignItems: "center",
  border: `2px solid ${borderColor}`,
  padding: 23,
});

const OuterCharContainer = styled("div")({
  backgroundColor: "#171717",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  width: 150,
  height: 150,
  padding: 5,
  border: `2px solid ${borderColor}`,
});

const NameText = styled("span")({
  color: "white",
  fontSize: 20,
  marginBottom: 5,
});

const GenderText = styled("span")({
  color: "white",
  fontSize: 16,
});

const Icon = styled("img")({
  width: 45,
  height: 45,
  transform: "rotate(30deg)",
  marginBottom: 10,
});

const MoreOptionsIcon = styled(IconButton)({
  position: "absolute",
  padding: 0,
  top: 5,
  right: 1,
  color: "#b1afb3",
  cursor: "pointer",
});

const MoreOptionsMenu = styled(Menu)({
  "&paper": {
    backgroundColor: "#000",
  },
});

function Char({
  name,
  gender,
  icon,
}: {
  name: string;
  gender: "Male" | "Female";
  icon: string;
}) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchor);

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  return (
    <>
      <OuterCharContainer>
        <InnerCharContainer>
          <MoreOptionsIcon onClick={handleOpen}>
            <MoreVertIcon />
          </MoreOptionsIcon>
          <Icon src={icon} alt="character-icon" />
          <NameText>{name}</NameText>
          <GenderText>{gender}</GenderText>
        </InnerCharContainer>
      </OuterCharContainer>
      <MoreOptionsMenu
        id="character-menu"
        anchorEl={menuAnchor}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Deletar</MenuItem>
      </MoreOptionsMenu>
    </>
  );
}

export default Char;
