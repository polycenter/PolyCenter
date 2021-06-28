import treausre from "assets/treasure.png";
import uniswap from "assets/uniswap.jpg";
import school from "assets/school.png";
type TLearn = {
  id?: string;
  title: string;
  text: string;
  image: any;
  link: string;
  color: string;
  linkText?: string;
};

const LearnBoxes: TLearn[] = [
  {
    title: "Farm Poly",
    text: "The basics of liquidity providing and farming.",
    image: school,
    link: "https://farm.polycenter.exchange",
    color: "#138d75",
  },
  {
    title: "Staking on Poly",
    text: "Stake on Poly",
    image: treausre,
    link: "https://app.polycenter.exchange",
    color: "#7CD10F",
  },
  {
    id: "uni",
    title: "Poly Swap",
    text: "A Fully decentralized cross-chain DEX, AMM and Yield farming protocol",
    image: uniswap,
    color: "#9c29ac",
    link: "https://polycenter.exchange",
  },
];
export default LearnBoxes;
