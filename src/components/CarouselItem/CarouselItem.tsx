import { styled } from "@mui/system";

interface IContainerDiv {
  image: string;
}

const ContainerDiv = styled("div")(({ image }: IContainerDiv) => ({
  display: "flex",
  padding: 12,
  backgroundImage: `url("${image}")`,
  backgroundSize: "cover",
  height: 400,
  borderRadius: 5,
}));

const TextContainer = styled("div")({
  position: "relative",
  top: 10,
  right: 0,
  backgroundColor: "rgba(24, 28, 35, 0.95)",
  padding: 24,
  borderRadius: 8,
  height: "fit-content",
  maxWidth: 250,
});

const Header = styled("span")({
  color: "white",
  fontSize: 32,
});

const Paragraph = styled("p")({
  fontFamily: "AdventureRequest-j8W9",
  color: "white",
  fontSize: 14,
});

function CarouselItem({ header, paragraph, image }: Props) {
  return (
    <ContainerDiv image={image}>
      <TextContainer>
        <Header>{header}</Header>
        <Paragraph>{paragraph}</Paragraph>
      </TextContainer>
    </ContainerDiv>
  );
}

interface Props {
  header: string;
  paragraph: string;
  image: string;
}

export default CarouselItem;
