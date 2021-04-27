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
    title: "Basics",
    text: "The basics of liquidity providing and farming.",
    image: school,
    link: "https://backupfinance.medium.com/",
    color: "#138d75",
  },
  {
    title: "Staking on Backup",
    text: "How to stake on Backup",
    image: treausre,
    link: "https://farm.backup.finance",
    color: "#7CD10F",
  },
  {
    id: "uni",
    title: "Risks of liquidity providing",
    text: "What is impermanent loss? How does automatic market making work?",
    image: uniswap,
    color: "#9c29ac",
    link: "https://exchange.backup.finance/#/swap",
  },
];
export default LearnBoxes;
