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
import News from "components/News/";

import { Certik, HomeContent, HomeTitle, InfoBox, InfoBoxes, Introduction } from "./Home.styles";
import Listings from "components/Listings/Listings";

let i = 0;
const title = "Yield-farming, swap, vaults and staking pools. Regular reward intervals. Everything pre-defined, no rug-pulls possible.";

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
    title: "Bgas Token",
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
            <SocialLink title="Telegram" icon={telegramIcon} href="https://t.me/BACKUPSWAP/" />
            <SocialLink title="Twitter" icon={twitterIcon} href="https://twitter.com/BACKUP_FINANCE/" />
            <SocialLink title="Medium" icon={mediumIcon} href="https://backupfinance.medium.com" />
            <SocialLink title="Discord" icon={discordIcon} href="https://discord.gg/mVjUXPMZ3x" />
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
                <h2>What is Backup?</h2>
                <p>
                  Backup (a Japanese word for Bakkuappu) is an automated interest rate base protocol built for Binance Smart Chain Massive Users, 
                  providing programmable liquidity to the platform.
                  Backup Finance is a protocol that can unlock the open universe of Finance apps, in short, it's a protocol of lending and borrowing, betting, farming, 
                  and swaps to reward participants. widely available for their operations in an algorithmic autonomous ecosystem that does not require KYC provision.
                </p>
                <p>It all started by a single developer and as of now the project is handed to the community to grow forwards.</p>
                <p>
                  It is a new form of governance system. A think-tank. A place where innovation, entrepreneurship, and technological
                  advancements are the priority, creating a much needed utility focus to the blockchain space. The value of Backup is
                  determined by the contribution and innovation of the community as a whole.
                </p>
                <h2>Why Backup?</h2>
                <p>
                  Owning <b>$Backup</b> enables your voice to be heard regarding the future of the project by enabling you to vote on and
                  initiate proposals for the protocol.
                </p>
                <p>
                  Proposal initiation and voting will be avalaible in the near future using a snapshotting system. A gas-relayer system
                  where users pay no fees is coming later.
                </p>
                <p>
                  Owning Backup provides you with unique bonuses on our DeFi-platform by giving your deposited assets a yield bonus according
                  to the amount of Backup you are holding. So you are gaining the upper hand.
                </p>
                <h2>Okay, anything more?</h2>
                <p>
                  Mandatory part of the Backup ecosystem is its <b>collaborations</b> with other projects in the space to expand the reach of
                  the ecosystem.
                </p>
                <p>
                  The community knows that Backup keeps on introducing new interesting projects and that we require the projects to meet a
                  certain standard.
                </p>
                <p>
                  Backup is able to provide a platform for the already established or for the upcoming projects who need the initial push.
                  Combined with our expertise and the community, there is no doubt that greater results will be achieved by collaborating
                  rather than competing.
                </p>
                <h2>Tokenomics</h2>
                
                <p> A capped supply of <b> 20,000,000 $Backup </b> Presale 5,000,000 open date  <b>30.04.2021 12:00 PM (UTC).</b> </p>
                
                <p>A capped supply of <b> 500,000,000 $Safegas </b> Q.3 2021 distributed to the community. </p>
               
                <p> A dynamic supply of <b> 100,000,000 $Suni </b> created for further use cases including a game experience.</p>
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
              href="https://backupfinance.medium.com"
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
