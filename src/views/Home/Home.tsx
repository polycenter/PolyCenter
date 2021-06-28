import discordIcon from "assets/discord_logo.webp";
import mediumIcon from "assets/medium_icon.webp";
import telegramIcon from "assets/telegram_logo.webp";
import certiklogo from "assets/certik.png";
import twitterIcon from "assets/twitter_icon.svg";
import Layout from "components/Layout";
import Newsfeed from "components/Newsfeed/Newsfeed";
import SocialLink from "components/SocialLink";
import { SocialLinks } from "components/SocialLink/SocialLink.styles";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import zzzlogo from "assets/zzz_token_logo.png";
import communityIcon from "assets/community_icon-trimmy.png";
import napIcon from "assets/catnap-trimmy.png";
import connectionIcon from "assets/connection_icon-trimmy.png";
import News from "components/News/News";

import { Certik, HomeContent, HomeTitle, InfoBox, InfoBoxes, Introduction } from "./Home.styles";
import Listings from "components/Listings/Listings";

let i = 0;
const title = "Next-Gen Cross-Chain DEX Protocol, Swap, Bridge & Farm";

function typeWriter(setTyped: Function) {
  if (i < title.length) {
    const el = document.getElementById("title");
    if (el) {
      el.innerHTML += title.charAt(i);
      i++;
    }
    setTimeout(() => typeWriter(setTyped), 20);
  } else {
    setTyped(true);
  }
}

const infoBoxes = [
  {
    title: "Community First",
    text: "The protocol is determined by the community. Proposals are made by and voted on by holders of BACKUP/BNB.",
    icon: <img src={communityIcon} alt="community" />,
  },
  {
    title: "SafeGas Token",
    text:
      "SafeGas is the an extra layer for the economy. It act's as a gas token in the system. It can be spent to increase your yields by the Boost functionality. Revenues from purchases are halved 50% towards future products and 50% towards development fund.",
    icon: <img src={napIcon} alt="community" />,
  },
  {
    title: "Partnerships",
    text: "Backup is committed to continuing innovations with other Binance Smart Chain projects.",
    icon: <img src={connectionIcon} alt="connection" />,
  },
];

