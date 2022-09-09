import { styled } from "@mui/system";
import Carousel from "../../components/Carousel";
import CarouselItem from "../../components/CarouselItem";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import { carouselItems, InfoItems } from "./Content";

const ContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const BodyDiv = styled("div")({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 30,
});

const InfoDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: 12,
});

function Home() {
  return (
    <ContainerDiv>
      <MainNavBar />
      <BodyDiv>
        <Carousel>
          {carouselItems.map((item) => (
            <CarouselItem {...item} />
          ))}
        </Carousel>
        <InfoDiv>
          {InfoItems.map((item) => (
            <InfoCard {...item} />
          ))}
        </InfoDiv>
      </BodyDiv>
    </ContainerDiv>
  );
}

export default Home;
