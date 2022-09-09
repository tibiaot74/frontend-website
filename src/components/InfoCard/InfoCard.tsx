import { styled } from "@mui/system";

const ContainerDiv = styled("div")({
  backgroundColor: "#292e38",
  borderRadius: 5,
  height: 60,
  display: "flex",
  flexDirection: "column",
  width: "20%",
  padding: 16,
});

const HeaderDiv = styled("div")({
  display: "flex",
});

const Header = styled("span")({
  color: "white",
  fontSize: 32,
});

const BodyDiv = styled("div")({
  display: "flex",
  flexDirection: "row-reverse",
});

const Body = styled("span")({
  color: "#9219ad",
  fontSize: 24,
});

function InfoCard({ image, title, body }: Props) {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <img
          src={image}
          alt={image}
          style={{ width: 32, height: 32, paddingRight: 12 }}
        />
        <Header>{title}</Header>
      </HeaderDiv>

      <BodyDiv>
        <Body>{body}</Body>
      </BodyDiv>
    </ContainerDiv>
  );
}

interface Props {
  image: string;
  title: string;
  body: string;
}

export default InfoCard;