function Home() {
  const [typed, setTyped] = useState(false);
  useEffect(() => {
    typeWriter(setTyped);
  }, []);

  return (
    <Layout view="Home" type="vertical">
      <Layout.ExtraContent>
        <HomeTitle>
          <div id="title">{typed && title}</div>
          <SocialLinks>
            <SocialLink title="Telegram" icon={telegramIcon} href="https://t.me/PolyCenter" />
            <SocialLink title="Twitter" icon={twitterIcon} href="https://twitter.com/Poly_Center" />
            <SocialLink title="Medium" icon={mediumIcon} href="https://medium.com/@PolyCenter" />
            <SocialLink title="Discord" icon={discordIcon} href="https://discord.gg/a6v5hqDZAd" />
          </SocialLinks>
        </HomeTitle>
      </Layout.ExtraContent>
      <Layout.MainContent>
        <HomeContent>
          <Introduction>
                <img src={zzzlogo} alt="zzz" className="zzz-logo" />
              <div className="info">
              <News />
              <div className="info-content">
                <h2>What is PolyCenter?</h2>
                <p>
                PolyCenter is a fully Decentralized Exchange that runs on Binance Smart Chain. Bridging your assets across networks is faster and cheaper using PolyCenter swap.
                POLY token will be a deflationary token with a unique burn mechanism. You will be able to farm POLY using different liquidity pairs. AMM by itself will provide high yield farms for early investors and for the long term hold community.
                </p>
                <p>It all started by a single developer and as of now the project is handed to the community to grow forwards.</p>
                <p>
                  It is a new form of governance system. A think-tank. A place where innovation, entrepreneurship, and technological
                  advancements are the priority, creating a much needed utility focus to the blockchain space. The value of POLY is
                  determined by the contribution and innovation of the community as a whole.
                </p>
                <h2>Swap & Bridge</h2>
                <p>
                  Swapping is faster than ever and cross-chain bridging is an unique solution for transfering all your assets across networks like Binance smart chain, Ethereum, TRON etc.
                </p>
                <p>
                  Proposal initiation and voting will be avalaible in the near future using a snapshotting system. A gas-relayer system
                  where users pay no fees is coming later.
                </p>
                <p>
                  Owning POLY provides you with unique bonuses on our DeFi-platform by giving your deposited assets a yield bonus according
                  to the amount of POLY you are holding. So you are gaining the upper hand.
                </p>
                <h2>Stake & Farm</h2>
                <p>
                  Mandatory part of the POLY ecosystem is its <b>collaborations</b> with other projects in the space to expand the reach of
                  the ecosystem.
                </p>
                <p>
                  You can stake stable coins like BNB, BUSD, USDT or POLY token and earn POLY tokens as rewards. By adding your liquidity pairs to the farm you will be able to earn POLY tokens as rewards.
                </p>
                <p>
                  POLY is able to provide a platform for the already established or for the upcoming projects who need the initial push.
                  Combined with our expertise and the community, there is no doubt that greater results will be achieved by collaborating
                  rather than competing.
                </p>
                <h2>Tokenomics</h2>
                <p>Token:<b>POLY.</b> </p>
                <p>Maximum Supply:<b> 1,000,000,000,000,000 POLY.</b> </p>
                <p>Private-Sale:<b> 64,000,000,000,000 (6.4%).</b> </p>
                <p>FCFS:<b> 26,750,000,000,000 (2.67%).</b> </p>
                <p>Pre-Sale:<b> 293,250,000,000,000 (29.32%)</b> </p>
                <p>Liquidity:<b> 256,000,000,000,000 (25.6%)</b> </p>
                <p>Burn Wallet:<b> 110,000,000,000,000 (11%)</b> </p>
                <p>Dev Wallet:<b> 100,000,000,000,000 (10%)</b> </p>
                <p>Development:<b> 50,000,000,000,000 (5%)</b> </p>
                <p>Reserve:<b> 50,000,000,000,000 (5%)</b> </p>
                <p>Team Wallet :<b> 50,000,000,000,000 (5%)</b> </p>
                
                * Raised funds will be used for marketing. Spots are equal to the whitelist
                
                <h2>Token Economics</h2>
                <p>A 10% tax is charged on each transaction. This can be divided into 3 parts:</b> </p>
                ♻️ 2% Holders Fee
              </div>
            </div>
            <div className="just-a-container">
              <Listings />
              <Newsfeed />
            </div>
          </Introduction>
          <InfoBoxes>
            {infoBoxes.map((box) => (
              <InfoBox key={`infobox-${box.title}`}>
                <div className="icon">{box.icon}</div>
                <div className="title">{box.title}</div>
                <div className="explanation">{box.text}</div>
              </InfoBox>
            ))}
          </InfoBoxes>
          <Certik>
            <img src={certiklogo} alt="certik" className="certik-logo" />
            <div className="certik-text">
              <h2>What?</h2>
              <p>
                We have just completed an audit process with CertiK for our yield farming contracts. After a few revisions all major and
                critical issues found by CertiK were alleviated and the finalized report has been received and our pools have been
                implemented with this standard for quite some time.
              </p>
              <h2>Why?</h2>
              <p>
                We found it necessary to provide a proof of authenticity for our partners and investors and we are determined to maintain
                the standards for all upcoming projects.
              </p>
              <h2>CertiK?</h2>
              <p>
                We have chosen CertiK as they are a trusted and reputable brand with unrivalled expertise in the quality of conducting
                extensive and efficient code auditing. Our community deserves nothing but the best, and quality polished code is paramount
                to that.
              </p>
            </div>
            <a
              href="https://medium.com/@PolyCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read more
            </a>
          </Certik>
        </HomeContent>
      </Layout.MainContent>
    </Layout>
  );
}
export default observer(Home);
