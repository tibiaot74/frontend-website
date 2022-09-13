import CharIcon from "../../assets/gifs/hero.gif";

const chars: Array<{ name: string; gender: "Male" | "Female"; icon: string }> =
  [
    { name: "Samuel", gender: "Male", icon: CharIcon },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
    {
      name: "Aghataa",
      gender: "Female",
      icon: CharIcon,
    },
  ];

export const useChars = () => {
  return chars;
};
