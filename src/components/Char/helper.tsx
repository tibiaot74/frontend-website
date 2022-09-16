import MaleCitzenStill from "../../assets/gifs/citzen_male_still.gif";
import MaleCitzenWalking from "../../assets/gifs/citzen_male_walking.gif";
import MaleHunterStill from "../../assets/gifs/hunter_male_still.gif";
import MaleHunterWalking from "../../assets/gifs/hunter_male_walking.gif";
import MaleKnightStill from "../../assets/gifs/knight_male_still.gif";
import MaleKnightWalking from "../../assets/gifs/knight_male_walking.gif";
import MaleMageStill from "../../assets/gifs/mage_male_still.gif";
import MaleMageWalking from "../../assets/gifs/mage_male_walking.gif";
import MaleNoblemanStill from "../../assets/gifs/nobleman_male_still.gif";
import MaleNoblemanWalking from "../../assets/gifs/nobleman_male_walking.gif";
import MaleSummonerStill from "../../assets/gifs/summoner_male_still.gif";
import MaleSummonerWalking from "../../assets/gifs/summoner_male_walking.gif";
import MaleWarriorStill from "../../assets/gifs/warrior_male_still.gif";
import MaleWarriorWalking from "../../assets/gifs/warrior_male_walking.gif";

import FemaleCitzenStill from "../../assets/gifs/citzen_female_still.gif";
import FemaleCitzenWalking from "../../assets/gifs/citzen_female_walking.gif";
import FemaleHunterStill from "../../assets/gifs/hunter_female_still.gif";
import FemaleHunterWalking from "../../assets/gifs/hunter_female_walking.gif";
import FemaleKnightStill from "../../assets/gifs/knight_female_still.gif";
import FemaleKnightWalking from "../../assets/gifs/knight_female_walking.gif";
import FemaleMageStill from "../../assets/gifs/mage_female_still.gif";
import FemaleMageWalking from "../../assets/gifs/mage_female_walking.gif";
import FemaleNoblemanStill from "../../assets/gifs/nobleman_female_still.gif";
import FemaleNoblemanWalking from "../../assets/gifs/nobleman_female_walking.gif";
import FemaleSummonerStill from "../../assets/gifs/summoner_female_still.gif";
import FemaleSummonerWalking from "../../assets/gifs/summoner_female_walking.gif";
import FemaleWarriorStill from "../../assets/gifs/warrior_female_still.gif";
import FemaleWarriorWalking from "../../assets/gifs/warrior_female_walking.gif";

const sexOptions = [true, false];
export const outfitOptions = [
  "citzen",
  "hunter",
  "knight",
  "mage",
  "noble",
  "summoner",
  "warrior",
];
const animationOptions = [false, true];

const dict = {
  [sexOptions[0] + outfitOptions[0] + animationOptions[0]]: MaleCitzenStill,
  [sexOptions[0] + outfitOptions[0] + animationOptions[1]]: MaleCitzenWalking,
  [sexOptions[0] + outfitOptions[1] + animationOptions[0]]: MaleHunterStill,
  [sexOptions[0] + outfitOptions[1] + animationOptions[1]]: MaleHunterWalking,
  [sexOptions[0] + outfitOptions[2] + animationOptions[0]]: MaleKnightStill,
  [sexOptions[0] + outfitOptions[2] + animationOptions[1]]: MaleKnightWalking,
  [sexOptions[0] + outfitOptions[3] + animationOptions[0]]: MaleMageStill,
  [sexOptions[0] + outfitOptions[3] + animationOptions[1]]: MaleMageWalking,
  [sexOptions[0] + outfitOptions[4] + animationOptions[0]]: MaleNoblemanStill,
  [sexOptions[0] + outfitOptions[4] + animationOptions[1]]: MaleNoblemanWalking,
  [sexOptions[0] + outfitOptions[5] + animationOptions[0]]: MaleSummonerStill,
  [sexOptions[0] + outfitOptions[5] + animationOptions[1]]: MaleSummonerWalking,
  [sexOptions[0] + outfitOptions[6] + animationOptions[0]]: MaleWarriorStill,
  [sexOptions[0] + outfitOptions[6] + animationOptions[1]]: MaleWarriorWalking,
  [sexOptions[1] + outfitOptions[0] + animationOptions[0]]: FemaleCitzenStill,
  [sexOptions[1] + outfitOptions[0] + animationOptions[1]]: FemaleCitzenWalking,
  [sexOptions[1] + outfitOptions[1] + animationOptions[0]]: FemaleHunterStill,
  [sexOptions[1] + outfitOptions[1] + animationOptions[1]]: FemaleHunterWalking,
  [sexOptions[1] + outfitOptions[2] + animationOptions[0]]: FemaleKnightStill,
  [sexOptions[1] + outfitOptions[2] + animationOptions[1]]: FemaleKnightWalking,
  [sexOptions[1] + outfitOptions[3] + animationOptions[0]]: FemaleMageStill,
  [sexOptions[1] + outfitOptions[3] + animationOptions[1]]: FemaleMageWalking,
  [sexOptions[1] + outfitOptions[4] + animationOptions[0]]: FemaleNoblemanStill,
  [sexOptions[1] + outfitOptions[4] + animationOptions[1]]:
    FemaleNoblemanWalking,
  [sexOptions[1] + outfitOptions[5] + animationOptions[0]]: FemaleSummonerStill,
  [sexOptions[1] + outfitOptions[5] + animationOptions[1]]:
    FemaleSummonerWalking,
  [sexOptions[1] + outfitOptions[6] + animationOptions[0]]: FemaleWarriorStill,
  [sexOptions[1] + outfitOptions[6] + animationOptions[1]]:
    FemaleWarriorWalking,
};

export const getIcon = (
  sex: boolean,
  outfit: string,
  animation: boolean
): string => {
  return dict[sex + outfit + animation];
};

export const sexToString = (sex: boolean) => {
  if (sex) return "Male";
  return "Female";
};
