import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const SCarouselWrapper = styled("div")({
  width: "100%",
  display: "flex",
});

interface ICarouselSlide {
  active?: boolean;
}
interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlide = styled("div")((props: ICarouselSlide) => ({
  flex: "0 0 auto",
  opacity: props.active ? 1 : 0,
  transition: "all 1s ease",
  width: "100%",
}));

const SCarouselSlides = styled("div")((props: ICarouselProps) => ({
  width: "100%",
  display: "flex",
  transform: `translateX(-${props.currentSlide * 100}%)`,
  transition: "all 1s ease",
}));

function Carousel({ children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(function () {
      setCurrentSlide(
        (currentSlide) => (currentSlide - 1 + children.length) % children.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [children.length]);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <SCarouselWrapper>
      <SCarouselSlides currentSlide={currentSlide}>
        {activeSlide}
      </SCarouselSlides>
    </SCarouselWrapper>
  );
}

interface Props {
  children: JSX.Element[];
}

export default Carousel;
